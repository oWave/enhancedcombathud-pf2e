export function localize(string: any): any;
export const MODULE_ID: "enhancedcombathud";
export const TEMPLATE_PATH: "modules/enhancedcombathud/templates/";
export const PARTIALS_PATH: "modules/enhancedcombathud/templates/partials/";
export class CoreHUD {
    static get defaultOptions(): any;
    static setControlHooks(): void;
    static definePortraitPanel(panel: any): void;
    static defineDrawerPanel(panel: any): void;
    static defineMainPanels(panels: any): void;
    static defineWeaponSets(weaponSets: any): void;
    static defineMovementHud(movementHud: any): void;
    static defineSupportedActorTypes(actorTypes: any): void;
    static get ARGON(): {
        CORE: {
            CoreHUD: typeof CoreHUD;
            Tooltip: typeof Tooltip;
            ArgonComponent: typeof ArgonComponent;
        };
        MAIN: {
            BUTTONS: {
                ActionButton: typeof ActionButton;
                ButtonPanelButton: typeof ButtonPanelButton;
                ItemButton: typeof ItemButton;
                SplitButton: typeof SplitButton;
            };
            ActionPanel: typeof ActionPanel;
            BUTTON_PANELS: {
                ButtonPanel: typeof ButtonPanel;
                ACCORDION: {
                    AccordionPanel: typeof AccordionPanel;
                    AccordionPanelCategory: typeof AccordionPanelCategory;
                };
            };
        };
        PORTRAIT: {
            PortraitPanel: typeof PortraitPanel;
        };
        DRAWER: {
            DrawerButton: typeof DrawerButton;
            DrawerPanel: typeof DrawerPanel;
        };
        WeaponSets: typeof WeaponSets;
        MovementHud: typeof MovementHud;
        PREFAB: {
            PassTurnPanel: typeof PassTurnPanel;
        };
    };
    _itemButtons: any;
    _accordionPanelCategories: any;
    _batchItemsUpdates: any;
    _hudState: any;
    _tooltip: any;
    _target: any;
    _enabled: boolean;
    components: {
        main: any[];
    };
    refresh(): void;
    _batchUpdateItemButtons(): void;
    _canDragDrop(selector: any): boolean;
    get buttonPanelContainer(): HTMLDivElement;
    get actionBarWidth(): number;
    get itemButtons(): any;
    get accordionPanelCategories(): any;
    _updateActionContainers(): Promise<void>;
    _onCombatStart(combat: any): void;
    _onUpdateCombat(combat: any, updates: any): void;
    _onDeleteCombat(combat: any): void;
    set enabled(value: boolean);
    get enabled(): boolean;
    _onUpdateItem(item: any): void;
    updateItemButtons(items: any): void;
    _onUpdateActor(actor: any): void;
    _onCreateItem(item: any): void;
    _onDeleteItem(item: any): void;
    _onChangeActiveEffect(activeEffect: any): void;
    _checkItemCount(): void;
    _itemsCount: any;
    _onUpdateToken(tokenDocument: any, updates: any): void;
    _onControlToken(token: any, controlled: any): void;
    getData(data: any): Promise<{
        fadeOutInactive: any;
    }>;
    getState(): any;
    setState(state: any): void;
    getPanelState(panel: any): any;
    setPanelState(state: any, panel: any): void;
    _renderInner(data: any): Promise<any>;
    _buttonPanelContainer: HTMLDivElement;
    activateListeners(html: any): void;
    bind(target: any): Promise<any>;
    _token: any;
    _actor: any;
    toggle(toggle: any): void;
    updateSceneControlButton(): void;
    toggleUiElements(toggle: any): void;
    collapseAllPanels(): void;
    toggleMinimize(forceState: any): void;
    setPosition(preventTransition?: boolean): void;
    performModuleCheck(): void;
    interceptNextDialog(element: any): void;
    setColorSettings(): Promise<void>;
    getThemeJson(themeName: any): Promise<any>;
}
import { Tooltip } from "./tooltip.js";
import { ArgonComponent } from "./components/component.js";
import { ActionButton } from "./components/main/buttons/actionButton.js";
import { ButtonPanelButton } from "./components/main/buttons/buttonPanelButton.js";
import { ItemButton } from "./components/main/buttons/itemButton.js";
import { SplitButton } from "./components/main/buttons/splitButton.js";
import { ActionPanel } from "./components/main/actionPanel.js";
import { ButtonPanel } from "./components/main/buttonPanel/buttonPanel.js";
import { AccordionPanel } from "./components/main/buttonPanel/accordionPanel.js";
import { AccordionPanelCategory } from "./components/main/buttonPanel/accordionPanelCategory.js";
import { PortraitPanel } from "./components/portrait/portraitPanel.js";
import { DrawerButton } from "./components/drawer/drawerButton.js";
import { DrawerPanel } from "./components/drawer/drawerPanel.js";
import { WeaponSets } from "./components/main/weaponSets.js";
import { MovementHud } from "./components/main/movementHud.js";
import { PassTurnPanel } from "./prefab/passTurnPanel.js";
//# sourceMappingURL=hud.d.ts.map