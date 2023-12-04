import { ItemSourcePF2e } from "types/pf2e/src/module/item/base/data/index.ts"
import { MigrationBase } from "../base.ts";
/** Remove the `invested` property from uninvestable item types */
export declare class Migration648RemoveInvestedProperty extends MigrationBase {
    static version: number;
    updateItem(itemSource: ItemSourcePF2e): Promise<void>;
}
