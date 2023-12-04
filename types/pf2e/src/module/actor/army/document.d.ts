import { ItemType } from "types/pf2e/src/module/item/base/data/index.ts"
import { TokenDocumentPF2e } from "types/pf2e/src/module/scene/index.ts"
import { ActorPF2e, HitPointsSummary } from "../base.ts";
import { ArmySource, ArmySystemData } from "./data.ts";
import { Statistic } from "types/pf2e/src/module/system/statistic/index.ts"
import { Kingdom } from "types/pf2e/src/module/actor/party/kingdom/model.ts"
declare class ArmyPF2e<TParent extends TokenDocumentPF2e | null = TokenDocumentPF2e | null> extends ActorPF2e<TParent> {
    scouting: Statistic;
    maneuver: Statistic;
    morale: Statistic;
    get allowedItemTypes(): (ItemType | "physical")[];
    get routed(): boolean;
    /** Gets the active kingdom. Later this should be configurable */
    get kingdom(): Kingdom | null;
    get maxTactics(): number;
    prepareBaseData(): void;
    prepareDerivedData(): void;
    updateLevel(newLevel: number): Promise<this | undefined>;
    getStatistic(slug: string): Statistic | null;
}
interface ArmyPF2e<TParent extends TokenDocumentPF2e | null = TokenDocumentPF2e | null> extends ActorPF2e<TParent> {
    readonly _source: ArmySource;
    system: ArmySystemData;
    get hitPoints(): HitPointsSummary;
}
export { ArmyPF2e };
