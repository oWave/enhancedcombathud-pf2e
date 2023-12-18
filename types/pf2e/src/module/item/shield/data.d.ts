import { BasePhysicalItemSource, PhysicalItemTraits, PhysicalSystemData, PhysicalSystemSource } from "src/module/item/physical/data.ts";
import { HeldUsage } from "src/module/item/physical/usage.ts";
import { WeaponRuneData, WeaponRuneSource } from "src/module/item/weapon/data.ts";
import { ZeroToSix } from "src/module/data.ts";
import { DamageType } from "src/module/system/damage/types.ts";
import { BaseShieldType, ShieldTrait } from "./types.ts";
type ShieldSource = BasePhysicalItemSource<"shield", ShieldSystemSource>;
interface ShieldSystemSource extends PhysicalSystemSource {
    traits: ShieldTraitsSource;
    baseItem: BaseShieldType | null;
    acBonus: number;
    speedPenalty: number;
    /** Data stored at the time of marking a shield as specific */
    specific: SpecificShieldData | null;
    /** Currently supports reinforcing runes */
    runes: ShieldRuneData;
    /** Usage for shields isn't stored. */
    readonly usage?: never;
}
interface IntegratedWeaponSource {
    runes: WeaponRuneSource;
    versatile: {
        selection: DamageType;
    } | null;
}
interface ShieldTraitsSource extends PhysicalItemTraits<ShieldTrait> {
    integrated: IntegratedWeaponSource | null;
}
type ShieldRuneData = {
    reinforcing: ZeroToSix;
};
/** A weapon can either be unspecific or specific along with baseline material and runes */
interface SpecificShieldData extends Pick<ShieldSystemSource, "material" | "runes"> {
    integrated: {
        runes: Omit<WeaponRuneData, "effects">;
    } | null;
}
interface ShieldSystemData extends Omit<ShieldSystemSource, "bulk" | "hp" | "identification" | "material" | "price" | "temporary" | "usage">, Omit<PhysicalSystemData, "baseItem" | "traits"> {
    traits: ShieldTraits;
    /** Shields are always held. */
    usage: HeldUsage;
    stackGroup: null;
}
interface IntegratedWeaponData extends IntegratedWeaponSource {
    damageType: DamageType;
    versatile: {
        options: DamageType[];
        selection: DamageType;
    } | null;
}
interface ShieldTraits extends ShieldTraitsSource {
    integrated: IntegratedWeaponData | null;
}
export type { IntegratedWeaponData, IntegratedWeaponSource, ShieldSource, ShieldSystemData, ShieldSystemSource, SpecificShieldData, };
