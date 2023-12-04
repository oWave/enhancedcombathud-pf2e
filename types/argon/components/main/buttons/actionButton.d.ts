export class ActionButton extends ArgonComponent {
    get classes(): string[];
    get label(): string;
    get icon(): string;
    get quantity(): any;
    get colorScheme(): number;
    getData(): Promise<{
        label: string;
        icon: string;
    }>;
    activateListeners(html: any): void;
    _onMouseDown(event: any): Promise<void>;
    _onMouseUp(event: any): Promise<void>;
    _onMouseEnter(event: any): Promise<void>;
    _onMouseLeave(event: any): Promise<void>;
    _onLeftClick(event: any): Promise<void>;
    _onRightClick(event: any): Promise<void>;
}
import { ArgonComponent } from "../../component.js";
//# sourceMappingURL=actionButton.d.ts.map