import { ItemSourcePF2e } from "types/pf2e/src/module/item/base/data/index.ts"
import { MigrationBase } from "../base.ts";
export declare class Migration606SignatureSpells extends MigrationBase {
    static version: number;
    updateItem(item: ItemSourcePF2e): Promise<void>;
}