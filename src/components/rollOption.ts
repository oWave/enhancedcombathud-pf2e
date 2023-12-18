import { RollOptionToggle } from "types/pf2e/src/module/rules/synthetics"

export class RollOptionButton extends CONFIG.ARGON.CORE.ArgonComponent {
  toggle: RollOptionToggle
  constructor(toggle: RollOptionToggle) {
    super()

    this.toggle = toggle
  }

  async getData() {
    const suboptions = this.toggle.suboptions.filter((e) => !e.selected)

    return {
      ...this.toggle,
      hasSuboptions: this.toggle.suboptions.length > 0,
      suboptions,
      selected: this.toggle.suboptions.find((e) => e.selected),
    }
  }

  get template(): string {
    return "modules/enhancedcombathud-pf2e/templates/rollOption.hbs"
  }

  activateListeners() {
    this.element.querySelector(".expand")?.addEventListener("click", () => {
      this.element.querySelector(".expandable")?.classList.toggle("open")
    })
  }
}
