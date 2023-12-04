/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { ItemSheetDataPF2e, ItemSheetPF2e } from "types/pf2e/src/module/item/base/sheet/base.ts"
import { SheetOptions } from "types/pf2e/src/module/sheet/helpers.ts"
import { DamageCategoryUnique } from "types/pf2e/src/module/system/damage/types.ts"
import { MeleePF2e } from "./index.ts";
export declare class MeleeSheetPF2e extends ItemSheetPF2e<MeleePF2e> {
    getData(options?: Partial<DocumentSheetOptions>): Promise<MeleeSheetData>;
    activateListeners($html: JQuery<HTMLElement>): void;
    protected _updateObject(event: Event, formData: Record<string, unknown>): Promise<void>;
}
interface MeleeSheetData extends ItemSheetDataPF2e<MeleePF2e> {
    damageTypes: ConfigPF2e["PF2E"]["damageTypes"];
    damageCategories: Record<DamageCategoryUnique, string>;
    attackEffects: SheetOptions;
}
export {};
