import type { ActorPF2e } from "./src/module/actor/index.ts"
import type { AutomaticBonusProgression } from "types/pf2e/src/module/actor/character/automatic-bonus-progression.ts"
import type { ElementalBlast } from "types/pf2e/src/module/actor/character/elemental-blast.ts"
import type { FeatGroupOptions } from "types/pf2e/src/module/actor/character/feats.ts"
import type {
  CheckModifier,
  ModifierPF2e,
  ModifierType,
  StatisticModifier,
} from "types/pf2e/src/module/actor/modifiers.ts"
import type { ItemPF2e, PhysicalItemPF2e } from "types/pf2e/src/module/item/index.ts"
import type { ConditionSource } from "types/pf2e/src/module/item/condition/data.ts"
import type { CoinsPF2e } from "types/pf2e/src/module/item/physical/helpers.ts"
import type { ActiveEffectPF2e } from "types/pf2e/src/module/active-effect.ts"
import type {
  CompendiumBrowser,
  CompendiumBrowserSettings,
  CompendiumBrowserSources,
} from "types/pf2e/src/module/apps/compendium-browser/index.ts"
import type { EffectsPanel } from "types/pf2e/src/module/apps/effects-panel.ts"
import type { HotbarPF2e } from "types/pf2e/src/module/apps/hotbar.ts"
import type { LicenseViewer } from "types/pf2e/src/module/apps/license-viewer/app.ts"
import type {
  ActorDirectoryPF2e,
  ChatLogPF2e,
  CompendiumDirectoryPF2e,
  EncounterTrackerPF2e,
} from "types/pf2e/src/module/apps/sidebar/index.ts"
import type { WorldClock } from "types/pf2e/src/module/apps/world-clock/app.ts"
import type { CanvasPF2e, EffectsCanvasGroupPF2e } from "types/pf2e/src/module/canvas/index.ts"
import type { StatusEffects } from "types/pf2e/src/module/canvas/status-effects.ts"
import type { ChatMessagePF2e } from "types/pf2e/src/module/chat-message/index.ts"
import type { ActorsPF2e } from "types/pf2e/src/module/collection/actors.ts"
import type { CombatantPF2e, EncounterPF2e } from "types/pf2e/src/module/encounter/index.ts"
import type { MacroPF2e } from "types/pf2e/src/module/macro.ts"
import type { RuleElementPF2e, RuleElements } from "types/pf2e/src/module/rules/index.ts"
import type { UserPF2e } from "types/pf2e/src/module/user/index.ts"
import type {
  AmbientLightDocumentPF2e,
  MeasuredTemplateDocumentPF2e,
  ScenePF2e,
  TileDocumentPF2e,
  TokenDocumentPF2e,
} from "types/pf2e/src/module/scene/index.ts"
import type { ActorDeltaPF2e } from "types/pf2e/src/module/scene/token-document/actor-delta.ts"
import type { PF2ECONFIG, StatusEffectIconTheme } from "types/pf2e/src/scripts/config/index.ts"
import type { DicePF2e } from "types/pf2e/src/scripts/dice.ts"
import type {
  calculateXP,
  checkPrompt,
  editPersistent,
  launchTravelSheet,
  perceptionForSelected,
  rollActionMacro,
  rollItemMacro,
  stealthForSelected,
  xpFromEncounter,
} from "types/pf2e/src/scripts/macros/index.ts"
import type { remigrate } from "types/pf2e/src/scripts/system/remigrate.ts"
import type { CheckPF2e } from "types/pf2e/src/module/system/check/index.ts"
import type { ConditionManager } from "types/pf2e/src/module/system/conditions/manager.ts"
import type { EffectTracker } from "types/pf2e/src/module/system/effect-tracker.ts"
import type { ModuleArt } from "types/pf2e/src/module/system/module-art.ts"
import type {
  CustomDamageData,
  HomebrewTag,
  HomebrewTraitSettingsKey,
} from "types/pf2e/src/module/system/settings/homebrew/index.ts"
import type { TextEditorPF2e } from "types/pf2e/src/module/system/text-editor.ts"
import type { sluggify } from "types/pf2e/src/util/index.ts"
import type EnJSON from "static/lang/en.json"

import { ARGON } from "types/argon/config"
import { CoreHUD } from "types/argon/hud"

