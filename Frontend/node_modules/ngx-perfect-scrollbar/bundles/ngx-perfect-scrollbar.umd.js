(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('@angular/core'), require('@angular/common'), require('perfect-scrollbar'), require('resize-observer-polyfill')) :
    typeof define === 'function' && define.amd ? define('ngx-perfect-scrollbar', ['exports', 'rxjs', 'rxjs/operators', '@angular/core', '@angular/common', 'perfect-scrollbar', 'resize-observer-polyfill'], factory) :
    (global = global || self, factory(global['ngx-perfect-scrollbar'] = {}, global.rxjs, global.rxjs.operators, global.ng.core, global.ng.common, global.PerfectScrollbar, global.ResizeObserver));
}(this, (function (exports, rxjs, operators, core, common, PerfectScrollbar, ResizeObserver) { 'use strict';

    PerfectScrollbar = PerfectScrollbar && Object.prototype.hasOwnProperty.call(PerfectScrollbar, 'default') ? PerfectScrollbar['default'] : PerfectScrollbar;
    ResizeObserver = ResizeObserver && Object.prototype.hasOwnProperty.call(ResizeObserver, 'default') ? ResizeObserver['default'] : ResizeObserver;

    var PERFECT_SCROLLBAR_CONFIG = new core.InjectionToken('PERFECT_SCROLLBAR_CONFIG');
    var Geometry = /** @class */ (function () {
        function Geometry(x, y, w, h) {
            this.x = x;
            this.y = y;
            this.w = w;
            this.h = h;
        }
        return Geometry;
    }());
    var Position = /** @class */ (function () {
        function Position(x, y) {
            this.x = x;
            this.y = y;
        }
        return Position;
    }());
    var PerfectScrollbarEvents = [
        'psScrollY',
        'psScrollX',
        'psScrollUp',
        'psScrollDown',
        'psScrollLeft',
        'psScrollRight',
        'psYReachEnd',
        'psYReachStart',
        'psXReachEnd',
        'psXReachStart'
    ];
    var PerfectScrollbarConfig = /** @class */ (function () {
        function PerfectScrollbarConfig(config) {
            if (config === void 0) { config = {}; }
            this.assign(config);
        }
        PerfectScrollbarConfig.prototype.assign = function (config) {
            if (config === void 0) { config = {}; }
            for (var key in config) {
                this[key] = config[key];
            }
        };
        return PerfectScrollbarConfig;
    }());

    var PerfectScrollbarDirective = /** @class */ (function () {
        function PerfectScrollbarDirective(zone, differs, elementRef, platformId, defaults) {
            this.zone = zone;
            this.differs = differs;
            this.elementRef = elementRef;
            this.platformId = platformId;
            this.defaults = defaults;
            this.instance = null;
            this.ro = null;
            this.timeout = null;
            this.animation = null;
            this.configDiff = null;
            this.ngDestroy = new rxjs.Subject();
            this.disabled = false;
            this.psScrollY = new core.EventEmitter();
            this.psScrollX = new core.EventEmitter();
            this.psScrollUp = new core.EventEmitter();
            this.psScrollDown = new core.EventEmitter();
            this.psScrollLeft = new core.EventEmitter();
            this.psScrollRight = new core.EventEmitter();
            this.psYReachEnd = new core.EventEmitter();
            this.psYReachStart = new core.EventEmitter();
            this.psXReachEnd = new core.EventEmitter();
            this.psXReachStart = new core.EventEmitter();
        }
        PerfectScrollbarDirective.prototype.ngOnInit = function () {
            var _this = this;
            if (!this.disabled && common.isPlatformBrowser(this.platformId)) {
                var config_1 = new PerfectScrollbarConfig(this.defaults);
                config_1.assign(this.config); // Custom configuration
                this.zone.runOutsideAngular(function () {
                    _this.instance = new PerfectScrollbar(_this.elementRef.nativeElement, config_1);
                });
                if (!this.configDiff) {
                    this.configDiff = this.differs.find(this.config || {}).create();
                    this.configDiff.diff(this.config || {});
                }
                this.zone.runOutsideAngular(function () {
                    _this.ro = new ResizeObserver(function () {
                        _this.update();
                    });
                    if (_this.elementRef.nativeElement.children[0]) {
                        _this.ro.observe(_this.elementRef.nativeElement.children[0]);
                    }
                    _this.ro.observe(_this.elementRef.nativeElement);
                });
                this.zone.runOutsideAngular(function () {
                    PerfectScrollbarEvents.forEach(function (eventName) {
                        var eventType = eventName.replace(/([A-Z])/g, function (c) { return "-" + c.toLowerCase(); });
                        rxjs.fromEvent(_this.elementRef.nativeElement, eventType)
                            .pipe(operators.auditTime(20), operators.takeUntil(_this.ngDestroy))
                            .subscribe(function (event) {
                            _this[eventName].emit(event);
                        });
                    });
                });
            }
        };
        PerfectScrollbarDirective.prototype.ngOnDestroy = function () {
            var _this = this;
            if (common.isPlatformBrowser(this.platformId)) {
                this.ngDestroy.next();
                this.ngDestroy.complete();
                if (this.ro) {
                    this.ro.disconnect();
                }
                if (this.timeout && typeof window !== 'undefined') {
                    window.clearTimeout(this.timeout);
                }
                this.zone.runOutsideAngular(function () {
                    if (_this.instance) {
                        _this.instance.destroy();
                    }
                });
                this.instance = null;
            }
        };
        PerfectScrollbarDirective.prototype.ngDoCheck = function () {
            if (!this.disabled && this.configDiff && common.isPlatformBrowser(this.platformId)) {
                var changes = this.configDiff.diff(this.config || {});
                if (changes) {
                    this.ngOnDestroy();
                    this.ngOnInit();
                }
            }
        };
        PerfectScrollbarDirective.prototype.ngOnChanges = function (changes) {
            if (changes['disabled'] && !changes['disabled'].isFirstChange() && common.isPlatformBrowser(this.platformId)) {
                if (changes['disabled'].currentValue !== changes['disabled'].previousValue) {
                    if (changes['disabled'].currentValue === true) {
                        this.ngOnDestroy();
                    }
                    else if (changes['disabled'].currentValue === false) {
                        this.ngOnInit();
                    }
                }
            }
        };
        PerfectScrollbarDirective.prototype.ps = function () {
            return this.instance;
        };
        PerfectScrollbarDirective.prototype.update = function () {
            var _this = this;
            if (typeof window !== 'undefined') {
                if (this.timeout) {
                    window.clearTimeout(this.timeout);
                }
                this.timeout = window.setTimeout(function () {
                    if (!_this.disabled && _this.configDiff) {
                        try {
                            _this.zone.runOutsideAngular(function () {
                                if (_this.instance) {
                                    _this.instance.update();
                                }
                            });
                        }
                        catch (error) {
                            // Update can be finished after destroy so catch errors
                        }
                    }
                }, 0);
            }
        };
        PerfectScrollbarDirective.prototype.geometry = function (prefix) {
            if (prefix === void 0) { prefix = 'scroll'; }
            return new Geometry(this.elementRef.nativeElement[prefix + 'Left'], this.elementRef.nativeElement[prefix + 'Top'], this.elementRef.nativeElement[prefix + 'Width'], this.elementRef.nativeElement[prefix + 'Height']);
        };
        PerfectScrollbarDirective.prototype.position = function (absolute) {
            if (absolute === void 0) { absolute = false; }
            if (!absolute && this.instance) {
                return new Position(this.instance.reach.x || 0, this.instance.reach.y || 0);
            }
            else {
                return new Position(this.elementRef.nativeElement.scrollLeft, this.elementRef.nativeElement.scrollTop);
            }
        };
        PerfectScrollbarDirective.prototype.scrollable = function (direction) {
            if (direction === void 0) { direction = 'any'; }
            var element = this.elementRef.nativeElement;
            if (direction === 'any') {
                return element.classList.contains('ps--active-x') ||
                    element.classList.contains('ps--active-y');
            }
            else if (direction === 'both') {
                return element.classList.contains('ps--active-x') &&
                    element.classList.contains('ps--active-y');
            }
            else {
                return element.classList.contains('ps--active-' + direction);
            }
        };
        PerfectScrollbarDirective.prototype.scrollTo = function (x, y, speed) {
            if (!this.disabled) {
                if (y == null && speed == null) {
                    this.animateScrolling('scrollTop', x, speed);
                }
                else {
                    if (x != null) {
                        this.animateScrolling('scrollLeft', x, speed);
                    }
                    if (y != null) {
                        this.animateScrolling('scrollTop', y, speed);
                    }
                }
            }
        };
        PerfectScrollbarDirective.prototype.scrollToX = function (x, speed) {
            this.animateScrolling('scrollLeft', x, speed);
        };
        PerfectScrollbarDirective.prototype.scrollToY = function (y, speed) {
            this.animateScrolling('scrollTop', y, speed);
        };
        PerfectScrollbarDirective.prototype.scrollToTop = function (offset, speed) {
            this.animateScrolling('scrollTop', (offset || 0), speed);
        };
        PerfectScrollbarDirective.prototype.scrollToLeft = function (offset, speed) {
            this.animateScrolling('scrollLeft', (offset || 0), speed);
        };
        PerfectScrollbarDirective.prototype.scrollToRight = function (offset, speed) {
            var left = this.elementRef.nativeElement.scrollWidth -
                this.elementRef.nativeElement.clientWidth;
            this.animateScrolling('scrollLeft', left - (offset || 0), speed);
        };
        PerfectScrollbarDirective.prototype.scrollToBottom = function (offset, speed) {
            var top = this.elementRef.nativeElement.scrollHeight -
                this.elementRef.nativeElement.clientHeight;
            this.animateScrolling('scrollTop', top - (offset || 0), speed);
        };
        PerfectScrollbarDirective.prototype.scrollToElement = function (element, offset, speed) {
            if (typeof element === 'string') {
                element = this.elementRef.nativeElement.querySelector(element);
            }
            if (element) {
                var elementPos = element.getBoundingClientRect();
                var scrollerPos = this.elementRef.nativeElement.getBoundingClientRect();
                if (this.elementRef.nativeElement.classList.contains('ps--active-x')) {
                    var currentPos = this.elementRef.nativeElement['scrollLeft'];
                    var position = elementPos.left - scrollerPos.left + currentPos;
                    this.animateScrolling('scrollLeft', position + (offset || 0), speed);
                }
                if (this.elementRef.nativeElement.classList.contains('ps--active-y')) {
                    var currentPos = this.elementRef.nativeElement['scrollTop'];
                    var position = elementPos.top - scrollerPos.top + currentPos;
                    this.animateScrolling('scrollTop', position + (offset || 0), speed);
                }
            }
        };
        PerfectScrollbarDirective.prototype.animateScrolling = function (target, value, speed) {
            var _this = this;
            if (this.animation) {
                window.cancelAnimationFrame(this.animation);
                this.animation = null;
            }
            if (!speed || typeof window === 'undefined') {
                this.elementRef.nativeElement[target] = value;
            }
            else if (value !== this.elementRef.nativeElement[target]) {
                var newValue_1 = 0;
                var scrollCount_1 = 0;
                var oldTimestamp_1 = performance.now();
                var oldValue_1 = this.elementRef.nativeElement[target];
                var cosParameter_1 = (oldValue_1 - value) / 2;
                var step_1 = function (newTimestamp) {
                    scrollCount_1 += Math.PI / (speed / (newTimestamp - oldTimestamp_1));
                    newValue_1 = Math.round(value + cosParameter_1 + cosParameter_1 * Math.cos(scrollCount_1));
                    // Only continue animation if scroll position has not changed
                    if (_this.elementRef.nativeElement[target] === oldValue_1) {
                        if (scrollCount_1 >= Math.PI) {
                            _this.animateScrolling(target, value, 0);
                        }
                        else {
                            _this.elementRef.nativeElement[target] = newValue_1;
                            // On a zoomed out page the resulting offset may differ
                            oldValue_1 = _this.elementRef.nativeElement[target];
                            oldTimestamp_1 = newTimestamp;
                            _this.animation = window.requestAnimationFrame(step_1);
                        }
                    }
                };
                window.requestAnimationFrame(step_1);
            }
        };
        return PerfectScrollbarDirective;
    }());
    PerfectScrollbarDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[perfectScrollbar]',
                    exportAs: 'ngxPerfectScrollbar'
                },] }
    ];
    PerfectScrollbarDirective.ctorParameters = function () { return [
        { type: core.NgZone },
        { type: core.KeyValueDiffers },
        { type: core.ElementRef },
        { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] },
        { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [PERFECT_SCROLLBAR_CONFIG,] }] }
    ]; };
    PerfectScrollbarDirective.propDecorators = {
        disabled: [{ type: core.Input }],
        config: [{ type: core.Input, args: ['perfectScrollbar',] }],
        psScrollY: [{ type: core.Output }],
        psScrollX: [{ type: core.Output }],
        psScrollUp: [{ type: core.Output }],
        psScrollDown: [{ type: core.Output }],
        psScrollLeft: [{ type: core.Output }],
        psScrollRight: [{ type: core.Output }],
        psYReachEnd: [{ type: core.Output }],
        psYReachStart: [{ type: core.Output }],
        psXReachEnd: [{ type: core.Output }],
        psXReachStart: [{ type: core.Output }]
    };

    var PerfectScrollbarComponent = /** @class */ (function () {
        function PerfectScrollbarComponent(zone, cdRef, platformId) {
            this.zone = zone;
            this.cdRef = cdRef;
            this.platformId = platformId;
            this.states = {};
            this.indicatorX = false;
            this.indicatorY = false;
            this.interaction = false;
            this.scrollPositionX = 0;
            this.scrollPositionY = 0;
            this.scrollDirectionX = 0;
            this.scrollDirectionY = 0;
            this.usePropagationX = false;
            this.usePropagationY = false;
            this.allowPropagationX = false;
            this.allowPropagationY = false;
            this.stateTimeout = null;
            this.ngDestroy = new rxjs.Subject();
            this.stateUpdate = new rxjs.Subject();
            this.disabled = false;
            this.usePSClass = true;
            this.autoPropagation = false;
            this.scrollIndicators = false;
            this.psScrollY = new core.EventEmitter();
            this.psScrollX = new core.EventEmitter();
            this.psScrollUp = new core.EventEmitter();
            this.psScrollDown = new core.EventEmitter();
            this.psScrollLeft = new core.EventEmitter();
            this.psScrollRight = new core.EventEmitter();
            this.psYReachEnd = new core.EventEmitter();
            this.psYReachStart = new core.EventEmitter();
            this.psXReachEnd = new core.EventEmitter();
            this.psXReachStart = new core.EventEmitter();
        }
        PerfectScrollbarComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (common.isPlatformBrowser(this.platformId)) {
                this.stateUpdate
                    .pipe(operators.takeUntil(this.ngDestroy), operators.distinctUntilChanged(function (a, b) { return (a === b && !_this.stateTimeout); }))
                    .subscribe(function (state) {
                    if (_this.stateTimeout && typeof window !== 'undefined') {
                        window.clearTimeout(_this.stateTimeout);
                        _this.stateTimeout = null;
                    }
                    if (state === 'x' || state === 'y') {
                        _this.interaction = false;
                        if (state === 'x') {
                            _this.indicatorX = false;
                            _this.states.left = false;
                            _this.states.right = false;
                            if (_this.autoPropagation && _this.usePropagationX) {
                                _this.allowPropagationX = false;
                            }
                        }
                        else if (state === 'y') {
                            _this.indicatorY = false;
                            _this.states.top = false;
                            _this.states.bottom = false;
                            if (_this.autoPropagation && _this.usePropagationY) {
                                _this.allowPropagationY = false;
                            }
                        }
                    }
                    else {
                        if (state === 'left' || state === 'right') {
                            _this.states.left = false;
                            _this.states.right = false;
                            _this.states[state] = true;
                            if (_this.autoPropagation && _this.usePropagationX) {
                                _this.indicatorX = true;
                            }
                        }
                        else if (state === 'top' || state === 'bottom') {
                            _this.states.top = false;
                            _this.states.bottom = false;
                            _this.states[state] = true;
                            if (_this.autoPropagation && _this.usePropagationY) {
                                _this.indicatorY = true;
                            }
                        }
                        if (_this.autoPropagation && typeof window !== 'undefined') {
                            _this.stateTimeout = window.setTimeout(function () {
                                _this.indicatorX = false;
                                _this.indicatorY = false;
                                _this.stateTimeout = null;
                                if (_this.interaction && (_this.states.left || _this.states.right)) {
                                    _this.allowPropagationX = true;
                                }
                                if (_this.interaction && (_this.states.top || _this.states.bottom)) {
                                    _this.allowPropagationY = true;
                                }
                                _this.cdRef.markForCheck();
                            }, 500);
                        }
                    }
                    _this.cdRef.markForCheck();
                    _this.cdRef.detectChanges();
                });
                this.zone.runOutsideAngular(function () {
                    if (_this.directiveRef) {
                        var element = _this.directiveRef.elementRef.nativeElement;
                        rxjs.fromEvent(element, 'wheel')
                            .pipe(operators.takeUntil(_this.ngDestroy))
                            .subscribe(function (event) {
                            if (!_this.disabled && _this.autoPropagation) {
                                var scrollDeltaX = event.deltaX;
                                var scrollDeltaY = event.deltaY;
                                _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                            }
                        });
                        rxjs.fromEvent(element, 'touchmove')
                            .pipe(operators.takeUntil(_this.ngDestroy))
                            .subscribe(function (event) {
                            if (!_this.disabled && _this.autoPropagation) {
                                var scrollPositionX = event.touches[0].clientX;
                                var scrollPositionY = event.touches[0].clientY;
                                var scrollDeltaX = scrollPositionX - _this.scrollPositionX;
                                var scrollDeltaY = scrollPositionY - _this.scrollPositionY;
                                _this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                                _this.scrollPositionX = scrollPositionX;
                                _this.scrollPositionY = scrollPositionY;
                            }
                        });
                        rxjs.merge(rxjs.fromEvent(element, 'ps-scroll-x')
                            .pipe(operators.mapTo('x')), rxjs.fromEvent(element, 'ps-scroll-y')
                            .pipe(operators.mapTo('y')), rxjs.fromEvent(element, 'ps-x-reach-end')
                            .pipe(operators.mapTo('right')), rxjs.fromEvent(element, 'ps-y-reach-end')
                            .pipe(operators.mapTo('bottom')), rxjs.fromEvent(element, 'ps-x-reach-start')
                            .pipe(operators.mapTo('left')), rxjs.fromEvent(element, 'ps-y-reach-start')
                            .pipe(operators.mapTo('top')))
                            .pipe(operators.takeUntil(_this.ngDestroy))
                            .subscribe(function (state) {
                            if (!_this.disabled && (_this.autoPropagation || _this.scrollIndicators)) {
                                _this.stateUpdate.next(state);
                            }
                        });
                    }
                });
                window.setTimeout(function () {
                    PerfectScrollbarEvents.forEach(function (eventName) {
                        if (_this.directiveRef) {
                            _this.directiveRef[eventName] = _this[eventName];
                        }
                    });
                }, 0);
            }
        };
        PerfectScrollbarComponent.prototype.ngOnDestroy = function () {
            if (common.isPlatformBrowser(this.platformId)) {
                this.ngDestroy.next();
                this.ngDestroy.unsubscribe();
                if (this.stateTimeout && typeof window !== 'undefined') {
                    window.clearTimeout(this.stateTimeout);
                }
            }
        };
        PerfectScrollbarComponent.prototype.ngDoCheck = function () {
            if (common.isPlatformBrowser(this.platformId)) {
                if (!this.disabled && this.autoPropagation && this.directiveRef) {
                    var element = this.directiveRef.elementRef.nativeElement;
                    this.usePropagationX = element.classList.contains('ps--active-x');
                    this.usePropagationY = element.classList.contains('ps--active-y');
                }
            }
        };
        PerfectScrollbarComponent.prototype.checkPropagation = function (event, deltaX, deltaY) {
            this.interaction = true;
            var scrollDirectionX = (deltaX < 0) ? -1 : 1;
            var scrollDirectionY = (deltaY < 0) ? -1 : 1;
            if ((this.usePropagationX && this.usePropagationY) ||
                (this.usePropagationX && (!this.allowPropagationX ||
                    (this.scrollDirectionX !== scrollDirectionX))) ||
                (this.usePropagationY && (!this.allowPropagationY ||
                    (this.scrollDirectionY !== scrollDirectionY)))) {
                event.preventDefault();
                event.stopPropagation();
            }
            if (!!deltaX) {
                this.scrollDirectionX = scrollDirectionX;
            }
            if (!!deltaY) {
                this.scrollDirectionY = scrollDirectionY;
            }
            this.stateUpdate.next('interaction');
            this.cdRef.detectChanges();
        };
        return PerfectScrollbarComponent;
    }());
    PerfectScrollbarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'perfect-scrollbar',
                    exportAs: 'ngxPerfectScrollbar',
                    template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
                    encapsulation: core.ViewEncapsulation.None,
                    styles: ["perfect-scrollbar{display:block;height:100%;max-height:100%;max-width:100%;overflow:hidden;position:relative;width:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:flex;flex-direction:column;height:auto;min-height:0;min-width:0}perfect-scrollbar[fxflex]>.ps{-webkit-box-flex:1;flex:1 1 auto;height:auto;min-height:0;min-width:0;width:auto}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{-webkit-box-align:inherit;-webkit-box-flex:1;-webkit-box-pack:inherit;align-content:inherit;align-items:inherit;display:flex;flex:1 1 auto;flex-direction:inherit;height:100%;justify-content:inherit;width:100%},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important}perfect-scrollbar>.ps{display:block;height:100%;max-height:100%;max-width:100%;position:static;width:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{bottom:0;display:block;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{opacity:0;position:absolute;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-height:24px;min-width:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{min-height:100%;min-width:24px;top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{cursor:default;left:auto!important;right:0!important;top:0!important;transition:width .2s linear,opacity .2s linear,background-color .2s linear;width:10px}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{bottom:0!important;cursor:default;height:10px;left:0!important;top:auto!important;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{background-color:#eee;opacity:.9}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{background:linear-gradient(180deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{background:linear-gradient(0deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{background:linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{background:linear-gradient(270deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:linear-gradient(180deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:linear-gradient(0deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:linear-gradient(90deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:linear-gradient(270deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{-ms-overflow-style:none;-ms-touch-action:auto;overflow:hidden!important;overflow-anchor:none;touch-action:auto}.ps__rail-x{bottom:0;height:15px}.ps__rail-x,.ps__rail-y{-webkit-transition:background-color .2s linear,opacity .2s linear;display:none;opacity:0;position:absolute;transition:background-color .2s linear,opacity .2s linear}.ps__rail-y{right:0;width:15px}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{background-color:transparent;display:block}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{-webkit-transition:background-color .2s linear,height .2s ease-in-out;bottom:2px;height:6px;transition:background-color .2s linear,height .2s ease-in-out}.ps__thumb-x,.ps__thumb-y{background-color:#aaa;border-radius:6px;position:absolute}.ps__thumb-y{-webkit-transition:background-color .2s linear,width .2s ease-in-out;right:2px;transition:background-color .2s linear,width .2s ease-in-out;width:6px}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}"]
                },] }
    ];
    PerfectScrollbarComponent.ctorParameters = function () { return [
        { type: core.NgZone },
        { type: core.ChangeDetectorRef },
        { type: Object, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] }] }
    ]; };
    PerfectScrollbarComponent.propDecorators = {
        disabled: [{ type: core.Input }],
        usePSClass: [{ type: core.Input }],
        autoPropagation: [{ type: core.HostBinding, args: ['class.ps-show-limits',] }, { type: core.Input }],
        scrollIndicators: [{ type: core.HostBinding, args: ['class.ps-show-active',] }, { type: core.Input }],
        config: [{ type: core.Input }],
        psScrollY: [{ type: core.Output }],
        psScrollX: [{ type: core.Output }],
        psScrollUp: [{ type: core.Output }],
        psScrollDown: [{ type: core.Output }],
        psScrollLeft: [{ type: core.Output }],
        psScrollRight: [{ type: core.Output }],
        psYReachEnd: [{ type: core.Output }],
        psYReachStart: [{ type: core.Output }],
        psXReachEnd: [{ type: core.Output }],
        psXReachStart: [{ type: core.Output }],
        directiveRef: [{ type: core.ViewChild, args: [PerfectScrollbarDirective, { static: true },] }]
    };

    var ForceNativeScrollDirective = /** @class */ (function () {
        function ForceNativeScrollDirective(renderer, el) {
            var _this = this;
            this.renderer = renderer;
            ['ps__child', 'ps__child--consume'].forEach(function (className) {
                _this.renderer.addClass(el === null || el === void 0 ? void 0 : el.nativeElement, className);
            });
        }
        return ForceNativeScrollDirective;
    }());
    ForceNativeScrollDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[forceNativeScrolling]'
                },] }
    ];
    ForceNativeScrollDirective.ctorParameters = function () { return [
        { type: core.Renderer2 },
        { type: core.ElementRef }
    ]; };

    var PerfectScrollbarModule = /** @class */ (function () {
        function PerfectScrollbarModule() {
        }
        return PerfectScrollbarModule;
    }());
    PerfectScrollbarModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [PerfectScrollbarComponent, PerfectScrollbarDirective, ForceNativeScrollDirective],
                    exports: [common.CommonModule, PerfectScrollbarComponent, PerfectScrollbarDirective, ForceNativeScrollDirective]
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.Geometry = Geometry;
    exports.PERFECT_SCROLLBAR_CONFIG = PERFECT_SCROLLBAR_CONFIG;
    exports.PerfectScrollbarComponent = PerfectScrollbarComponent;
    exports.PerfectScrollbarConfig = PerfectScrollbarConfig;
    exports.PerfectScrollbarDirective = PerfectScrollbarDirective;
    exports.PerfectScrollbarModule = PerfectScrollbarModule;
    exports.Position = Position;
    exports.ɵa = ForceNativeScrollDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-perfect-scrollbar.umd.js.map
