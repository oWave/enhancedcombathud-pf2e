import { ActorPF2e } from "types/pf2e/src/module/actor/index.ts"
import { DamageDicePF2e, DeferredValueParams, ModifierAdjustment, ModifierPF2e, TestableDeferredValueParams } from "types/pf2e/src/module/actor/modifiers.ts"
import { ItemPF2e } from "types/pf2e/src/module/item/index.ts"
import { ConditionSource, EffectSource } from "types/pf2e/src/module/item/base/data/index.ts"
import { RollNotePF2e } from "types/pf2e/src/module/notes.ts"
import { BaseDamageData } from "types/pf2e/src/module/system/damage/index.ts"
import { DegreeOfSuccessAdjustment } from "types/pf2e/src/module/system/degree-of-success.ts"
import { RollTwiceOption } from "types/pf2e/src/module/system/rolls.ts"
import { BracketedValue } from "./rule-element/index.ts";
import { DamageDiceSynthetics, RollSubstitution, RollTwiceSynthetic, RuleElementSynthetics } from "./synthetics.ts";
/** Extracts a list of all cloned modifiers across all given keys in a single list. */
declare function extractModifiers(synthetics: Pick<RuleElementSynthetics, "modifierAdjustments" | "modifiers">, selectors: string[], options?: DeferredValueParams): ModifierPF2e[];
declare function extractModifierAdjustments(adjustmentsRecord: RuleElementSynthetics["modifierAdjustments"], selectors: string[], slug: string): ModifierAdjustment[];
/** Extracts a list of all cloned notes across all given keys in a single list. */
declare function extractNotes(rollNotes: Record<string, RollNotePF2e[]>, selectors: string[]): RollNotePF2e[];
declare function extractDamageDice(deferredDice: DamageDiceSynthetics, selectors: string[], options: TestableDeferredValueParams): DamageDicePF2e[];
declare function processDamageCategoryStacking(base: BaseDamageData[], options: {
    modifiers: ModifierPF2e[];
    dice: DamageDicePF2e[];
    test: Set<string>;
}): {
    modifiers: ModifierPF2e[];
    dice: DamageDicePF2e[];
};
declare function extractEphemeralEffects({ affects, origin, target, item, domains, options, }: ExtractEphemeralEffectsParams): Promise<(ConditionSource | EffectSource)[]>;
interface ExtractEphemeralEffectsParams {
    affects: "target" | "origin";
    origin: ActorPF2e | null;
    target: Maybe<ActorPF2e>;
    item: ItemPF2e | null;
    domains: string[];
    options: Set<string> | string[];
}
declare function extractRollTwice(rollTwices: Record<string, RollTwiceSynthetic[]>, selectors: string[], options: Set<string>): RollTwiceOption;
declare function extractRollSubstitutions(substitutions: Record<string, RollSubstitution[]>, domains: string[], rollOptions: Set<string>): RollSubstitution[];
declare function extractDegreeOfSuccessAdjustments(synthetics: Pick<RuleElementSynthetics, "degreeOfSuccessAdjustments">, selectors: string[]): DegreeOfSuccessAdjustment[];
declare function isBracketedValue(value: unknown): value is BracketedValue;
declare function processPreUpdateActorHooks(changed: Record<string, unknown>, { pack }: {
    pack: string | null;
}): Promise<void>;
export { extractDamageDice, extractDegreeOfSuccessAdjustments, extractEphemeralEffects, extractModifierAdjustments, extractModifiers, extractNotes, extractRollSubstitutions, extractRollTwice, isBracketedValue, processDamageCategoryStacking, processPreUpdateActorHooks, };
