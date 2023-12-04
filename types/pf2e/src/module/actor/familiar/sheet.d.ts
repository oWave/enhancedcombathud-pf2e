/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import type { CharacterPF2e } from "types/pf2e/src/module/actor/index.ts"
import { CreatureSheetData } from "types/pf2e/src/module/actor/creature/index.ts"
import { CreatureSheetPF2e } from "types/pf2e/src/module/actor/creature/sheet.ts"
import type { AbilityItemPF2e } from "types/pf2e/src/module/item/index.ts"
import { StatisticTraceData } from "types/pf2e/src/module/system/statistic/index.ts"
import { FamiliarPF2e } from "./document.ts";
/**
 * @category Actor
 */
export declare class FamiliarSheetPF2e<TActor extends FamiliarPF2e> extends CreatureSheetPF2e<TActor> {
    /** There is currently no actor config for familiars */
    protected readonly actorConfigClass: null;
    static get defaultOptions(): ActorSheetOptions;
    get template(): string;
    getData(options?: ActorSheetOptions): Promise<FamiliarSheetData<TActor>>;
    activateListeners($html: JQuery): void;
}
interface FamiliarSheetData<TActor extends FamiliarPF2e> extends CreatureSheetData<TActor> {
    master: CharacterPF2e | null;
    masters: CharacterPF2e[];
    abilities: ConfigPF2e["PF2E"]["abilities"];
    size: string;
    skills: StatisticTraceData[];
    familiarAbilities: {
        value: number;
        items: AbilityItemPF2e[];
    };
}
export {};
