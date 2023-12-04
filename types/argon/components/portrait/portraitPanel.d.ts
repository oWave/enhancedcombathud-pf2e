export class PortraitPanel extends ArgonComponent {
    constructor(...args: any[]);
    refresh(): void;
    get classes(): string[];
    get name(): any;
    get image(): any;
    get description(): string;
    get isDead(): boolean;
    get isDying(): boolean;
    get deathIcon(): string;
    get successes(): number;
    get failures(): number;
    getData(): Promise<{
        name: any;
        image: any;
        description: string;
        isDead: boolean;
        isDying: boolean;
        deathIcon: string;
        successes: number;
        failures: number;
        playerDetailsBottom: any;
    }>;
    _onDeathSave(event: any): Promise<void>;
    getStatBlocks(): Promise<any[]>;
    _getButtons(): Promise<{
        id: string;
        icon: string;
        label: string;
        onClick: (e: any) => any;
    }[]>;
    _renderInner(data: any): Promise<void>;
    _buttons: {
        id: string;
        icon: string;
        label: string;
        onClick: (e: any) => any;
    }[];
}
import { ArgonComponent } from "../component.js";
//# sourceMappingURL=portraitPanel.d.ts.map