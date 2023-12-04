import { NPCPF2e } from "types/pf2e/src/module/actor/index.ts"
import { SkillLongForm } from "types/pf2e/src/module/actor/types.ts"
import { DCAdjustment, DCOptions } from "./dc.ts";
declare function creatureIdentificationDCs(creature: NPCPF2e, { proficiencyWithoutLevel }?: DCOptions): CreatureIdentificationData;
interface RecallKnowledgeDC {
    dc: number;
    progression: number[];
    start: DCAdjustment;
}
interface CreatureIdentificationData {
    skills: SkillLongForm[];
    standard: RecallKnowledgeDC;
    lore: [RecallKnowledgeDC, RecallKnowledgeDC];
}
export { creatureIdentificationDCs, type CreatureIdentificationData };
