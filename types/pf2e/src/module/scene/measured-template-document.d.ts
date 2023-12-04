import type { ActorPF2e } from "types/pf2e/src/module/actor/index.ts"
import { ItemPF2e } from "types/pf2e/src/module/item/index.ts"
import type { MeasuredTemplatePF2e } from "types/pf2e/src/module/canvas/measured-template.ts"
import { ItemOriginFlag } from "types/pf2e/src/module/chat-message/data.ts"
import type { ChatMessagePF2e } from "types/pf2e/src/module/chat-message/document.ts"
import { ScenePF2e } from "./document.ts";
export declare class MeasuredTemplateDocumentPF2e<TParent extends ScenePF2e | null = ScenePF2e | null> extends MeasuredTemplateDocument<TParent> {
    get item(): ItemPF2e<ActorPF2e> | null;
    /** The chat message from which this template was spawned */
    get message(): ChatMessagePF2e | null;
    /** If present, show the clear-template button on the message from which this template was spawned */
    protected _onCreate(data: this["_source"], options: DocumentModificationContext<TParent>, userId: string): void;
    /** If present, hide the clear-template button on the message from which this template was spawned */
    protected _onDelete(options: DocumentModificationContext<TParent>, userId: string): void;
}
export interface MeasuredTemplateDocumentPF2e<TParent extends ScenePF2e | null = ScenePF2e | null> extends MeasuredTemplateDocument<TParent> {
    get object(): MeasuredTemplatePF2e<this> | null;
    flags: DocumentFlags & {
        pf2e?: {
            messageId?: string;
            origin?: ItemOriginFlag;
        };
    };
}
