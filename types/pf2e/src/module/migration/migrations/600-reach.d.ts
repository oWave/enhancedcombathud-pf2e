import { MigrationBase } from "../base.ts";
import { ItemSourcePF2e } from "types/pf2e/src/module/item/base/data/index.ts"
export declare class Migration600Reach extends MigrationBase {
    static version: number;
    updateItem(item: ItemSourcePF2e): Promise<void>;
}
