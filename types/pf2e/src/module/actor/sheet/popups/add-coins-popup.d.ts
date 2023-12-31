import { ActorPF2e } from "types/pf2e/src/module/actor/base.ts"
import { Coins } from "types/pf2e/src/module/item/physical/data.ts"
interface AddCoinsFormData extends Coins {
    combineStacks: boolean;
}
/**
 * @category Other
 */
export declare class AddCoinsPopup extends FormApplication<ActorPF2e> {
    static get defaultOptions(): FormApplicationOptions;
    _updateObject(_event: Event, formData: Record<string, unknown> & AddCoinsFormData): Promise<void>;
}
export {};
