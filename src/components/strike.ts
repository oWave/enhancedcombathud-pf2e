import { StrikeData } from "types/pf2e/src/module/actor/data/base"

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
  }
}

