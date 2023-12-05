import { ActorPF2e, CharacterPF2e } from "types/pf2e/src/module/actor"
import { StrikeData } from "types/pf2e/src/module/actor/data/base"
import { WeaponPF2e } from "types/pf2e/src/module/item"
import { ToggleWeaponTraitParams } from "types/pf2e/src/module/item/weapon/helpers"
import { DamageType } from "types/pf2e/src/module/system/damage"
import { StrikeRuleElement } from "types/pf2e/src/module/rules/rule-element/strike"

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
    return ["action-element", "ech-blur"]
  }

  get visible() {
    // This is false for the basic unarmed attack when configured to hide that attack in the actors Configure dialog
    return this.strike.visible
  }

  activateListeners() {
    this.element.querySelectorAll<HTMLButtonElement>("button.ech-strike-button").forEach((button) =>
      button.addEventListener("click", async (event) => {
        console.log("MAP " + button.dataset.index)
        debugger
        await this.strike?.variants[Number(button.dataset.index)]?.roll({ event })
      })
    )

    this.element.querySelectorAll<HTMLElement>(".strikes-list").forEach((row) => {
      const versatileToggleButtons = row.querySelectorAll<HTMLButtonElement>("button[data-action=toggle-versatile]",);
      for (const button of versatileToggleButtons) {
        button.addEventListener("click", () => {
          const weapon = this.strike.item as WeaponPF2e<ActorPF2e>;
          const baseType = weapon?.system?.damage.damageType ?? null;
          const selection =
            button.classList.contains("selected") || button.value === baseType ? null : button.value as DamageType;
          const selectionIsValid = selection === null || selection in CONFIG.PF2E.damageTypes;
          if (weapon && selectionIsValid) {
            toggleWeaponTrait({ trait: "versatile", weapon, selection });
            this.updateStrike();
          }
        });
      }
    })
  }

  updateStrike() {
    setTimeout(() => {
      this.strike = this.actor.system.actions?.find(b => b.item === this.strike.item) || this.strike;
      this.render();
    }, 500);
  }
}

async function toggleWeaponTrait({ weapon, trait, selection }: ToggleWeaponTraitParams): Promise<boolean> {
  const current = weapon.system.traits.toggles[trait].selection;
  if (current === selection) return false;

  const item = weapon.actor?.items.get(weapon.id);
  if (item?.isOfType("weapon") && item === weapon) {
    await item.update({ [`system.traits.toggles.${trait}.selection`]: selection });
  } else if (item?.isOfType("weapon") && weapon.altUsageType === "melee") {
    item.update({ [`system.meleeUsage.traitToggles.${trait}`]: selection });
  } else if (trait === "versatile" && item?.isOfType("shield")) {
    item.update({ "system.traits.integrated.versatile.selection": selection });
  } else {
    const rule = item?.rules.find(
      (r): r is StrikeRuleElement => r.key === "Strike" && !r.ignored && r.slug === weapon.slug,
    );
    await rule?.toggleTrait({ trait, selection });
  }

  return true;
}

