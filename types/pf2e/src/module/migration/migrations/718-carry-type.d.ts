import { ItemSourcePF2e } from "types/pf2e/src/module/item/base/data/index.ts"
import { MigrationBase } from "../base.ts";
import { ActorSourcePF2e } from "types/pf2e/src/module/actor/data/index.ts"
/** Update physical item usage and equipped to reflect carry types (held, worn, stowed) */
export declare class Migration718CarryType extends MigrationBase {
    static version: number;
    updateItem(itemData: ItemSourcePF2e, actor?: ActorSourcePF2e): Promise<void>;
}
