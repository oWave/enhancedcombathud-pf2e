import { ActorSourcePF2e } from "types/pf2e/src/module/actor/data/index.ts"
import { MigrationBase } from "../base.ts";
/** Remove PC-only items from non-PCs */
export declare class Migration671NoPCItemsOnNonPCs extends MigrationBase {
    static version: number;
    updateActor(actorSource: ActorSourcePF2e): Promise<void>;
}
