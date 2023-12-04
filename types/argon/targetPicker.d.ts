export class TargetPicker {
    constructor({ token, targets, ranges }: {
        token: any;
        targets: any;
        ranges: any;
    });
    ranges: any;
    token: any;
    resolve: any;
    reject: any;
    _targetCount: any;
    _maxTargets: any;
    promise: any;
    targetHook: any;
    movelistener: (event: any) => void;
    clicklistener: (event: any) => void;
    keyuplistener: (event: any) => void;
    checkComplete(): void;
    set targetCount(count: any);
    get targetCount(): any;
    set maxTargets(count: any);
    get maxTargets(): any;
    init(): void;
    element: HTMLDivElement;
    update(event: any): void;
    end(res: any): void;
}
//# sourceMappingURL=targetPicker.d.ts.map