import { AncestryTraits } from "types/pf2e/src/module/item/ancestry/data.ts"
import { BaseItemSourcePF2e, ItemSystemData, ItemSystemSource } from "types/pf2e/src/module/item/base/data/system.ts"
type HeritageSource = BaseItemSourcePF2e<"heritage", HeritageSystemSource>;
interface HeritageSystemSource extends ItemSystemSource {
    ancestry: {
        name: string;
        slug: string;
        uuid: ItemUUID;
    } | null;
    traits: AncestryTraits;
    level?: never;
}
interface HeritageSystemData extends HeritageSystemSource, Omit<ItemSystemData, "level" | "traits"> {
}
export type { HeritageSource, HeritageSystemData, HeritageSystemSource };