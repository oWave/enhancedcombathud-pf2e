import { ActorPF2e } from "types/pf2e/src/module/actor"
import { ItemPF2e } from "types/pf2e/src/module/item"

type Callback<T> = (data: T) => any | Promise<any>
type CallbackMap<T> = Map<string, Array<Callback<T>>>
type Callbacks = {
  updateActor: CallbackMap<ActorPF2e>
  updateItem: CallbackMap<ItemPF2e>
}
type MapValue<K extends keyof Callbacks> = Parameters<Callbacks[K]["set"]>[1][0]

export class HUDHooks {
  callbacks: Callbacks = {
    updateActor: new Map(),
    updateItem: new Map(),
  }

  constructor() {
    Hooks.on("closeCoreHUD", () => this.reset())
    Hooks.on<[ActorPF2e]>("updateActor", async (actor) => this.callAll("updateActor", actor))
    Hooks.on<[ItemPF2e]>("updateItem", async (item) => this.callAll("updateItem", item))
  }

  add<K extends keyof Callbacks>(hook: K, id: string, callback: MapValue<K>) {
    const map = this.callbacks[hook]

    if (!map.has(id)) map.set(id, [callback as any])
    else map.get(id)!.push(callback as any)
  }

  private async callAll(hook: keyof Callbacks, data: any) {
    const callbacks = this.callbacks[hook].get(data.id)
    if (callbacks) await Promise.all(callbacks.map((e) => e(data)))
  }

  reset() {
    for (const [_, map] of Object.entries(this.callbacks)) {
      map.clear()
    }
  }
}
