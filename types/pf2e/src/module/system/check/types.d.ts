import type { ActorPF2e } from "types/pf2e/src/module/actor/index.ts"
import { RollTarget } from "types/pf2e/src/module/actor/types.ts"
import type { ItemPF2e } from "types/pf2e/src/module/item/index.ts"
import { ZeroToTwo } from "types/pf2e/src/module/data.ts"
import { RollSubstitution } from "types/pf2e/src/module/rules/synthetics.ts"
import type { TokenDocumentPF2e } from "types/pf2e/src/module/scene/token-document/index.ts"
import { CheckDC, DegreeOfSuccessAdjustment } from "types/pf2e/src/module/system/degree-of-success.ts"
import { BaseRollContext } from "types/pf2e/src/module/system/rolls.ts"
type RollTwiceOption = "keep-higher" | "keep-lower" | false;
type CheckType = "attack-roll" | "check" | "counteract-check" | "flat-check" | "initiative" | "perception-check" | "saving-throw" | "skill-check";
interface CheckRollContext extends BaseRollContext {
    /** The type of this roll, like 'perception-check' or 'saving-throw'. */
    type?: CheckType;
    /** A string of some kind to identify the roll: will be included in `CheckRoll#options` */
    identifier?: Maybe<string>;
    /** The slug of an action, of which this roll is a workflow component */
    action?: Maybe<string>;
    /** Targeting data for the check, if applicable */
    target?: RollTarget | null;
    /** Should this roll be rolled twice? If so, should it keep highest or lowest? */
    rollTwice?: RollTwiceOption;
    /** The actor which initiated this roll. */
    actor?: ActorPF2e;
    /** The token which initiated this roll. */
    token?: TokenDocumentPF2e | null;
    /** The originating item of this attack, if any */
    item?: ItemPF2e<ActorPF2e> | null;
    /** Optional title of the roll options dialog; defaults to the check name */
    title?: string;
    /** Optional DC data for the check */
    dc?: CheckDC | null;
    /** The domains this roll had, for reporting purposes */
    domains?: string[];
    /** Is this check part of an action that deals damage? */
    damaging?: boolean;
    /** Is the roll a reroll? */
    isReroll?: boolean;
    /** The number of MAP increases for this roll */
    mapIncreases?: Maybe<ZeroToTwo>;
    /** D20 results substituted for an actual roll */
    substitutions?: RollSubstitution[];
    /** Is the weapon used in this attack roll an alternative usage? */
    altUsage?: Maybe<"thrown" | "melee">;
    /** Degree of success adjustments from synthetics and hard-coded sources */
    dosAdjustments?: DegreeOfSuccessAdjustment[];
}
export type { CheckRollContext, CheckType, RollTwiceOption };
