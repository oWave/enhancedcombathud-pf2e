import { CoreHUD } from "types/argon/hud"
import { HUDHooks } from "./hooks"

declare global {
  interface FoundryUI {
    ARGON: CoreHUD & { hooks: HUDHooks }
  }
}
