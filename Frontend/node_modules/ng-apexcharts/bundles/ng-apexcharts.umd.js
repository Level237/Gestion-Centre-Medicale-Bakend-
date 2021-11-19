(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('apexcharts')) :
    typeof define === 'function' && define.amd ? define('ng-apexcharts', ['exports', '@angular/core', 'rxjs', 'apexcharts'], factory) :
    (global = global || self, factory(global['ng-apexcharts'] = {}, global.ng.core, global.rxjs, global.ApexCharts));
}(this, (function (exports, core, rxjs, ApexCharts) { 'use strict';

    ApexCharts = ApexCharts && Object.prototype.hasOwnProperty.call(ApexCharts, 'default') ? ApexCharts['default'] : ApexCharts;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __createBinding(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    }

    function __exportStar(m, exports) {
        for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/chart/chart.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ChartComponent = /** @class */ (function () {
        function ChartComponent() {
            this.autoUpdateSeries = true;
        }
        /**
         * @return {?}
         */
        ChartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            var _this = this;
            rxjs.asapScheduler.schedule((/**
             * @return {?}
             */
            function () {
                _this.createElement();
            }));
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        ChartComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            var _this = this;
            rxjs.asapScheduler.schedule((/**
             * @return {?}
             */
            function () {
                if (_this.autoUpdateSeries &&
                    Object.keys(changes).filter((/**
                     * @param {?} c
                     * @return {?}
                     */
                    function (c) { return c !== "series"; })).length === 0) {
                    _this.updateSeries(_this.series, true);
                    return;
                }
                _this.createElement();
            }));
        };
        /**
         * @return {?}
         */
        ChartComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            if (this.chartObj) {
                this.chartObj.destroy();
            }
        };
        /**
         * @private
         * @return {?}
         */
        ChartComponent.prototype.createElement = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var options = {};
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
        };
        /**
         * @return {?}
         */
        ChartComponent.prototype.render = /**
         * @return {?}
         */
        function () {
            return this.chartObj.render();
        };
        /**
         * @param {?} options
         * @param {?=} redrawPaths
         * @param {?=} animate
         * @param {?=} updateSyncedCharts
         * @return {?}
         */
        ChartComponent.prototype.updateOptions = /**
         * @param {?} options
         * @param {?=} redrawPaths
         * @param {?=} animate
         * @param {?=} updateSyncedCharts
         * @return {?}
         */
        function (options, redrawPaths, animate, updateSyncedCharts) {
            return this.chartObj.updateOptions(options, redrawPaths, animate, updateSyncedCharts);
        };
        /**
         * @param {?} newSeries
         * @param {?=} animate
         * @return {?}
         */
        ChartComponent.prototype.updateSeries = /**
         * @param {?} newSeries
         * @param {?=} animate
         * @return {?}
         */
        function (newSeries, animate) {
            this.chartObj.updateSeries(newSeries, animate);
        };
        /**
         * @param {?} newSeries
         * @param {?=} animate
         * @return {?}
         */
        ChartComponent.prototype.appendSeries = /**
         * @param {?} newSeries
         * @param {?=} animate
         * @return {?}
         */
        function (newSeries, animate) {
            this.chartObj.appendSeries(newSeries, animate);
        };
        /**
         * @param {?} newData
         * @return {?}
         */
        ChartComponent.prototype.appendData = /**
         * @param {?} newData
         * @return {?}
         */
        function (newData) {
            this.chartObj.appendData(newData);
        };
        /**
         * @param {?} seriesName
         * @return {?}
         */
        ChartComponent.prototype.toggleSeries = /**
         * @param {?} seriesName
         * @return {?}
         */
        function (seriesName) {
            return this.chartObj.toggleSeries(seriesName);
        };
        /**
         * @param {?} seriesName
         * @return {?}
         */
        ChartComponent.prototype.showSeries = /**
         * @param {?} seriesName
         * @return {?}
         */
        function (seriesName) {
            this.chartObj.showSeries(seriesName);
        };
        /**
         * @param {?} seriesName
         * @return {?}
         */
        ChartComponent.prototype.hideSeries = /**
         * @param {?} seriesName
         * @return {?}
         */
        function (seriesName) {
            this.chartObj.hideSeries(seriesName);
        };
        /**
         * @return {?}
         */
        ChartComponent.prototype.resetSeries = /**
         * @return {?}
         */
        function () {
            this.chartObj.resetSeries();
        };
        /**
         * @param {?} min
         * @param {?} max
         * @return {?}
         */
        ChartComponent.prototype.zoomX = /**
         * @param {?} min
         * @param {?} max
         * @return {?}
         */
        function (min, max) {
            this.chartObj.zoomX(min, max);
        };
        /**
         * @param {?} seriesIndex
         * @param {?=} dataPointIndex
         * @return {?}
         */
        ChartComponent.prototype.toggleDataPointSelection = /**
         * @param {?} seriesIndex
         * @param {?=} dataPointIndex
         * @return {?}
         */
        function (seriesIndex, dataPointIndex) {
            this.chartObj.toggleDataPointSelection(seriesIndex, dataPointIndex);
        };
        /**
         * @return {?}
         */
        ChartComponent.prototype.destroy = /**
         * @return {?}
         */
        function () {
            this.chartObj.destroy();
        };
        /**
         * @param {?=} localeName
         * @return {?}
         */
        ChartComponent.prototype.setLocale = /**
         * @param {?=} localeName
         * @return {?}
         */
        function (localeName) {
            this.chartObj.setLocale(localeName);
        };
        /**
         * @return {?}
         */
        ChartComponent.prototype.paper = /**
         * @return {?}
         */
        function () {
            this.chartObj.paper();
        };
        /**
         * @param {?} options
         * @param {?=} pushToMemory
         * @param {?=} context
         * @return {?}
         */
        ChartComponent.prototype.addXaxisAnnotation = /**
         * @param {?} options
         * @param {?=} pushToMemory
         * @param {?=} context
         * @return {?}
         */
        function (options, pushToMemory, context) {
            this.chartObj.addXaxisAnnotation(options, pushToMemory, context);
        };
        /**
         * @param {?} options
         * @param {?=} pushToMemory
         * @param {?=} context
         * @return {?}
         */
        ChartComponent.prototype.addYaxisAnnotation = /**
         * @param {?} options
         * @param {?=} pushToMemory
         * @param {?=} context
         * @return {?}
         */
        function (options, pushToMemory, context) {
            this.chartObj.addYaxisAnnotation(options, pushToMemory, context);
        };
        /**
         * @param {?} options
         * @param {?=} pushToMemory
         * @param {?=} context
         * @return {?}
         */
        ChartComponent.prototype.addPointAnnotation = /**
         * @param {?} options
         * @param {?=} pushToMemory
         * @param {?=} context
         * @return {?}
         */
        function (options, pushToMemory, context) {
            this.chartObj.addPointAnnotation(options, pushToMemory, context);
        };
        /**
         * @param {?} id
         * @param {?=} options
         * @return {?}
         */
        ChartComponent.prototype.removeAnnotation = /**
         * @param {?} id
         * @param {?=} options
         * @return {?}
         */
        function (id, options) {
            this.chartObj.removeAnnotation(id, options);
        };
        /**
         * @param {?=} options
         * @return {?}
         */
        ChartComponent.prototype.clearAnnotations = /**
         * @param {?=} options
         * @return {?}
         */
        function (options) {
            this.chartObj.clearAnnotations(options);
        };
        /**
         * @return {?}
         */
        ChartComponent.prototype.dataURI = /**
         * @return {?}
         */
        function () {
            return this.chartObj.dataURI();
        };
        ChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: "apx-chart",
                        template: "<div #chart></div>\n",
                        styles: [""]
                    }] }
        ];
        ChartComponent.propDecorators = {
            chart: [{ type: core.Input }],
            annotations: [{ type: core.Input }],
            colors: [{ type: core.Input }],
            dataLabels: [{ type: core.Input }],
            series: [{ type: core.Input }],
            stroke: [{ type: core.Input }],
            labels: [{ type: core.Input }],
            legend: [{ type: core.Input }],
            markers: [{ type: core.Input }],
            noData: [{ type: core.Input }],
            fill: [{ type: core.Input }],
            tooltip: [{ type: core.Input }],
            plotOptions: [{ type: core.Input }],
            responsive: [{ type: core.Input }],
            xaxis: [{ type: core.Input }],
            yaxis: [{ type: core.Input }],
            grid: [{ type: core.Input }],
            states: [{ type: core.Input }],
            title: [{ type: core.Input }],
            subtitle: [{ type: core.Input }],
            theme: [{ type: core.Input }],
            autoUpdateSeries: [{ type: core.Input }],
            chartElement: [{ type: core.ViewChild, args: ["chart", { static: true },] }]
        };
        return ChartComponent;
    }());
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
    var declerations = [ChartComponent];
    var NgApexchartsModule = /** @class */ (function () {
        function NgApexchartsModule() {
        }
        NgApexchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: __spread(declerations),
                        imports: [],
                        exports: __spread(declerations),
                    },] }
        ];
        return NgApexchartsModule;
    }());

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

    exports.ChartComponent = ChartComponent;
    exports.NgApexchartsModule = NgApexchartsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-apexcharts.umd.js.map
