import { Immunity } from "types/pf2e/src/module/actor/data/iwr.ts"
import { ImmunityType } from "types/pf2e/src/module/actor/types.ts"
import type { StrictArrayField } from "types/pf2e/src/module/system/schema-data-fields.ts"
import { IWRException, IWRExceptionField, IWRRuleElement, IWRRuleSchema } from "./base.ts";
/** @category RuleElement */
declare class ImmunityRuleElement extends IWRRuleElement<ImmunityRuleSchema> {
    /** Immunities don't take values */
    readonly value: null;
    static defineSchema(): ImmunityRuleSchema;
    static get dictionary(): Record<ImmunityType, string>;
    get property(): Immunity[];
    getIWR(): Immunity[];
}
interface ImmunityRuleElement extends IWRRuleElement<ImmunityRuleSchema>, ModelPropsFromSchema<ImmunityRuleSchema> {
    type: ImmunityType[];
    exceptions: IWRException<ImmunityType>[];
}
type ImmunityRuleSchema = Omit<IWRRuleSchema, "exceptions"> & {
    exceptions: StrictArrayField<IWRExceptionField<ImmunityType>>;
};
export { ImmunityRuleElement };
