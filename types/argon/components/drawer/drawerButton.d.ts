export class DrawerButton extends ArgonComponent {
    constructor(buttons: any);
    _buttons: any;
    get classes(): string[];
    get interceptDialogs(): boolean;
    setGrid(gridCols: any): void;
    setAlign(align: any): void;
    _textAlign: any;
    setTextAlign(): void;
    getData(): Promise<{
        buttons: any;
    }>;
}
import { ArgonComponent } from "../component.js";
//# sourceMappingURL=drawerButton.d.ts.map