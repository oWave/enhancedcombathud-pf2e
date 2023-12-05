import { ActorPF2e, CharacterPF2e } from "types/pf2e/src/module/actor"
import { StrikeData } from "types/pf2e/src/module/actor/data/base"
import { WeaponPF2e } from "types/pf2e/src/module/item"
import { toggleWeaponTrait as toggleWeaponTraitType } from "types/pf2e/src/module/item/weapon/helpers"
import { DamageType } from "types/pf2e/src/module/system/damage"
import { StrikeRuleElement } from "types/pf2e/src/module/rules/rule-element/strike"

type ToggleWeaponTraitParams = Parameters<typeof toggleWeaponTraitType>[0]

export class StrikeButton extends CONFIG.ARGON.CORE.ArgonComponent {
  strike: StrikeData
  constructor(strike: StrikeData) {
    super()
    this.strike = strike
  }

  async getData() {
    return {
      label: this.strike.label,
      icon: this.strike.item.img,
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
    })
    this.element.querySelector(".ech-strike-config-content .collapse")?.addEventListener("click", () => {
      this.element.querySelector(".ech-strike-config")?.classList.remove("open")
    })

    this.element.querySelectorAll<HTMLButtonElement>(".versatile-options button").forEach((button) =>
      button.addEventListener("click", async () => {
        const weapon = this.strike.item as WeaponPF2e<ActorPF2e>
        const baseType = weapon?.system?.damage.damageType ?? null
        const selection =
          button.classList.contains("selected") || button.value === baseType ? null : (button.value as DamageType)
        const selectionIsValid = selection === null || selection in CONFIG.PF2E.damageTypes
        if (weapon && selectionIsValid) {
          await toggleWeaponTrait({ trait: "versatile", weapon, selection })
          this.strike =
            (this.actor as ActorPF2e).system.actions?.find((e) => e.item.id == this.strike.item.id) || this.strike
          this.render()
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
