import { ActorPF2e } from "types/pf2e/src/module/actor/index.ts"
import { AttributeString } from "types/pf2e/src/module/actor/types.ts"
import { SpellcastingEntryPF2e } from "types/pf2e/src/module/item/index.ts"
import { SpellcastingEntrySystemSource } from "types/pf2e/src/module/item/spellcasting-entry/data.ts"
/** Dialog to create or edit spellcasting entries. It works on a clone of spellcasting entry, but will not persist unless the changes are accepted */
declare class SpellcastingCreateAndEditDialog extends FormApplication<SpellcastingEntryPF2e<ActorPF2e>> {
    #private;
    private actor;
    constructor(object: ActorPF2e | SpellcastingEntryPF2e<ActorPF2e>, options: Partial<FormApplicationOptions>);
    static get defaultOptions(): FormApplicationOptions;
    getData(): Promise<SpellcastingCreateAndEditDialogSheetData>;
    protected _updateObject(event: Event, formData: Record<string, unknown>): Promise<void>;
    private updateAndClose;
}
interface SpellcastingCreateAndEditDialogSheetData extends FormApplicationData<SpellcastingEntryPF2e<ActorPF2e>> {
    actor: ActorPF2e;
    system: SpellcastingEntrySystemSource;
    magicTraditions: ConfigPF2e["PF2E"]["magicTraditions"];
    statistics: {
        slug: string;
        label: string;
    }[];
    spellcastingTypes: Omit<ConfigPF2e["PF2E"]["preparationType"], "ritual">;
    attributes: ConfigPF2e["PF2E"]["abilities"];
    isAttributeConfigurable: boolean;
    selectedAttribute: AttributeString;
}
export declare function createSpellcastingDialog(event: MouseEvent, object: ActorPF2e | SpellcastingEntryPF2e<ActorPF2e>): Promise<SpellcastingCreateAndEditDialog>;
export {};