interface GamePF2e
  extends Game<
    ActorPF2e<null>,
    ActorsPF2e<ActorPF2e<null>>,
    ChatMessagePF2e,
    EncounterPF2e,
    ItemPF2e<null>,
    MacroPF2e,
    ScenePF2e,
    UserPF2e
  > {
  pf2e: {
    actions: Record<string, Function>
    compendiumBrowser: CompendiumBrowser
    licenseViewer: LicenseViewer
    worldClock: WorldClock
    effectPanel: EffectsPanel
    effectTracker: EffectTracker
    rollActionMacro: typeof rollActionMacro
    rollItemMacro: typeof rollItemMacro
    gm: {
      calculateXP: typeof calculateXP
      checkPrompt: typeof checkPrompt
      editPersistent: typeof editPersistent
      launchTravelSheet: typeof launchTravelSheet
      perceptionForSelected: typeof perceptionForSelected
      stealthForSelected: typeof stealthForSelected
      xpFromEncounter: typeof xpFromEncounter
    }
    system: {
      moduleArt: ModuleArt
      remigrate: typeof remigrate
      sluggify: typeof sluggify
      generateItemName: (item: PhysicalItemPF2e) => string
    }
    variantRules: {
      AutomaticBonusProgression: typeof AutomaticBonusProgression
    }
    Check: typeof CheckPF2e
    CheckModifier: typeof CheckModifier
    Coins: typeof CoinsPF2e
    ConditionManager: typeof ConditionManager
    Dice: typeof DicePF2e
    ElementalBlast: typeof ElementalBlast
    Modifier: typeof ModifierPF2e
    ModifierType: {
      [K in Uppercase<ModifierType>]: Lowercase<K>
    }
    RuleElement: typeof RuleElementPF2e
    RuleElements: typeof RuleElements
    StatisticModifier: typeof StatisticModifier
    StatusEffects: typeof StatusEffects
    TextEditor: typeof TextEditorPF2e
  }
}
type ConfiguredConfig = Config<
  AmbientLightDocumentPF2e<ScenePF2e | null>,
  ActiveEffectPF2e<ActorPF2e | ItemPF2e | null>,
  ActorPF2e,
  ActorDeltaPF2e<TokenDocumentPF2e>,
  ChatLogPF2e,
  ChatMessagePF2e,
  EncounterPF2e,
  CombatantPF2e<EncounterPF2e | null, TokenDocumentPF2e>,
  EncounterTrackerPF2e<EncounterPF2e | null>,
  CompendiumDirectoryPF2e,
  HotbarPF2e,
  ItemPF2e,
  MacroPF2e,
  MeasuredTemplateDocumentPF2e,
  TileDocumentPF2e,
  TokenDocumentPF2e,
  WallDocument<ScenePF2e | null>,
  ScenePF2e,
  UserPF2e,
  EffectsCanvasGroupPF2e
