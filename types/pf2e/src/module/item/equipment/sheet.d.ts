import { AttributeString } from "types/pf2e/src/module/actor/types.ts"
import { PhysicalItemSheetData, PhysicalItemSheetPF2e } from "types/pf2e/src/module/item/physical/index.ts"
import { SheetOptions } from "types/pf2e/src/module/sheet/helpers.ts"
import { EquipmentPF2e } from "./document.ts";
export declare class EquipmentSheetPF2e extends PhysicalItemSheetPF2e<EquipmentPF2e> {
    getData(options?: Partial<DocumentSheetOptions>): Promise<EquipmentSheetData>;
}
interface EquipmentSheetData extends PhysicalItemSheetData<EquipmentPF2e> {
    isApex: boolean;
    attributes: Record<AttributeString, string>;
    otherTags: SheetOptions;
}
export {};
