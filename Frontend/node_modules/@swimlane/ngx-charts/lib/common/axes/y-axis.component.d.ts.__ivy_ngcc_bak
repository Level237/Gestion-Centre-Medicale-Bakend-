import { EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { YAxisTicksComponent } from './y-axis-ticks.component';
import { Orientation } from '../types/orientation.enum';
import { ViewDimensions } from '../types/view-dimension.interface';
export declare class YAxisComponent implements OnChanges {
    yScale: any;
    dims: ViewDimensions;
    trimTicks: boolean;
    maxTickLength: number;
    tickFormatting: any;
    ticks: any[];
    showGridLines: boolean;
    showLabel: boolean;
    labelText: string;
    yAxisTickCount: any;
    yOrient: Orientation;
    referenceLines: any;
    showRefLines: boolean;
    showRefLabels: boolean;
    yAxisOffset: number;
    dimensionsChanged: EventEmitter<any>;
    yAxisClassName: string;
    tickArguments: number[];
    offset: number;
    transform: string;
    labelOffset: number;
    fill: string;
    stroke: string;
    tickStroke: string;
    strokeWidth: number;
    padding: number;
    ticksComponent: YAxisTicksComponent;
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    emitTicksWidth({ width }: {
        width: any;
    }): void;
}
