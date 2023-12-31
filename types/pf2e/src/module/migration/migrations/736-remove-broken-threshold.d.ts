import { ItemSourcePF2e } from "types/pf2e/src/module/item/base/data/index.ts"
import { MigrationBase } from "../base.ts";
/** Remove brokenThreshold property left undeleted in `Migration728FlattenPhysicalProperties` */
export declare class Migration736RemoveBrokenThreshold extends MigrationBase {
    #private;
    static version: number;
    updateItem(source: ItemSourcePF2e): Promise<void>;
}
