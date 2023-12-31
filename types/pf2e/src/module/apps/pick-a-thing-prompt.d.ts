/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="jquery" resolution-mode="require"/>
/// <reference types="tooltipster" />
import type { ActorPF2e } from "types/pf2e/src/module/actor/index.ts"
import type { ItemPF2e } from "types/pf2e/src/module/item/index.ts"
import { PredicatePF2e } from "types/pf2e/src/module/system/predication.ts"
import Tagify from "@yaireo/tagify";
/** Prompt the user to pick from a number of options */
declare abstract class PickAThingPrompt<T extends string | number | object> extends Application {
    #private;
    protected item: ItemPF2e<ActorPF2e>;
    protected selection: PickableThing<T> | null;
    protected choices: PickableThing<T>[];
    /** If the number of choices is beyond a certain length, a select menu is presented instead of a list of buttons */
    protected selectMenu?: Tagify<{
        value: string;
        label: string;
    }>;
    protected predicate: PredicatePF2e;
    protected allowNoSelection: boolean;
    constructor(data: PickAThingConstructorArgs<T>);
    get actor(): ActorPF2e;
    static get defaultOptions(): ApplicationOptions;
    /** Collect all options within the specified scope and then eliminate any that fail the predicate test */
    protected getChoices(): PickableThing<T>[];
    protected getSelection(event: MouseEvent): PickableThing<T> | null;
    /** Return a promise containing the user's item selection, or `null` if no selection was made */
    resolveSelection(): Promise<PickableThing<T> | null>;
    getData(options?: Partial<ApplicationOptions>): Promise<PromptTemplateData>;
    activateListeners($html: JQuery): void;
    /** Close the dialog, applying the effect with configured target or warning the user that something went wrong. */
    close(options?: {
        force?: boolean;
    }): Promise<void>;
}
interface PickAThingConstructorArgs<T extends string | number | object> {
    title?: string;
    prompt?: string;
    choices?: PickableThing<T>[];
    item: ItemPF2e<ActorPF2e>;
    predicate?: PredicatePF2e;
    allowNoSelection?: boolean;
}
interface PickableThing<T extends string | number | object = string | number | object> {
    value: T;
    label: string;
    img?: string;
    domain?: string[];
    predicate?: PredicatePF2e;
}
interface PromptTemplateData {
    choices: PickableThing[];
    /** Whether to use a select menu instead of a column of buttons */
    selectMenu: boolean;
}
export { PickAThingPrompt };
export type { PickAThingConstructorArgs, PickableThing, PromptTemplateData };
