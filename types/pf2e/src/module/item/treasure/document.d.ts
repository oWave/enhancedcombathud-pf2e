import type { ActorPF2e } from "types/pf2e/src/module/actor/index.ts"
import { ItemSummaryData } from "types/pf2e/src/module/item/base/data/index.ts"
import { PhysicalItemPF2e } from "types/pf2e/src/module/item/physical/index.ts"
import { CoinDenomination } from "types/pf2e/src/module/item/physical/types.ts"
import { TreasureSource, TreasureSystemData } from "./data.ts";
declare class TreasurePF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends PhysicalItemPF2e<TParent> {
    get isCoinage(): boolean;
    get denomination(): CoinDenomination | null;
    /** Set non-coinage treasure price from its numeric value and denomination */
    prepareBaseData(): void;
    getChatData(this: TreasurePF2e<ActorPF2e>, htmlOptions?: EnrichmentOptions): Promise<ItemSummaryData>;
}
interface TreasurePF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends PhysicalItemPF2e<TParent> {
    readonly _source: TreasureSource;
    system: TreasureSystemData;
}
export { TreasurePF2e };
