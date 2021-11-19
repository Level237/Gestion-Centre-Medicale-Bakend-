import { Directive, TemplateRef } from '@angular/core';
export class DataTableColumnCellTreeToggle {
    constructor(template) {
        this.template = template;
    }
}
DataTableColumnCellTreeToggle.decorators = [
    { type: Directive, args: [{ selector: '[ngx-datatable-tree-toggle]' },] }
];
DataTableColumnCellTreeToggle.ctorParameters = () => [
    { type: TemplateRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vcHJvamVjdHMvc3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9zcmMvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jb2x1bW5zL3RyZWUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3ZELE1BQU0sT0FBTyw2QkFBNkI7SUFDeEMsWUFBbUIsUUFBMEI7UUFBMUIsYUFBUSxHQUFSLFFBQVEsQ0FBa0I7SUFBRyxDQUFDOzs7WUFGbEQsU0FBUyxTQUFDLEVBQUUsUUFBUSxFQUFFLDZCQUE2QixFQUFFOzs7WUFGbEMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnW25neC1kYXRhdGFibGUtdHJlZS10b2dnbGVdJyB9KVxuZXhwb3J0IGNsYXNzIERhdGFUYWJsZUNvbHVtbkNlbGxUcmVlVG9nZ2xlIHtcbiAgY29uc3RydWN0b3IocHVibGljIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7fVxufVxuIl19