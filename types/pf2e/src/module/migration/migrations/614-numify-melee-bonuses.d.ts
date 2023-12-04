import { MigrationBase } from "../base.ts";
import { ItemSourcePF2e } from "types/pf2e/src/module/item/base/data/index.ts"
/** Numify melee bonus.value property */
export declare class Migration614NumifyMeleeBonuses extends MigrationBase {
    static version: number;
    updateItem(itemData: ItemSourcePF2e): Promise<void>;
}
