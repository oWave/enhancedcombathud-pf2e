import { AuraAppearanceData, AuraData, AuraEffectData } from "types/pf2e/src/module/actor/types.ts"
import { ItemTrait } from "types/pf2e/src/module/item/base/data/system.ts"
import { EffectAreaSquare } from "types/pf2e/src/module/canvas/effect-area-square.ts"
import type { ScenePF2e, TokenDocumentPF2e } from "types/pf2e/src/module/scene/index.ts"
import type { TokenAuraData } from "./types.ts";
declare class TokenAura implements TokenAuraData {
    #private;
    slug: string;
    token: TokenDocumentPF2e;
    level: number | null;
    /** The radius of the aura in feet */
    radius: number;
    traits: ItemTrait[];
    effects: AuraEffectData[];
    appearance: AuraAppearanceData;
    constructor(params: TokenAuraParams);
    /** The aura radius from the center in pixels */
    get radiusPixels(): number;
    get scene(): ScenePF2e;
    get bounds(): PIXI.Rectangle;
    get center(): Point;
    /** The squares covered by this aura */
    get squares(): EffectAreaSquare[];
    /** Does this aura overlap with (at least part of) a token? */
    containsToken(token: TokenDocumentPF2e): boolean;
    /** Notify tokens' actors if they are inside this aura. */
    notifyActors(): Promise<void>;
}
interface TokenAuraParams extends Omit<AuraData, "effects" | "traits"> {
    slug: string;
    level: number | null;
    radius: number;
    token: TokenDocumentPF2e;
    traits: ItemTrait[];
    effects: AuraEffectData[];
}
export { TokenAura, TokenAuraData };
