import { SkillAbbreviation } from "types/pf2e/src/module/actor/creature/data.ts"
import { AttributeString } from "types/pf2e/src/module/actor/types.ts"
import { ABCSystemData, ABCSystemSource } from "types/pf2e/src/module/item/abc/data.ts"
import { BaseItemSourcePF2e, ItemTraits } from "types/pf2e/src/module/item/base/data/system.ts"
import { BackgroundTrait } from "./types.ts";
type BackgroundSource = BaseItemSourcePF2e<"background", BackgroundSystemSource>;
interface BackgroundSystemSource extends ABCSystemSource {
    traits: BackgroundTraits;
    boosts: Record<number, {
        value: AttributeString[];
        selected: AttributeString | null;
    }>;
    trainedLore: string;
    trainedSkills: {
        value: SkillAbbreviation[];
    };
    level?: never;
}
type BackgroundTraits = ItemTraits<BackgroundTrait>;
interface BackgroundSystemData extends Omit<BackgroundSystemSource, "items">, Omit<ABCSystemData, "level" | "traits"> {
}
export type { BackgroundSource, BackgroundSystemData };
