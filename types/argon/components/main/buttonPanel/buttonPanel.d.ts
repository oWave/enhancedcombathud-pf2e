export class ButtonPanel extends ArgonComponent {
    constructor({ buttons, id }: {
        buttons: any;
        id: any;
    });
    _id: any;
    _buttons: any;
    saveState(): void;
    get classes(): string[];
    get id(): any;
    toggle(toggle: any, noTransition?: boolean): void;
    restoreState(): void;
    updateItem(item: any): void;
}
import { ArgonComponent } from "../../component.js";
//# sourceMappingURL=buttonPanel.d.ts.map