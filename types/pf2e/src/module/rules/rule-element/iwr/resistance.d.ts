import { Resistance } from "types/pf2e/src/module/actor/data/iwr.ts"
import { ResistanceType } from "types/pf2e/src/module/actor/types.ts"
import type { StrictArrayField } from "types/pf2e/src/module/system/schema-data-fields.ts"
import { ResolvableValueField } from "../data.ts";
import { IWRException, IWRExceptionField, IWRRuleElement, IWRRuleSchema } from "./base.ts";
/** @category RuleElement */
declare class ResistanceRuleElement extends IWRRuleElement<ResistanceRuleSchema> {
    static defineSchema(): ResistanceRuleSchema;
    static get dictionary(): Record<ResistanceType, string>;
    get property(): Resistance[];
    getIWR(value: number): Resistance[];
}
interface ResistanceRuleElement extends IWRRuleElement<ResistanceRuleSchema>, ModelPropsFromSchema<ResistanceRuleSchema> {
    type: ResistanceType[];
    exceptions: IWRException<ResistanceType>[];
}
type ResistanceRuleSchema = Omit<IWRRuleSchema, "exceptions"> & {
    value: ResolvableValueField<true, false, false>;
    exceptions: StrictArrayField<IWRExceptionField<ResistanceType>>;
    doubleVs: StrictArrayField<IWRExceptionField<ResistanceType>>;
};
export { ResistanceRuleElement };
