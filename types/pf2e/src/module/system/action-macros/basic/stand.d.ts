import { SimpleAction, SimpleActionVariant, SimpleActionVariantData } from "types/pf2e/src/module/actor/actions/index.ts"
declare class StandAction extends SimpleAction {
    constructor();
    protected toActionVariant(data?: SimpleActionVariantData): SimpleActionVariant;
}
declare const stand: StandAction;
export { stand };
