import { ActorPF2e } from "types/pf2e/src/module/actor"
import { RollOptionToggle } from "types/pf2e/src/module/rules/synthetics"

export class RollOptionButton extends CONFIG.ARGON.CORE.ArgonComponent {
  toggle: RollOptionToggle
  expanded: boolean
  constructor(toggle: RollOptionToggle) {
    super()

    this.toggle = toggle
    this.expanded = false

    ui.ARGON.hooks.add("updateItem", toggle.itemId, async () => {
      this.toggle = (this.actor as ActorPF2e).synthetics.toggles.find((e) => e.option == this.toggle.option)!
      await this.render()
    })
  }

  async getData() {
    const suboptions = this.toggle.suboptions.filter((e) => !e.selected)

    return {
      ...this.toggle,
      icon: !this.toggle.enabled
        ? "fa-regular fa-square-minus"
        : this.toggle.checked
        ? "fa-solid fa-square"
        : "fa-regular fa-square",
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
      this.expanded = !this.expanded
      this.element.querySelector(".expandable")?.classList.toggle("open")
    })

    this.element.querySelectorAll<HTMLDivElement>(".expandable [data-value]").forEach((e) =>
      e.addEventListener("click", async () => {
        const value = e.dataset.value
        if (!value) return
        this.expanded = false
        this.setSuboption(value)
        // Rerendered via hook
      })
    )

    this.element.querySelector(".toggle")?.addEventListener("click", async (e) => {
      if (this.toggle.enabled) return this.setActive(!this.toggle.checked)
      // Rerendered via hook
    })
  }

  async setActive(state: boolean) {
    const { domain, option, itemId } = this.toggle
    return (this.actor as ActorPF2e).toggleRollOption(domain, option, itemId, state, null)
  }

  async setSuboption(value: string) {
    const { domain, option, itemId, checked } = this.toggle
    return (this.actor as ActorPF2e).toggleRollOption(domain, option, itemId, checked, value)
  }
}
