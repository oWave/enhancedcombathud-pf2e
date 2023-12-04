export class AccordionPanel extends ArgonComponent {
    constructor({ accordionPanelCategories, id }: {
        accordionPanelCategories: any;
        id: any;
    });
    _subPanels: any;
    _id: any;
    saveState(): void;
    get classes(): string[];
    get id(): any;
    toggle(toggle: any, noTransition?: boolean): void;
    restoreState(): void;
    updateItem(item: any): void;
}
import { ArgonComponent } from "../../component.js";
//# sourceMappingURL=accordionPanel.d.ts.map