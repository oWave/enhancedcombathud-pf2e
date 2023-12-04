import { BasePhysicalItemSource, PhysicalSystemData, PhysicalSystemSource } from "types/pf2e/src/module/item/physical/data.ts"
type TreasureSource = BasePhysicalItemSource<"treasure", TreasureSystemSource>;
type TreasureSystemSource = PhysicalSystemSource;
type TreasureSystemData = PhysicalSystemData & {
    equipped: {
        invested?: never;
    };
};
export type { TreasureSource, TreasureSystemData, TreasureSystemSource };
