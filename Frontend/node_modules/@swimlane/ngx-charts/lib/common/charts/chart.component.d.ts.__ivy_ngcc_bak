import { OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { LegendOptions, LegendType, LegendPosition } from '../types/legend.model';
export declare class ChartComponent implements OnChanges {
    view: [number, number];
    showLegend: boolean;
    legendOptions: LegendOptions;
    legendType: LegendType;
    activeEntries: any[];
    animations: boolean;
    legendLabelClick: EventEmitter<string>;
    legendLabelActivate: EventEmitter<{
        name: string;
    }>;
    legendLabelDeactivate: EventEmitter<{
        name: string;
    }>;
    chartWidth: number;
    title: string;
    legendWidth: number;
    readonly LegendPosition: typeof LegendPosition;
    readonly LegendType: typeof LegendType;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getLegendType(): LegendType;
}
