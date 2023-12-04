export class ButtonPanelButton extends ArgonComponent {
    get classes(): string[];
    get label(): string;
    get icon(): string;
    get colorScheme(): number;
    get buttonPanelContainer(): any;
    updateItem(item: any): void;
    getData(): Promise<{
        label: string;
        icon: string;
    }>;
    _onClick(event: any): Promise<void>;
    panel: any;
    _getPanel(): Promise<any>;
}
import { ArgonComponent } from "../../component.js";
//# sourceMappingURL=buttonPanelButton.d.ts.map