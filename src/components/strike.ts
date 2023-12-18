import { ActorPF2e, CharacterPF2e } from "types/pf2e/src/module/actor"
import { StrikeData } from "types/pf2e/src/module/actor/data/base"
import { WeaponPF2e } from "types/pf2e/src/module/item"
import { toggleWeaponTrait as toggleWeaponTraitType } from "types/pf2e/src/module/item/weapon/helpers"
import { DamageType } from "types/pf2e/src/module/system/damage"
import { StrikeRuleElement } from "types/pf2e/src/module/rules/rule-element/strike"
import { CharacterStrike } from "types/pf2e/src/module/actor/character/data"

type ToggleWeaponTraitParams = Parameters<typeof toggleWeaponTraitType>[0]

export class StrikeButton extends CONFIG.ARGON.CORE.ArgonComponent {
  strike: StrikeData | CharacterStrike
  state: {
    expanded: boolean
  }

  constructor(strike: StrikeData) {
    super()
    this.strike = strike

    ui.ARGON.hooks.callbacks.updateItem.set(this.strike.item.id, async (item) => {
      this.strike = this.actor.system.actions?.find((s) => s.item.id == item.id)!
      await this.render()
    })

    this.state = {
      expanded: false,
    }
  }

  async getData() {
    return {
      label: this.strike.label,
      icon: this.strike.item.img,
      state: this.state,
      hasConfig: !!this.strike.versatileOptions.length,
      selectedVersatileOption: this.strike.versatileOptions.find((e) => e.selected),
      versatileOptions: this.strike.versatileOptions,
      buttons: this.strike.variants.map((v, i) => {
        return {
          index: i,
          label: v.label,
          glyph: this.strike.glyph,
        }
      }),
    }
  }

  get actor(): ActorPF2e {
    return super.actor
  }

  get item() {
    return this.strike.item
  }

  get template(): string {
    return "modules/enhancedcombathud-pf2e/templates/strike.hbs"
  }

  get classes() {
    return []
  }

  get visible() {
    // This is false for the basic unarmed attack when configured to hide that attack in the actors Configure dialog
    return ((<ActorPF2e>this.actor).type == "character" && this.strike.visible) || true
  }

  activateListeners() {
    this.element.querySelectorAll<HTMLButtonElement>("button.ech-strike-button").forEach((button) =>
      button.addEventListener("click", async (event) => {
        console.log("MAP " + button.dataset.index)
        debugger
        await this.strike?.variants[Number(button.dataset.index)]?.roll({ event })
      })
    )

    this.element.querySelector(".ech-strike-config-header")?.addEventListener("click", () => {
      this.element.querySelector(".ech-strike-config")?.classList.add("open")
      this.state.expanded = true
    })
    this.element.querySelector(".ech-strike-config-content .collapse")?.addEventListener("click", () => {
      this.element.querySelector(".ech-strike-config")?.classList.remove("open")
      this.state.expanded = false
    })

    this.element.querySelectorAll<HTMLButtonElement>(".versatile-options button").forEach((button) =>
      button.addEventListener("click", async () => {
        const weapon = this.strike.item
        const baseType = weapon?.system?.damage.damageType ?? null
        const selection =
          button.classList.contains("selected") || button.value === baseType ? null : (button.value as DamageType)
        const selectionIsValid = selection === null || selection in CONFIG.PF2E.damageTypes
        if (weapon && selectionIsValid) {
          await toggleWeaponTrait({ trait: "versatile", weapon, selection })
        }
      })
    )
  }
}

async function toggleWeaponTrait({ weapon, trait, selection }: ToggleWeaponTraitParams): Promise<boolean> {
  const current = weapon.system.traits.toggles[trait].selection
  if (current === selection) return false

  const item = weapon.actor?.items.get(weapon.id)
  if (item?.isOfType("weapon") && item === weapon) {
    await item.update({ [`system.traits.toggles.${trait}.selection`]: selection })
  } else if (item?.isOfType("weapon") && weapon.altUsageType === "melee") {
    await item.update({ [`system.meleeUsage.traitToggles.${trait}`]: selection })
  } else if (trait === "versatile" && item?.isOfType("shield")) {
    await item.update({ "system.traits.integrated.versatile.selection": selection })
  } else {
    const rule = item?.rules.find(
      (r): r is StrikeRuleElement => r.key === "Strike" && !r.ignored && r.slug === weapon.slug
    )
    await rule?.toggleTrait({ trait, selection })
  }

  return true
}
