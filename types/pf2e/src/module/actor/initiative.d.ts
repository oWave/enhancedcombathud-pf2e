import type { ActorPF2e } from "types/pf2e/src/module/actor/index.ts"
import { InitiativeData } from "types/pf2e/src/module/actor/data/base.ts"
import { CombatantPF2e, EncounterPF2e } from "types/pf2e/src/module/encounter/index.ts"
import { CheckRoll } from "types/pf2e/src/module/system/check/index.ts"
import { Statistic, StatisticRollParameters, StatisticTraceData } from "types/pf2e/src/module/system/statistic/index.ts"
import { AttributeString } from "./types.ts";
interface InitiativeRollResult {
    combatant: CombatantPF2e<EncounterPF2e>;
    roll: Rolled<CheckRoll>;
}
interface InitiativeRollParams extends StatisticRollParameters {
    combatant?: CombatantPF2e<EncounterPF2e>;
    /** Whether the encounter tracker should be updated with the roll result */
    updateTracker?: boolean;
}
/** A statistic wrapper used to roll initiative for actors */
declare class ActorInitiative {
    actor: ActorPF2e;
    statistic: Statistic;
    get attribute(): AttributeString | null;
    /** @deprecated */
    get ability(): AttributeString | null;
    constructor(actor: ActorPF2e, { statistic }: {
        statistic: string;
    });
    roll(args?: InitiativeRollParams): Promise<InitiativeRollResult | null>;
    getTraceData(): InitiativeTraceData;
}
type InitiativeTraceData = StatisticTraceData & InitiativeData;
export { ActorInitiative };
export type { InitiativeRollResult, InitiativeTraceData };
