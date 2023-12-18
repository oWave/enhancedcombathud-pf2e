import type { ActorPF2e } from "src/module/actor/index.ts";
import { ItemPF2e, ItemSheetPF2e } from "src/module/item/index.ts";
import { BaseItemSourcePF2e, ItemSystemSource, OtherTagsOnly } from "src/module/item/base/data/system.ts";
import { ZeroToFour } from "src/module/data.ts";
declare class LorePF2e<TParent extends ActorPF2e | null = ActorPF2e | null> extends ItemPF2e<TParent> {
}
interface LorePF2e<TParent extends ActorPF2e | null> extends ItemPF2e<TParent> {
    readonly _source: LoreSource;
    system: LoreSystemData;
}
type LoreSource = BaseItemSourcePF2e<"lore", LoreSystemSource>;
interface LoreSystemSource extends ItemSystemSource {
    traits: OtherTagsOnly;
    mod: {
        value: number;
    };
    proficient: {
        value: ZeroToFour;
    };
    variants?: Record<string, {
        label: string;
        options: string;
    }>;
    level?: never;
}
type LoreSystemData = LoreSystemSource;
declare class LoreSheetPF2e extends ItemSheetPF2e<LorePF2e> {
}
export { LorePF2e, LoreSheetPF2e };
export type { LoreSource, LoreSystemData };
