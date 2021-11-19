import { Directive, TemplateRef, ContentChild, Input } from '@angular/core';
import { DataTableColumnHeaderDirective } from './column-header.directive';
import { DataTableColumnCellDirective } from './column-cell.directive';
import { DataTableColumnCellTreeToggle } from './tree.directive';
import { ColumnChangesService } from '../../services/column-changes.service';
export class DataTableColumnDirective {
    constructor(columnChangesService) {
        this.columnChangesService = columnChangesService;
        this.isFirstChange = true;
    }
    get cellTemplate() {
        return this._cellTemplateInput || this._cellTemplateQuery;
    }
    get headerTemplate() {
        return this._headerTemplateInput || this._headerTemplateQuery;
    }
    get treeToggleTemplate() {
        return this._treeToggleTemplateInput || this._treeToggleTemplateQuery;
    }
    ngOnChanges() {
        if (this.isFirstChange) {
            this.isFirstChange = false;
        }
        else {
            this.columnChangesService.onInputChange();
        }
    }
}
DataTableColumnDirective.decorators = [
    { type: Directive, args: [{ selector: 'ngx-datatable-column' },] }
];
DataTableColumnDirective.ctorParameters = () => [
    { type: ColumnChangesService }
];
DataTableColumnDirective.propDecorators = {
    name: [{ type: Input }],
    prop: [{ type: Input }],
    frozenLeft: [{ type: Input }],
    frozenRight: [{ type: Input }],
    flexGrow: [{ type: Input }],
    resizeable: [{ type: Input }],
    comparator: [{ type: Input }],
    pipe: [{ type: Input }],
    sortable: [{ type: Input }],
    draggable: [{ type: Input }],
    canAutoResize: [{ type: Input }],
    minWidth: [{ type: Input }],
    width: [{ type: Input }],
    maxWidth: [{ type: Input }],
    checkboxable: [{ type: Input }],
    headerCheckboxable: [{ type: Input }],
    headerClass: [{ type: Input }],
    cellClass: [{ type: Input }],
    isTreeColumn: [{ type: Input }],
    treeLevelIndent: [{ type: Input }],
    summaryFunc: [{ type: Input }],
    summaryTemplate: [{ type: Input }],
    _cellTemplateInput: [{ type: Input, args: ['cellTemplate',] }],
    _cellTemplateQuery: [{ type: ContentChild, args: [DataTableColumnCellDirective, { read: TemplateRef, static: true },] }],
    _headerTemplateInput: [{ type: Input, args: ['headerTemplate',] }],
    _headerTemplateQuery: [{ type: ContentChild, args: [DataTableColumnHeaderDirective, { read: TemplateRef, static: true },] }],
    _treeToggleTemplateInput: [{ type: Input, args: ['treeToggleTemplate',] }],
    _treeToggleTemplateQuery: [{ type: ContentChild, args: [DataTableColumnCellTreeToggle, { read: TemplateRef, static: true },] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NvbHVtbnMvY29sdW1uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUk3RSxNQUFNLE9BQU8sd0JBQXdCO0lBd0RuQyxZQUFvQixvQkFBMEM7UUFBMUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUZ0RCxrQkFBYSxHQUFHLElBQUksQ0FBQztJQUVvQyxDQUFDO0lBMUJsRSxJQUFJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDNUQsQ0FBQztJQVFELElBQUksY0FBYztRQUNoQixPQUFPLElBQUksQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUM7SUFDaEUsQ0FBQztJQVFELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLHdCQUF3QixJQUFJLElBQUksQ0FBQyx3QkFBd0IsQ0FBQztJQUN4RSxDQUFDO0lBTUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN0QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjthQUFNO1lBQ0wsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzNDO0lBQ0gsQ0FBQzs7O1lBakVGLFNBQVMsU0FBQyxFQUFFLFFBQVEsRUFBRSxzQkFBc0IsRUFBRTs7O1lBSHRDLG9CQUFvQjs7O21CQUsxQixLQUFLO21CQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7dUJBQ0wsS0FBSztvQkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSztpQ0FDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzs4QkFDTCxLQUFLO2lDQUVMLEtBQUssU0FBQyxjQUFjO2lDQUdwQixZQUFZLFNBQUMsNEJBQTRCLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7bUNBTzlFLEtBQUssU0FBQyxnQkFBZ0I7bUNBR3RCLFlBQVksU0FBQyw4QkFBOEIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTt1Q0FPaEYsS0FBSyxTQUFDLG9CQUFvQjt1Q0FHMUIsWUFBWSxTQUFDLDZCQUE2QixFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgQ29udGVudENoaWxkLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5IZWFkZXJEaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbi1oZWFkZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IERhdGFUYWJsZUNvbHVtbkNlbGxEaXJlY3RpdmUgfSBmcm9tICcuL2NvbHVtbi1jZWxsLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBEYXRhVGFibGVDb2x1bW5DZWxsVHJlZVRvZ2dsZSB9IGZyb20gJy4vdHJlZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ29sdW1uQ2hhbmdlc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jb2x1bW4tY2hhbmdlcy5zZXJ2aWNlJztcbmltcG9ydCB7IFRhYmxlQ29sdW1uUHJvcCB9IGZyb20gJy4uLy4uL3R5cGVzL3RhYmxlLWNvbHVtbi50eXBlJztcblxuQERpcmVjdGl2ZSh7IHNlbGVjdG9yOiAnbmd4LWRhdGF0YWJsZS1jb2x1bW4nIH0pXG5leHBvcnQgY2xhc3MgRGF0YVRhYmxlQ29sdW1uRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBwcm9wOiBUYWJsZUNvbHVtblByb3A7XG4gIEBJbnB1dCgpIGZyb3plbkxlZnQ6IGFueTtcbiAgQElucHV0KCkgZnJvemVuUmlnaHQ6IGFueTtcbiAgQElucHV0KCkgZmxleEdyb3c6IG51bWJlcjtcbiAgQElucHV0KCkgcmVzaXplYWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgY29tcGFyYXRvcjogYW55O1xuICBASW5wdXQoKSBwaXBlOiBhbnk7XG4gIEBJbnB1dCgpIHNvcnRhYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBkcmFnZ2FibGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNhbkF1dG9SZXNpemU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1pbldpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1heFdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGNoZWNrYm94YWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgaGVhZGVyQ2hlY2tib3hhYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBoZWFkZXJDbGFzczogc3RyaW5nIHwgKChkYXRhOiBhbnkpID0+IHN0cmluZyB8IGFueSk7XG4gIEBJbnB1dCgpIGNlbGxDbGFzczogc3RyaW5nIHwgKChkYXRhOiBhbnkpID0+IHN0cmluZyB8IGFueSk7XG4gIEBJbnB1dCgpIGlzVHJlZUNvbHVtbjogYm9vbGVhbjtcbiAgQElucHV0KCkgdHJlZUxldmVsSW5kZW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIHN1bW1hcnlGdW5jOiAoY2VsbHM6IGFueVtdKSA9PiBhbnk7XG4gIEBJbnB1dCgpIHN1bW1hcnlUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoJ2NlbGxUZW1wbGF0ZScpXG4gIF9jZWxsVGVtcGxhdGVJbnB1dDogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAQ29udGVudENoaWxkKERhdGFUYWJsZUNvbHVtbkNlbGxEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBfY2VsbFRlbXBsYXRlUXVlcnk6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgZ2V0IGNlbGxUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fY2VsbFRlbXBsYXRlSW5wdXQgfHwgdGhpcy5fY2VsbFRlbXBsYXRlUXVlcnk7XG4gIH1cblxuICBASW5wdXQoJ2hlYWRlclRlbXBsYXRlJylcbiAgX2hlYWRlclRlbXBsYXRlSW5wdXQ6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQENvbnRlbnRDaGlsZChEYXRhVGFibGVDb2x1bW5IZWFkZXJEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBfaGVhZGVyVGVtcGxhdGVRdWVyeTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBnZXQgaGVhZGVyVGVtcGxhdGUoKTogVGVtcGxhdGVSZWY8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX2hlYWRlclRlbXBsYXRlSW5wdXQgfHwgdGhpcy5faGVhZGVyVGVtcGxhdGVRdWVyeTtcbiAgfVxuXG4gIEBJbnB1dCgndHJlZVRvZ2dsZVRlbXBsYXRlJylcbiAgX3RyZWVUb2dnbGVUZW1wbGF0ZUlucHV0OiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBDb250ZW50Q2hpbGQoRGF0YVRhYmxlQ29sdW1uQ2VsbFRyZWVUb2dnbGUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KVxuICBfdHJlZVRvZ2dsZVRlbXBsYXRlUXVlcnk6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgZ2V0IHRyZWVUb2dnbGVUZW1wbGF0ZSgpOiBUZW1wbGF0ZVJlZjxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fdHJlZVRvZ2dsZVRlbXBsYXRlSW5wdXQgfHwgdGhpcy5fdHJlZVRvZ2dsZVRlbXBsYXRlUXVlcnk7XG4gIH1cblxuICBwcml2YXRlIGlzRmlyc3RDaGFuZ2UgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29sdW1uQ2hhbmdlc1NlcnZpY2U6IENvbHVtbkNoYW5nZXNTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICh0aGlzLmlzRmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMuaXNGaXJzdENoYW5nZSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbHVtbkNoYW5nZXNTZXJ2aWNlLm9uSW5wdXRDaGFuZ2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==