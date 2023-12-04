import { SingleCheckAction } from "types/pf2e/src/module/actor/actions/index.ts"
import { SkillActionOptions } from "../index.ts";
declare function demoralize(options: SkillActionOptions): void;
declare const action: SingleCheckAction;
export { action, demoralize as legacy };
