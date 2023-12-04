import { SkillAbbreviation } from "types/pf2e/src/module/actor/creature/data.ts"
import type { ConditionPF2e, EffectPF2e } from "types/pf2e/src/module/item/index.ts"
import { ChatMessagePF2e } from "types/pf2e/src/module/chat-message/document.ts"
import type { ElementTrait } from "types/pf2e/src/scripts/config/traits.ts"
/**
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param itemId
 */
export declare function rollItemMacro(itemId: string): Promise<ChatMessagePF2e | undefined | void>;
export declare function createActionMacro({ actorUUID, actionIndex, elementTrait, slot, }: {
    actorUUID?: ActorUUID;
    elementTrait?: string;
    actionIndex?: number;
    slot: number;
}): Promise<void>;
export declare function rollActionMacro({ actorUUID, itemId, elementTrait, slug, type, }: RollActionMacroParams): Promise<ChatMessagePF2e | undefined>;
export declare function createSkillMacro(skill: SkillAbbreviation, skillName: string, actorId: string, slot: number): Promise<void>;
export declare function createToggleEffectMacro(effect: ConditionPF2e | EffectPF2e, slot: number): Promise<void>;
interface RollActionMacroParams {
    actorUUID?: ActorUUID;
    itemId?: string;
    slug?: string;
    elementTrait?: ElementTrait;
    type?: "blast" | "strike";
}
export {};
