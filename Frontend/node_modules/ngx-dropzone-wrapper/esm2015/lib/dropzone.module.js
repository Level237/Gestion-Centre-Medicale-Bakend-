import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropzoneComponent } from './dropzone.component';
import { DropzoneDirective } from './dropzone.directive';
export class DropzoneModule {
}
DropzoneModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [DropzoneComponent, DropzoneDirective],
                exports: [CommonModule, DropzoneComponent, DropzoneDirective]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJvcHpvbmUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbGliL3NyYy9saWIvZHJvcHpvbmUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBT3pELE1BQU0sT0FBTyxjQUFjOzs7WUFMMUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7Z0JBQ3BELE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQzthQUM5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBEcm9wem9uZUNvbXBvbmVudCB9IGZyb20gJy4vZHJvcHpvbmUuY29tcG9uZW50JztcbmltcG9ydCB7IERyb3B6b25lRGlyZWN0aXZlIH0gZnJvbSAnLi9kcm9wem9uZS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbRHJvcHpvbmVDb21wb25lbnQsIERyb3B6b25lRGlyZWN0aXZlXSxcbiAgZXhwb3J0czogW0NvbW1vbk1vZHVsZSwgRHJvcHpvbmVDb21wb25lbnQsIERyb3B6b25lRGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wem9uZU1vZHVsZSB7XG59XG4iXX0=