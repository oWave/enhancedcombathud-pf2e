import { ItemSourcePF2e } from "types/pf2e/src/module/item/base/data/index.ts"
import { MigrationBase } from "../base.ts";
/** Ensure spells have a minimum level of one */
export declare class Migration688ClampSpellLevel extends MigrationBase {
    static version: number;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
