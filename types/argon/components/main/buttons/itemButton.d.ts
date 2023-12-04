export function clearRanges(force?: boolean): void;
export function showRangeRings(normal: any, long: any, object: any): void;
export function showRangeFinder(range: any, object: any): Promise<void>;
export function clearRangeFinders(): void;
export class ItemButton extends ArgonComponent {
    constructor({ item, isWeaponSet, isPrimary, inActionPanel }: {
        item: any;
        isWeaponSet?: boolean;
        isPrimary?: boolean;
        inActionPanel?: any;
    });
    _item: any;
    _isWeaponSet: boolean;
    _isPrimary: boolean;
    _inActionPanel: any;
    hookId: any;
    get classes(): string[];
    get isWeaponSet(): boolean;
    get isPrimary(): boolean;
    get inActionPanel(): any;
    get item(): any;
    get label(): any;
    get icon(): any;
    get quantity(): any;
    get quantitySecondary(): any;
    get ranges(): {
        normal: any;
        long: any;
    };
    get targets(): number;
    get useTargetPicker(): any;
    get useRangeFinder(): any;
    getData(): Promise<{
        label?: undefined;
        icon?: undefined;
        quantity?: undefined;
        hasQuantity?: undefined;
        quantitySecondary?: undefined;
        hasQuantitySecondary?: undefined;
    } | {
        label: any;
        icon: any;
        quantity: any;
        hasQuantity: any;
        quantitySecondary: any;
        hasQuantitySecondary: any;
    }>;
    setItem(item: any): void;
    _onSetChange({ sets, active }: {
        sets: any;
        active: any;
    }): Promise<void>;
    activateListeners(html: any): void;
    _onMouseDown(event: any): Promise<void>;
    _onMouseUp(event: any): Promise<void>;
    _onMouseEnter(event: any): Promise<void>;
    _onMouseLeave(event: any): Promise<void>;
    _onPreLeftClick(event: any): Promise<void>;
    _onLeftClick(event: any): Promise<void>;
    _onRightClick(event: any): Promise<void>;
}
import { ArgonComponent } from "../../component.js";
//# sourceMappingURL=itemButton.d.ts.map