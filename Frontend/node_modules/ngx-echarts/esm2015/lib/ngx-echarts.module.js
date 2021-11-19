var NgxEchartsModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { NgxEchartsDirective, NGX_ECHARTS_CONFIG } from './ngx-echarts.directive';
let NgxEchartsModule = NgxEchartsModule_1 = class NgxEchartsModule {
    static forRoot(config) {
        return {
            ngModule: NgxEchartsModule_1,
            providers: [{ provide: NGX_ECHARTS_CONFIG, useValue: config }],
        };
    }
    static forChild() {
        return {
            ngModule: NgxEchartsModule_1,
        };
    }
};
NgxEchartsModule = NgxEchartsModule_1 = __decorate([
    NgModule({
        imports: [],
        declarations: [NgxEchartsDirective],
        exports: [NgxEchartsDirective],
    })
], NgxEchartsModule);
export { NgxEchartsModule };
export { NgxEchartsDirective, NGX_ECHARTS_CONFIG };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWVjaGFydHMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWVjaGFydHMvIiwic291cmNlcyI6WyJsaWIvbmd4LWVjaGFydHMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLG1CQUFtQixFQUFvQixrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBT3BHLElBQWEsZ0JBQWdCLHdCQUE3QixNQUFhLGdCQUFnQjtJQUMzQixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXdCO1FBQ3JDLE9BQU87WUFDTCxRQUFRLEVBQUUsa0JBQWdCO1lBQzFCLFNBQVMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztTQUMvRCxDQUFDO0lBQ0osQ0FBQztJQUNELE1BQU0sQ0FBQyxRQUFRO1FBQ2IsT0FBTztZQUNMLFFBQVEsRUFBRSxrQkFBZ0I7U0FDM0IsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBWlksZ0JBQWdCO0lBTDVCLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxFQUFFO1FBQ1gsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7UUFDbkMsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7S0FDL0IsQ0FBQztHQUNXLGdCQUFnQixDQVk1QjtTQVpZLGdCQUFnQjtBQWM3QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hFY2hhcnRzRGlyZWN0aXZlLCBOZ3hFY2hhcnRzQ29uZmlnLCBOR1hfRUNIQVJUU19DT05GSUcgfSBmcm9tICcuL25neC1lY2hhcnRzLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ3hFY2hhcnRzRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW05neEVjaGFydHNEaXJlY3RpdmVdLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hFY2hhcnRzTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBOZ3hFY2hhcnRzQ29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVyczxOZ3hFY2hhcnRzTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hFY2hhcnRzTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR1hfRUNIQVJUU19DT05GSUcsIHVzZVZhbHVlOiBjb25maWcgfV0sXG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZm9yQ2hpbGQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hFY2hhcnRzTW9kdWxlLFxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IHsgTmd4RWNoYXJ0c0RpcmVjdGl2ZSwgTkdYX0VDSEFSVFNfQ09ORklHIH07XG4iXX0=