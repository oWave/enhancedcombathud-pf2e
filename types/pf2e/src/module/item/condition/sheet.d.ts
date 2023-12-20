import { ItemSheetPF2e } from "src/module/item/index.ts";
import type { ItemSheetOptions } from "src/module/item/base/sheet/sheet.ts";
import type { ConditionPF2e } from "./document.ts";
declare class ConditionSheetPF2e extends ItemSheetPF2e<ConditionPF2e> {
    static get defaultOptions(): ItemSheetOptions;
}
export { ConditionSheetPF2e };
