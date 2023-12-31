import type { ActorPF2e } from "types/pf2e/src/module/actor/index.ts"
import { ItemPF2e } from "types/pf2e/src/module/item/index.ts"
import { BaseWeaponType } from "types/pf2e/src/module/item/weapon/types.ts"
import { DeitySource, DeitySystemData } from "./data.ts";
declare class DeityPF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    get category(): "deity" | "pantheon" | "philosophy";
    get favoredWeapons(): BaseWeaponType[];
    prepareBaseData(): void;
    prepareActorData(this: DeityPF2e<ActorPF2e>): void;
    /** If applicable, set a trained proficiency with this deity's favored weapon */
    setFavoredWeaponRank(this: DeityPF2e<ActorPF2e>): void;
    getRollOptions(prefix?: string): string[];
    private getSanctificationRollOptions;
}
interface DeityPF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
    readonly _source: DeitySource;
    system: DeitySystemData;
}
export { DeityPF2e };
