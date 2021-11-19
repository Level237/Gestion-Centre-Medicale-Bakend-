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
export function ApexOptions() { }
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
export function ApexChart() { }
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
export function ApexStates() { }
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
export function ApexTitleSubtitle() { }
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
export function ApexStroke() { }
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
export function ApexAnnotations() { }
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
export function AnnotationLabel() { }
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
export function AnnotationStyle() { }
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
export function XAxisAnnotations() { }
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
export function YAxisAnnotations() { }
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
export function PointAnnotations() { }
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
export function ImageAnnotations() { }
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
export function TextAnnotations() { }
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
export function ApexLocale() { }
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
export function ApexPlotOptions() { }
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
export function ApexFill() { }
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
export function ApexLegend() { }
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
export function ApexDataLabels() { }
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
export function ApexResponsive() { }
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
export function ApexTooltip() { }
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
export function ApexXAxis() { }
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
export function ApexYAxis() { }
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
export function ApexGrid() { }
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
export function ApexTheme() { }
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
export function ApexMarkers() { }
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
export function ApexNoData() { }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBleC10eXBlcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLWFwZXhjaGFydHMvIiwic291cmNlcyI6WyJsaWIvbW9kZWwvYXBleC10eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxpQ0FzQkM7OztJQXJCQyxrQ0FBOEI7O0lBQzlCLDRCQUFrQjs7SUFDbEIsNkJBQWU7O0lBQ2YsaUNBQTRCOztJQUM1Qiw2QkFBc0Q7O0lBQ3RELDZCQUFvQjs7SUFDcEIsNkJBQWtCOztJQUNsQiw2QkFBb0I7O0lBQ3BCLDJCQUFnQjs7SUFDaEIsOEJBQXNCOztJQUN0QixrQ0FBOEI7O0lBQzlCLGlDQUE4Qjs7SUFDOUIsOEJBQXNCOztJQUN0Qiw2QkFBb0I7O0lBQ3BCLDRCQUFrQjs7SUFDbEIsNEJBQWdDOztJQUNoQywyQkFBZ0I7O0lBQ2hCLDZCQUFvQjs7SUFDcEIsNEJBQTBCOztJQUMxQiwrQkFBNkI7O0lBQzdCLDRCQUFrQjs7Ozs7QUFHcEIsNkJBT0M7OztJQU5DLGlDQUFrQjs7SUFDbEIsNkJBQWE7O0lBQ2IsOEJBQWM7O0lBQ2QsOEJBQWM7O0lBQ2QsaUNBQWlCOztJQUNqQiwrQkFBZTs7Ozs7OztBQU9qQiwrQkF5SUM7OztJQXhJQywwQkFBd0I7O0lBQ3hCLDJCQUF5Qjs7SUFDekIseUJBQWdCOztJQUNoQiw4QkFBbUI7O0lBQ25CLCtCQUFvQjs7SUFDcEIsK0JBQW9COztJQUNwQiw0QkFBaUI7O0lBQ2pCLDRCQUFpQjs7SUFDakIsK0JBR0U7O0lBQ0YsMkJBa0JFOztJQUNGLDBCQUlFOztJQUNGLHVCQUFZOztJQUNaLDBCQUFlOztJQUNmLDRCQUF1Qjs7SUFDdkIsa0NBQXVCOztJQUN2Qix1Q0FBNEI7O0lBQzVCLHlDQUErQjs7SUFDL0IseUNBQTBDOztJQUMxQyw4QkFFRTs7SUFDRiw0QkFBa0I7O0lBQ2xCLDhCQUE4Qjs7SUFDOUIsNEJBb0NFOztJQUNGLHlCQWVFOztJQUNGLDhCQXFCRTs7SUFD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LDRCQUdFOzs7OztJQUNGLGlEQUF3Qjs7Ozs7SUFDeEIsb0RBQTJCOzs7OztBQUc3QixnQ0FXQzs7O0lBVkMsMEJBQWM7O0lBQ2QsMkJBQW9DOztJQUNwQyxtQ0FBNEM7O0lBQzVDLDZCQUFpQjs7SUFDakIsNkJBQWlCOztJQUNqQiwyQkFJRSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4cG9ydCBkZWNsYXJlIGNsYXNzIEFwZXhDaGFydHMge1xuLy8gICBjb25zdHJ1Y3RvcihlbDogYW55LCBvcHRpb25zOiBBcGV4T3B0aW9ucyk7XG4vLyAgIHN0YXRpYyBleGVjKGNoYXJ0SUQ6IHN0cmluZywgZm46ICgpID0+IHZvaWQsIG9wdGlvbnM6IGFueSk6IGFueTtcbi8vICAgc3RhdGljIGluaXRPbkxvYWQoKTogdm9pZDtcbi8vICAgcmVuZGVyKCk6IFByb21pc2U8dm9pZD47XG4vLyAgIHVwZGF0ZU9wdGlvbnMob3B0aW9uczogYW55LCByZWRyYXdQYXRoczogYm9vbGVhbiwgYW5pbWF0ZTogYm9vbGVhbiwgdXBkYXRlU3luY2VkQ2hhcnRzOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPjtcbi8vICAgdXBkYXRlU2VyaWVzKG5ld1NlcmllczogQXBleEF4aXNDaGFydFNlcmllcyB8IEFwZXhOb25BeGlzQ2hhcnRTZXJpZXMsIGFuaW1hdGU6IGJvb2xlYW4pOiB2b2lkO1xuLy8gICB0b2dnbGVTZXJpZXMoc2VyaWVzTmFtZTogc3RyaW5nKTogdm9pZDtcbi8vICAgZGVzdHJveSgpOiB2b2lkO1xuLy8gICBhZGRYYXhpc0Fubm90YXRpb24ob3B0aW9uczogYW55LCBwdXNoVG9NZW1vcnk/OiBib29sZWFuLCBjb250ZXh0PzogYW55KTogdm9pZDtcbi8vICAgYWRkWWF4aXNBbm5vdGF0aW9uKG9wdGlvbnM6IGFueSwgcHVzaFRvTWVtb3J5PzogYm9vbGVhbiwgY29udGV4dD86IGFueSk6IHZvaWQ7XG4vLyAgIGFkZFBvaW50QW5ub3RhdGlvbihvcHRpb25zOiBhbnksIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sIGNvbnRleHQ/OiBhbnkpOiB2b2lkO1xuLy8gICBhZGRUZXh0KG9wdGlvbnM6IGFueSwgcHVzaFRvTWVtb3J5PzogYm9vbGVhbiwgY29udGV4dD86IGFueSk6IHZvaWQ7XG4vLyAgIGRhdGFVUkkoKTogdm9pZDtcbi8vIH1cblxuZXhwb3J0IGludGVyZmFjZSBBcGV4T3B0aW9ucyB7XG4gIGFubm90YXRpb25zPzogQXBleEFubm90YXRpb25zO1xuICBjaGFydD86IEFwZXhDaGFydDtcbiAgY29sb3JzPzogYW55W107XG4gIGRhdGFMYWJlbHM/OiBBcGV4RGF0YUxhYmVscztcbiAgc2VyaWVzPzogQXBleEF4aXNDaGFydFNlcmllcyB8IEFwZXhOb25BeGlzQ2hhcnRTZXJpZXM7XG4gIHN0cm9rZT86IEFwZXhTdHJva2U7XG4gIGxhYmVscz86IHN0cmluZ1tdO1xuICBsZWdlbmQ/OiBBcGV4TGVnZW5kO1xuICBmaWxsPzogQXBleEZpbGw7XG4gIHRvb2x0aXA/OiBBcGV4VG9vbHRpcDtcbiAgcGxvdE9wdGlvbnM/OiBBcGV4UGxvdE9wdGlvbnM7XG4gIHJlc3BvbnNpdmU/OiBBcGV4UmVzcG9uc2l2ZVtdO1xuICBtYXJrZXJzPzogQXBleE1hcmtlcnM7XG4gIG5vRGF0YT86IEFwZXhOb0RhdGE7XG4gIHhheGlzPzogQXBleFhBeGlzO1xuICB5YXhpcz86IEFwZXhZQXhpcyB8IEFwZXhZQXhpc1tdO1xuICBncmlkPzogQXBleEdyaWQ7XG4gIHN0YXRlcz86IEFwZXhTdGF0ZXM7XG4gIHRpdGxlPzogQXBleFRpdGxlU3VidGl0bGU7XG4gIHN1YnRpdGxlPzogQXBleFRpdGxlU3VidGl0bGU7XG4gIHRoZW1lPzogQXBleFRoZW1lO1xufVxuXG5pbnRlcmZhY2UgQXBleERyb3BTaGFkb3cge1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgdG9wPzogbnVtYmVyO1xuICBsZWZ0PzogbnVtYmVyO1xuICBibHVyPzogbnVtYmVyO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBjb2xvcj86IHN0cmluZztcbn1cblxuLyoqXG4gKiBNYWluIENoYXJ0IG9wdGlvbnNcbiAqIFNlZSBodHRwczovL2FwZXhjaGFydHMuY29tL2RvY3Mvb3B0aW9ucy9jaGFydC9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcGV4Q2hhcnQge1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0eXBlOiBDaGFydFR5cGU7XG4gIGZvcmVDb2xvcj86IHN0cmluZztcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgb2Zmc2V0WD86IG51bWJlcjtcbiAgb2Zmc2V0WT86IG51bWJlcjtcbiAgZHJvcFNoYWRvdz86IEFwZXhEcm9wU2hhZG93ICYge1xuICAgIGVuYWJsZWRPblNlcmllcz86IHVuZGVmaW5lZCB8IG51bWJlcltdO1xuICAgIGNvbG9yPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIH07XG4gIGV2ZW50cz86IHtcbiAgICBhbmltYXRpb25FbmQ/KGNoYXJ0OiBhbnksIG9wdGlvbnM/OiBhbnkpOiB2b2lkO1xuICAgIGJlZm9yZU1vdW50PyhjaGFydDogYW55LCBvcHRpb25zPzogYW55KTogdm9pZDtcbiAgICBtb3VudGVkPyhjaGFydDogYW55LCBvcHRpb25zPzogYW55KTogdm9pZDtcbiAgICB1cGRhdGVkPyhjaGFydDogYW55LCBvcHRpb25zPzogYW55KTogdm9pZDtcbiAgICBtb3VzZU1vdmU/KGU6IGFueSwgY2hhcnQ/OiBhbnksIG9wdGlvbnM/OiBhbnkpOiB2b2lkO1xuICAgIGNsaWNrPyhlOiBhbnksIGNoYXJ0PzogYW55LCBvcHRpb25zPzogYW55KTogdm9pZDtcbiAgICBsZWdlbmRDbGljaz8oY2hhcnQ6IGFueSwgc2VyaWVzSW5kZXg/OiBudW1iZXIsIG9wdGlvbnM/OiBhbnkpOiB2b2lkO1xuICAgIG1hcmtlckNsaWNrPyhlOiBhbnksIGNoYXJ0PzogYW55LCBvcHRpb25zPzogYW55KTogdm9pZDtcbiAgICBzZWxlY3Rpb24/KGNoYXJ0OiBhbnksIG9wdGlvbnM/OiBhbnkpOiB2b2lkO1xuICAgIGRhdGFQb2ludFNlbGVjdGlvbj8oZTogYW55LCBjaGFydD86IGFueSwgb3B0aW9ucz86IGFueSk6IHZvaWQ7XG4gICAgZGF0YVBvaW50TW91c2VFbnRlcj8oZTogYW55LCBjaGFydD86IGFueSwgb3B0aW9ucz86IGFueSk6IHZvaWQ7XG4gICAgZGF0YVBvaW50TW91c2VMZWF2ZT8oZTogYW55LCBjaGFydD86IGFueSwgb3B0aW9ucz86IGFueSk6IHZvaWQ7XG4gICAgYmVmb3JlWm9vbT8oY2hhcnQ6IGFueSwgb3B0aW9ucz86IGFueSk6IHZvaWQ7XG4gICAgYmVmb3JlUmVzZXRab29tPyhjaGFydDogYW55LCBvcHRpb25zPzogYW55KTogdm9pZDtcbiAgICB6b29tZWQ/KGNoYXJ0OiBhbnksIG9wdGlvbnM/OiBhbnkpOiB2b2lkO1xuICAgIHNjcm9sbGVkPyhjaGFydDogYW55LCBvcHRpb25zPzogYW55KTogdm9pZDtcbiAgICBicnVzaFNjcm9sbGVkPyhjaGFydDogYW55LCBvcHRpb25zPzogYW55KTogdm9pZDtcbiAgfTtcbiAgYnJ1c2g/OiB7XG4gICAgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgYXV0b1NjYWxlWWF4aXM/OiBib29sZWFuO1xuICAgIHRhcmdldD86IHN0cmluZztcbiAgfTtcbiAgaWQ/OiBzdHJpbmc7XG4gIGdyb3VwPzogc3RyaW5nO1xuICBsb2NhbGVzPzogQXBleExvY2FsZVtdO1xuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nO1xuICBwYXJlbnRIZWlnaHRPZmZzZXQ/OiBudW1iZXI7XG4gIHJlZHJhd09uUGFyZW50UmVzaXplPzogYm9vbGVhbjtcbiAgcmVkcmF3T25XaW5kb3dSZXNpemU/OiBib29sZWFuIHwgRnVuY3Rpb247XG4gIHNwYXJrbGluZT86IHtcbiAgICBlbmFibGVkPzogYm9vbGVhbjtcbiAgfTtcbiAgc3RhY2tlZD86IGJvb2xlYW47XG4gIHN0YWNrVHlwZT86IFwibm9ybWFsXCIgfCBcIjEwMCVcIjtcbiAgdG9vbGJhcj86IHtcbiAgICBzaG93PzogYm9vbGVhbjtcbiAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgIG9mZnNldFk/OiBudW1iZXI7XG4gICAgdG9vbHM/OiB7XG4gICAgICBkb3dubG9hZD86IGJvb2xlYW4gfCBzdHJpbmc7XG4gICAgICBzZWxlY3Rpb24/OiBib29sZWFuIHwgc3RyaW5nO1xuICAgICAgem9vbT86IGJvb2xlYW4gfCBzdHJpbmc7XG4gICAgICB6b29taW4/OiBib29sZWFuIHwgc3RyaW5nO1xuICAgICAgem9vbW91dD86IGJvb2xlYW4gfCBzdHJpbmc7XG4gICAgICBwYW4/OiBib29sZWFuIHwgc3RyaW5nO1xuICAgICAgcmVzZXQ/OiBib29sZWFuIHwgc3RyaW5nO1xuICAgICAgY3VzdG9tSWNvbnM/OiB7XG4gICAgICAgIGljb24/OiBzdHJpbmc7XG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xuICAgICAgICBpbmRleD86IG51bWJlcjtcbiAgICAgICAgY2xhc3M/OiBzdHJpbmc7XG4gICAgICAgIGNsaWNrPyhjaGFydD86IGFueSwgb3B0aW9ucz86IGFueSwgZT86IGFueSk6IGFueTtcbiAgICAgIH1bXTtcbiAgICB9O1xuICAgIGV4cG9ydD86IHtcbiAgICAgIGNzdj86IHtcbiAgICAgICAgZmlsZW5hbWU/OiB1bmRlZmluZWQgfCBzdHJpbmc7XG4gICAgICAgIGNvbHVtbkRlbGltaXRlcj86IHN0cmluZztcbiAgICAgICAgaGVhZGVyQ2F0ZWdvcnk/OiBzdHJpbmc7XG4gICAgICAgIGhlYWRlclZhbHVlPzogc3RyaW5nO1xuICAgICAgICBkYXRlRm9ybWF0dGVyPyh0aW1lc3RhbXA/OiBudW1iZXIpOiBhbnk7XG4gICAgICB9O1xuICAgICAgc3ZnPzoge1xuICAgICAgICBmaWxlbmFtZT86IHVuZGVmaW5lZCB8IHN0cmluZztcbiAgICAgIH07XG4gICAgICBwbmc/OiB7XG4gICAgICAgIGZpbGVuYW1lPzogdW5kZWZpbmVkIHwgc3RyaW5nO1xuICAgICAgfTtcbiAgICB9O1xuICAgIGF1dG9TZWxlY3RlZD86IFwiem9vbVwiIHwgXCJzZWxlY3Rpb25cIiB8IFwicGFuXCI7XG4gIH07XG4gIHpvb20/OiB7XG4gICAgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgdHlwZT86IFwieFwiIHwgXCJ5XCIgfCBcInh5XCI7XG4gICAgYXV0b1NjYWxlWWF4aXM/OiBib29sZWFuO1xuICAgIHpvb21lZEFyZWE/OiB7XG4gICAgICBmaWxsPzoge1xuICAgICAgICBjb2xvcj86IHN0cmluZztcbiAgICAgICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICAgIH07XG4gICAgICBzdHJva2U/OiB7XG4gICAgICAgIGNvbG9yPzogc3RyaW5nO1xuICAgICAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgICAgICB3aWR0aD86IG51bWJlcjtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbiAgc2VsZWN0aW9uPzoge1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIHR5cGU/OiBzdHJpbmc7XG4gICAgZmlsbD86IHtcbiAgICAgIGNvbG9yPzogc3RyaW5nO1xuICAgICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB9O1xuICAgIHN0cm9rZT86IHtcbiAgICAgIHdpZHRoPzogbnVtYmVyO1xuICAgICAgY29sb3I/OiBzdHJpbmc7XG4gICAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgICAgZGFzaEFycmF5PzogbnVtYmVyO1xuICAgIH07XG4gICAgeGF4aXM/OiB7XG4gICAgICBtaW4/OiBudW1iZXI7XG4gICAgICBtYXg/OiBudW1iZXI7XG4gICAgfTtcbiAgICB5YXhpcz86IHtcbiAgICAgIG1pbj86IG51bWJlcjtcbiAgICAgIG1heD86IG51bWJlcjtcbiAgICB9O1xuICB9O1xuICBhbmltYXRpb25zPzoge1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIGVhc2luZz86IFwibGluZWFyXCIgfCBcImVhc2VpblwiIHwgXCJlYXNlb3V0XCIgfCBcImVhc2Vpbm91dFwiO1xuICAgIHNwZWVkPzogbnVtYmVyO1xuICAgIGFuaW1hdGVHcmFkdWFsbHk/OiB7XG4gICAgICBlbmFibGVkPzogYm9vbGVhbjtcbiAgICAgIGRlbGF5PzogbnVtYmVyO1xuICAgIH07XG4gICAgZHluYW1pY0FuaW1hdGlvbj86IHtcbiAgICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgICAgc3BlZWQ/OiBudW1iZXI7XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcGV4U3RhdGVzIHtcbiAgbm9ybWFsPzoge1xuICAgIGZpbHRlcj86IHtcbiAgICAgIHR5cGU/OiBzdHJpbmc7XG4gICAgICB2YWx1ZT86IG51bWJlcjtcbiAgICB9O1xuICB9O1xuICBob3Zlcj86IHtcbiAgICBmaWx0ZXI/OiB7XG4gICAgICB0eXBlPzogc3RyaW5nO1xuICAgICAgdmFsdWU/OiBudW1iZXI7XG4gICAgfTtcbiAgfTtcbiAgYWN0aXZlPzoge1xuICAgIGFsbG93TXVsdGlwbGVEYXRhUG9pbnRzU2VsZWN0aW9uPzogYm9vbGVhbjtcbiAgICBmaWx0ZXI/OiB7XG4gICAgICB0eXBlPzogc3RyaW5nO1xuICAgICAgdmFsdWU/OiBudW1iZXI7XG4gICAgfTtcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGFydCBUaXRsZSBvcHRpb25zXG4gKiBTZWUgaHR0cHM6Ly9hcGV4Y2hhcnRzLmNvbS9kb2NzL29wdGlvbnMvdGl0bGUvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXBleFRpdGxlU3VidGl0bGUge1xuICB0ZXh0Pzogc3RyaW5nO1xuICBhbGlnbj86IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIjtcbiAgbWFyZ2luPzogbnVtYmVyO1xuICBvZmZzZXRYPzogbnVtYmVyO1xuICBvZmZzZXRZPzogbnVtYmVyO1xuICBmbG9hdGluZz86IGJvb2xlYW47XG4gIHN0eWxlPzoge1xuICAgIGZvbnRTaXplPzogc3RyaW5nO1xuICAgIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gICAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgICBjb2xvcj86IHN0cmluZztcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGFydCBTZXJpZXMgb3B0aW9ucy5cbiAqIFVzZSBBcGV4Tm9uQXhpc0NoYXJ0U2VyaWVzIGZvciBQaWUgYW5kIERvbnV0IGNoYXJ0cy5cbiAqIFNlZSBodHRwczovL2FwZXhjaGFydHMuY29tL2RvY3Mvb3B0aW9ucy9zZXJpZXMvXG4gKi9cbmV4cG9ydCB0eXBlIEFwZXhBeGlzQ2hhcnRTZXJpZXMgPSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHR5cGU/OiBzdHJpbmc7XG4gIGNvbG9yPzogc3RyaW5nO1xuICBkYXRhOlxuICAgIHwgKG51bWJlciB8IG51bGwpW11cbiAgICB8IHtcbiAgICAgICAgeDogYW55O1xuICAgICAgICB5OiBhbnk7XG4gICAgICAgIGZpbGxDb2xvcj86IHN0cmluZztcbiAgICAgICAgc3Ryb2tlQ29sb3I/OiBzdHJpbmc7XG4gICAgICAgIG1ldGE/OiBhbnk7XG4gICAgICAgIGdvYWxzPzogYW55O1xuICAgICAgfVtdXG4gICAgfCBbbnVtYmVyLCBudW1iZXIgfCBudWxsXVtdXG4gICAgfCBbbnVtYmVyLCAobnVtYmVyIHwgbnVsbClbXV1bXTtcbn1bXTtcblxuZXhwb3J0IHR5cGUgQXBleE5vbkF4aXNDaGFydFNlcmllcyA9IG51bWJlcltdO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIHRoZSBsaW5lIGRyYXduIG9uIGxpbmUgYW5kIGFyZWEgY2hhcnRzLlxuICogU2VlIGh0dHBzOi8vYXBleGNoYXJ0cy5jb20vZG9jcy9vcHRpb25zL3N0cm9rZS9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcGV4U3Ryb2tlIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIGN1cnZlPzpcbiAgICB8IFwic21vb3RoXCJcbiAgICB8IFwic3RyYWlnaHRcIlxuICAgIHwgXCJzdGVwbGluZVwiXG4gICAgfCAoXCJzbW9vdGhcIiB8IFwic3RyYWlnaHRcIiB8IFwic3RlcGxpbmVcIilbXTtcbiAgbGluZUNhcD86IFwiYnV0dFwiIHwgXCJzcXVhcmVcIiB8IFwicm91bmRcIjtcbiAgY29sb3JzPzogc3RyaW5nW107XG4gIHdpZHRoPzogbnVtYmVyIHwgbnVtYmVyW107XG4gIGRhc2hBcnJheT86IG51bWJlciB8IG51bWJlcltdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFwZXhBbm5vdGF0aW9ucyB7XG4gIHBvc2l0aW9uPzogc3RyaW5nO1xuICB5YXhpcz86IFlBeGlzQW5ub3RhdGlvbnNbXTtcbiAgeGF4aXM/OiBYQXhpc0Fubm90YXRpb25zW107XG4gIHBvaW50cz86IFBvaW50QW5ub3RhdGlvbnNbXTtcbiAgdGV4dHM/OiBUZXh0QW5ub3RhdGlvbnNbXTtcbiAgaW1hZ2VzPzogSW1hZ2VBbm5vdGF0aW9uc1tdO1xufVxuZXhwb3J0IGludGVyZmFjZSBBbm5vdGF0aW9uTGFiZWwge1xuICBib3JkZXJDb2xvcj86IHN0cmluZztcbiAgYm9yZGVyV2lkdGg/OiBudW1iZXI7XG4gIGJvcmRlclJhZGl1cz86IG51bWJlcjtcbiAgdGV4dD86IHN0cmluZztcbiAgdGV4dEFuY2hvcj86IHN0cmluZztcbiAgb2Zmc2V0WD86IG51bWJlcjtcbiAgb2Zmc2V0WT86IG51bWJlcjtcbiAgc3R5bGU/OiBBbm5vdGF0aW9uU3R5bGU7XG4gIHBvc2l0aW9uPzogc3RyaW5nO1xuICBvcmllbnRhdGlvbj86IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgQW5ub3RhdGlvblN0eWxlIHtcbiAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7XG4gIGZvbnRTaXplPzogc3RyaW5nO1xuICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICBmb250V2VpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBjc3NDbGFzcz86IHN0cmluZztcbiAgcGFkZGluZz86IHtcbiAgICBsZWZ0PzogbnVtYmVyO1xuICAgIHJpZ2h0PzogbnVtYmVyO1xuICAgIHRvcD86IG51bWJlcjtcbiAgICBib3R0b20/OiBudW1iZXI7XG4gIH07XG59XG5leHBvcnQgaW50ZXJmYWNlIFhBeGlzQW5ub3RhdGlvbnMge1xuICB4PzogbnVsbCB8IG51bWJlciB8IHN0cmluZztcbiAgeDI/OiBudWxsIHwgbnVtYmVyIHwgc3RyaW5nO1xuICBzdHJva2VEYXNoQXJyYXk/OiBudW1iZXI7XG4gIGZpbGxDb2xvcj86IHN0cmluZztcbiAgYm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIGJvcmRlcldpZHRoPzogbnVtYmVyO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBvZmZzZXRYPzogbnVtYmVyO1xuICBvZmZzZXRZPzogbnVtYmVyO1xuICBsYWJlbD86IEFubm90YXRpb25MYWJlbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgWUF4aXNBbm5vdGF0aW9ucyB7XG4gIHk/OiBudWxsIHwgbnVtYmVyIHwgc3RyaW5nO1xuICB5Mj86IG51bGwgfCBudW1iZXIgfCBzdHJpbmc7XG4gIHN0cm9rZURhc2hBcnJheT86IG51bWJlcjtcbiAgZmlsbENvbG9yPzogc3RyaW5nO1xuICBib3JkZXJDb2xvcj86IHN0cmluZztcbiAgYm9yZGVyV2lkdGg/OiBudW1iZXI7XG4gIG9wYWNpdHk/OiBudW1iZXI7XG4gIG9mZnNldFg/OiBudW1iZXI7XG4gIG9mZnNldFk/OiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuICB5QXhpc0luZGV4PzogbnVtYmVyO1xuICBsYWJlbD86IEFubm90YXRpb25MYWJlbDtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnRBbm5vdGF0aW9ucyB7XG4gIHg/OiBudW1iZXIgfCBzdHJpbmc7XG4gIHk/OiBudWxsIHwgbnVtYmVyO1xuICB5QXhpc0luZGV4PzogbnVtYmVyO1xuICBzZXJpZXNJbmRleD86IG51bWJlcjtcbiAgbWFya2VyPzoge1xuICAgIHNpemU/OiBudW1iZXI7XG4gICAgZmlsbENvbG9yPzogc3RyaW5nO1xuICAgIHN0cm9rZUNvbG9yPzogc3RyaW5nO1xuICAgIHN0cm9rZVdpZHRoPzogbnVtYmVyO1xuICAgIHNoYXBlPzogc3RyaW5nO1xuICAgIG9mZnNldFg/OiBudW1iZXI7XG4gICAgb2Zmc2V0WT86IG51bWJlcjtcbiAgICByYWRpdXM/OiBudW1iZXI7XG4gICAgY3NzQ2xhc3M/OiBzdHJpbmc7XG4gIH07XG4gIGxhYmVsPzogQW5ub3RhdGlvbkxhYmVsO1xuICBpbWFnZT86IHtcbiAgICBwYXRoPzogc3RyaW5nO1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgIG9mZnNldFk/OiBudW1iZXI7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VBbm5vdGF0aW9ucyB7XG4gIHBhdGg/OiBzdHJpbmc7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIGFwcGVuZFRvPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRleHRBbm5vdGF0aW9ucyB7XG4gIHg/OiBudW1iZXI7XG4gIHk/OiBudW1iZXI7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIHRleHRBbmNob3I/OiBzdHJpbmc7XG4gIGZvcmVDb2xvcj86IHN0cmluZztcbiAgZm9udFNpemU/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGZvbnRGYW1pbHk/OiB1bmRlZmluZWQgfCBzdHJpbmc7XG4gIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGFwcGVuZFRvPzogc3RyaW5nO1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmc7XG4gIGJvcmRlckNvbG9yPzogc3RyaW5nO1xuICBib3JkZXJSYWRpdXM/OiBudW1iZXI7XG4gIGJvcmRlcldpZHRoPzogbnVtYmVyO1xuICBwYWRkaW5nTGVmdD86IG51bWJlcjtcbiAgcGFkZGluZ1JpZ2h0PzogbnVtYmVyO1xuICBwYWRkaW5nVG9wPzogbnVtYmVyO1xuICBwYWRkaW5nQm90dG9tPzogbnVtYmVyO1xufVxuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGxvY2FsaXphdGlvbi5cbiAqIFNlZSBodHRwczovL2FwZXhjaGFydHMuY29tL2RvY3Mvb3B0aW9ucy9jaGFydC9sb2NhbGVzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXBleExvY2FsZSB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIG9wdGlvbnM/OiB7XG4gICAgbW9udGhzPzogc3RyaW5nW107XG4gICAgc2hvcnRNb250aHM/OiBzdHJpbmdbXTtcbiAgICBkYXlzPzogc3RyaW5nW107XG4gICAgc2hvcnREYXlzPzogc3RyaW5nW107XG4gICAgdG9vbGJhcj86IHtcbiAgICAgIGRvd25sb2FkPzogc3RyaW5nO1xuICAgICAgc2VsZWN0aW9uPzogc3RyaW5nO1xuICAgICAgc2VsZWN0aW9uWm9vbT86IHN0cmluZztcbiAgICAgIHpvb21Jbj86IHN0cmluZztcbiAgICAgIHpvb21PdXQ/OiBzdHJpbmc7XG4gICAgICBwYW4/OiBzdHJpbmc7XG4gICAgICByZXNldD86IHN0cmluZztcbiAgICB9O1xuICB9O1xufVxuXG4vKipcbiAqIFBsb3RPcHRpb25zIGZvciBzcGVjaWZ5aW5nIGNoYXJ0LXR5cGUtc3BlY2lmaWMgY29uZmlndXJhdGlvbi5cbiAqIFNlZSBodHRwczovL2FwZXhjaGFydHMuY29tL2RvY3Mvb3B0aW9ucy9wbG90b3B0aW9ucy9iYXIvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXBleFBsb3RPcHRpb25zIHtcbiAgYXJlYT86IHtcbiAgICBmaWxsVG8/OiBcIm9yaWdpblwiIHwgXCJlbmRcIjtcbiAgfTtcbiAgYmFyPzoge1xuICAgIGhvcml6b250YWw/OiBib29sZWFuO1xuICAgIGNvbHVtbldpZHRoPzogc3RyaW5nO1xuICAgIGJhckhlaWdodD86IHN0cmluZztcbiAgICBkaXN0cmlidXRlZD86IGJvb2xlYW47XG4gICAgYm9yZGVyUmFkaXVzPzogbnVtYmVyO1xuICAgIHJhbmdlQmFyT3ZlcmxhcD86IGJvb2xlYW47XG4gICAgcmFuZ2VCYXJHcm91cFJvd3M/OiBib29sZWFuO1xuICAgIGNvbG9ycz86IHtcbiAgICAgIHJhbmdlcz86IHtcbiAgICAgICAgZnJvbT86IG51bWJlcjtcbiAgICAgICAgdG8/OiBudW1iZXI7XG4gICAgICAgIGNvbG9yPzogc3RyaW5nO1xuICAgICAgfVtdO1xuICAgICAgYmFja2dyb3VuZEJhckNvbG9ycz86IHN0cmluZ1tdO1xuICAgICAgYmFja2dyb3VuZEJhck9wYWNpdHk/OiBudW1iZXI7XG4gICAgICBiYWNrZ3JvdW5kQmFyUmFkaXVzPzogbnVtYmVyO1xuICAgIH07XG4gICAgZGF0YUxhYmVscz86IHtcbiAgICAgIG1heEl0ZW1zPzogbnVtYmVyO1xuICAgICAgaGlkZU92ZXJmbG93aW5nTGFiZWxzPzogYm9vbGVhbjtcbiAgICAgIHBvc2l0aW9uPzogc3RyaW5nO1xuICAgICAgb3JpZW50YXRpb24/OiBcImhvcml6b250YWxcIiB8IFwidmVydGljYWxcIjtcbiAgICB9O1xuICB9O1xuICBidWJibGU/OiB7XG4gICAgbWluQnViYmxlUmFkaXVzPzogbnVtYmVyO1xuICAgIG1heEJ1YmJsZVJhZGl1cz86IG51bWJlcjtcbiAgfTtcbiAgY2FuZGxlc3RpY2s/OiB7XG4gICAgY29sb3JzPzoge1xuICAgICAgdXB3YXJkPzogc3RyaW5nO1xuICAgICAgZG93bndhcmQ/OiBzdHJpbmc7XG4gICAgfTtcbiAgICB3aWNrPzoge1xuICAgICAgdXNlRmlsbENvbG9yPzogYm9vbGVhbjtcbiAgICB9O1xuICB9O1xuICBib3hQbG90Pzoge1xuICAgIGNvbG9ycz86IHtcbiAgICAgIHVwcGVyPzogc3RyaW5nO1xuICAgICAgbG93ZXI/OiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbiAgaGVhdG1hcD86IHtcbiAgICByYWRpdXM/OiBudW1iZXI7XG4gICAgZW5hYmxlU2hhZGVzPzogYm9vbGVhbjtcbiAgICBzaGFkZUludGVuc2l0eT86IG51bWJlcjtcbiAgICByZXZlcnNlTmVnYXRpdmVTaGFkZT86IGJvb2xlYW47XG4gICAgZGlzdHJpYnV0ZWQ/OiBib29sZWFuO1xuICAgIHVzZUZpbGxDb2xvckFzU3Ryb2tlPzogYm9vbGVhbjtcbiAgICBjb2xvclNjYWxlPzoge1xuICAgICAgcmFuZ2VzPzoge1xuICAgICAgICBmcm9tPzogbnVtYmVyO1xuICAgICAgICB0bz86IG51bWJlcjtcbiAgICAgICAgY29sb3I/OiBzdHJpbmc7XG4gICAgICAgIGZvcmVDb2xvcj86IHN0cmluZztcbiAgICAgICAgbmFtZT86IHN0cmluZztcbiAgICAgIH1bXTtcbiAgICAgIGludmVyc2U/OiBib29sZWFuO1xuICAgICAgbWluPzogbnVtYmVyO1xuICAgICAgbWF4PzogbnVtYmVyO1xuICAgIH07XG4gIH07XG4gIHRyZWVtYXA/OiB7XG4gICAgZW5hYmxlU2hhZGVzPzogYm9vbGVhbjtcbiAgICBzaGFkZUludGVuc2l0eT86IG51bWJlcjtcbiAgICBkaXN0cmlidXRlZD86IGJvb2xlYW47XG4gICAgcmV2ZXJzZU5lZ2F0aXZlU2hhZGU/OiBib29sZWFuO1xuICAgIHVzZUZpbGxDb2xvckFzU3Ryb2tlPzogYm9vbGVhbjtcbiAgICBjb2xvclNjYWxlPzoge1xuICAgICAgaW52ZXJzZT86IGJvb2xlYW47XG4gICAgICByYW5nZXM/OiB7XG4gICAgICAgIGZyb20/OiBudW1iZXI7XG4gICAgICAgIHRvPzogbnVtYmVyO1xuICAgICAgICBjb2xvcj86IHN0cmluZztcbiAgICAgICAgZm9yZUNvbG9yPzogc3RyaW5nO1xuICAgICAgICBuYW1lPzogc3RyaW5nO1xuICAgICAgfVtdO1xuICAgICAgbWluPzogbnVtYmVyO1xuICAgICAgbWF4PzogbnVtYmVyO1xuICAgIH07XG4gIH07XG4gIHBpZT86IHtcbiAgICBzdGFydEFuZ2xlPzogbnVtYmVyO1xuICAgIGVuZEFuZ2xlPzogbnVtYmVyO1xuICAgIGN1c3RvbVNjYWxlPzogbnVtYmVyO1xuICAgIG9mZnNldFg/OiBudW1iZXI7XG4gICAgb2Zmc2V0WT86IG51bWJlcjtcbiAgICBleHBhbmRPbkNsaWNrPzogYm9vbGVhbjtcbiAgICBkYXRhTGFiZWxzPzoge1xuICAgICAgb2Zmc2V0PzogbnVtYmVyO1xuICAgICAgbWluQW5nbGVUb1Nob3dMYWJlbD86IG51bWJlcjtcbiAgICB9O1xuICAgIGRvbnV0Pzoge1xuICAgICAgc2l6ZT86IHN0cmluZztcbiAgICAgIGJhY2tncm91bmQ/OiBzdHJpbmc7XG4gICAgICBsYWJlbHM/OiB7XG4gICAgICAgIHNob3c/OiBib29sZWFuO1xuICAgICAgICBuYW1lPzoge1xuICAgICAgICAgIHNob3c/OiBib29sZWFuO1xuICAgICAgICAgIGZvbnRTaXplPzogc3RyaW5nO1xuICAgICAgICAgIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gICAgICAgICAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgICAgICAgICBjb2xvcj86IHN0cmluZztcbiAgICAgICAgICBvZmZzZXRZPzogbnVtYmVyO1xuICAgICAgICAgIGZvcm1hdHRlcj8odmFsOiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgICAgIH07XG4gICAgICAgIHZhbHVlPzoge1xuICAgICAgICAgIHNob3c/OiBib29sZWFuO1xuICAgICAgICAgIGZvbnRTaXplPzogc3RyaW5nO1xuICAgICAgICAgIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gICAgICAgICAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgICAgICAgICBjb2xvcj86IHN0cmluZztcbiAgICAgICAgICBvZmZzZXRZPzogbnVtYmVyO1xuICAgICAgICAgIGZvcm1hdHRlcj8odmFsOiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgICAgIH07XG4gICAgICAgIHRvdGFsPzoge1xuICAgICAgICAgIHNob3c/OiBib29sZWFuO1xuICAgICAgICAgIHNob3dBbHdheXM/OiBib29sZWFuO1xuICAgICAgICAgIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gICAgICAgICAgZm9udFNpemU/OiBzdHJpbmc7XG4gICAgICAgICAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgICAgICAgICBsYWJlbD86IHN0cmluZztcbiAgICAgICAgICBjb2xvcj86IHN0cmluZztcbiAgICAgICAgICBmb3JtYXR0ZXI/KHc6IGFueSk6IHN0cmluZztcbiAgICAgICAgfTtcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbiAgcG9sYXJBcmVhPzoge1xuICAgIHJpbmdzPzoge1xuICAgICAgc3Ryb2tlV2lkdGg/OiBudW1iZXI7XG4gICAgICBzdHJva2VDb2xvcj86IHN0cmluZztcbiAgICB9O1xuICAgIHNwb2tlcz86IHtcbiAgICAgIHN0cm9rZVdpZHRoPzogbnVtYmVyO1xuICAgICAgY29ubmVjdG9yQ29sb3JzPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgfTtcbiAgfTtcbiAgcmFkYXI/OiB7XG4gICAgc2l6ZT86IG51bWJlcjtcbiAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgIG9mZnNldFk/OiBudW1iZXI7XG4gICAgcG9seWdvbnM/OiB7XG4gICAgICBzdHJva2VDb2xvcnM/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIHN0cm9rZVdpZHRoPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICBjb25uZWN0b3JDb2xvcnM/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICAgIGZpbGw/OiB7XG4gICAgICAgIGNvbG9ycz86IHN0cmluZ1tdO1xuICAgICAgfTtcbiAgICB9O1xuICB9O1xuICByYWRpYWxCYXI/OiB7XG4gICAgaW52ZXJzZU9yZGVyPzogYm9vbGVhbjtcbiAgICBzdGFydEFuZ2xlPzogbnVtYmVyO1xuICAgIGVuZEFuZ2xlPzogbnVtYmVyO1xuICAgIG9mZnNldFg/OiBudW1iZXI7XG4gICAgb2Zmc2V0WT86IG51bWJlcjtcbiAgICBob2xsb3c/OiB7XG4gICAgICBtYXJnaW4/OiBudW1iZXI7XG4gICAgICBzaXplPzogc3RyaW5nO1xuICAgICAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgICAgIGltYWdlPzogc3RyaW5nO1xuICAgICAgaW1hZ2VXaWR0aD86IG51bWJlcjtcbiAgICAgIGltYWdlSGVpZ2h0PzogbnVtYmVyO1xuICAgICAgaW1hZ2VPZmZzZXRYPzogbnVtYmVyO1xuICAgICAgaW1hZ2VPZmZzZXRZPzogbnVtYmVyO1xuICAgICAgaW1hZ2VDbGlwcGVkPzogYm9vbGVhbjtcbiAgICAgIHBvc2l0aW9uPzogXCJmcm9udFwiIHwgXCJiYWNrXCI7XG4gICAgICBkcm9wU2hhZG93PzogQXBleERyb3BTaGFkb3c7XG4gICAgfTtcbiAgICB0cmFjaz86IHtcbiAgICAgIHNob3c/OiBib29sZWFuO1xuICAgICAgc3RhcnRBbmdsZT86IG51bWJlcjtcbiAgICAgIGVuZEFuZ2xlPzogbnVtYmVyO1xuICAgICAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgICAgIHN0cm9rZVdpZHRoPzogc3RyaW5nO1xuICAgICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICAgIG1hcmdpbj86IG51bWJlcjtcbiAgICAgIGRyb3BTaGFkb3c/OiBBcGV4RHJvcFNoYWRvdztcbiAgICB9O1xuICAgIGRhdGFMYWJlbHM/OiB7XG4gICAgICBzaG93PzogYm9vbGVhbjtcbiAgICAgIG5hbWU/OiB7XG4gICAgICAgIHNob3c/OiBib29sZWFuO1xuICAgICAgICBmb250U2l6ZT86IHN0cmluZztcbiAgICAgICAgZm9udEZhbWlseT86IHN0cmluZztcbiAgICAgICAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgICAgICAgY29sb3I/OiBzdHJpbmc7XG4gICAgICAgIG9mZnNldFk/OiBudW1iZXI7XG4gICAgICB9O1xuICAgICAgdmFsdWU/OiB7XG4gICAgICAgIHNob3c/OiBib29sZWFuO1xuICAgICAgICBmb250U2l6ZT86IHN0cmluZztcbiAgICAgICAgZm9udEZhbWlseT86IHN0cmluZztcbiAgICAgICAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgICAgICAgY29sb3I/OiBzdHJpbmc7XG4gICAgICAgIG9mZnNldFk/OiBudW1iZXI7XG4gICAgICAgIGZvcm1hdHRlcj8odmFsOiBudW1iZXIpOiBzdHJpbmc7XG4gICAgICB9O1xuICAgICAgdG90YWw/OiB7XG4gICAgICAgIHNob3c/OiBib29sZWFuO1xuICAgICAgICBsYWJlbD86IHN0cmluZztcbiAgICAgICAgZm9udEZhbWlseT86IHN0cmluZztcbiAgICAgICAgZm9udFNpemU/OiBzdHJpbmc7XG4gICAgICAgIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgICAgIGNvbG9yPzogc3RyaW5nO1xuICAgICAgICBmb3JtYXR0ZXI/KG9wdHM6IGFueSk6IHN0cmluZztcbiAgICAgIH07XG4gICAgfTtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcGV4RmlsbCB7XG4gIGNvbG9ycz86IGFueVtdO1xuICBvcGFjaXR5PzogbnVtYmVyIHwgbnVtYmVyW107XG4gIHR5cGU/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgZ3JhZGllbnQ/OiB7XG4gICAgc2hhZGU/OiBzdHJpbmc7XG4gICAgdHlwZT86IHN0cmluZztcbiAgICBzaGFkZUludGVuc2l0eT86IG51bWJlcjtcbiAgICBncmFkaWVudFRvQ29sb3JzPzogc3RyaW5nW107XG4gICAgaW52ZXJzZUNvbG9ycz86IGJvb2xlYW47XG4gICAgb3BhY2l0eUZyb20/OiBudW1iZXI7XG4gICAgb3BhY2l0eVRvPzogbnVtYmVyO1xuICAgIHN0b3BzPzogbnVtYmVyW107XG4gIH07XG4gIGltYWdlPzoge1xuICAgIHNyYz86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgfTtcbiAgcGF0dGVybj86IHtcbiAgICBzdHlsZT86IHN0cmluZyB8IHN0cmluZ1tdO1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgICBzdHJva2VXaWR0aD86IG51bWJlcjtcbiAgfTtcbn1cblxuLyoqXG4gKiBDaGFydCBMZWdlbmQgY29uZmlndXJhdGlvbiBvcHRpb25zLlxuICogU2VlIGh0dHBzOi8vYXBleGNoYXJ0cy5jb20vZG9jcy9vcHRpb25zL2xlZ2VuZC9cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBBcGV4TGVnZW5kIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHNob3dGb3JTaW5nbGVTZXJpZXM/OiBib29sZWFuO1xuICBzaG93Rm9yTnVsbFNlcmllcz86IGJvb2xlYW47XG4gIHNob3dGb3JaZXJvU2VyaWVzPzogYm9vbGVhbjtcbiAgZmxvYXRpbmc/OiBib29sZWFuO1xuICBpbnZlcnNlT3JkZXI/OiBib29sZWFuO1xuICBwb3NpdGlvbj86IFwidG9wXCIgfCBcInJpZ2h0XCIgfCBcImJvdHRvbVwiIHwgXCJsZWZ0XCI7XG4gIGhvcml6b250YWxBbGlnbj86IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIjtcbiAgZm9udFNpemU/OiBzdHJpbmc7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBoZWlnaHQ/OiBudW1iZXI7XG4gIG9mZnNldFg/OiBudW1iZXI7XG4gIG9mZnNldFk/OiBudW1iZXI7XG4gIHRleHRBbmNob3I/OiBzdHJpbmc7XG4gIGN1c3RvbUxlZ2VuZEl0ZW1zPzogc3RyaW5nW107XG4gIGxhYmVscz86IHtcbiAgICBjb2xvcnM/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgICB1c2VTZXJpZXNDb2xvcnM/OiBib29sZWFuO1xuICB9O1xuICBtYXJrZXJzPzoge1xuICAgIHdpZHRoPzogbnVtYmVyO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgICBzdHJva2VDb2xvcj86IHN0cmluZztcbiAgICBzdHJva2VXaWR0aD86IG51bWJlcjtcbiAgICBmaWxsQ29sb3JzPzogc3RyaW5nW107XG4gICAgb2Zmc2V0WD86IG51bWJlcjtcbiAgICBvZmZzZXRZPzogbnVtYmVyO1xuICAgIHJhZGl1cz86IG51bWJlcjtcbiAgICBjdXN0b21IVE1MPygpOiBhbnk7XG4gICAgb25DbGljaz8oKTogdm9pZDtcbiAgfTtcbiAgaXRlbU1hcmdpbj86IHtcbiAgICBob3Jpem9udGFsPzogbnVtYmVyO1xuICAgIHZlcnRpY2FsPzogbnVtYmVyO1xuICB9O1xuICBjb250YWluZXJNYXJnaW4/OiB7XG4gICAgbGVmdD86IG51bWJlcjtcbiAgICB0b3A/OiBudW1iZXI7XG4gIH07XG4gIG9uSXRlbUNsaWNrPzoge1xuICAgIHRvZ2dsZURhdGFTZXJpZXM/OiBib29sZWFuO1xuICB9O1xuICBvbkl0ZW1Ib3Zlcj86IHtcbiAgICBoaWdobGlnaHREYXRhU2VyaWVzPzogYm9vbGVhbjtcbiAgfTtcbiAgZm9ybWF0dGVyPyhsZWdlbmROYW1lOiBzdHJpbmcsIG9wdHM/OiBhbnkpOiBzdHJpbmc7XG4gIHRvb2x0aXBIb3ZlckZvcm1hdHRlcj8obGVnZW5kTmFtZTogc3RyaW5nLCBvcHRzPzogYW55KTogc3RyaW5nO1xufVxuXG4vKipcbiAqIENoYXJ0IERhdGFsYWJlbHMgb3B0aW9uc1xuICogU2VlIGh0dHBzOi8vYXBleGNoYXJ0cy5jb20vZG9jcy9vcHRpb25zL2RhdGFsYWJlbHMvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXBleERhdGFMYWJlbHMge1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgZW5hYmxlZE9uU2VyaWVzPzogdW5kZWZpbmVkIHwgbnVtYmVyW107XG4gIHRleHRBbmNob3I/OiBcInN0YXJ0XCIgfCBcIm1pZGRsZVwiIHwgXCJlbmRcIjtcbiAgZGlzdHJpYnV0ZWQ/OiBib29sZWFuO1xuICBvZmZzZXRYPzogbnVtYmVyO1xuICBvZmZzZXRZPzogbnVtYmVyO1xuICBzdHlsZT86IHtcbiAgICBmb250U2l6ZT86IHN0cmluZztcbiAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICAgIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgY29sb3JzPzogYW55W107XG4gIH07XG4gIGJhY2tncm91bmQ/OiB7XG4gICAgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgZm9yZUNvbG9yPzogc3RyaW5nO1xuICAgIGJvcmRlclJhZGl1cz86IG51bWJlcjtcbiAgICBwYWRkaW5nPzogbnVtYmVyO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgYm9yZGVyV2lkdGg/OiBudW1iZXI7XG4gICAgYm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gICAgZHJvcFNoYWRvdz86IEFwZXhEcm9wU2hhZG93O1xuICB9O1xuICBkcm9wU2hhZG93PzogQXBleERyb3BTaGFkb3c7XG4gIGZvcm1hdHRlcj8odmFsOiBzdHJpbmcgfCBudW1iZXIgfCBudW1iZXJbXSwgb3B0cz86IGFueSk6IHN0cmluZyB8IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcGV4UmVzcG9uc2l2ZSB7XG4gIGJyZWFrcG9pbnQ/OiBudW1iZXI7XG4gIG9wdGlvbnM/OiBhbnk7XG59XG5cbnR5cGUgQXBleFRvb2x0aXBZID0ge1xuICB0aXRsZT86IHtcbiAgICBmb3JtYXR0ZXI/KHNlcmllc05hbWU6IHN0cmluZyk6IHN0cmluZztcbiAgfTtcbiAgZm9ybWF0dGVyPyh2YWw6IG51bWJlciwgb3B0cz86IGFueSk6IHN0cmluZztcbn07XG4vKipcbiAqIENoYXJ0IFRvb2x0aXAgb3B0aW9uc1xuICogU2VlIGh0dHBzOi8vYXBleGNoYXJ0cy5jb20vZG9jcy9vcHRpb25zL3Rvb2x0aXAvXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQXBleFRvb2x0aXAge1xuICBlbmFibGVkPzogYm9vbGVhbjtcbiAgZW5hYmxlZE9uU2VyaWVzPzogdW5kZWZpbmVkIHwgbnVtYmVyW107XG4gIHNoYXJlZD86IGJvb2xlYW47XG4gIGZvbGxvd0N1cnNvcj86IGJvb2xlYW47XG4gIGludGVyc2VjdD86IGJvb2xlYW47XG4gIGludmVyc2VPcmRlcj86IGJvb2xlYW47XG4gIGN1c3RvbT86ICgob3B0aW9uczogYW55KSA9PiBhbnkpIHwgKChvcHRpb25zOiBhbnkpID0+IGFueSlbXTtcbiAgZmlsbFNlcmllc0NvbG9yPzogYm9vbGVhbjtcbiAgdGhlbWU/OiBzdHJpbmc7XG4gIHN0eWxlPzoge1xuICAgIGZvbnRTaXplPzogc3RyaW5nO1xuICAgIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIH07XG4gIG9uRGF0YXNldEhvdmVyPzoge1xuICAgIGhpZ2hsaWdodERhdGFTZXJpZXM/OiBib29sZWFuO1xuICB9O1xuICB4Pzoge1xuICAgIHNob3c/OiBib29sZWFuO1xuICAgIGZvcm1hdD86IHN0cmluZztcbiAgICBmb3JtYXR0ZXI/KHZhbDogbnVtYmVyLCBvcHRzPzogYW55KTogc3RyaW5nO1xuICB9O1xuICB5PzogQXBleFRvb2x0aXBZIHwgQXBleFRvb2x0aXBZW107XG4gIHo/OiB7XG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgZm9ybWF0dGVyPyh2YWw6IG51bWJlcik6IHN0cmluZztcbiAgfTtcbiAgbWFya2VyPzoge1xuICAgIHNob3c/OiBib29sZWFuO1xuICAgIGZpbGxDb2xvcnM/OiBzdHJpbmdbXTtcbiAgfTtcbiAgaXRlbXM/OiB7XG4gICAgZGlzcGxheT86IHN0cmluZztcbiAgfTtcbiAgZml4ZWQ/OiB7XG4gICAgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgcG9zaXRpb24/OiBzdHJpbmc7IC8vIHRvcFJpZ2h0OyB0b3BMZWZ0OyBib3R0b21SaWdodDsgYm90dG9tTGVmdFxuICAgIG9mZnNldFg/OiBudW1iZXI7XG4gICAgb2Zmc2V0WT86IG51bWJlcjtcbiAgfTtcbn1cblxuLyoqXG4gKiBYIEF4aXMgb3B0aW9uc1xuICogU2VlIGh0dHBzOi8vYXBleGNoYXJ0cy5jb20vZG9jcy9vcHRpb25zL3hheGlzL1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEFwZXhYQXhpcyB7XG4gIHR5cGU/OiBcImNhdGVnb3J5XCIgfCBcImRhdGV0aW1lXCIgfCBcIm51bWVyaWNcIjtcbiAgY2F0ZWdvcmllcz86IGFueTtcbiAgb3ZlcndyaXRlQ2F0ZWdvcmllcz86IG51bWJlcltdIHwgc3RyaW5nW10gfCB1bmRlZmluZWQ7XG4gIG9mZnNldFg/OiBudW1iZXI7XG4gIG9mZnNldFk/OiBudW1iZXI7XG4gIHNvcnRlZD86IGJvb2xlYW47XG4gIGxhYmVscz86IHtcbiAgICBzaG93PzogYm9vbGVhbjtcbiAgICByb3RhdGU/OiBudW1iZXI7XG4gICAgcm90YXRlQWx3YXlzPzogYm9vbGVhbjtcbiAgICBoaWRlT3ZlcmxhcHBpbmdMYWJlbHM/OiBib29sZWFuO1xuICAgIHNob3dEdXBsaWNhdGVzPzogYm9vbGVhbjtcbiAgICB0cmltPzogYm9vbGVhbjtcbiAgICBtaW5IZWlnaHQ/OiBudW1iZXI7XG4gICAgbWF4SGVpZ2h0PzogbnVtYmVyO1xuICAgIHN0eWxlPzoge1xuICAgICAgY29sb3JzPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICBmb250U2l6ZT86IHN0cmluZztcbiAgICAgIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICAgICAgY3NzQ2xhc3M/OiBzdHJpbmc7XG4gICAgfTtcbiAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgIG9mZnNldFk/OiBudW1iZXI7XG4gICAgZm9ybWF0Pzogc3RyaW5nO1xuICAgIGRhdGV0aW1lVVRDPzogYm9vbGVhbjtcbiAgICBkYXRldGltZUZvcm1hdHRlcj86IHtcbiAgICAgIHllYXI/OiBzdHJpbmc7XG4gICAgICBtb250aD86IHN0cmluZztcbiAgICAgIGRheT86IHN0cmluZztcbiAgICAgIGhvdXI/OiBzdHJpbmc7XG4gICAgICBtaW51dGU/OiBzdHJpbmc7XG4gICAgfTtcbiAgICBmb3JtYXR0ZXI/KFxuICAgICAgdmFsdWU6IHN0cmluZyxcbiAgICAgIHRpbWVzdGFtcD86IG51bWJlcixcbiAgICAgIG9wdHM/OiBhbnlcbiAgICApOiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgfTtcbiAgYXhpc0JvcmRlcj86IHtcbiAgICBzaG93PzogYm9vbGVhbjtcbiAgICBjb2xvcj86IHN0cmluZztcbiAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgIG9mZnNldFk/OiBudW1iZXI7XG4gICAgc3Ryb2tlV2lkdGg/OiBudW1iZXI7XG4gIH07XG4gIGF4aXNUaWNrcz86IHtcbiAgICBzaG93PzogYm9vbGVhbjtcbiAgICBib3JkZXJUeXBlPzogc3RyaW5nO1xuICAgIGNvbG9yPzogc3RyaW5nO1xuICAgIGhlaWdodD86IG51bWJlcjtcbiAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgIG9mZnNldFk/OiBudW1iZXI7XG4gIH07XG4gIHRpY2tQbGFjZW1lbnQ/OiBzdHJpbmc7XG4gIHRpY2tBbW91bnQ/OiBudW1iZXIgfCBcImRhdGFQb2ludHNcIjtcbiAgbWluPzogbnVtYmVyO1xuICBtYXg/OiBudW1iZXI7XG4gIHJhbmdlPzogbnVtYmVyO1xuICBmbG9hdGluZz86IGJvb2xlYW47XG4gIGRlY2ltYWxzSW5GbG9hdD86IG51bWJlcjtcbiAgcG9zaXRpb24/OiBzdHJpbmc7XG4gIHRpdGxlPzoge1xuICAgIHRleHQ/OiBzdHJpbmc7XG4gICAgb2Zmc2V0WD86IG51bWJlcjtcbiAgICBvZmZzZXRZPzogbnVtYmVyO1xuICAgIHN0eWxlPzoge1xuICAgICAgY29sb3I/OiBzdHJpbmc7XG4gICAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICAgICAgZm9udFdlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgICAgIGZvbnRTaXplPzogc3RyaW5nO1xuICAgICAgY3NzQ2xhc3M/OiBzdHJpbmc7XG4gICAgfTtcbiAgfTtcbiAgY3Jvc3NoYWlycz86IHtcbiAgICBzaG93PzogYm9vbGVhbjtcbiAgICB3aWR0aD86IG51bWJlciB8IHN0cmluZztcbiAgICBwb3NpdGlvbj86IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHN0cm9rZT86IHtcbiAgICAgIGNvbG9yPzogc3RyaW5nO1xuICAgICAgd2lkdGg/OiBudW1iZXI7XG4gICAgICBkYXNoQXJyYXk/OiBudW1iZXI7XG4gICAgfTtcbiAgICBmaWxsPzoge1xuICAgICAgdHlwZT86IHN0cmluZztcbiAgICAgIGNvbG9yPzogc3RyaW5nO1xuICAgICAgZ3JhZGllbnQ/OiB7XG4gICAgICAgIGNvbG9yRnJvbT86IHN0cmluZztcbiAgICAgICAgY29sb3JUbz86IHN0cmluZztcbiAgICAgICAgc3RvcHM/OiBudW1iZXJbXTtcbiAgICAgICAgb3BhY2l0eUZyb20/OiBudW1iZXI7XG4gICAgICAgIG9wYWNpdHlUbz86IG51bWJlcjtcbiAgICAgIH07XG4gICAgfTtcbiAgICBkcm9wU2hhZG93PzogQXBleERyb3BTaGFkb3c7XG4gIH07XG4gIHRvb2x0aXA/OiB7XG4gICAgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgb2Zmc2V0WT86IG51bWJlcjtcbiAgICBzdHlsZT86IHtcbiAgICAgIGZvbnRTaXplPzogc3RyaW5nO1xuICAgICAgZm9udEZhbWlseT86IHN0cmluZztcbiAgICB9O1xuICAgIGZvcm1hdHRlcj8odmFsdWU6IHN0cmluZywgb3B0cz86IG9iamVjdCk6IHN0cmluZztcbiAgfTtcbn1cblxuLyoqXG4gKiBZIEF4aXMgb3B0aW9uc1xuICogU2VlIGh0dHBzOi8vYXBleGNoYXJ0cy5jb20vZG9jcy9vcHRpb25zL3lheGlzL1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEFwZXhZQXhpcyB7XG4gIHNob3c/OiBib29sZWFuO1xuICBzaG93QWx3YXlzPzogYm9vbGVhbjtcbiAgc2hvd0Zvck51bGxTZXJpZXM/OiBib29sZWFuO1xuICBzZXJpZXNOYW1lPzogc3RyaW5nO1xuICBvcHBvc2l0ZT86IGJvb2xlYW47XG4gIHJldmVyc2VkPzogYm9vbGVhbjtcbiAgbG9nYXJpdGhtaWM/OiBib29sZWFuO1xuICB0aWNrQW1vdW50PzogbnVtYmVyO1xuICBmb3JjZU5pY2VTY2FsZT86IGJvb2xlYW47XG4gIG1pbj86IG51bWJlciB8ICgobWluOiBudW1iZXIpID0+IG51bWJlcik7XG4gIG1heD86IG51bWJlciB8ICgobWF4OiBudW1iZXIpID0+IG51bWJlcik7XG4gIGZsb2F0aW5nPzogYm9vbGVhbjtcbiAgZGVjaW1hbHNJbkZsb2F0PzogbnVtYmVyO1xuICBsYWJlbHM/OiB7XG4gICAgc2hvdz86IGJvb2xlYW47XG4gICAgbWluV2lkdGg/OiBudW1iZXI7XG4gICAgbWF4V2lkdGg/OiBudW1iZXI7XG4gICAgb2Zmc2V0WD86IG51bWJlcjtcbiAgICBvZmZzZXRZPzogbnVtYmVyO1xuICAgIHJvdGF0ZT86IG51bWJlcjtcbiAgICBhbGlnbj86IFwibGVmdFwiIHwgXCJjZW50ZXJcIiB8IFwicmlnaHRcIjtcbiAgICBwYWRkaW5nPzogbnVtYmVyO1xuICAgIHN0eWxlPzoge1xuICAgICAgY29sb3JzPzogc3RyaW5nIHwgc3RyaW5nW107XG4gICAgICBmb250U2l6ZT86IHN0cmluZztcbiAgICAgIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gICAgICBmb250V2VpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICAgICAgY3NzQ2xhc3M/OiBzdHJpbmc7XG4gICAgfTtcbiAgICBmb3JtYXR0ZXI/KHZhbDogbnVtYmVyLCBvcHRzPzogYW55KTogc3RyaW5nIHwgc3RyaW5nW107XG4gIH07XG4gIGF4aXNCb3JkZXI/OiB7XG4gICAgc2hvdz86IGJvb2xlYW47XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgd2lkdGg/OiBudW1iZXI7XG4gICAgb2Zmc2V0WD86IG51bWJlcjtcbiAgICBvZmZzZXRZPzogbnVtYmVyO1xuICB9O1xuICBheGlzVGlja3M/OiB7XG4gICAgc2hvdz86IGJvb2xlYW47XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgd2lkdGg/OiBudW1iZXI7XG4gICAgb2Zmc2V0WD86IG51bWJlcjtcbiAgICBvZmZzZXRZPzogbnVtYmVyO1xuICB9O1xuICB0aXRsZT86IHtcbiAgICB0ZXh0Pzogc3RyaW5nO1xuICAgIHJvdGF0ZT86IG51bWJlcjtcbiAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgIG9mZnNldFk/OiBudW1iZXI7XG4gICAgc3R5bGU/OiB7XG4gICAgICBjb2xvcj86IHN0cmluZztcbiAgICAgIGZvbnRTaXplPzogc3RyaW5nO1xuICAgICAgZm9udEZhbWlseT86IHN0cmluZztcbiAgICAgIGZvbnRXZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gICAgICBjc3NDbGFzcz86IHN0cmluZztcbiAgICB9O1xuICB9O1xuICBjcm9zc2hhaXJzPzoge1xuICAgIHNob3c/OiBib29sZWFuO1xuICAgIHBvc2l0aW9uPzogc3RyaW5nO1xuICAgIHN0cm9rZT86IHtcbiAgICAgIGNvbG9yPzogc3RyaW5nO1xuICAgICAgd2lkdGg/OiBudW1iZXI7XG4gICAgICBkYXNoQXJyYXk/OiBudW1iZXI7XG4gICAgfTtcbiAgfTtcbiAgdG9vbHRpcD86IHtcbiAgICBlbmFibGVkPzogYm9vbGVhbjtcbiAgICBvZmZzZXRYPzogbnVtYmVyO1xuICB9O1xufVxuXG4vKipcbiAqIFBsb3QgWCBhbmQgWSBncmlkIG9wdGlvbnNcbiAqIFNlZSBodHRwczovL2FwZXhjaGFydHMuY29tL2RvY3Mvb3B0aW9ucy9ncmlkL1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEFwZXhHcmlkIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIGJvcmRlckNvbG9yPzogc3RyaW5nO1xuICBzdHJva2VEYXNoQXJyYXk/OiBudW1iZXI7XG4gIHBvc2l0aW9uPzogXCJmcm9udFwiIHwgXCJiYWNrXCI7XG4gIHhheGlzPzoge1xuICAgIGxpbmVzPzoge1xuICAgICAgc2hvdz86IGJvb2xlYW47XG4gICAgICBvZmZzZXRYPzogbnVtYmVyO1xuICAgICAgb2Zmc2V0WT86IG51bWJlcjtcbiAgICB9O1xuICB9O1xuICB5YXhpcz86IHtcbiAgICBsaW5lcz86IHtcbiAgICAgIHNob3c/OiBib29sZWFuO1xuICAgICAgb2Zmc2V0WD86IG51bWJlcjtcbiAgICAgIG9mZnNldFk/OiBudW1iZXI7XG4gICAgfTtcbiAgfTtcbiAgcm93Pzoge1xuICAgIGNvbG9ycz86IHN0cmluZ1tdO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gIH07XG4gIGNvbHVtbj86IHtcbiAgICBjb2xvcnM/OiBzdHJpbmdbXTtcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICB9O1xuICBwYWRkaW5nPzoge1xuICAgIHRvcD86IG51bWJlcjtcbiAgICByaWdodD86IG51bWJlcjtcbiAgICBib3R0b20/OiBudW1iZXI7XG4gICAgbGVmdD86IG51bWJlcjtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBBcGV4VGhlbWUge1xuICBtb2RlPzogXCJsaWdodFwiIHwgXCJkYXJrXCI7XG4gIHBhbGV0dGU/OiBzdHJpbmc7XG4gIG1vbm9jaHJvbWU/OiB7XG4gICAgZW5hYmxlZD86IGJvb2xlYW47XG4gICAgY29sb3I/OiBzdHJpbmc7XG4gICAgc2hhZGVUbz86IFwibGlnaHRcIiB8IFwiZGFya1wiO1xuICAgIHNoYWRlSW50ZW5zaXR5PzogbnVtYmVyO1xuICB9O1xufVxuXG5pbnRlcmZhY2UgQXBleERpc2NyZXRlUG9pbnQge1xuICBzZXJpZXNJbmRleD86IG51bWJlcjtcbiAgZGF0YVBvaW50SW5kZXg/OiBudW1iZXI7XG4gIGZpbGxDb2xvcj86IHN0cmluZztcbiAgc3Ryb2tlQ29sb3I/OiBzdHJpbmc7XG4gIHNpemU/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBleE1hcmtlcnMge1xuICBzaXplPzogbnVtYmVyIHwgbnVtYmVyW107XG4gIHdpZHRoPzogbnVtYmVyIHwgbnVtYmVyW107XG4gIGhlaWdodD86IG51bWJlciB8IG51bWJlcltdO1xuICBjb2xvcnM/OiBzdHJpbmdbXTtcbiAgc3Ryb2tlQ29sb3JzPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIHN0cm9rZVdpZHRoPzogbnVtYmVyIHwgbnVtYmVyW107XG4gIHN0cm9rZU9wYWNpdHk/OiBudW1iZXIgfCBudW1iZXJbXTtcbiAgc3Ryb2tlRGFzaEFycmF5PzogbnVtYmVyIHwgbnVtYmVyW107XG4gIGZpbGxPcGFjaXR5PzogbnVtYmVyIHwgbnVtYmVyW107XG4gIGRpc2NyZXRlPzogQXBleERpc2NyZXRlUG9pbnRbXTtcbiAgc2hhcGU/OiBcImNpcmNsZVwiIHwgXCJzcXVhcmVcIiB8IFwicmVjdFwiIHwgc3RyaW5nW107XG4gIHJhZGl1cz86IG51bWJlcjtcbiAgb2Zmc2V0WD86IG51bWJlcjtcbiAgb2Zmc2V0WT86IG51bWJlcjtcbiAgc2hvd051bGxEYXRhUG9pbnRzPzogYm9vbGVhbjtcbiAgaG92ZXI/OiB7XG4gICAgc2l6ZT86IG51bWJlcjtcbiAgICBzaXplT2Zmc2V0PzogbnVtYmVyO1xuICB9O1xuICBvbkNsaWNrPyhlPzogYW55KTogdm9pZDtcbiAgb25EYmxDbGljaz8oZT86IGFueSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXBleE5vRGF0YSB7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGFsaWduPzogXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImNlbnRlclwiO1xuICB2ZXJ0aWNhbEFsaWduPzogXCJ0b3BcIiB8IFwibWlkZGxlXCIgfCBcImJvdHRvbVwiO1xuICBvZmZzZXRYPzogbnVtYmVyO1xuICBvZmZzZXRZPzogbnVtYmVyO1xuICBzdHlsZT86IHtcbiAgICBjb2xvcj86IHN0cmluZztcbiAgICBmb250U2l6ZT86IHN0cmluZztcbiAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBDaGFydFR5cGUgPVxuICB8IFwibGluZVwiXG4gIHwgXCJhcmVhXCJcbiAgfCBcImJhclwiXG4gIHwgXCJoaXN0b2dyYW1cIlxuICB8IFwicGllXCJcbiAgfCBcImRvbnV0XCJcbiAgfCBcInJhZGlhbEJhclwiXG4gIHwgXCJzY2F0dGVyXCJcbiAgfCBcImJ1YmJsZVwiXG4gIHwgXCJoZWF0bWFwXCJcbiAgfCBcImNhbmRsZXN0aWNrXCJcbiAgfCBcImJveFBsb3RcIlxuICB8IFwicmFkYXJcIlxuICB8IFwicG9sYXJBcmVhXCJcbiAgfCBcInJhbmdlQmFyXCJcbiAgfCBcInRyZWVtYXBcIjtcbiJdfQ==