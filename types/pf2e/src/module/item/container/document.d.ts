import { ActorPF2e } from "types/pf2e/src/module/actor/index.ts"
import { ItemSummaryData } from "types/pf2e/src/module/item/base/data/index.ts"
import { EquipmentTrait } from "types/pf2e/src/module/item/equipment/data.ts"
import { PhysicalItemPF2e } from "types/pf2e/src/module/item/physical/index.ts"
import { Bulk } from "types/pf2e/src/module/item/physical/bulk.ts"
import { ContainerSource, ContainerSystemData } from "./data.ts";
declare class ContainerPF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends PhysicalItemPF2e<TParent> {
    /** This container's contents, reloaded every data preparation cycle */
    contents: Collection<PhysicalItemPF2e<NonNullable<TParent>>>;
    /** Is this an actual stowing container or merely one of the old pouches/quivers/etc.? */
    get stowsItems(): boolean;
    get isCollapsed(): boolean;
    get capacity(): {
        value: Bulk;
        max: Bulk;
    };
    get capacityPercentage(): number;
    get bulk(): Bulk;
    /** Reload this container's contents following Actor embedded-document preparation */
    prepareSiblingData(this: ContainerPF2e<ActorPF2e>): void;
    /** Move the contents of this container into the next-higher container or otherwise the main actor inventory */
    ejectContents(): Promise<void>;
    getChatData(this: ContainerPF2e<TParent>, htmlOptions?: EnrichmentOptions): Promise<ItemSummaryData>;
}
interface ContainerPF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends PhysicalItemPF2e<TParent> {
    readonly _source: ContainerSource;
    system: ContainerSystemData;
    get traits(): Set<EquipmentTrait>;
}
export { ContainerPF2e };
