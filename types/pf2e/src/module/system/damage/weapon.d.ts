import { CharacterPF2e, HazardPF2e, NPCPF2e } from "types/pf2e/src/module/actor/index.ts"
import { DamageDicePF2e, ModifierPF2e } from "types/pf2e/src/module/actor/modifiers.ts"
import { MeleePF2e, WeaponPF2e } from "types/pf2e/src/module/item/index.ts"
import { NPCAttackDamage } from "types/pf2e/src/module/item/melee/data.ts"
import { WeaponDamage } from "types/pf2e/src/module/item/weapon/data.ts"
import { PotencySynthetic } from "types/pf2e/src/module/rules/synthetics.ts"
import { DamageCategoryUnique, DamageRollContext, WeaponDamageTemplate } from "./types.ts";
declare class WeaponDamagePF2e {
    #private;
    static fromNPCAttack({ attack, actor, context, }: NPCStrikeCalculateParams): Promise<WeaponDamageTemplate | null>;
    static calculate({ weapon, actor, damageDice, modifiers, weaponPotency, context, }: WeaponDamageCalculateParams): Promise<WeaponDamageTemplate | null>;
    /** Parse damage formulas from melee items and construct `WeaponDamage` objects out of them */
    static npcDamageToWeaponDamage(instance: NPCAttackDamage): ConvertedNPCDamage;
}
interface ConvertedNPCDamage extends WeaponDamage {
    category: DamageCategoryUnique | null;
}
interface WeaponDamageCalculateParams {
    weapon: WeaponPF2e | MeleePF2e;
    actor: CharacterPF2e | NPCPF2e | HazardPF2e;
    weaponPotency?: PotencySynthetic | null;
    damageDice?: DamageDicePF2e[];
    modifiers?: ModifierPF2e[];
    context: DamageRollContext;
}
interface NPCStrikeCalculateParams {
    attack: MeleePF2e;
    actor: NPCPF2e | HazardPF2e;
    context: DamageRollContext;
}
export { WeaponDamagePF2e, type ConvertedNPCDamage };
