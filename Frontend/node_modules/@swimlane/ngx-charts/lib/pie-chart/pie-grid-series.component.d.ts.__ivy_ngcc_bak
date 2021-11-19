import { EventEmitter, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { PieGridDataItem } from '../models/chart-data.model';
import { PieGridData } from './pie-grid.component';
export interface PieArc {
    animate: boolean;
    class: string;
    data: PieGridDataItem;
    endAngle: number;
    fill: string;
    pointerEvents: boolean;
    startAngle: number;
}
export declare class PieGridSeriesComponent implements OnChanges {
    colors: any;
    data: PieGridData[];
    innerRadius: number;
    outerRadius: number;
    animations: boolean;
    select: EventEmitter<any>;
    activate: EventEmitter<any>;
    deactivate: EventEmitter<any>;
    element: HTMLElement;
    layout: any;
    arcs: PieArc[];
    constructor(element: ElementRef);
    ngOnChanges(changes: SimpleChanges): void;
    update(): void;
    getArcs(): PieArc[];
    onClick(data: any): void;
    trackBy(index: any, item: any): string;
    label(arc: any): string;
    color(arc: any): string;
}
