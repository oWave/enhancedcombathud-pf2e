import { SingleCheckAction } from "types/pf2e/src/module/actor/actions/index.ts"
import { SkillActionOptions } from "../index.ts";
declare function tumbleThrough(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { tumbleThrough as legacy, action };
