import { ActorPF2e } from "types/pf2e/src/module/actor/index"
import { StrikeButton } from "./components/strike"

Hooks.on("argonInit", async (CoreHUD: any) => {
  const ARGON = CoreHUD.ARGON

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
      return (this.actor as ActorPF2e).system.actions?.map((e) => new StrikeButton(e))
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

  CoreHUD.definePortraitPanel(Pf2ePortraitPanel)
  CoreHUD.defineDrawerPanel(Pf2eDrawerPanel)
  CoreHUD.defineMainPanels([Pf2eStrikePanel, Pf2eReactionPanel, Pf2eSpellPanel, ARGON.PREFAB.PassTurnPanel])

  CoreHUD.defineMovementHud(null)
  CoreHUD.defineSupportedActorTypes(["character", "npc"])
})
