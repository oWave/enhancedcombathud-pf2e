export class DrawerPanel extends ArgonComponent {
    get classes(): string[];
    get title(): string;
    get categories(): any[];
    getData(): Promise<{
        title: string;
        categories: any[];
    }>;
    _renderInner(): Promise<HTMLElement>;
}
import { ArgonComponent } from "../component.js";
//# sourceMappingURL=drawerPanel.d.ts.map