import { ActorDimensions } from "types/pf2e/src/module/actor/types.ts"
import { ItemType } from "types/pf2e/src/module/item/base/data/index.ts"
import type { UserPF2e } from "types/pf2e/src/module/user/index.ts"
import { TokenDocumentPF2e } from "types/pf2e/src/module/scene/index.ts"
import { ArmorStatistic, Statistic, StatisticDifficultyClass } from "types/pf2e/src/module/system/statistic/index.ts"
import { ActorPF2e, HitPointsSummary } from "../base.ts";
import { TokenDimensions, VehicleSource, VehicleSystemData } from "./data.ts";
declare class VehiclePF2e<TParent extends TokenDocumentPF2e | null = TokenDocumentPF2e | null> extends ActorPF2e<TParent> {
    armorClass: StatisticDifficultyClass<ArmorStatistic>;
    get allowedItemTypes(): (ItemType | "physical")[];
    /** Vehicle dimensions are specified for all three axes and usually do not form cubes */
    get dimensions(): ActorDimensions;
    get hardness(): number;
    getTokenDimensions(dimensions?: Omit<ActorDimensions, "height">): TokenDimensions;
    prepareBaseData(): void;
    prepareEmbeddedDocuments(): void;
    prepareDerivedData(): void;
    private prepareSaves;
    protected _preUpdate(changed: DeepPartial<VehicleSource>, options: DocumentModificationContext<TParent>, user: UserPF2e): Promise<boolean | void>;
}
interface VehiclePF2e<TParent extends TokenDocumentPF2e | null = TokenDocumentPF2e | null> extends ActorPF2e<TParent> {
    readonly _source: VehicleSource;
    system: VehicleSystemData;
    get hitPoints(): HitPointsSummary;
    saves: {
        fortitude: Statistic;
    };
}
export { VehiclePF2e };
