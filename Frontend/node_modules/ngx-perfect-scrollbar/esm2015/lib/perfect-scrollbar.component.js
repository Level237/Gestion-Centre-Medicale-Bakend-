import { Subject, merge, fromEvent } from 'rxjs';
import { mapTo, takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgZone, Inject, Component, Input, Output, EventEmitter, HostBinding, ViewChild, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { PerfectScrollbarDirective } from './perfect-scrollbar.directive';
import { PerfectScrollbarEvents } from './perfect-scrollbar.interfaces';
export class PerfectScrollbarComponent {
    constructor(zone, cdRef, platformId) {
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
        this.ngDestroy = new Subject();
        this.stateUpdate = new Subject();
        this.disabled = false;
        this.usePSClass = true;
        this.autoPropagation = false;
        this.scrollIndicators = false;
        this.psScrollY = new EventEmitter();
        this.psScrollX = new EventEmitter();
        this.psScrollUp = new EventEmitter();
        this.psScrollDown = new EventEmitter();
        this.psScrollLeft = new EventEmitter();
        this.psScrollRight = new EventEmitter();
        this.psYReachEnd = new EventEmitter();
        this.psYReachStart = new EventEmitter();
        this.psXReachEnd = new EventEmitter();
        this.psXReachStart = new EventEmitter();
    }
    ngOnInit() {
        if (isPlatformBrowser(this.platformId)) {
            this.stateUpdate
                .pipe(takeUntil(this.ngDestroy), distinctUntilChanged((a, b) => (a === b && !this.stateTimeout)))
                .subscribe((state) => {
                if (this.stateTimeout && typeof window !== 'undefined') {
                    window.clearTimeout(this.stateTimeout);
                    this.stateTimeout = null;
                }
                if (state === 'x' || state === 'y') {
                    this.interaction = false;
                    if (state === 'x') {
                        this.indicatorX = false;
                        this.states.left = false;
                        this.states.right = false;
                        if (this.autoPropagation && this.usePropagationX) {
                            this.allowPropagationX = false;
                        }
                    }
                    else if (state === 'y') {
                        this.indicatorY = false;
                        this.states.top = false;
                        this.states.bottom = false;
                        if (this.autoPropagation && this.usePropagationY) {
                            this.allowPropagationY = false;
                        }
                    }
                }
                else {
                    if (state === 'left' || state === 'right') {
                        this.states.left = false;
                        this.states.right = false;
                        this.states[state] = true;
                        if (this.autoPropagation && this.usePropagationX) {
                            this.indicatorX = true;
                        }
                    }
                    else if (state === 'top' || state === 'bottom') {
                        this.states.top = false;
                        this.states.bottom = false;
                        this.states[state] = true;
                        if (this.autoPropagation && this.usePropagationY) {
                            this.indicatorY = true;
                        }
                    }
                    if (this.autoPropagation && typeof window !== 'undefined') {
                        this.stateTimeout = window.setTimeout(() => {
                            this.indicatorX = false;
                            this.indicatorY = false;
                            this.stateTimeout = null;
                            if (this.interaction && (this.states.left || this.states.right)) {
                                this.allowPropagationX = true;
                            }
                            if (this.interaction && (this.states.top || this.states.bottom)) {
                                this.allowPropagationY = true;
                            }
                            this.cdRef.markForCheck();
                        }, 500);
                    }
                }
                this.cdRef.markForCheck();
                this.cdRef.detectChanges();
            });
            this.zone.runOutsideAngular(() => {
                if (this.directiveRef) {
                    const element = this.directiveRef.elementRef.nativeElement;
                    fromEvent(element, 'wheel')
                        .pipe(takeUntil(this.ngDestroy))
                        .subscribe((event) => {
                        if (!this.disabled && this.autoPropagation) {
                            const scrollDeltaX = event.deltaX;
                            const scrollDeltaY = event.deltaY;
                            this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                        }
                    });
                    fromEvent(element, 'touchmove')
                        .pipe(takeUntil(this.ngDestroy))
                        .subscribe((event) => {
                        if (!this.disabled && this.autoPropagation) {
                            const scrollPositionX = event.touches[0].clientX;
                            const scrollPositionY = event.touches[0].clientY;
                            const scrollDeltaX = scrollPositionX - this.scrollPositionX;
                            const scrollDeltaY = scrollPositionY - this.scrollPositionY;
                            this.checkPropagation(event, scrollDeltaX, scrollDeltaY);
                            this.scrollPositionX = scrollPositionX;
                            this.scrollPositionY = scrollPositionY;
                        }
                    });
                    merge(fromEvent(element, 'ps-scroll-x')
                        .pipe(mapTo('x')), fromEvent(element, 'ps-scroll-y')
                        .pipe(mapTo('y')), fromEvent(element, 'ps-x-reach-end')
                        .pipe(mapTo('right')), fromEvent(element, 'ps-y-reach-end')
                        .pipe(mapTo('bottom')), fromEvent(element, 'ps-x-reach-start')
                        .pipe(mapTo('left')), fromEvent(element, 'ps-y-reach-start')
                        .pipe(mapTo('top')))
                        .pipe(takeUntil(this.ngDestroy))
                        .subscribe((state) => {
                        if (!this.disabled && (this.autoPropagation || this.scrollIndicators)) {
                            this.stateUpdate.next(state);
                        }
                    });
                }
            });
            window.setTimeout(() => {
                PerfectScrollbarEvents.forEach((eventName) => {
                    if (this.directiveRef) {
                        this.directiveRef[eventName] = this[eventName];
                    }
                });
            }, 0);
        }
    }
    ngOnDestroy() {
        if (isPlatformBrowser(this.platformId)) {
            this.ngDestroy.next();
            this.ngDestroy.unsubscribe();
            if (this.stateTimeout && typeof window !== 'undefined') {
                window.clearTimeout(this.stateTimeout);
            }
        }
    }
    ngDoCheck() {
        if (isPlatformBrowser(this.platformId)) {
            if (!this.disabled && this.autoPropagation && this.directiveRef) {
                const element = this.directiveRef.elementRef.nativeElement;
                this.usePropagationX = element.classList.contains('ps--active-x');
                this.usePropagationY = element.classList.contains('ps--active-y');
            }
        }
    }
    checkPropagation(event, deltaX, deltaY) {
        this.interaction = true;
        const scrollDirectionX = (deltaX < 0) ? -1 : 1;
        const scrollDirectionY = (deltaY < 0) ? -1 : 1;
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
    }
}
PerfectScrollbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'perfect-scrollbar',
                exportAs: 'ngxPerfectScrollbar',
                template: "<div style=\"position: static;\" [class.ps]=\"usePSClass\" [perfectScrollbar]=\"config\" [disabled]=\"disabled\">\n  <div class=\"ps-content\">\n    <ng-content></ng-content>\n  </div>\n\n  <div *ngIf=\"scrollIndicators\" class=\"ps-overlay\" [class.ps-at-top]=\"states.top\" [class.ps-at-left]=\"states.left\" [class.ps-at-right]=\"states.right\" [class.ps-at-bottom]=\"states.bottom\">\n    <div class=\"ps-indicator-top\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n    <div class=\"ps-indicator-left\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-right\" [class.ps-indicator-show]=\"indicatorX && interaction\"></div>\n    <div class=\"ps-indicator-bottom\" [class.ps-indicator-show]=\"indicatorY && interaction\"></div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                styles: ["perfect-scrollbar{display:block;height:100%;max-height:100%;max-width:100%;overflow:hidden;position:relative;width:100%}perfect-scrollbar[hidden]{display:none}perfect-scrollbar[fxflex]{display:flex;flex-direction:column;height:auto;min-height:0;min-width:0}perfect-scrollbar[fxflex]>.ps{-webkit-box-flex:1;flex:1 1 auto;height:auto;min-height:0;min-width:0;width:auto}perfect-scrollbar[fxlayout]>.ps,perfect-scrollbar[fxlayout]>.ps>.ps-content{-webkit-box-align:inherit;-webkit-box-flex:1;-webkit-box-pack:inherit;align-content:inherit;align-items:inherit;display:flex;flex:1 1 auto;flex-direction:inherit;height:100%;justify-content:inherit;width:100%},perfect-scrollbar[fxlayout=row]>.ps,perfect-scrollbar[fxlayout=row]>.ps>.ps-content{flex-direction:row!important}perfect-scrollbar[fxlayout=column]>.ps,perfect-scrollbar[fxlayout=column]>.ps>.ps-content{flex-direction:column!important}perfect-scrollbar>.ps{display:block;height:100%;max-height:100%;max-width:100%;position:static;width:100%}perfect-scrollbar>.ps textarea{-ms-overflow-style:scrollbar}perfect-scrollbar>.ps>.ps-overlay{bottom:0;display:block;left:0;overflow:hidden;pointer-events:none;position:absolute;right:0;top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{opacity:0;position:absolute;transition:opacity .3s ease-in-out}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{left:0;min-height:24px;min-width:100%}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left,perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{min-height:100%;min-width:24px;top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-top{top:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-left{left:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-right{right:0}perfect-scrollbar>.ps>.ps-overlay .ps-indicator-bottom{bottom:0}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y{cursor:default;left:auto!important;right:0!important;top:0!important;transition:width .2s linear,opacity .2s linear,background-color .2s linear;width:10px}perfect-scrollbar>.ps.ps--active-y>.ps__rail-y.ps--clicking,perfect-scrollbar>.ps.ps--active-y>.ps__rail-y:hover{width:15px}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x{bottom:0!important;cursor:default;height:10px;left:0!important;top:auto!important;transition:height .2s linear,opacity .2s linear,background-color .2s linear}perfect-scrollbar>.ps.ps--active-x>.ps__rail-x.ps--clicking,perfect-scrollbar>.ps.ps--active-x>.ps__rail-x:hover{height:15px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-y{margin:0 0 10px}perfect-scrollbar>.ps.ps--active-x.ps--active-y>.ps__rail-x{margin:0 10px 0 0}perfect-scrollbar>.ps.ps--scrolling-x>.ps__rail-x,perfect-scrollbar>.ps.ps--scrolling-y>.ps__rail-y{background-color:#eee;opacity:.9}perfect-scrollbar.ps-show-always>.ps.ps--active-x>.ps__rail-x,perfect-scrollbar.ps-show-always>.ps.ps--active-y>.ps__rail-y{opacity:.6}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-top) .ps-indicator-top{background:linear-gradient(180deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-y>.ps-overlay:not(.ps-at-bottom) .ps-indicator-bottom{background:linear-gradient(0deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-left) .ps-indicator-left{background:linear-gradient(90deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active>.ps.ps--active-x>.ps-overlay:not(.ps-at-right) .ps-indicator-right{background:linear-gradient(270deg,hsla(0,0%,100%,.5) 0,hsla(0,0%,100%,0));opacity:1}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top{background:linear-gradient(180deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom{background:linear-gradient(0deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left{background:linear-gradient(90deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right{background:linear-gradient(270deg,hsla(0,0%,66.7%,.5) 0,hsla(0,0%,66.7%,0))}perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-left .ps-indicator-left.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-x>.ps-overlay.ps-at-right .ps-indicator-right.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-bottom .ps-indicator-bottom.ps-indicator-show,perfect-scrollbar.ps-show-active.ps-show-limits>.ps.ps--active-y>.ps-overlay.ps-at-top .ps-indicator-top.ps-indicator-show{opacity:1}", ".ps{-ms-overflow-style:none;-ms-touch-action:auto;overflow:hidden!important;overflow-anchor:none;touch-action:auto}.ps__rail-x{bottom:0;height:15px}.ps__rail-x,.ps__rail-y{-webkit-transition:background-color .2s linear,opacity .2s linear;display:none;opacity:0;position:absolute;transition:background-color .2s linear,opacity .2s linear}.ps__rail-y{right:0;width:15px}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{background-color:transparent;display:block}.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y,.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y{opacity:.6}.ps .ps__rail-x.ps--clicking,.ps .ps__rail-x:focus,.ps .ps__rail-x:hover,.ps .ps__rail-y.ps--clicking,.ps .ps__rail-y:focus,.ps .ps__rail-y:hover{background-color:#eee;opacity:.9}.ps__thumb-x{-webkit-transition:background-color .2s linear,height .2s ease-in-out;bottom:2px;height:6px;transition:background-color .2s linear,height .2s ease-in-out}.ps__thumb-x,.ps__thumb-y{background-color:#aaa;border-radius:6px;position:absolute}.ps__thumb-y{-webkit-transition:background-color .2s linear,width .2s ease-in-out;right:2px;transition:background-color .2s linear,width .2s ease-in-out;width:6px}.ps__rail-x.ps--clicking .ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x:hover>.ps__thumb-x{background-color:#999;height:11px}.ps__rail-y.ps--clicking .ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y:hover>.ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style:none){.ps{overflow:auto!important}}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){.ps{overflow:auto!important}}"]
            },] }
];
PerfectScrollbarComponent.ctorParameters = () => [
    { type: NgZone },
    { type: ChangeDetectorRef },
    { type: Object, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] }
];
PerfectScrollbarComponent.propDecorators = {
    disabled: [{ type: Input }],
    usePSClass: [{ type: Input }],
    autoPropagation: [{ type: HostBinding, args: ['class.ps-show-limits',] }, { type: Input }],
    scrollIndicators: [{ type: HostBinding, args: ['class.ps-show-active',] }, { type: Input }],
    config: [{ type: Input }],
    psScrollY: [{ type: Output }],
    psScrollX: [{ type: Output }],
    psScrollUp: [{ type: Output }],
    psScrollDown: [{ type: Output }],
    psScrollLeft: [{ type: Output }],
    psScrollRight: [{ type: Output }],
    psYReachEnd: [{ type: Output }],
    psYReachStart: [{ type: Output }],
    psXReachEnd: [{ type: Output }],
    psXReachStart: [{ type: Output }],
    directiveRef: [{ type: ViewChild, args: [PerfectScrollbarDirective, { static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZmVjdC1zY3JvbGxiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbGliL3NyYy9saWIvcGVyZmVjdC1zY3JvbGxiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUNKLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFDcEUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRTFFLE9BQU8sRUFBeUIsc0JBQXNCLEVBQ25CLE1BQU0sZ0NBQWdDLENBQUM7QUFZMUUsTUFBTSxPQUFPLHlCQUF5QjtJQXFEcEMsWUFBb0IsSUFBWSxFQUFVLEtBQXdCLEVBQ25DLFVBQWtCO1FBRDdCLFNBQUksR0FBSixJQUFJLENBQVE7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUNuQyxlQUFVLEdBQVYsVUFBVSxDQUFRO1FBckQxQyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRWpCLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsZUFBVSxHQUFZLEtBQUssQ0FBQztRQUU1QixnQkFBVyxHQUFZLEtBQUssQ0FBQztRQUU1QixvQkFBZSxHQUFXLENBQUMsQ0FBQztRQUM1QixvQkFBZSxHQUFX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LE1BQU0sRUFBRSxJQUFJLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJqZWN0LCBtZXJnZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXBUbywgdGFrZVVudGlsLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nWm9uZSwgSW5qZWN0LCBDb21wb25lbnQsXG4gIE9uSW5pdCwgT25EZXN0cm95LCBEb0NoZWNrLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEhvc3RCaW5kaW5nLFxuICBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uLCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBQZXJmZWN0U2Nyb2xsYmFyRGlyZWN0aXZlIH0gZnJvbSAnLi9wZXJmZWN0LXNjcm9sbGJhci5kaXJlY3RpdmUnO1xuXG5pbXBvcnQgeyBQZXJmZWN0U2Nyb2xsYmFyRXZlbnQsIFBlcmZlY3RTY3JvbGxiYXJFdmVudHMsXG4gIFBlcmZlY3RTY3JvbGxiYXJDb25maWdJbnRlcmZhY2UgfSBmcm9tICcuL3BlcmZlY3Qtc2Nyb2xsYmFyLmludGVyZmFjZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZXJmZWN0LXNjcm9sbGJhcicsXG4gIGV4cG9ydEFzOiAnbmd4UGVyZmVjdFNjcm9sbGJhcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZXJmZWN0LXNjcm9sbGJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL3BlcmZlY3Qtc2Nyb2xsYmFyLmNvbXBvbmVudC5jc3MnLFxuICAgICcuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcGVyZmVjdC1zY3JvbGxiYXIvY3NzL3BlcmZlY3Qtc2Nyb2xsYmFyLmNzcydcbiAgXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBQZXJmZWN0U2Nyb2xsYmFyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIERvQ2hlY2sge1xuICBwdWJsaWMgc3RhdGVzOiBhbnkgPSB7fTtcblxuICBwdWJsaWMgaW5kaWNhdG9yWDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaW5kaWNhdG9yWTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHB1YmxpYyBpbnRlcmFjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc2Nyb2xsUG9zaXRpb25YOiBudW1iZXIgPSAwO1xuICBwcml2YXRlIHNjcm9sbFBvc2l0aW9uWTogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIHNjcm9sbERpcmVjdGlvblg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgc2Nyb2xsRGlyZWN0aW9uWTogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIHVzZVByb3BhZ2F0aW9uWDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIHVzZVByb3BhZ2F0aW9uWTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgYWxsb3dQcm9wYWdhdGlvblg6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBhbGxvd1Byb3BhZ2F0aW9uWTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgc3RhdGVUaW1lb3V0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICBwcml2YXRlIHJlYWRvbmx5IG5nRGVzdHJveTogU3ViamVjdDx2b2lkPiA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgcHJpdmF0ZSByZWFkb25seSBzdGF0ZVVwZGF0ZTogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3QoKTtcblxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHVzZVBTQ2xhc3M6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MucHMtc2hvdy1saW1pdHMnKVxuICBASW5wdXQoKSBhdXRvUHJvcGFnYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnBzLXNob3ctYWN0aXZlJylcbiAgQElucHV0KCkgc2Nyb2xsSW5kaWNhdG9yczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNvbmZpZz86IFBlcmZlY3RTY3JvbGxiYXJDb25maWdJbnRlcmZhY2U7XG5cbiAgQE91dHB1dCgpIHBzU2Nyb2xsWTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzU2Nyb2xsWDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KCkgcHNTY3JvbGxVcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzU2Nyb2xsRG93bjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzU2Nyb2xsTGVmdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzU2Nyb2xsUmlnaHQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIHBzWVJlYWNoRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNZUmVhY2hTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIHBzWFJlYWNoRW5kOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcHNYUmVhY2hTdGFydDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAVmlld0NoaWxkKFBlcmZlY3RTY3JvbGxiYXJEaXJlY3RpdmUsIHsgc3RhdGljOiB0cnVlIH0pIGRpcmVjdGl2ZVJlZj86IFBlcmZlY3RTY3JvbGxiYXJEaXJlY3RpdmU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB6b25lOiBOZ1pvbmUsIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogT2JqZWN0KSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLnN0YXRlVXBkYXRlXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHRha2VVbnRpbCh0aGlzLm5nRGVzdHJveSksXG4gICAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKGEsIGIpID0+IChhID09PSBiICYmICF0aGlzLnN0YXRlVGltZW91dCkpXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoc3RhdGU6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLnN0YXRlVGltZW91dCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnN0YXRlVGltZW91dCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGVUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc3RhdGUgPT09ICd4JyB8fCBzdGF0ZSA9PT0gJ3knKSB7XG4gICAgICAgICAgICB0aGlzLmludGVyYWN0aW9uID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW5kaWNhdG9yWCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVzLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMucmlnaHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvUHJvcGFnYXRpb24gJiYgdGhpcy51c2VQcm9wYWdhdGlvblgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFsbG93UHJvcGFnYXRpb25YID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09ICd5Jykge1xuICAgICAgICAgICAgICB0aGlzLmluZGljYXRvclkgPSBmYWxzZTtcblxuICAgICAgICAgICAgICB0aGlzLnN0YXRlcy50b3AgPSBmYWxzZTtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMuYm90dG9tID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1Byb3BhZ2F0aW9uICYmIHRoaXMudXNlUHJvcGFnYXRpb25ZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hbGxvd1Byb3BhZ2F0aW9uWSA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfcKgZWxzZSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUgPT09ICdsZWZ0JyB8fCBzdGF0ZSA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlcy5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVzLnJpZ2h0ID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZXNbc3RhdGVdID0gdHJ1ZTtcblxuICAgICAgICAgICAgICBpZiAodGhpcy5hdXRvUHJvcGFnYXRpb24gJiYgdGhpcy51c2VQcm9wYWdhdGlvblgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGljYXRvclggPSB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSAndG9wJyB8fCBzdGF0ZSA9PT0gJ2JvdHRvbScpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZXMudG9wID0gZmFsc2U7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVzLmJvdHRvbSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgIHRoaXMuc3RhdGVzW3N0YXRlXSA9IHRydWU7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1Byb3BhZ2F0aW9uICYmIHRoaXMudXNlUHJvcGFnYXRpb25ZKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JZID0gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5hdXRvUHJvcGFnYXRpb24gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5zdGF0ZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JYID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpY2F0b3JZID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnN0YXRlVGltZW91dCA9IG51bGw7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnRlcmFjdGlvbiAmJiAodGhpcy5zdGF0ZXMubGVmdCB8fCB0aGlzLnN0YXRlcy5yaWdodCkpIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuYWxsb3dQcm9wYWdhdGlvblggPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmludGVyYWN0aW9uICYmICh0aGlzLnN0YXRlcy50b3AgfHwgdGhpcy5zdGF0ZXMuYm90dG9tKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5hbGxvd1Byb3BhZ2F0aW9uWSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5jZFJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLmNkUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9KTtcblxuICAgICAgdGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZGlyZWN0aXZlUmVmKSB7XG4gICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZGlyZWN0aXZlUmVmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgICAgIGZyb21FdmVudDxXaGVlbEV2ZW50PihlbGVtZW50LCAnd2hlZWwnKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLm5nRGVzdHJveSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBXaGVlbEV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiB0aGlzLmF1dG9Qcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbERlbHRhWCA9IGV2ZW50LmRlbHRhWDtcbiAgICAgICAgICAgICAgICBjb25zdCBzY3JvbGxEZWx0YVkgPSBldmVudC5kZWx0YVk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrUHJvcGFnYXRpb24oZXZlbnQsIHNjcm9sbERlbHRhWCwgc2Nyb2xsRGVsdGFZKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICBmcm9tRXZlbnQ8VG91Y2hFdmVudD4oZWxlbWVudCwgJ3RvdWNobW92ZScpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMubmdEZXN0cm95KVxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmIHRoaXMuYXV0b1Byb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsUG9zaXRpb25YID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFBvc2l0aW9uWSA9IGV2ZW50LnRvdWNoZXNbMF0uY2xpZW50WTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbERlbHRhWCA9IHNjcm9sbFBvc2l0aW9uWCAtIHRoaXMuc2Nyb2xsUG9zaXRpb25YO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNjcm9sbERlbHRhWSA9IHNjcm9sbFBvc2l0aW9uWSAtIHRoaXMuc2Nyb2xsUG9zaXRpb25ZO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja1Byb3BhZ2F0aW9uKGV2ZW50LCBzY3JvbGxEZWx0YVgsIHNjcm9sbERlbHRhWSk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uWCA9IHNjcm9sbFBvc2l0aW9uWDtcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFBvc2l0aW9uWSA9IHNjcm9sbFBvc2l0aW9uWTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lcmdlKFxuICAgICAgICAgICAgICBmcm9tRXZlbnQoZWxlbWVudCwgJ3BzLXNjcm9sbC14JylcbiAgICAgICAgICAgICAgICAucGlwZShtYXBUbygneCcpKSxcbiAgICAgICAgICAgICAgZnJvbUV2ZW50KGVsZW1lbnQsICdwcy1zY3JvbGwteScpXG4gICAgICAgICAgICAgICAgLnBpcGUobWFwVG8oJ3knKSksXG4gICAgICAgICAgICAgIGZyb21FdmVudChlbGVtZW50LCAncHMteC1yZWFjaC1lbmQnKVxuICAgICAgICAgICAgICAgIC5waXBlKG1hcFRvKCdyaWdodCcpKSxcbiAgICAgICAgICAgICAgZnJvbUV2ZW50KGVsZW1lbnQsICdwcy15LXJlYWNoLWVuZCcpXG4gICAgICAgICAgICAgICAgLnBpcGUobWFwVG8oJ2JvdHRvbScpKSxcbiAgICAgICAgICAgICAgZnJvbUV2ZW50KGVsZW1lbnQsICdwcy14LXJlYWNoLXN0YXJ0JylcbiAgICAgICAgICAgICAgICAucGlwZShtYXBUbygnbGVmdCcpKSxcbiAgICAgICAgICAgICAgZnJvbUV2ZW50KGVsZW1lbnQsICdwcy15LXJlYWNoLXN0YXJ0JylcbiAgICAgICAgICAgICAgICAucGlwZShtYXBUbygndG9wJykpLFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLm5nRGVzdHJveSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHN0YXRlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICh0aGlzLmF1dG9Qcm9wYWdhdGlvbiB8fCB0aGlzLnNjcm9sbEluZGljYXRvcnMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZVVwZGF0ZS5uZXh0KHN0YXRlKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIFBlcmZlY3RTY3JvbGxiYXJFdmVudHMuZm9yRWFjaCgoZXZlbnROYW1lOiBQZXJmZWN0U2Nyb2xsYmFyRXZlbnQpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5kaXJlY3RpdmVSZWYpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlUmVmW2V2ZW50TmFtZV0gPSB0aGlzW2V2ZW50TmFtZV07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0sIDApO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLm5nRGVzdHJveS5uZXh0KCk7XG4gICAgICB0aGlzLm5nRGVzdHJveS51bnN1YnNjcmliZSgpO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZVRpbWVvdXQgJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnN0YXRlVGltZW91dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5hdXRvUHJvcGFnYXRpb24gJiYgdGhpcy5kaXJlY3RpdmVSZWYpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZGlyZWN0aXZlUmVmLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcblxuICAgICAgICB0aGlzLnVzZVByb3BhZ2F0aW9uWCA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcy0tYWN0aXZlLXgnKTtcblxuICAgICAgICB0aGlzLnVzZVByb3BhZ2F0aW9uWSA9IGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcy0tYWN0aXZlLXknKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoZWNrUHJvcGFnYXRpb24oZXZlbnQ6IGFueSwgZGVsdGFYOiBudW1iZXIsIGRlbHRhWTogbnVtYmVyKTogdm9pZMKge1xuICAgIHRoaXMuaW50ZXJhY3Rpb24gPSB0cnVlO1xuXG4gICAgY29uc3Qgc2Nyb2xsRGlyZWN0aW9uWCA9IChkZWx0YVggPCAwKSA/IC0xIDogMTtcbiAgICBjb25zdCBzY3JvbGxEaXJlY3Rpb25ZID0gKGRlbHRhWSA8IDApID8gLTEgOiAxO1xuXG4gICAgaWYgKCh0aGlzLnVzZVByb3BhZ2F0aW9uWCAmJiB0aGlzLnVzZVByb3BhZ2F0aW9uWSkgfHxcbiAgICAgICAgKHRoaXMudXNlUHJvcGFnYXRpb25YICYmICghdGhpcy5hbGxvd1Byb3BhZ2F0aW9uWCB8fFxuICAgICAgICAodGhpcy5zY3JvbGxEaXJlY3Rpb25YICE9PSBzY3JvbGxEaXJlY3Rpb25YKSkpIHx8XG4gICAgICAgICh0aGlzLnVzZVByb3BhZ2F0aW9uWSAmJiAoIXRoaXMuYWxsb3dQcm9wYWdhdGlvblkgfHxcbiAgICAgICAgKHRoaXMuc2Nyb2xsRGlyZWN0aW9uWSAhPT0gc2Nyb2xsRGlyZWN0aW9uWSkpKSlcbiAgICB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgaWYgKCEhZGVsdGFYKSB7XG4gICAgICB0aGlzLnNjcm9sbERpcmVjdGlvblggPSBzY3JvbGxEaXJlY3Rpb25YO1xuICAgIH1cblxuICAgIGlmICghIWRlbHRhWSkge1xuICAgICAgdGhpcy5zY3JvbGxEaXJlY3Rpb25ZID0gc2Nyb2xsRGlyZWN0aW9uWTtcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlVXBkYXRlLm5leHQoJ2ludGVyYWN0aW9uJyk7XG5cbiAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19