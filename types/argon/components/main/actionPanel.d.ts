export class ActionPanel extends ArgonComponent {
    constructor(...args: any[]);
    _buttons: any[];
    get classes(): string[];
    get label(): string;
    get buttons(): any[];
    get maxActions(): any;
    get currentActions(): any;
    _onNewRound(combat: any): void;
    updateVisibility(): void;
    updateActionUse(): void;
    updateItem(item: any): void;
    _getButtons(): Promise<any[]>;
    getData(): Promise<{
        maxActions: any;
    }>;
}
import { ArgonComponent } from "../component.js";
//# sourceMappingURL=actionPanel.d.ts.map