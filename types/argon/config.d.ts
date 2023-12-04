export interface ARGON {
  CORE: {
    CoreHUD: typeof CoreHUD
    Tooltip: typeof Tooltip
    ArgonComponent: typeof ArgonComponent
  }
  MAIN: {
    BUTTONS: {
      ActionButton: typeof ActionButton
      ButtonPanelButton: typeof ButtonPanelButton
      ItemButton: typeof ItemButton
      SplitButton: typeof SplitButton
    }
    ActionPanel: typeof ActionPanel
    BUTTON_PANELS: {
      ButtonPanel: typeof ButtonPanel
      ACCORDION: {
        AccordionPanel: typeof AccordionPanel
        AccordionPanelCategory: typeof AccordionPanelCategory
      }
    }
  }
  PORTRAIT: {
    PortraitPanel: typeof PortraitPanel
  }
  DRAWER: {
    DrawerButton: typeof DrawerButton
    DrawerPanel: typeof DrawerPanel
  }
  WeaponSets: typeof WeaponSets
  MovementHud: typeof MovementHud
  PREFAB: {
    PassTurnPanel: typeof PassTurnPanel
  }
}

import { CoreHUD } from "./hud.js"
import { Tooltip } from "./tooltip.js"
import { ArgonComponent } from "./components/component.js"
import { ActionButton } from "./components/main/buttons/actionButton.js"
import { ButtonPanelButton } from "./components/main/buttons/buttonPanelButton.js"
import { ItemButton } from "./components/main/buttons/itemButton.js"
import { SplitButton } from "./components/main/buttons/splitButton.js"
import { ActionPanel } from "./components/main/actionPanel.js"
import { ButtonPanel } from "./components/main/buttonPanel/buttonPanel.js"
import { AccordionPanel } from "./components/main/buttonPanel/accordionPanel.js"
import { AccordionPanelCategory } from "./components/main/buttonPanel/accordionPanelCategory.js"
import { PortraitPanel } from "./components/portrait/portraitPanel.js"
import { DrawerButton } from "./components/drawer/drawerButton.js"
import { DrawerPanel } from "./components/drawer/drawerPanel.js"
import { WeaponSets } from "./components/main/weaponSets.js"
import { MovementHud } from "./components/main/movementHud.js"
import { PassTurnPanel } from "./prefab/passTurnPanel.js"
