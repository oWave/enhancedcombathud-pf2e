/// <reference types="jquery" resolution-mode="require"/>
import type { ActorPF2e } from "types/pf2e/src/module/actor/index.ts"
import { ItemPF2e, WeaponPF2e } from "types/pf2e/src/module/item/index.ts"
import { RangeData } from "types/pf2e/src/module/item/types.ts"
import { BaseWeaponType, WeaponCategory, WeaponGroup } from "types/pf2e/src/module/item/weapon/types.ts"
import type { ChatMessagePF2e } from "types/pf2e/src/module/chat-message/document.ts"
import { ConvertedNPCDamage } from "types/pf2e/src/module/system/damage/weapon.ts"
import { MeleeFlags, MeleeSource, MeleeSystemData, NPCAttackTrait } from "./data.ts";
declare class MeleePF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    /** Set during data preparation if a linked weapon is found */
    category: WeaponCategory | null;
    group: WeaponGroup | null;
    baseType: BaseWeaponType | null;
    get traits(): Set<NPCAttackTrait>;
    get isMelee(): boolean;
    get isRanged(): boolean;
    get isThrown(): boolean;
    /** The attribute this attack is based on: determines which of the Clumsy and Enfeebled conditions apply */
    get defaultAttribute(): "str" | "dex";
    get attackModifier(): number;
    get reach(): number | null;
    /** The range maximum and possibly also increment if a ranged attack; otherwise null */
    get range(): RangeData | null;
    /** The first of this attack's damage instances */
    get baseDamage(): ConvertedNPCDamage;
    get dealsDamage(): boolean;
    /** Additional effects that are part of this attack */
    get attackEffects(): string[];
    get isMagical(): boolean;
    /** The linked inventory weapon, if this melee item was spawned from one */
    get linkedWeapon(): WeaponPF2e<ActorPF2e> | null;
    protected _initialize(options?: Record<string, unknown>): void;
    prepareBaseData(): void;
    /** Set weapon category, group, and base if that information is available */
    prepareSiblingData(): void;
    prepareActorData(): void;
    getRollOptions(prefix?: string): string[];
    /** Treat this item like a strike in this context and post it as one */
    toMessage(_event?: MouseEvent | JQuery.TriggeredEvent, { create }?: {
        create?: boolean;
    }): Promise<ChatMessagePF2e | undefined>;
}
interface MeleePF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    flags: MeleeFlags;
    readonly _source: MeleeSource;
    system: MeleeSystemData;
}
export { MeleePF2e };
