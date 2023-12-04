import type { ActorPF2e } from "types/pf2e/src/module/actor/index.ts"
import type { ScenePF2e, TokenDocumentPF2e } from "types/pf2e/src/module/scene/index.ts"
interface PopupData extends FormApplicationData<ActorPF2e> {
    tokenInfo: {
        id: string;
        name: string;
        checked: boolean;
    }[];
}
declare class LootNPCsPopup extends FormApplication<ActorPF2e> {
    static get defaultOptions(): FormApplicationOptions;
    _updateObject(_event: Event, formData: Record<string, unknown> & {
        selection?: boolean;
    }): Promise<void>;
    getData(): Promise<PopupData>;
}
interface LootNPCsPopup extends FormApplication<ActorPF2e> {
    object: ActorPF2e<TokenDocumentPF2e<ScenePF2e> | null>;
}
export { LootNPCsPopup };
