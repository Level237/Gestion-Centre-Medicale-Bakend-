import { Directive, ElementRef, Renderer2 } from '@angular/core';
export class ForceNativeScrollDirective {
    constructor(renderer, el) {
        this.renderer = renderer;
        ['ps__child', 'ps__child--consume'].forEach((className) => {
            this.renderer.addClass(el === null || el === void 0 ? void 0 : el.nativeElement, className);
        });
    }
}
ForceNativeScrollDirective.decorators = [
    { type: Directive, args: [{
                selector: '[forceNativeScrolling]'
            },] }
];
ForceNativeScrollDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyZmVjdC1zY3JvbGxiYXItZm9yY2UtbmF0aXZlLXNjcm9sbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9saWIvc3JjL2xpYi9wZXJmZWN0LXNjcm9sbGJhci1mb3JjZS1uYXRpdmUtc2Nyb2xsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLakUsTUFBTSxPQUFPLDBCQUEwQjtJQUVyQyxZQUFvQixRQUFtQixFQUFFLEVBQWM7UUFBbkMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNyQyxDQUFDLFdBQVcsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ3hELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFURixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjthQUNuQzs7O1lBSitCLFNBQVM7WUFBckIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmb3JjZU5hdGl2ZVNjcm9sbGluZ10nXG59KVxuZXhwb3J0IGNsYXNzIEZvcmNlTmF0aXZlU2Nyb2xsRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGVsOiBFbGVtZW50UmVmKSB7XG4gICAgWydwc19fY2hpbGQnLCAncHNfX2NoaWxkLS1jb25zdW1lJ10uZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsPy5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=