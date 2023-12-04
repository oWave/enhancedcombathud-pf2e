import { SingleCheckAction } from "types/pf2e/src/module/actor/actions/index.ts"
import { SkillActionOptions } from "../index.ts";
declare function maneuverInFlight(options: SkillActionOptions): Promise<void>;
declare const action: SingleCheckAction;
export { maneuverInFlight as legacy, action };
