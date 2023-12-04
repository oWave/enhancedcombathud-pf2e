import { BaseItemSourcePF2e, ItemSystemSource } from "types/pf2e/src/module/item/base/data/system.ts"
import { PhysicalItemTraits, PartialPrice } from "types/pf2e/src/module/item/physical/data.ts"
type KitSource = BaseItemSourcePF2e<"kit", KitSystemSource>;
interface KitEntryData {
    uuid: ItemUUID;
    img: ImageFilePath;
    quantity: number;
    name: string;
    isContainer: boolean;
    items?: Record<string, KitEntryData>;
}
interface KitSystemSource extends ItemSystemSource {
    traits: PhysicalItemTraits;
    items: Record<string, KitEntryData>;
    price: PartialPrice;
    level?: never;
}
type KitSystemData = KitSystemSource;
export type { KitEntryData, KitSource, KitSystemData, KitSystemSource };
