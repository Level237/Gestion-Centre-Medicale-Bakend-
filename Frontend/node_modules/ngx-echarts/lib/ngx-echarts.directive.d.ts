import { AfterViewInit, ElementRef, EventEmitter, InjectionToken, NgZone, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export interface NgxEchartsConfig {
    echarts: any | (() => Promise<any>);
}
export declare const NGX_ECHARTS_CONFIG: InjectionToken<NgxEchartsConfig>;
export declare class NgxEchartsDirective implements OnChanges, OnDestroy, OnInit, AfterViewInit {
    private el;
    private ngZone;
    options: any;
    theme: string;
    loading: boolean;
    initOpts: {
        devicePixelRatio?: number;
        renderer?: string;
        width?: number | string;
        height?: number | string;
    };
    merge: any;
    autoResize: boolean;
    loadingType: string;
    loadingOpts: object;
    chartInit: EventEmitter<any>;
    optionsError: EventEmitter<Error>;
    chartClick: EventEmitter<unknown>;
    chartDblClick: EventEmitter<unknown>;
    chartMouseDown: EventEmitter<unknown>;
    chartMouseMove: EventEmitter<unknown>;
    chartMouseUp: EventEmitter<unknown>;
    chartMouseOver: EventEmitter<unknown>;
    chartMouseOut: EventEmitter<unknown>;
    chartGlobalOut: EventEmitter<unknown>;
    chartContextMenu: EventEmitter<unknown>;
    chartLegendSelectChanged: EventEmitter<unknown>;
    chartLegendSelected: EventEmitter<unknown>;
    chartLegendUnselected: EventEmitter<unknown>;
    chartLegendScroll: EventEmitter<unknown>;
    chartDataZoom: EventEmitter<unknown>;
    chartDataRangeSelected: EventEmitter<unknown>;
    chartTimelineChanged: EventEmitter<unknown>;
    chartTimelinePlayChanged: EventEmitter<unknown>;
    chartRestore: EventEmitter<unknown>;
    chartDataViewChanged: EventEmitter<unknown>;
    chartMagicTypeChanged: EventEmitter<unknown>;
    chartPieSelectChanged: EventEmitter<unknown>;
    chartPieSelected: EventEmitter<unknown>;
    chartPieUnselected: EventEmitter<unknown>;
    chartMapSelectChanged: EventEmitter<unknown>;
    chartMapSelected: EventEmitter<unknown>;
    chartMapUnselected: EventEmitter<unknown>;
    chartAxisAreaSelected: EventEmitter<unknown>;
    chartFocusNodeAdjacency: EventEmitter<unknown>;
    chartUnfocusNodeAdjacency: EventEmitter<unknown>;
    chartBrush: EventEmitter<unknown>;
    chartBrushEnd: EventEmitter<unknown>;
    chartBrushSelected: EventEmitter<unknown>;
    chartRendered: EventEmitter<unknown>;
    chartFinished: EventEmitter<unknown>;
    animationFrameID: any;
    private chart;
    private echarts;
    private resizeSub;
    constructor(config: NgxEchartsConfig, el: ElementRef, ngZone: NgZone);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    private dispose;
    /**
     * resize chart
     */
    resize(): void;
    private toggleLoading;
    private setOption;
    /**
     * dispose old chart and create a new one.
     */
    refreshChart(): Promise<void>;
    private createChart;
    private initChart;
    private onOptionsChange;
    private createLazyEvent;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgxEchartsDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDeclaration<NgxEchartsDirective, "echarts, [echarts]", ["echarts"], { "autoResize": "autoResize"; "loadingType": "loadingType"; "options": "options"; "theme": "theme"; "loading": "loading"; "initOpts": "initOpts"; "merge": "merge"; "loadingOpts": "loadingOpts"; }, { "chartInit": "chartInit"; "optionsError": "optionsError"; "chartClick": "chartClick"; "chartDblClick": "chartDblClick"; "chartMouseDown": "chartMouseDown"; "chartMouseMove": "chartMouseMove"; "chartMouseUp": "chartMouseUp"; "chartMouseOver": "chartMouseOver"; "chartMouseOut": "chartMouseOut"; "chartGlobalOut": "chartGlobalOut"; "chartContextMenu": "chartContextMenu"; "chartLegendSelectChanged": "chartLegendSelectChanged"; "chartLegendSelected": "chartLegendSelected"; "chartLegendUnselected": "chartLegendUnselected"; "chartLegendScroll": "chartLegendScroll"; "chartDataZoom": "chartDataZoom"; "chartDataRangeSelected": "chartDataRangeSelected"; "chartTimelineChanged": "chartTimelineChanged"; "chartTimelinePlayChanged": "chartTimelinePlayChanged"; "chartRestore": "chartRestore"; "chartDataViewChanged": "chartDataViewChanged"; "chartMagicTypeChanged": "chartMagicTypeChanged"; "chartPieSelectChanged": "chartPieSelectChanged"; "chartPieSelected": "chartPieSelected"; "chartPieUnselected": "chartPieUnselected"; "chartMapSelectChanged": "chartMapSelectChanged"; "chartMapSelected": "chartMapSelected"; "chartMapUnselected": "chartMapUnselected"; "chartAxisAreaSelected": "chartAxisAreaSelected"; "chartFocusNodeAdjacency": "chartFocusNodeAdjacency"; "chartUnfocusNodeAdjacency": "chartUnfocusNodeAdjacency"; "chartBrush": "chartBrush"; "chartBrushEnd": "chartBrushEnd"; "chartBrushSelected": "chartBrushSelected"; "chartRendered": "chartRendered"; "chartFinished": "chartFinished"; }, never>;
}

//# sourceMappingURL=ngx-echarts.directive.d.ts.map