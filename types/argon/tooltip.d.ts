export class Tooltip {
    constructor(tooltipData: any, triggerElement: any, orientation: any);
    element: HTMLDivElement;
    _tooltipData: any;
    _triggerElement: any;
    _orientation: any;
    get template(): string;
    get classes(): string[];
    getData(): Promise<any>;
    render(...args: any[]): Promise<HTMLDivElement>;
    _scrollableElement: Element;
    _renderInner(): Promise<void>;
    _data: any;
    setPosition(orientation: any, scale: any, margin?: number): void;
    setScrollDelta(delta: any): void;
    _destroy(force?: boolean): void;
}
//# sourceMappingURL=tooltip.d.ts.map