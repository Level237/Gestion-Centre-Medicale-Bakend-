/**
 * @fileoverview added by tsickle
 * Generated from: lib/chart/chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, ViewChild, } from "@angular/core";
import { asapScheduler } from "rxjs";
import ApexCharts from "apexcharts";
export class ChartComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctYXBleGNoYXJ0cy8iLCJzb3VyY2VzIjpbImxpYi9jaGFydC9jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBS0wsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBc0J2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRXJDLE9BQU8sVUFBVSxNQUFNLFlBQVksQ0FBQztBQU9wQyxNQUFNLE9BQU8sY0FBYztJQUwzQjtRQTRCVyxxQkFBZ0IsR0FBRyxJQUFJLENBQUM7SUF5Tm5DLENBQUM7Ozs7SUFwTkMsUUFBUTtRQUNOLGFBQWEsQ0FBQyxRQUFROzs7UUFBQyxHQUFHLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsYUFBYSxDQUFDLFFBQVE7OztRQUFDLEdBQUcsRUFBRTtZQUMxQixJQUNFLElBQUksQ0FBQyxnQkFBZ0I7Z0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTTs7OztnQkFBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxLQUFLLFFBQVEsRUFBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQy9EO2dCQUNBLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDckMsT0FBTzthQUNSO1lBRUQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFP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dEMsb0NBQXNDOztJQUN0QywrQkFBMEI7O0lBQzFCLCtCQUF3Qzs7SUFDeEMsOEJBQXdCOztJQUN4QixnQ0FBNEI7O0lBQzVCLCtCQUFrQzs7SUFDbEMsa0NBQXFDOztJQUNyQywrQkFBMEI7O0lBRTFCLDBDQUFpQzs7Ozs7SUFFakMsc0NBQXVFOzs7OztJQUN2RSxrQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1xuICBBcGV4QW5ub3RhdGlvbnMsXG4gIEFwZXhBeGlzQ2hhcnRTZXJpZXMsXG4gIEFwZXhDaGFydCxcbiAgQXBleERhdGFMYWJlbHMsXG4gIEFwZXhGaWxsLFxuICBBcGV4R3JpZCxcbiAgQXBleExlZ2VuZCxcbiAgQXBleE5vbkF4aXNDaGFydFNlcmllcyxcbiAgQXBleE1hcmtlcnMsXG4gIEFwZXhOb0RhdGEsXG4gIEFwZXhQbG90T3B0aW9ucyxcbiAgQXBleFJlc3BvbnNpdmUsXG4gIEFwZXhTdGF0ZXMsXG4gIEFwZXhTdHJva2UsXG4gIEFwZXhUaGVtZSxcbiAgQXBleFRpdGxlU3VidGl0bGUsXG4gIEFwZXhUb29sdGlwLFxuICBBcGV4WEF4aXMsXG4gIEFwZXhZQXhpcyxcbn0gZnJvbSBcIi4uL21vZGVsL2FwZXgtdHlwZXNcIjtcbmltcG9ydCB7IGFzYXBTY2hlZHVsZXIgfSBmcm9tIFwicnhqc1wiO1xuXG5pbXBvcnQgQXBleENoYXJ0cyBmcm9tIFwiYXBleGNoYXJ0c1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwiYXB4LWNoYXJ0XCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vY2hhcnQuY29tcG9uZW50Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL2NoYXJ0LmNvbXBvbmVudC5jc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIGNoYXJ0OiBBcGV4Q2hhcnQ7XG4gIEBJbnB1dCgpIGFubm90YXRpb25zOiBBcGV4QW5ub3RhdGlvbnM7XG4gIEBJbnB1dCgpIGNvbG9yczogYW55W107XG4gIEBJbnB1dCgpIGRhdGFMYWJlbHM6IEFwZXhEYXRhTGFiZWxzO1xuICBASW5wdXQoKSBzZXJpZXM6IEFwZXhBeGlzQ2hhcnRTZXJpZXMgfCBBcGV4Tm9uQXhpc0NoYXJ0U2VyaWVzO1xuICBASW5wdXQoKSBzdHJva2U6IEFwZXhTdHJva2U7XG4gIEBJbnB1dCgpIGxhYmVsczogc3RyaW5nW107XG4gIEBJbnB1dCgpIGxlZ2VuZDogQXBleExlZ2VuZDtcbiAgQElucHV0KCkgbWFya2VyczogQXBleE1hcmtlcnM7XG4gIEBJbnB1dCgpIG5vRGF0YTogQXBleE5vRGF0YTtcbiAgQElucHV0KCkgZmlsbDogQXBleEZpbGw7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IEFwZXhUb29sdGlwO1xuICBASW5wdXQoKSBwbG90T3B0aW9uczogQXBleFBsb3RPcHRpb25zO1xuICBASW5wdXQoKSByZXNwb25zaXZlOiBBcGV4UmVzcG9uc2l2ZVtdO1xuICBASW5wdXQoKSB4YXhpczogQXBleFhBeGlzO1xuICBASW5wdXQoKSB5YXhpczogQXBleFlBeGlzIHwgQXBleFlBeGlzW107XG4gIEBJbnB1dCgpIGdyaWQ6IEFwZXhHcmlkO1xuICBASW5wdXQoKSBzdGF0ZXM6IEFwZXhTdGF0ZXM7XG4gIEBJbnB1dCgpIHRpdGxlOiBBcGV4VGl0bGVTdWJ0aXRsZTtcbiAgQElucHV0KCkgc3VidGl0bGU6IEFwZXhUaXRsZVN1YnRpdGxlO1xuICBASW5wdXQoKSB0aGVtZTogQXBleFRoZW1lO1xuXG4gIEBJbnB1dCgpIGF1dG9VcGRhdGVTZXJpZXMgPSB0cnVlO1xuXG4gIEBWaWV3Q2hpbGQoXCJjaGFydFwiLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIGNoYXJ0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgcHJpdmF0ZSBjaGFydE9iajogYW55O1xuXG4gIG5nT25Jbml0KCkge1xuICAgIGFzYXBTY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgdGhpcy5jcmVhdGVFbGVtZW50KCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgYXNhcFNjaGVkdWxlci5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuYXV0b1VwZGF0ZVNlcmllcyAmJlxuICAgICAgICBPYmplY3Qua2V5cyhjaGFuZ2VzKS5maWx0ZXIoKGMpID0+IGMgIT09IFwic2VyaWVzXCIpLmxlbmd0aCA9PT0gMFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU2VyaWVzKHRoaXMuc2VyaWVzLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLmNyZWF0ZUVsZW1lbnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNoYXJ0T2JqKSB7XG4gICAgICB0aGlzLmNoYXJ0T2JqLmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUVsZW1lbnQoKSB7XG4gICAgY29uc3Qgb3B0aW9uczogYW55ID0ge307XG5cbiAgICBpZiAodGhpcy5hbm5vdGF0aW9ucykge1xuICAgICAgb3B0aW9ucy5hbm5vdGF0aW9ucyA9IHRoaXMuYW5ub3RhdGlvbnM7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoYXJ0KSB7XG4gICAgICBvcHRpb25zLmNoYXJ0ID0gdGhpcy5jaGFydDtcbiAgICB9XG4gICAgaWYgKHRoaXMuY29sb3JzKSB7XG4gICAgICBvcHRpb25zLmNvbG9ycyA9IHRoaXMuY29sb3JzO1xuICAgIH1cbiAgICBpZiAodGhpcy5kYXRhTGFiZWxzKSB7XG4gICAgICBvcHRpb25zLmRhdGFMYWJlbHMgPSB0aGlzLmRhdGFMYWJlbHM7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlcmllcykge1xuICAgICAgb3B0aW9ucy5zZXJpZXMgPSB0aGlzLnNlcmllcztcbiAgICB9XG4gICAgaWYgKHRoaXMuc3Ryb2tlKSB7XG4gICAgICBvcHRpb25zLnN0cm9rZSA9IHRoaXMuc3Ryb2tlO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYWJlbHMpIHtcbiAgICAgIG9wdGlvbnMubGFiZWxzID0gdGhpcy5sYWJlbHM7XG4gICAgfVxuICAgIGlmICh0aGlzLmxlZ2VuZCkge1xuICAgICAgb3B0aW9ucy5sZWdlbmQgPSB0aGlzLmxlZ2VuZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuZmlsbCkge1xuICAgICAgb3B0aW9ucy5maWxsID0gdGhpcy5maWxsO1xuICAgIH1cbiAgICBpZiAodGhpcy50b29sdGlwKSB7XG4gICAgICBvcHRpb25zLnRvb2x0aXAgPSB0aGlzLnRvb2x0aXA7XG4gICAgfVxuICAgIGlmICh0aGlzLnBsb3RPcHRpb25zKSB7XG4gICAgICBvcHRpb25zLnBsb3RPcHRpb25zID0gdGhpcy5wbG90T3B0aW9ucztcbiAgICB9XG4gICAgaWYgKHRoaXMucmVzcG9uc2l2ZSkge1xuICAgICAgb3B0aW9ucy5yZXNwb25zaXZlID0gdGhpcy5yZXNwb25zaXZlO1xuICAgIH1cbiAgICBpZiAodGhpcy5tYXJrZXJzKSB7XG4gICAgICBvcHRpb25zLm1hcmtlcnMgPSB0aGlzLm1hcmtlcnM7XG4gICAgfVxuICAgIGlmICh0aGlzLm5vRGF0YSkge1xuICAgICAgb3B0aW9ucy5ub0RhdGEgPSB0aGlzLm5vRGF0YTtcbiAgICB9XG4gICAgaWYgKHRoaXMueGF4aXMpIHtcbiAgICAgIG9wdGlvbnMueGF4aXMgPSB0aGlzLnhheGlzO1xuICAgIH1cbiAgICBpZiAodGhpcy55YXhpcykge1xuICAgICAgb3B0aW9ucy55YXhpcyA9IHRoaXMueWF4aXM7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgIG9wdGlvbnMuZ3JpZCA9IHRoaXMuZ3JpZDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhdGVzKSB7XG4gICAgICBvcHRpb25zLnN0YXRlcyA9IHRoaXMuc3RhdGVzO1xuICAgIH1cbiAgICBpZiAodGhpcy50aXRsZSkge1xuICAgICAgb3B0aW9ucy50aXRsZSA9IHRoaXMudGl0bGU7XG4gICAgfVxuICAgIGlmICh0aGlzLnN1YnRpdGxlKSB7XG4gICAgICBvcHRpb25zLnN1YnRpdGxlID0gdGhpcy5zdWJ0aXRsZTtcbiAgICB9XG4gICAgaWYgKHRoaXMudGhlbWUpIHtcbiAgICAgIG9wdGlvbnMudGhlbWUgPSB0aGlzLnRoZW1lO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmNoYXJ0T2JqKSB7XG4gICAgICB0aGlzLmNoYXJ0T2JqLmRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICB0aGlzLmNoYXJ0T2JqID0gbmV3IEFwZXhDaGFydHModGhpcy5jaGFydEVsZW1lbnQubmF0aXZlRWxlbWVudCwgb3B0aW9ucyk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFydE9iai5yZW5kZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVPcHRpb25zKFxuICAgIG9wdGlvbnM6IGFueSxcbiAgICByZWRyYXdQYXRocz86IGJvb2xlYW4sXG4gICAgYW5pbWF0ZT86IGJvb2xlYW4sXG4gICAgdXBkYXRlU3luY2VkQ2hhcnRzPzogYm9vbGVhblxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFydE9iai51cGRhdGVPcHRpb25zKFxuICAgICAgb3B0aW9ucyxcbiAgICAgIHJlZHJhd1BhdGhzLFxuICAgICAgYW5pbWF0ZSxcbiAgICAgIHVwZGF0ZVN5bmNlZENoYXJ0c1xuICAgICk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlU2VyaWVzKFxuICAgIG5ld1NlcmllczogQXBleEF4aXNDaGFydFNlcmllcyB8IEFwZXhOb25BeGlzQ2hhcnRTZXJpZXMsXG4gICAgYW5pbWF0ZT86IGJvb2xlYW5cbiAgKSB7XG4gICAgdGhpcy5jaGFydE9iai51cGRhdGVTZXJpZXMobmV3U2VyaWVzLCBhbmltYXRlKTtcbiAgfVxuXG4gIHB1YmxpYyBhcHBlbmRTZXJpZXMoXG4gICAgbmV3U2VyaWVzOiBBcGV4QXhpc0NoYXJ0U2VyaWVzIHwgQXBleE5vbkF4aXNDaGFydFNlcmllcyxcbiAgICBhbmltYXRlPzogYm9vbGVhblxuICApIHtcbiAgICB0aGlzLmNoYXJ0T2JqLmFwcGVuZFNlcmllcyhuZXdTZXJpZXMsIGFuaW1hdGUpO1xuICB9XG5cbiAgcHVibGljIGFwcGVuZERhdGEobmV3RGF0YTogYW55W10pIHtcbiAgICB0aGlzLmNoYXJ0T2JqLmFwcGVuZERhdGEobmV3RGF0YSk7XG4gIH1cblxuICBwdWJsaWMgdG9nZ2xlU2VyaWVzKHNlcmllc05hbWU6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcnRPYmoudG9nZ2xlU2VyaWVzKHNlcmllc05hbWUpO1xuICB9XG5cbiAgcHVibGljIHNob3dTZXJpZXMoc2VyaWVzTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jaGFydE9iai5zaG93U2VyaWVzKHNlcmllc05hbWUpO1xuICB9XG5cbiAgcHVibGljIGhpZGVTZXJpZXMoc2VyaWVzTmFtZTogc3RyaW5nKSB7XG4gICAgdGhpcy5jaGFydE9iai5oaWRlU2VyaWVzKHNlcmllc05hbWUpO1xuICB9XG5cbiAgcHVibGljIHJlc2V0U2VyaWVzKCkge1xuICAgIHRoaXMuY2hhcnRPYmoucmVzZXRTZXJpZXMoKTtcbiAgfVxuXG4gIHB1YmxpYyB6b29tWChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnpvb21YKG1pbiwgbWF4KTtcbiAgfVxuXG4gIHB1YmxpYyB0b2dnbGVEYXRhUG9pbnRTZWxlY3Rpb24oXG4gICAgc2VyaWVzSW5kZXg6IG51bWJlcixcbiAgICBkYXRhUG9pbnRJbmRleD86IG51bWJlclxuICApIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnRvZ2dsZURhdGFQb2ludFNlbGVjdGlvbihzZXJpZXNJbmRleCwgZGF0YVBvaW50SW5kZXgpO1xuICB9XG5cbiAgcHVibGljIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5jaGFydE9iai5kZXN0cm95KCk7XG4gIH1cblxuICBwdWJsaWMgc2V0TG9jYWxlKGxvY2FsZU5hbWU/OiBzdHJpbmcpIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnNldExvY2FsZShsb2NhbGVOYW1lKTtcbiAgfVxuXG4gIHB1YmxpYyBwYXBlcigpIHtcbiAgICB0aGlzLmNoYXJ0T2JqLnBhcGVyKCk7XG4gIH1cblxuICBwdWJsaWMgYWRkWGF4aXNBbm5vdGF0aW9uKFxuICAgIG9wdGlvbnM6IGFueSxcbiAgICBwdXNoVG9NZW1vcnk/OiBib29sZWFuLFxuICAgIGNvbnRleHQ/OiBhbnlcbiAgKSB7XG4gICAgdGhpcy5jaGFydE9iai5hZGRYYXhpc0Fubm90YXRpb24ob3B0aW9ucywgcHVzaFRvTWVtb3J5LCBjb250ZXh0KTtcbiAgfVxuXG4gIHB1YmxpYyBhZGRZYXhpc0Fubm90YXRpb24oXG4gICAgb3B0aW9uczogYW55LFxuICAgIHB1c2hUb01lbW9yeT86IGJvb2xlYW4sXG4gICAgY29udGV4dD86IGFueVxuICApIHtcbiAgICB0aGlzLmNoYXJ0T2JqLmFkZFlheGlzQW5ub3RhdGlvbihvcHRpb25zLCBwdXNoVG9NZW1vcnksIGNvbnRleHQpO1xuICB9XG5cbiAgcHVibGljIGFkZFBvaW50QW5ub3RhdGlvbihcbiAgICBvcHRpb25zOiBhbnksXG4gICAgcHVzaFRvTWVtb3J5PzogYm9vbGVhbixcbiAgICBjb250ZXh0PzogYW55XG4gICkge1xuICAgIHRoaXMuY2hhcnRPYmouYWRkUG9pbnRBbm5vdGF0aW9uKG9wdGlvbnMsIHB1c2hUb01lbW9yeSwgY29udGV4dCk7XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlQW5ub3RhdGlvbihpZDogc3RyaW5nLCBvcHRpb25zPzogYW55KSB7XG4gICAgdGhpcy5jaGFydE9iai5yZW1vdmVBbm5vdGF0aW9uKGlkLCBvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBjbGVhckFubm90YXRpb25zKG9wdGlvbnM/OiBhbnkpIHtcbiAgICB0aGlzLmNoYXJ0T2JqLmNsZWFyQW5ub3RhdGlvbnMob3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZGF0YVVSSSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5jaGFydE9iai5kYXRhVVJJKCk7XG4gIH1cbn1cbiJdfQ==