/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import { CreaturePF2e } from "types/pf2e/src/module/actor/index.ts"
import { ItemSummaryRenderer } from "types/pf2e/src/module/actor/sheet/item-summary-renderer.ts"
import { ItemPF2e } from "types/pf2e/src/module/item/index.ts"
import { ItemSourcePF2e } from "types/pf2e/src/module/item/base/data/index.ts"
import { SpellcastingEntryPF2e, SpellcastingSheetData } from "types/pf2e/src/module/item/spellcasting-entry/index.ts"
/**
 * Sheet used to render the the spell list for prepared casting.
 * It overrides the actor sheet to inherit important drag/drop behavior for actor items (the spells).
 */
declare class SpellPreparationSheet<TActor extends CreaturePF2e> extends ActorSheet<TActor> {
    #private;
    item: SpellcastingEntryPF2e<TActor>;
    /** Implementation used to handle the toggling and rendering of item summaries */
    itemRenderer: ItemSummaryRenderer<TActor>;
    constructor(item: SpellcastingEntryPF2e<TActor>, options: Partial<ActorSheetOptions>);
    static get defaultOptions(): ActorSheetOptions;
    /** Avoid conflicting with the real actor sheet */
    get id(): string;
    get title(): string;
    /**
     * This being an actor sheet saves us from most drag and drop re-implementation,
     * but we still have a gotcha in the form of the header buttons.
     */
    protected _getHeaderButtons(): ApplicationHeaderButton[];
    getData(): Promise<SpellPreparationSheetData<TActor>>;
    activateListeners($html: JQuery<HTMLElement>): void;
    /** Filter spells by search query */
    protected _onSearchFilter(_event: KeyboardEvent, query: string, _rgx: RegExp, html: HTMLElement | null): void;
    /** Allow adding new spells to the shortlist by dragging directly into the window */
    protected _onDropItemCreate(itemSource: ItemSourcePF2e | ItemSourcePF2e[]): Promise<ItemPF2e<TActor>[]>;
    /** Allow transferring spells between open windows */
    protected _onSortItem(event: DragEvent, itemData: ItemSourcePF2e): Promise<CollectionValue<TActor["items"]>[]>;
    /** Override of inner render function to maintain item summary state */
    protected _renderInner(data: Record<string, unknown>, options: RenderOptions): Promise<JQuery>;
}
interface SpellPreparationSheetData<TActor extends CreaturePF2e> extends ActorSheetData<TActor> {
    owner: boolean;
    entry: SpellcastingSheetData;
}
export { SpellPreparationSheet };
