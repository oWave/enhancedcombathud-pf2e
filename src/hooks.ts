import { ActorPF2e } from "types/pf2e/src/module/actor"
import { ItemPF2e } from "types/pf2e/src/module/item"

export class HUDHooks {
  callbacks = {
    updateActor: new Map<string, (actor: ActorPF2e) => any>(),
    updateItem: new Map<string, (actor: ItemPF2e) => any>(),
  }

  constructor() {
    Hooks.on("closeCoreHUD", () => this.reset())
    Hooks.on<[ActorPF2e]>("updateActor", (actor) => this.callbacks.updateActor.get(actor.id)?.(actor))
    Hooks.on<[ItemPF2e]>("updateItem", (item) => this.callbacks.updateItem.get(item.id)?.(item))
  }

  reset() {
    for (const [_, map] of Object.entries(this.callbacks)) {
      map.clear()
    }
  }
}
