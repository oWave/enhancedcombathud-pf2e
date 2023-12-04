export class WeaponSets extends ArgonComponent {
    get classes(): string[];
    getSetData(): Promise<{
        sets: any;
        active: any;
    }>;
    _getSets(): Promise<any>;
    getDefaultSets(): Promise<{
        1: {
            primary: any;
            secondary: any;
        };
        2: {
            primary: any;
            secondary: any;
        };
        3: {
            primary: any;
            secondary: any;
        };
    }>;
    getData(): Promise<{
        sets: any;
    }>;
    _onDrop(event: any): Promise<void>;
    _onClick(event: any): Promise<void>;
    _onDragEnd(event: any): Promise<void>;
    _onDragStart(event: any): Promise<void>;
    _onContextMenu(event: any): Promise<void>;
    onSetChange({ sets, active }: {
        sets: any;
        active: any;
    }): Promise<void>;
    _onSetChange({ sets, active }: {
        sets: any;
        active: any;
    }): Promise<void>;
}
import { ArgonComponent } from "../component.js";
//# sourceMappingURL=weaponSets.d.ts.map