import { ActorPF2e } from "types/pf2e/src/module/actor/base.ts"
import { ActorSizePF2e } from "types/pf2e/src/module/actor/data/size.ts"
import { InventoryBulk } from "types/pf2e/src/module/actor/inventory/index.ts"
import { PhysicalItemPF2e } from "types/pf2e/src/module/item/index.ts"
import { Coins } from "types/pf2e/src/module/item/physical/data.ts"
import { PhysicalItemType } from "types/pf2e/src/module/item/physical/types.ts"
import { RollOptionToggle } from "types/pf2e/src/module/rules/synthetics.ts"
import { SheetOptions } from "types/pf2e/src/module/sheet/helpers.ts"
export interface InventoryItem<TItem extends PhysicalItemPF2e = PhysicalItemPF2e> {
    item: TItem;
    /** Item size if it causes any weight difference relative to the actor */
    itemSize?: ActorSizePF2e | null;
    editable: boolean;
    isContainer: boolean;
    canBeEquipped: boolean;
    isInvestable: boolean;
    isSellable: boolean;
    hasCharges: boolean;
    heldItems?: InventoryItem[];
    notifyInvestment?: boolean;
}
interface CoinDisplayData {
    value: number;
    label: string;
}
export type CoinageSummary = {
    [K in keyof Coins]?: CoinDisplayData;
};
interface SheetItemList {
    label: string;
    type: PhysicalItemType;
    items: InventoryItem[];
}
export interface SheetInventory {
    sections: Record<Exclude<PhysicalItemType, "book">, SheetItemList>;
    bulk: InventoryBulk;
    showValueAlways: boolean;
    showIndividualPricing: boolean;
    hasStowingContainers: boolean;
    invested?: {
        value: number;
        max: number;
    } | null;
}
export interface ActorSheetDataPF2e<TActor extends ActorPF2e> extends ActorSheetData<TActor> {
    traits: SheetOptions;
    isTargetFlatFooted: boolean;
    user: {
        isGM: boolean;
    };
    toggles: RollOptionToggle[];
    totalCoinage: CoinageSummary;
    totalCoinageGold: string;
    totalWealth: Coins;
    totalWealthGold: string;
    canDistributeCoins?: {
        enabled: boolean;
    } | null;
    inventory: SheetInventory;
    enrichedContent: Record<string, string>;
}
export interface ActorSheetRenderOptionsPF2e extends RenderOptions {
    /** What tab to switch to when rendering the sheet */
    tab?: string;
}
export {};