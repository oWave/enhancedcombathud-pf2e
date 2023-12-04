export class AccordionPanelCategory extends ArgonComponent {
    constructor({ label, uses, buttons }: {
        label: any;
        uses?: {};
        buttons: any;
    });
    _label: any;
    _uses: {};
    _buttons: any;
    setUses(): void;
    get classes(): string[];
    get buttonContainer(): Element;
    get label(): any;
    get uses(): any;
    get buttons(): any;
    get totalWidth(): any;
    getData(): Promise<{
        label: any;
    }>;
    updateItem(item: any): void;
    _setUses(): void;
    toggle(toggle: any, noTransition?: boolean): void;
    _realWidth: number;
}
import { ArgonComponent } from "../../component.js";
//# sourceMappingURL=accordionPanelCategory.d.ts.map