import type { CharacterPF2e } from "types/pf2e/src/module/actor/index.ts"
import type { DamageType } from "types/pf2e/src/module/system/damage/types.ts"
import { WeaponPF2e } from "./document.ts";
/** A helper class to handle toggleable weapon traits */
declare class WeaponTraitToggles {
    #private;
    constructor(weapon: WeaponPF2e);
    get modular(): {
        options: DamageType[];
        selection: DamageType | null;
    };
    get versatile(): {
        options: DamageType[];
        selection: DamageType | null;
    };
}
/**
 * Update a modular or versatile weapon to change its damage type
 * @returns A promise indicating whether an update was made
 */
declare function toggleWeaponTrait({ weapon, trait, selection }: ToggleWeaponTraitParams): Promise<boolean>;
interface ToggleWeaponTraitParams {
    weapon: WeaponPF2e<CharacterPF2e>;
    trait: "modular" | "versatile";
    selection: DamageType | null;
}
export { WeaponTraitToggles, toggleWeaponTrait };
