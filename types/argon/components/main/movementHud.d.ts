export class MovementHud extends ArgonComponent {
    constructor(...args: any[]);
    _movementUsed: number;
    get classes(): string[];
    set movementUsed(value: number);
    get movementUsed(): number;
    get movementMax(): void;
    onTokenUpdate(updates: any): void;
    updateMovement(): void;
    _onNewRound(combat: any): void;
    _onCombatEnd(combat: any): void;
    render(...args: any[]): Promise<void>;
}
import { ArgonComponent } from "../component.js";
//# sourceMappingURL=movementHud.d.ts.map