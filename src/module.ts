import type { ActorPF2e } from "types/pf2e/src/module/actor/index"
import type { CoreHUD } from "types/argon/hud"
import { StrikeButton } from "./components/strike"
import { HUDHooks } from "./hooks"
import { RollOptionButton } from "./components/rollOption"

Hooks.on("ready", () => {
  ui.ARGON.hooks = new HUDHooks()
})

Hooks.on("argonInit", async (hud: typeof CoreHUD) => {
  const ARGON = hud.ARGON

  class Pf2ePortraitPanel extends ARGON.PORTRAIT.PortraitPanel {
    constructor() {
      super()
    }

    get description() {
      return "Description"
    }

    get isDead() {
      return false
    }

    get isDying() {
      return false
    }
  }

  class Pf2eDrawerPanel extends ARGON.DRAWER.DrawerPanel {
    constructor() {
      super()
    }
  }

  class Pf2eBaseButton extends ARGON.MAIN.BUTTONS.ActionButton {
    constructor() {
      super()
    }

    get label() {
      return "Action"
    }
  }

  class Pf2eStrikePanel extends ARGON.MAIN.ActionPanel {
    constructor() {
      super()
    }

    get label() {
      return "Attacks"
    }

    async _getButtons() {
      const rollOptions = (this.actor as ActorPF2e).synthetics.toggles.map((e) => new RollOptionButton(e))
      const strikes =
        (this.actor as ActorPF2e).system.actions?.filter((a) => a.ready)?.map((e) => new StrikeButton(e)) ?? []

      return [...rollOptions, ...strikes]
    }
  }

  class Pf2eReactionPanel extends ARGON.MAIN.ActionPanel {
    constructor() {
      super()
    }

    get label() {
      return "Reactions"
    }

    async _getButtons() {
      return [new Pf2eBaseButton()]
    }
  }

  class Pf2eSpellPanel extends ARGON.MAIN.ActionPanel {
    constructor() {
      super()
    }

    get label() {
      return "Spells"
    }

    async _getButtons() {
      return [new Pf2eBaseButton()]
    }
  }

  hud.definePortraitPanel(Pf2ePortraitPanel)
  hud.defineDrawerPanel(Pf2eDrawerPanel)
  hud.defineMainPanels([Pf2eStrikePanel, Pf2eReactionPanel, Pf2eSpellPanel, ARGON.PREFAB.PassTurnPanel])

  hud.defineMovementHud(null)
  hud.defineSupportedActorTypes(["character", "npc"])
})
