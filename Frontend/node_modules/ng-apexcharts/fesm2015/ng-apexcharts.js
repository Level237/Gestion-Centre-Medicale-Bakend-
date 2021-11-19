import { Component, Input, ViewChild, NgModule } from '@angular/core';
import { asapScheduler } from 'rxjs';
import ApexCharts from 'apexcharts';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/chart/chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ChartComponent {
    constructor() {
        this.autoUpdateSeries = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        asapScheduler.schedule((/**
         * @return {?}
         */
        () => {
            this.createElement();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        asapScheduler.schedule((/**
         * @return {?}
         */
        () => {
            if (this.autoUpdateSeries &&
                Object.keys(changes).filter((/**
                 * @param {?} c
                 * @return {?}
                 */
                (c) => c !== "series")).length === 0) {
                this.updateSeries(this.series, true);
                return;
            }
            this.createElement();
        }));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chartObj) {
            this.chartObj.destroy();
        }
    }
    /**
     * @private
     * @return {?}
     */
    createElement() {
        /** @type {?} */
        const options = {};
        if (this.annotations) {
            options.annotations = this.annotations;
        }
        if (this.chart) {
            options.chart = this.chart;
        }
        if (this.colors) {
            options.colors = this.colors;
        }
        if (this.dataLabels) {
            options.dataLabels = this.dataLabels;
        }
        if (this.series) {
            options.series = this.series;
        }
        if (this.stroke) {
            options.stroke = this.stroke;
        }
        if (this.labels) {
            options.labels = this.labels;
        }
        if (this.legend) {
            options.legend = this.legend;
        }
        if (this.fill) {
            options.fill = this.fill;
        }
        if (this.tooltip) {
            options.tooltip = this.tooltip;
        }
        if (this.plotOptions) {
            options.plotOptions = this.plotOptions;
        }
        if (this.responsive) {
            options.responsive = this.responsive;
        }
        if (this.markers) {
            options.markers = this.markers;
        }
        if (this.noData) {
            options.noData = this.noData;
        }
        if (this.xaxis) {
            options.xaxis = this.xaxis;
        }
        if (this.yaxis) {
            options.yaxis = this.yaxis;
        }
        if (this.grid) {
            options.grid = this.grid;
        }
        if (this.states) {
            options.states = this.states;
        }
        if (this.title) {
            options.title = this.title;
        }
        if (this.subtitle) {
            options.subtitle = this.subtitle;
        }
        if (this.theme) {
            options.theme = this.theme;
        }
        if (this.chartObj) {
            this.chartObj.destroy();
        }
        this.chartObj = new ApexCharts(this.chartElement.nativeElement, options);
        this.render();
    }
    /**
     * @return {?}
     */
    render() {
        return this.chartObj.render();
    }
    /**
     * @param {?} options
     * @param {?=} redrawPaths
     * @param {?=} animate
     * @param {?=} updateSyncedCharts
     * @return {?}
     */
    updateOptions(options, redrawPaths, animate, updateSyncedCharts) {
        return this.chartObj.updateOptions(options, redrawPaths, animate, updateSyncedCharts);
    }
    /**
     * @param {?} newSeries
     * @param {?=} animate
     * @return {?}
     */
    updateSeries(newSeries, animate) {
        this.chartObj.updateSeries(newSeries, animate);
    }
    /**
     * @param {?} newSeries
     * @param {?=} animate
     * @return {?}
     */
    appendSeries(newSeries, animate) {
        this.chartObj.appendSeries(newSeries, animate);
    }
    /**
     * @param {?} newData
     * @return {?}
     */
    appendData(newData) {
        this.chartObj.appendData(newData);
    }
    /**
     * @param {?} seriesName
     * @return {?}
     */
    toggleSeries(seriesName) {
        return this.chartObj.toggleSeries(seriesName);
    }
    /**
     * @param {?} seriesName
     * @return {?}
     */
    showSeries(seriesName) {
        this.chartObj.showSeries(seriesName);
    }
    /**
     * @param {?} seriesName
     * @return {?}
     */
    hideSeries(seriesName) {
        this.chartObj.hideSeries(seriesName);
    }
    /**
     * @return {?}
     */
    resetSeries() {
        this.chartObj.resetSeries();
    }
    /**
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    zoomX(min, max) {
        this.chartObj.zoomX(min, max);
    }
    /**
     * @param {?} seriesIndex
     * @param {?=} dataPointIndex
     * @return {?}
     */
    toggleDataPointSelection(seriesIndex, dataPointIndex) {
        this.chartObj.toggleDataPointSelection(seriesIndex, dataPointIndex);
    }
    /**
     * @return {?}
     */
    destroy() {
        this.chartObj.destroy();
    }
    /**
     * @param {?=} localeName
     * @return {?}
     */
    setLocale(localeName) {
        this.chartObj.setLocale(localeName);
    }
    /**
     * @return {?}
     */
    paper() {
        this.chartObj.paper();
    }
    /**
     * @param {?} options
     * @param {?=} pushToMemory
     * @param {?=} context
     * @return {?}
     */
    addXaxisAnnotation(options, pushToMemory, context) {
        this.chartObj.addXaxisAnnotation(options, pushToMemory, context);
    }
    /**
     * @param {?} options
     * @param {?=} pushToMemory
     * @param {?=} context
     * @return {?}
     */
    addYaxisAnnotation(options, pushToMemory, context) {
        this.chartObj.addYaxisAnnotation(options, pushToMemory, context);
    }
    /**
     * @param {?} options
     * @param {?=} pushToMemory
     * @param {?=} context
     * @return {?}
     */
    addPointAnnotation(options, pushToMemory, context) {
        this.chartObj.addPointAnnotation(options, pushToMemory, context);
    }
    /**
     * @param {?} id
     * @param {?=} options
     * @return {?}
     */
    removeAnnotation(id, options) {
        this.chartObj.removeAnnotation(id, options);
    }
    /**
     * @param {?=} options
     * @return {?}
     */
    clearAnnotations(options) {
        this.chartObj.clearAnnotations(options);
    }
    /**
     * @return {?}
     */
    dataURI() {
        return this.chartObj.dataURI();
    }
}
ChartComponent.decorators = [
    { type: Component, args: [{
                selector: "apx-chart",
                template: "<div #chart></div>\n",
                styles: [""]
            }] }
];
ChartComponent.propDecorators = {
    chart: [{ type: Input }],
    annotations: [{ type: Input }],
    colors: [{ type: Input }],
    dataLabels: [{ type: Input }],
    series: [{ type: Input }],
    stroke: [{ type: Input }],
    labels: [{ type: Input }],
    legend: [{ type: Input }],
    markers: [{ type: Input }],
    noData: [{ type: Input }],
    fill: [{ type: Input }],
    tooltip: [{ type: Input }],
    plotOptions: [{ type: Input }],
    responsive: [{ type: Input }],
    xaxis: [{ type: Input }],
    yaxis: [{ type: Input }],
    grid: [{ type: Input }],
    states: [{ type: Input }],
    title: [{ type: Input }],
    subtitle: [{ type: Input }],
    theme: [{ type: Input }],
    autoUpdateSeries: [{ type: Input }],
    chartElement: [{ type: ViewChild, args: ["chart", { static: true },] }]
};
if (false) {
    /** @type {?} */
    ChartComponent.prototype.chart;
    /** @type {?} */
    ChartComponent.prototype.annotations;
    /** @type {?} */
    ChartComponent.prototype.colors;
    /** @type {?} */
    ChartComponent.prototype.dataLabels;
    /** @type {?} */
    ChartComponent.prototype.series;
    /** @type {?} */
    ChartComponent.prototype.stroke;
    /** @type {?} */
    ChartComponent.prototype.labels;
    /** @type {?} */
    ChartComponent.prototype.legend;
    /** @type {?} */
    ChartComponent.prototype.markers;
    /** @type {?} */
    ChartComponent.prototype.noData;
    /** @type {?} */
    ChartComponent.prototype.fill;
    /** @type {?} */
    ChartComponent.prototype.tooltip;
    /** @type {?} */
    ChartComponent.prototype.plotOptions;
    /** @type {?} */
    ChartComponent.prototype.responsive;
    /** @type {?} */
    ChartComponent.prototype.xaxis;
    /** @type {?} */
    ChartComponent.prototype.yaxis;
    /** @type {?} */
    ChartComponent.prototype.grid;
    /** @type {?} */
    ChartComponent.prototype.states;
    /** @type {?} */
    ChartComponent.prototype.title;
    /** @type {?} */
    ChartComponent.prototype.subtitle;
    /** @type {?} */
    ChartComponent.prototype.theme;
    /** @type {?} */
    ChartComponent.prototype.autoUpdateSeries;
    /**
     * @type {?}
     * @private
     */
    ChartComponent.prototype.chartElement;
    /**
     * @type {?}
     * @private
     */
    ChartComponent.prototype.chartObj;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ng-apexcharts.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
window.ApexCharts = ApexCharts;
/** @type {?} */
const declerations = [ChartComponent];
class NgApexchartsModule {
}
NgApexchartsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [...declerations],
                imports: [],
                exports: [...declerations],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/model/apex-types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// export declare class ApexCharts {
//   constructor(el: any, options: ApexOptions);
//   static exec(chartID: string, fn: () => void, options: any): any;
//   static initOnLoad(): void;
//   render(): Promise<void>;
//   updateOptions(options: any, redrawPaths: boolean, animate: boolean, updateSyncedCharts: boolean): Promise<void>;
//   updateSeries(newSeries: ApexAxisChartSeries | ApexNonAxisChartSeries, animate: boolean): void;
//   toggleSeries(seriesName: string): void;
//   destroy(): void;
//   addXaxisAnnotation(options: any, pushToMemory?: boolean, context?: any): void;
//   addYaxisAnnotation(options: any, pushToMemory?: boolean, context?: any): void;
//   addPointAnnotation(options: any, pushToMemory?: boolean, context?: any): void;
//   addText(options: any, pushToMemory?: boolean, context?: any): void;
//   dataURI(): void;
// }
/**
 * @record
 */
function ApexOptions() { }
if (false) {
    /** @type {?|undefined} */
    ApexOptions.prototype.annotations;
    /** @type {?|undefined} */
    ApexOptions.prototype.chart;
    /** @type {?|undefined} */
    ApexOptions.prototype.colors;
    /** @type {?|undefined} */
    ApexOptions.prototype.dataLabels;
    /** @type {?|undefined} */
    ApexOptions.prototype.series;
    /** @type {?|undefined} */
    ApexOptions.prototype.stroke;
    /** @type {?|undefined} */
    ApexOptions.prototype.labels;
    /** @type {?|undefined} */
    ApexOptions.prototype.legend;
    /** @type {?|undefined} */
    ApexOptions.prototype.fill;
    /** @type {?|undefined} */
    ApexOptions.prototype.tooltip;
    /** @type {?|undefined} */
    ApexOptions.prototype.plotOptions;
    /** @type {?|undefined} */
    ApexOptions.prototype.responsive;
    /** @type {?|undefined} */
    ApexOptions.prototype.markers;
    /** @type {?|undefined} */
    ApexOptions.prototype.noData;
    /** @type {?|undefined} */
    ApexOptions.prototype.xaxis;
    /** @type {?|undefined} */
    ApexOptions.prototype.yaxis;
    /** @type {?|undefined} */
    ApexOptions.prototype.grid;
    /** @type {?|undefined} */
    ApexOptions.prototype.states;
    /** @type {?|undefined} */
    ApexOptions.prototype.title;
    /** @type {?|undefined} */
    ApexOptions.prototype.subtitle;
    /** @type {?|undefined} */
    ApexOptions.prototype.theme;
}
/**
 * @record
 */
function ApexDropShadow() { }
if (false) {
    /** @type {?|undefined} */
    ApexDropShadow.prototype.enabled;
    /** @type {?|undefined} */
    ApexDropShadow.prototype.top;
    /** @type {?|undefined} */
    ApexDropShadow.prototype.left;
    /** @type {?|undefined} */
    ApexDropShadow.prototype.blur;
    /** @type {?|undefined} */
    ApexDropShadow.prototype.opacity;
    /** @type {?|undefined} */
    ApexDropShadow.prototype.color;
}
/**
 * Main Chart options
 * See https://apexcharts.com/docs/options/chart/
 * @record
 */
function ApexChart() { }
if (false) {
    /** @type {?|undefined} */
    ApexChart.prototype.width;
    /** @type {?|undefined} */
    ApexChart.prototype.height;
    /** @type {?} */
    ApexChart.prototype.type;
    /** @type {?|undefined} */
    ApexChart.prototype.foreColor;
    /** @type {?|undefined} */
    ApexChart.prototype.fontFamily;
    /** @type {?|undefined} */
    ApexChart.prototype.background;
    /** @type {?|undefined} */
    ApexChart.prototype.offsetX;
    /** @type {?|undefined} */
    ApexChart.prototype.offsetY;
    /** @type {?|undefined} */
    ApexChart.prototype.dropShadow;
    /** @type {?|undefined} */
    ApexChart.prototype.events;
    /** @type {?|undefined} */
    ApexChart.prototype.brush;
    /** @type {?|undefined} */
    ApexChart.prototype.id;
    /** @type {?|undefined} */
    ApexChart.prototype.group;
    /** @type {?|undefined} */
    ApexChart.prototype.locales;
    /** @type {?|undefined} */
    ApexChart.prototype.defaultLocale;
    /** @type {?|undefined} */
    ApexChart.prototype.parentHeightOffset;
    /** @type {?|undefined} */
    ApexChart.prototype.redrawOnParentResize;
    /** @type {?|undefined} */
    ApexChart.prototype.redrawOnWindowResize;
    /** @type {?|undefined} */
    ApexChart.prototype.sparkline;
    /** @type {?|undefined} */
    ApexChart.prototype.stacked;
    /** @type {?|undefined} */
    ApexChart.prototype.stackType;
    /** @type {?|undefined} */
    ApexChart.prototype.toolbar;
    /** @type {?|undefined} */
    ApexChart.prototype.zoom;
    /** @type {?|undefined} */
    ApexChart.prototype.selection;
    /** @type {?|undefined} */
    ApexChart.prototype.animations;
}
/**
 * @record
 */
function ApexStates() { }
if (false) {
    /** @type {?|undefined} */
    ApexStates.prototype.normal;
    /** @type {?|undefined} */
    ApexStates.prototype.hover;
    /** @type {?|undefined} */
    ApexStates.prototype.active;
}
/**
 * Chart Title options
 * See https://apexcharts.com/docs/options/title/
 * @record
 */
function ApexTitleSubtitle() { }
if (false) {
    /** @type {?|undefined} */
    ApexTitleSubtitle.prototype.text;
    /** @type {?|undefined} */
    ApexTitleSubtitle.prototype.align;
    /** @type {?|undefined} */
    ApexTitleSubtitle.prototype.margin;
    /** @type {?|undefined} */
    ApexTitleSubtitle.prototype.offsetX;
    /** @type {?|undefined} */
    ApexTitleSubtitle.prototype.offsetY;
    /** @type {?|undefined} */
    ApexTitleSubtitle.prototype.floating;
    /** @type {?|undefined} */
    ApexTitleSubtitle.prototype.style;
}
/**
 * Options for the line drawn on line and area charts.
 * See https://apexcharts.com/docs/options/stroke/
 * @record
 */
function ApexStroke() { }
if (false) {
    /** @type {?|undefined} */
    ApexStroke.prototype.show;
    /** @type {?|undefined} */
    ApexStroke.prototype.curve;
    /** @type {?|undefined} */
    ApexStroke.prototype.lineCap;
    /** @type {?|undefined} */
    ApexStroke.prototype.colors;
    /** @type {?|undefined} */
    ApexStroke.prototype.width;
    /** @type {?|undefined} */
    ApexStroke.prototype.dashArray;
}
/**
 * @record
 */
function ApexAnnotations() { }
if (false) {
    /** @type {?|undefined} */
    ApexAnnotations.prototype.position;
    /** @type {?|undefined} */
    ApexAnnotations.prototype.yaxis;
    /** @type {?|undefined} */
    ApexAnnotations.prototype.xaxis;
    /** @type {?|undefined} */
    ApexAnnotations.prototype.points;
    /** @type {?|undefined} */
    ApexAnnotations.prototype.texts;
    /** @type {?|undefined} */
    ApexAnnotations.prototype.images;
}
/**
 * @record
 */
function AnnotationLabel() { }
if (false) {
    /** @type {?|undefined} */
    AnnotationLabel.prototype.borderColor;
    /** @type {?|undefined} */
    AnnotationLabel.prototype.borderWidth;
    /** @type {?|undefined} */
    AnnotationLabel.prototype.borderRadius;
    /** @type {?|undefined} */
    AnnotationLabel.prototype.text;
    /** @type {?|undefined} */
    AnnotationLabel.prototype.textAnchor;
    /** @type {?|undefined} */
    AnnotationLabel.prototype.offsetX;
    /** @type {?|undefined} */
    AnnotationLabel.prototype.offsetY;
    /** @type {?|undefined} */
    AnnotationLabel.prototype.style;
    /** @type {?|undefined} */
    AnnotationLabel.prototype.position;
    /** @type {?|undefined} */
    AnnotationLabel.prototype.orientation;
}
/**
 * @record
 */
function AnnotationStyle() { }
if (false) {
    /** @type {?|undefined} */
    AnnotationStyle.prototype.background;
    /** @type {?|undefined} */
    AnnotationStyle.prototype.color;
    /** @type {?|undefined} */
    AnnotationStyle.prototype.fontSize;
    /** @type {?|undefined} */
    AnnotationStyle.prototype.fontFamily;
    /** @type {?|undefined} */
    AnnotationStyle.prototype.fontWeight;
    /** @type {?|undefined} */
    AnnotationStyle.prototype.cssClass;
    /** @type {?|undefined} */
    AnnotationStyle.prototype.padding;
}
/**
 * @record
 */
function XAxisAnnotations() { }
if (false) {
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.x;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.x2;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.strokeDashArray;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.fillColor;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.borderColor;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.borderWidth;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.opacity;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.offsetX;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.offsetY;
    /** @type {?|undefined} */
    XAxisAnnotations.prototype.label;
}
/**
 * @record
 */
function YAxisAnnotations() { }
if (false) {
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.y;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.y2;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.strokeDashArray;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.fillColor;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.borderColor;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.borderWidth;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.opacity;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.offsetX;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.offsetY;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.width;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.yAxisIndex;
    /** @type {?|undefined} */
    YAxisAnnotations.prototype.label;
}
/**
 * @record
 */
function PointAnnotations() { }
if (false) {
    /** @type {?|undefined} */
    PointAnnotations.prototype.x;
    /** @type {?|undefined} */
    PointAnnotations.prototype.y;
    /** @type {?|undefined} */
    PointAnnotations.prototype.yAxisIndex;
    /** @type {?|undefined} */
    PointAnnotations.prototype.seriesIndex;
    /** @type {?|undefined} */
    PointAnnotations.prototype.marker;
    /** @type {?|undefined} */
    PointAnnotations.prototype.label;
    /** @type {?|undefined} */
    PointAnnotations.prototype.image;
}
/**
 * @record
 */
function ImageAnnotations() { }
if (false) {
    /** @type {?|undefined} */
    ImageAnnotations.prototype.path;
    /** @type {?|undefined} */
    ImageAnnotations.prototype.x;
    /** @type {?|undefined} */
    ImageAnnotations.prototype.y;
    /** @type {?|undefined} */
    ImageAnnotations.prototype.width;
    /** @type {?|undefined} */
    ImageAnnotations.prototype.height;
    /** @type {?|undefined} */
    ImageAnnotations.prototype.appendTo;
}
/**
 * @record
 */
function TextAnnotations() { }
if (false) {
    /** @type {?|undefined} */
    TextAnnotations.prototype.x;
    /** @type {?|undefined} */
    TextAnnotations.prototype.y;
    /** @type {?|undefined} */
    TextAnnotations.prototype.text;
    /** @type {?|undefined} */
    TextAnnotations.prototype.textAnchor;
    /** @type {?|undefined} */
    TextAnnotations.prototype.foreColor;
    /** @type {?|undefined} */
    TextAnnotations.prototype.fontSize;
    /** @type {?|undefined} */
    TextAnnotations.prototype.fontFamily;
    /** @type {?|undefined} */
    TextAnnotations.prototype.fontWeight;
    /** @type {?|undefined} */
    TextAnnotations.prototype.appendTo;
    /** @type {?|undefined} */
    TextAnnotations.prototype.backgroundColor;
    /** @type {?|undefined} */
    TextAnnotations.prototype.borderColor;
    /** @type {?|undefined} */
    TextAnnotations.prototype.borderRadius;
    /** @type {?|undefined} */
    TextAnnotations.prototype.borderWidth;
    /** @type {?|undefined} */
    TextAnnotations.prototype.paddingLeft;
    /** @type {?|undefined} */
    TextAnnotations.prototype.paddingRight;
    /** @type {?|undefined} */
    TextAnnotations.prototype.paddingTop;
    /** @type {?|undefined} */
    TextAnnotations.prototype.paddingBottom;
}
/**
 * Options for localization.
 * See https://apexcharts.com/docs/options/chart/locales
 * @record
 */
function ApexLocale() { }
if (false) {
    /** @type {?|undefined} */
    ApexLocale.prototype.name;
    /** @type {?|undefined} */
    ApexLocale.prototype.options;
}
/**
 * PlotOptions for specifying chart-type-specific configuration.
 * See https://apexcharts.com/docs/options/plotoptions/bar/
 * @record
 */
function ApexPlotOptions() { }
if (false) {
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.area;
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.bar;
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.bubble;
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.candlestick;
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.boxPlot;
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.heatmap;
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.treemap;
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.pie;
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.polarArea;
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.radar;
    /** @type {?|undefined} */
    ApexPlotOptions.prototype.radialBar;
}
/**
 * @record
 */
function ApexFill() { }
if (false) {
    /** @type {?|undefined} */
    ApexFill.prototype.colors;
    /** @type {?|undefined} */
    ApexFill.prototype.opacity;
    /** @type {?|undefined} */
    ApexFill.prototype.type;
    /** @type {?|undefined} */
    ApexFill.prototype.gradient;
    /** @type {?|undefined} */
    ApexFill.prototype.image;
    /** @type {?|undefined} */
    ApexFill.prototype.pattern;
}
/**
 * Chart Legend configuration options.
 * See https://apexcharts.com/docs/options/legend/
 * @record
 */
function ApexLegend() { }
if (false) {
    /** @type {?|undefined} */
    ApexLegend.prototype.show;
    /** @type {?|undefined} */
    ApexLegend.prototype.showForSingleSeries;
    /** @type {?|undefined} */
    ApexLegend.prototype.showForNullSeries;
    /** @type {?|undefined} */
    ApexLegend.prototype.showForZeroSeries;
    /** @type {?|undefined} */
    ApexLegend.prototype.floating;
    /** @type {?|undefined} */
    ApexLegend.prototype.inverseOrder;
    /** @type {?|undefined} */
    ApexLegend.prototype.position;
    /** @type {?|undefined} */
    ApexLegend.prototype.horizontalAlign;
    /** @type {?|undefined} */
    ApexLegend.prototype.fontSize;
    /** @type {?|undefined} */
    ApexLegend.prototype.fontFamily;
    /** @type {?|undefined} */
    ApexLegend.prototype.fontWeight;
    /** @type {?|undefined} */
    ApexLegend.prototype.width;
    /** @type {?|undefined} */
    ApexLegend.prototype.height;
    /** @type {?|undefined} */
    ApexLegend.prototype.offsetX;
    /** @type {?|undefined} */
    ApexLegend.prototype.offsetY;
    /** @type {?|undefined} */
    ApexLegend.prototype.textAnchor;
    /** @type {?|undefined} */
    ApexLegend.prototype.customLegendItems;
    /** @type {?|undefined} */
    ApexLegend.prototype.labels;
    /** @type {?|undefined} */
    ApexLegend.prototype.markers;
    /** @type {?|undefined} */
    ApexLegend.prototype.itemMargin;
    /** @type {?|undefined} */
    ApexLegend.prototype.containerMargin;
    /** @type {?|undefined} */
    ApexLegend.prototype.onItemClick;
    /** @type {?|undefined} */
    ApexLegend.prototype.onItemHover;
    /**
     * @param {?} legendName
     * @param {?=} opts
     * @return {?}
     */
    ApexLegend.prototype.formatter = function (legendName, opts) { };
    /**
     * @param {?} legendName
     * @param {?=} opts
     * @return {?}
     */
    ApexLegend.prototype.tooltipHoverFormatter = function (legendName, opts) { };
}
/**
 * Chart Datalabels options
 * See https://apexcharts.com/docs/options/datalabels/
 * @record
 */
function ApexDataLabels() { }
if (false) {
    /** @type {?|undefined} */
    ApexDataLabels.prototype.enabled;
    /** @type {?|undefined} */
    ApexDataLabels.prototype.enabledOnSeries;
    /** @type {?|undefined} */
    ApexDataLabels.prototype.textAnchor;
    /** @type {?|undefined} */
    ApexDataLabels.prototype.distributed;
    /** @type {?|undefined} */
    ApexDataLabels.prototype.offsetX;
    /** @type {?|undefined} */
    ApexDataLabels.prototype.offsetY;
    /** @type {?|undefined} */
    ApexDataLabels.prototype.style;
    /** @type {?|undefined} */
    ApexDataLabels.prototype.background;
    /** @type {?|undefined} */
    ApexDataLabels.prototype.dropShadow;
    /**
     * @param {?} val
     * @param {?=} opts
     * @return {?}
     */
    ApexDataLabels.prototype.formatter = function (val, opts) { };
}
/**
 * @record
 */
function ApexResponsive() { }
if (false) {
    /** @type {?|undefined} */
    ApexResponsive.prototype.breakpoint;
    /** @type {?|undefined} */
    ApexResponsive.prototype.options;
}
/**
 * Chart Tooltip options
 * See https://apexcharts.com/docs/options/tooltip/
 * @record
 */
function ApexTooltip() { }
if (false) {
    /** @type {?|undefined} */
    ApexTooltip.prototype.enabled;
    /** @type {?|undefined} */
    ApexTooltip.prototype.enabledOnSeries;
    /** @type {?|undefined} */
    ApexTooltip.prototype.shared;
    /** @type {?|undefined} */
    ApexTooltip.prototype.followCursor;
    /** @type {?|undefined} */
    ApexTooltip.prototype.intersect;
    /** @type {?|undefined} */
    ApexTooltip.prototype.inverseOrder;
    /** @type {?|undefined} */
    ApexTooltip.prototype.custom;
    /** @type {?|undefined} */
    ApexTooltip.prototype.fillSeriesColor;
    /** @type {?|undefined} */
    ApexTooltip.prototype.theme;
    /** @type {?|undefined} */
    ApexTooltip.prototype.style;
    /** @type {?|undefined} */
    ApexTooltip.prototype.onDatasetHover;
    /** @type {?|undefined} */
    ApexTooltip.prototype.x;
    /** @type {?|undefined} */
    ApexTooltip.prototype.y;
    /** @type {?|undefined} */
    ApexTooltip.prototype.z;
    /** @type {?|undefined} */
    ApexTooltip.prototype.marker;
    /** @type {?|undefined} */
    ApexTooltip.prototype.items;
    /** @type {?|undefined} */
    ApexTooltip.prototype.fixed;
}
/**
 * X Axis options
 * See https://apexcharts.com/docs/options/xaxis/
 * @record
 */
function ApexXAxis() { }
if (false) {
    /** @type {?|undefined} */
    ApexXAxis.prototype.type;
    /** @type {?|undefined} */
    ApexXAxis.prototype.categories;
    /** @type {?|undefined} */
    ApexXAxis.prototype.overwriteCategories;
    /** @type {?|undefined} */
    ApexXAxis.prototype.offsetX;
    /** @type {?|undefined} */
    ApexXAxis.prototype.offsetY;
    /** @type {?|undefined} */
    ApexXAxis.prototype.sorted;
    /** @type {?|undefined} */
    ApexXAxis.prototype.labels;
    /** @type {?|undefined} */
    ApexXAxis.prototype.axisBorder;
    /** @type {?|undefined} */
    ApexXAxis.prototype.axisTicks;
    /** @type {?|undefined} */
    ApexXAxis.prototype.tickPlacement;
    /** @type {?|undefined} */
    ApexXAxis.prototype.tickAmount;
    /** @type {?|undefined} */
    ApexXAxis.prototype.min;
    /** @type {?|undefined} */
    ApexXAxis.prototype.max;
    /** @type {?|undefined} */
    ApexXAxis.prototype.range;
    /** @type {?|undefined} */
    ApexXAxis.prototype.floating;
    /** @type {?|undefined} */
    ApexXAxis.prototype.decimalsInFloat;
    /** @type {?|undefined} */
    ApexXAxis.prototype.position;
    /** @type {?|undefined} */
    ApexXAxis.prototype.title;
    /** @type {?|undefined} */
    ApexXAxis.prototype.crosshairs;
    /** @type {?|undefined} */
    ApexXAxis.prototype.tooltip;
}
/**
 * Y Axis options
 * See https://apexcharts.com/docs/options/yaxis/
 * @record
 */
function ApexYAxis() { }
if (false) {
    /** @type {?|undefined} */
    ApexYAxis.prototype.show;
    /** @type {?|undefined} */
    ApexYAxis.prototype.showAlways;
    /** @type {?|undefined} */
    ApexYAxis.prototype.showForNullSeries;
    /** @type {?|undefined} */
    ApexYAxis.prototype.seriesName;
    /** @type {?|undefined} */
    ApexYAxis.prototype.opposite;
    /** @type {?|undefined} */
    ApexYAxis.prototype.reversed;
    /** @type {?|undefined} */
    ApexYAxis.prototype.logarithmic;
    /** @type {?|undefined} */
    ApexYAxis.prototype.tickAmount;
    /** @type {?|undefined} */
    ApexYAxis.prototype.forceNiceScale;
    /** @type {?|undefined} */
    ApexYAxis.prototype.min;
    /** @type {?|undefined} */
    ApexYAxis.prototype.max;
    /** @type {?|undefined} */
    ApexYAxis.prototype.floating;
    /** @type {?|undefined} */
    ApexYAxis.prototype.decimalsInFloat;
    /** @type {?|undefined} */
    ApexYAxis.prototype.labels;
    /** @type {?|undefined} */
    ApexYAxis.prototype.axisBorder;
    /** @type {?|undefined} */
    ApexYAxis.prototype.axisTicks;
    /** @type {?|undefined} */
    ApexYAxis.prototype.title;
    /** @type {?|undefined} */
    ApexYAxis.prototype.crosshairs;
    /** @type {?|undefined} */
    ApexYAxis.prototype.tooltip;
}
/**
 * Plot X and Y grid options
 * See https://apexcharts.com/docs/options/grid/
 * @record
 */
function ApexGrid() { }
if (false) {
    /** @type {?|undefined} */
    ApexGrid.prototype.show;
    /** @type {?|undefined} */
    ApexGrid.prototype.borderColor;
    /** @type {?|undefined} */
    ApexGrid.prototype.strokeDashArray;
    /** @type {?|undefined} */
    ApexGrid.prototype.position;
    /** @type {?|undefined} */
    ApexGrid.prototype.xaxis;
    /** @type {?|undefined} */
    ApexGrid.prototype.yaxis;
    /** @type {?|undefined} */
    ApexGrid.prototype.row;
    /** @type {?|undefined} */
    ApexGrid.prototype.column;
    /** @type {?|undefined} */
    ApexGrid.prototype.padding;
}
/**
 * @record
 */
function ApexTheme() { }
if (false) {
    /** @type {?|undefined} */
    ApexTheme.prototype.mode;
    /** @type {?|undefined} */
    ApexTheme.prototype.palette;
    /** @type {?|undefined} */
    ApexTheme.prototype.monochrome;
}
/**
 * @record
 */
function ApexDiscretePoint() { }
if (false) {
    /** @type {?|undefined} */
    ApexDiscretePoint.prototype.seriesIndex;
    /** @type {?|undefined} */
    ApexDiscretePoint.prototype.dataPointIndex;
    /** @type {?|undefined} */
    ApexDiscretePoint.prototype.fillColor;
    /** @type {?|undefined} */
    ApexDiscretePoint.prototype.strokeColor;
    /** @type {?|undefined} */
    ApexDiscretePoint.prototype.size;
}
/**
 * @record
 */
function ApexMarkers() { }
if (false) {
    /** @type {?|undefined} */
    ApexMarkers.prototype.size;
    /** @type {?|undefined} */
    ApexMarkers.prototype.width;
    /** @type {?|undefined} */
    ApexMarkers.prototype.height;
    /** @type {?|undefined} */
    ApexMarkers.prototype.colors;
    /** @type {?|undefined} */
    ApexMarkers.prototype.strokeColors;
    /** @type {?|undefined} */
    ApexMarkers.prototype.strokeWidth;
    /** @type {?|undefined} */
    ApexMarkers.prototype.strokeOpacity;
    /** @type {?|undefined} */
    ApexMarkers.prototype.strokeDashArray;
    /** @type {?|undefined} */
    ApexMarkers.prototype.fillOpacity;
    /** @type {?|undefined} */
    ApexMarkers.prototype.discrete;
    /** @type {?|undefined} */
    ApexMarkers.prototype.shape;
    /** @type {?|undefined} */
    ApexMarkers.prototype.radius;
    /** @type {?|undefined} */
    ApexMarkers.prototype.offsetX;
    /** @type {?|undefined} */
    ApexMarkers.prototype.offsetY;
    /** @type {?|undefined} */
    ApexMarkers.prototype.showNullDataPoints;
    /** @type {?|undefined} */
    ApexMarkers.prototype.hover;
    /**
     * @param {?=} e
     * @return {?}
     */
    ApexMarkers.prototype.onClick = function (e) { };
    /**
     * @param {?=} e
     * @return {?}
     */
    ApexMarkers.prototype.onDblClick = function (e) { };
}
/**
 * @record
 */
function ApexNoData() { }
if (false) {
    /** @type {?|undefined} */
    ApexNoData.prototype.text;
    /** @type {?|undefined} */
    ApexNoData.prototype.align;
    /** @type {?|undefined} */
    ApexNoData.prototype.verticalAlign;
    /** @type {?|undefined} */
    ApexNoData.prototype.offsetX;
    /** @type {?|undefined} */
    ApexNoData.prototype.offsetY;
    /** @type {?|undefined} */
    ApexNoData.prototype.style;
}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng-apexcharts.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ChartComponent, NgApexchartsModule };
//# sourceMappingURL=ng-apexcharts.js.map
