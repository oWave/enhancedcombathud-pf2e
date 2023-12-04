import { SkillAbbreviation } from "types/pf2e/src/module/actor/creature/data.ts"
import { AttributeString } from "types/pf2e/src/module/actor/types.ts"
import { BaseItemSourcePF2e, ItemSystemSource, OtherTagsOnly } from "types/pf2e/src/module/item/base/data/system.ts"
import { BaseWeaponType } from "types/pf2e/src/module/item/weapon/types.ts"
import { DeityDomain, Sanctification } from "./types.ts";
type DeitySource = BaseItemSourcePF2e<"deity", DeitySystemSource>;
type DeitySystemSource = ItemSystemSource & {
    category: "deity" | "pantheon" | "philosophy";
    sanctification: DeitySanctification | null;
    domains: {
        primary: DeityDomain[];
        alternate: DeityDomain[];
    };
    font: DivineFonts;
    attribute: AttributeString[];
    skill: SkillAbbreviation | null;
    weapons: BaseWeaponType[];
    spells: Record<number, ItemUUID>;
    level?: never;
    traits: OtherTagsOnly;
};
type DeitySanctification = {
    modal: "can" | "must";
    what: Sanctification[];
};
type DivineFonts = ["harm"] | ["heal"] | ["harm", "heal"] | never[];
type DeitySystemData = DeitySystemSource;
export type { DeitySanctification, DeitySource, DeitySystemData, DeitySystemSource };
