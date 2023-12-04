import { ItemSourcePF2e } from "types/pf2e/src/module/item/base/data/index.ts"
import { MigrationBase } from "../base.ts";
import { ActorSourcePF2e } from "types/pf2e/src/module/actor/data/index.ts"
/** Record the level each feat is taken by PCs. */
export declare class Migration876FeatLevelTaken extends MigrationBase {
    static version: number;
    updateItem(source: ItemSourcePF2e, actorSource?: ActorSourcePF2e): Promise<void>;
}
