import { BaseItemSourcePF2e, ItemSystemSource, OtherTagsOnly } from "types/pf2e/src/module/item/base/data/system.ts"
import { ZeroToFour } from "types/pf2e/src/module/data.ts"
type LoreSource = BaseItemSourcePF2e<"lore", LoreSystemSource>;
interface LoreSystemSource extends ItemSystemSource {
    traits: OtherTagsOnly;
    mod: {
        value: number;
    };
    proficient: {
        value: ZeroToFour;
    };
    variants?: Record<string, {
        label: string;
        options: string;
    }>;
    level?: never;
}
type LoreSystemData = LoreSystemSource;
export type { LoreSource, LoreSystemData };
