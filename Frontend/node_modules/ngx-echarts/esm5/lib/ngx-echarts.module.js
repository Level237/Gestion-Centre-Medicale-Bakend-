import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { NgxEchartsDirective, NGX_ECHARTS_CONFIG } from './ngx-echarts.directive';
var NgxEchartsModule = /** @class */ (function () {
    function NgxEchartsModule() {
    }
    NgxEchartsModule_1 = NgxEchartsModule;
    NgxEchartsModule.forRoot = function (config) {
        return {
            ngModule: NgxEchartsModule_1,
            providers: [{ provide: NGX_ECHARTS_CONFIG, useValue: config }],
        };
    };
    NgxEchartsModule.forChild = function () {
        return {
            ngModule: NgxEchartsModule_1,
        };
    };
    var NgxEchartsModule_1;
    NgxEchartsModule = NgxEchartsModule_1 = __decorate([
        NgModule({
            imports: [],
            declarations: [NgxEchartsDirective],
            exports: [NgxEchartsDirective],
        })
    ], NgxEchartsModule);
    return NgxEchartsModule;
}());
export { NgxEchartsModule };
export { NgxEchartsDirective, NGX_ECHARTS_CONFIG };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVjaGFydHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWVjaGFydHMvIiwic291cmNlcyI6WyJsaWIvbmd4LWVjaGFydHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQW9CLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFPcEc7SUFBQTtJQVlBLENBQUM7eUJBWlksZ0JBQWdCO0lBQ3BCLHdCQUFPLEdBQWQsVUFBZSxNQUF3QjtRQUNyQyxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFnQjtZQUMxQixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLENBQUM7U0FDL0QsQ0FBQztJQUNKLENBQUM7SUFDTSx5QkFBUSxHQUFmO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBZ0I7U0FDM0IsQ0FBQztJQUNKLENBQUM7O0lBWFUsZ0JBQWdCO1FBTDVCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxFQUFFO1lBQ1gsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDL0IsQ0FBQztPQUNXLGdCQUFnQixDQVk1QjtJQUFELHVCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlksZ0JBQWdCO0FBYzdCLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEVjaGFydHNEaXJlY3RpdmUsIE5neEVjaGFydHNDb25maWcsIE5HWF9FQ0hBUlRTX0NPTkZJRyB9IGZyb20gJy4vbmd4LWVjaGFydHMuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW10sXG4gIGRlY2xhcmF0aW9uczogW05neEVjaGFydHNEaXJlY3RpdmVdLFxuICBleHBvcnRzOiBbTmd4RWNoYXJ0c0RpcmVjdGl2ZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5neEVjaGFydHNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IE5neEVjaGFydHNDb25maWcpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE5neEVjaGFydHNNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neEVjaGFydHNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HWF9FQ0hBUlRTX0NPTkZJRywgdXNlVmFsdWU6IGNvbmZpZyB9XSxcbiAgICB9O1xuICB9XG4gIHN0YXRpYyBmb3JDaGlsZCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IE5neEVjaGFydHNNb2R1bGUsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgeyBOZ3hFY2hhcnRzRGlyZWN0aXZlLCBOR1hfRUNIQVJUU19DT05GSUcgfTtcbiJdfQ==