>
declare global {
  interface ConfigPF2e extends ConfiguredConfig {
    debug: ConfiguredConfig["debug"] & {
      ruleElement: boolean
    }
    PF2E: typeof PF2ECONFIG
    time: {
      roundTime: number
    }
  }
  const CONFIG: ConfigPF2e & { ARGON: ARGON }
  const canvas: CanvasPF2e
  namespace globalThis {
    var game: GamePF2e
    var ui: FoundryUI<
      ActorDirectoryPF2e,
      ItemDirectory<ItemPF2e<null>>,
      ChatLogPF2e,
      CompendiumDirectoryPF2e,
      EncounterTrackerPF2e<EncounterPF2e | null>
    >
    interface Math {
      eq: (a: number, b: number) => boolean
      gt: (a: number, b: number) => boolean
      gte: (a: number, b: number) => boolean
      lt: (a: number, b: number) => boolean
      lte: (a: number, b: number) => boolean
      ne: (a: number, b: number) => boolean
      ternary: (condition: boolean | number, ifTrue: number, ifFalse: number) => number
    }
  }
  interface Window {
    AutomaticBonusProgression: typeof AutomaticBonusProgression
  }
  interface ClientSettings {
    get(module: "pf2e", setting: "automation.actorsDeadAtZero"): "neither" | "npcsOnly" | "pcsOnly" | "both"
    get(module: "pf2e", setting: "automation.effectExpiration"): boolean
    get(module: "pf2e", setting: "automation.encumbrance"): boolean
    get(module: "pf2e", setting: "automation.flankingDetection"): boolean
    get(module: "pf2e", setting: "automation.iwr"): boolean
    get(module: "pf2e", setting: "automation.lootableNPCs"): boolean
    get(module: "pf2e", setting: "automation.removeExpiredEffects"): boolean
    get(module: "pf2e", setting: "automation.rulesBasedVision"): boolean
    get(module: "pf2e", setting: "gradualBoostsVariant"): boolean
    get(module: "pf2e", setting: "automaticBonusVariant"): "noABP" | "ABPFundamentalPotency" | "ABPRulesAsWritten"
    get(module: "pf2e", setting: "freeArchetypeVariant"): boolean
    get(module: "pf2e", setting: "proficiencyVariant"): boolean
    get(module: "pf2e", setting: "staminaVariant"): boolean
    get(module: "pf2e", setting: "proficiencyUntrainedModifier"): number
    get(module: "pf2e", setting: "proficiencyTrainedModifier"): number
    get(module: "pf2e", setting: "proficiencyExpertModifier"): number
    get(module: "pf2e", setting: "proficiencyMasterModifier"): number
    get(module: "pf2e", setting: "proficiencyLegendaryModifier"): number
    get(module: "pf2e", setting: "metagame_partyVision"): boolean
    get(module: "pf2e", setting: "metagame_secretCondition"): boolean
    get(module: "pf2e", setting: "metagame_secretDamage"): boolean
    get(module: "pf2e", setting: "metagame_showDC"): boolean
    get(module: "pf2e", setting: "metagame_showResults"): boolean
    get(module: "pf2e", setting: "metagame_showPartyStats"): boolean
    get(module: "pf2e", setting: "metagame_tokenSetsNameVisibility"): boolean
    get(module: "pf2e", setting: "tokens.autoscale"): boolean
    get(module: "pf2e", setting: "worldClock.dateTheme"): "AR" | "IC" | "AD" | "CE"
    get(module: "pf2e", setting: "worldClock.playersCanView"): boolean
    get(module: "pf2e", setting: "worldClock.showClockButton"): boolean
    get(module: "pf2e", setting: "worldClock.syncDarkness"): boolean
    get(module: "pf2e", setting: "worldClock.timeConvention"): 24 | 12
    get(module: "pf2e", setting: "worldClock.worldCreatedOn"): string
    get(module: "pf2e", setting: "campaignFeats"): boolean
    get(module: "pf2e", setting: "campaignFeatSections"): FeatGroupOptions[]
    get(module: "pf2e", setting: "campaignType"): string
    get(module: "pf2e", setting: "activeParty"): string
    get(module: "pf2e", setting: "activePartyFolderState"): boolean
    get(module: "pf2e", setting: "createdFirstParty"): boolean
    get(module: "pf2e", setting: "homebrew.weaponCategories"): HomebrewTag<"weaponCategories">[]
    get(module: "pf2e", setting: HomebrewTraitSettingsKey): HomebrewTag[]
    get(module: "pf2e", setting: "homebrew.damageTypes"): CustomDamageData[]
    get(module: "pf2e", setting: "compendiumBrowserPacks"): CompendiumBrowserSettings
    get(module: "pf2e", setting: "compendiumBrowserSources"): CompendiumBrowserSources
    get(module: "pf2e", setting: "critFumbleButtons"): boolean
    get(module: "pf2e", setting: "critRule"): "doubledamage" | "doubledice"
    get(module: "pf2e", setting: "deathIcon"): ImageFilePath
    get(module: "pf2e", setting: "drawCritFumble"): boolean
    get(module: "pf2e", setting: "enabledRulesUI"): boolean
    get(module: "pf2e", setting: "gmVision"): boolean
    get(module: "pf2e", setting: "identifyMagicNotMatchingTraditionModifier"): 0 | 2 | 5 | 10
    get(module: "pf2e", setting: "nathMode"): boolean
    get(module: "pf2e", setting: "seenRemasterJournalEntry"): boolean
    get(module: "pf2e", setting: "statusEffectType"): StatusEffectIconTheme
    get(module: "pf2e", setting: "totmToggles"): boolean
    get(module: "pf2e", setting: "worldSchemaVersion"): number
    get(module: "pf2e", setting: "worldSystemVersion"): string
  }
  interface ClientSettingsMap {
    get(key: "pf2e.worldClock.worldCreatedOn"): SettingConfig & {
      default: string
    }
  }
  interface RollMathProxy {
    eq: (a: number, b: number) => boolean
    gt: (a: number, b: number) => boolean
    gte: (a: number, b: number) => boolean
    lt: (a: number, b: number) => boolean
    lte: (a: number, b: number) => boolean
    ne: (a: number, b: number) => boolean
    ternary: (condition: boolean | number, ifTrue: number, ifFalse: number) => number
  }
  const BUILD_MODE: "development" | "production"
  const CONDITION_SOURCES: ConditionSource[]
  const EN_JSON: typeof EnJSON
  const ROLL_PARSER: string
}
export {}
