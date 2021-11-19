import { Component, Input } from '@angular/core';
function defaultSumFunc(cells) {
    const cellsWithValues = cells.filter(cell => !!cell);
    if (!cellsWithValues.length) {
        return null;
    }
    if (cellsWithValues.some(cell => typeof cell !== 'number')) {
        return null;
    }
    return cellsWithValues.reduce((res, cell) => res + cell);
}
function noopSumFunc(cells) {
    return null;
}
export class DataTableSummaryRowComponent {
    constructor() {
        this.summaryRow = {};
    }
    ngOnChanges() {
        if (!this.columns || !this.rows) {
            return;
        }
        this.updateInternalColumns();
        this.updateValues();
    }
    updateInternalColumns() {
        this._internalColumns = this.columns.map(col => (Object.assign(Object.assign({}, col), { cellTemplate: col.summaryTemplate })));
    }
    updateValues() {
        this.summaryRow = {};
        this.columns
            .filter(col => !col.summaryTemplate)
            .forEach(col => {
            const cellsFromSingleColumn = this.rows.map(row => row[col.prop]);
            const sumFunc = this.getSummaryFunction(col);
            this.summaryRow[col.prop] = col.pipe
                ? col.pipe.transform(sumFunc(cellsFromSingleColumn))
                : sumFunc(cellsFromSingleColumn);
        });
    }
    getSummaryFunction(column) {
        if (column.summaryFunc === undefined) {
            return defaultSumFunc;
        }
        else if (column.summaryFunc === null) {
            return noopSumFunc;
        }
        else {
            return column.summaryFunc;
        }
    }
}
DataTableSummaryRowComponent.decorators = [
    { type: Component, args: [{
                selector: 'datatable-summary-row',
                template: `
    <datatable-body-row
      *ngIf="summaryRow && _internalColumns"
      tabindex="-1"
      [innerWidth]="innerWidth"
      [offsetX]="offsetX"
      [columns]="_internalColumns"
      [rowHeight]="rowHeight"
      [row]="summaryRow"
      [rowIndex]="-1"
    >
    </datatable-body-row>
  `,
                host: {
                    class: 'datatable-summary-row'
                }
            },] }
];
DataTableSummaryRowComponent.propDecorators = {
    rows: [{ type: Input }],
    columns: [{ type: Input }],
    rowHeight: [{ type: Input }],
    offsetX: [{ type: Input }],
    innerWidth: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VtbWFyeS1yb3cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uLy4uLy4uL3Byb2plY3RzL3N3aW1sYW5lL25neC1kYXRhdGFibGUvc3JjLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvYm9keS9zdW1tYXJ5L3N1bW1hcnktcm93LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBeUMsTUFBTSxlQUFlLENBQUM7QUFVeEYsU0FBUyxjQUFjLENBQUMsS0FBWTtJQUNsQyxNQUFNLGVBQWUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXJELElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFO1FBQzNCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsRUFBRTtRQUMxRCxPQUFPLElBQUksQ0FBQztLQUNiO0lBRUQsT0FBTyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFFRCxTQUFTLFdBQVcsQ0FBQyxLQUFZO0lBQy9CLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQztBQXFCRCxNQUFNLE9BQU8sNEJBQTRCO0lBbkJ6QztRQTRCRSxlQUFVLEdBQVEsRUFBRSxDQUFDO0lBeUN2QixDQUFDO0lBdkNDLFdBQVc7UUFDVCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDL0IsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFTyxxQkFBcUI7UUFDM0IsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsaUNBQzNDLEdBQUcsS0FDTixZQUFZLEVBQUUsR0FBRyxDQUFDLGVBQWUsSUFDakMsQ0FBQyxDQUFDO0lBQ04sQ0FBQztJQUVPLFlBQVk7UUFDbEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLE9BQU87YUFDVCxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUM7YUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2IsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsRSxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFN0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUk7Z0JBQ2xDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDcEQsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVPLGtCQUFrQixDQUFDLE1BQXNCO1FBQy9DLElBQUksTUFBTSxDQUFDLFdBQVcsS0FBSyxTQUFTLEVBQUU7WUFDcEMsT0FBTyxjQUFjLENBQUM7U0FDdkI7YUFBTSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEtBQUssSUFBSSxFQUFFO1lBQ3RDLE9BQU8sV0FBVyxDQUFDO1NBQ3BCO2FBQU07WUFDTCxPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7WUFwRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7O0dBWVQ7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSx1QkFBdUI7aUJBQy9CO2FBQ0Y7OzttQkFFRSxLQUFLO3NCQUNMLEtBQUs7d0JBRUwsS0FBSztzQkFDTCxLQUFLO3lCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkNoYW5nZXMsIFBpcGVUcmFuc2Zvcm0sIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVN1bW1hcnlDb2x1bW4ge1xuICBzdW1tYXJ5RnVuYz86IChjZWxsczogYW55W10pID0+IGFueTtcbiAgc3VtbWFyeVRlbXBsYXRlPzogVGVtcGxhdGVSZWY8YW55PjtcblxuICBwcm9wOiBzdHJpbmc7XG4gIHBpcGU/OiBQaXBlVHJhbnNmb3JtO1xufVxuXG5mdW5jdGlvbiBkZWZhdWx0U3VtRnVuYyhjZWxsczogYW55W10pOiBhbnkge1xuICBjb25zdCBjZWxsc1dpdGhWYWx1ZXMgPSBjZWxscy5maWx0ZXIoY2VsbCA9PiAhIWNlbGwpO1xuXG4gIGlmICghY2VsbHNXaXRoVmFsdWVzLmxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmIChjZWxsc1dpdGhWYWx1ZXMuc29tZShjZWxsID0+IHR5cGVvZiBjZWxsICE9PSAnbnVtYmVyJykpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiBjZWxsc1dpdGhWYWx1ZXMucmVkdWNlKChyZXMsIGNlbGwpID0+IHJlcyArIGNlbGwpO1xufVxuXG5mdW5jdGlvbiBub29wU3VtRnVuYyhjZWxsczogYW55W10pOiB2b2lkIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGF0YWJsZS1zdW1tYXJ5LXJvdycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRhdGF0YWJsZS1ib2R5LXJvd1xuICAgICAgKm5nSWY9XCJzdW1tYXJ5Um93ICYmIF9pbnRlcm5hbENvbHVtbnNcIlxuICAgICAgdGFiaW5kZXg9XCItMVwiXG4gICAgICBbaW5uZXJXaWR0aF09XCJpbm5lcldpZHRoXCJcbiAgICAgIFtvZmZzZXRYXT1cIm9mZnNldFhcIlxuICAgICAgW2NvbHVtbnNdPVwiX2ludGVybmFsQ29sdW1uc1wiXG4gICAgICBbcm93SGVpZ2h0XT1cInJvd0hlaWdodFwiXG4gICAgICBbcm93XT1cInN1bW1hcnlSb3dcIlxuICAgICAgW3Jvd0luZGV4XT1cIi0xXCJcbiAgICA+XG4gICAgPC9kYXRhdGFibGUtYm9keS1yb3c+XG4gIGAsXG4gIGhvc3Q6IHtcbiAgICBjbGFzczogJ2RhdGF0YWJsZS1zdW1tYXJ5LXJvdydcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVTdW1tYXJ5Um93Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgcm93czogYW55W107XG4gIEBJbnB1dCgpIGNvbHVtbnM6IElTdW1tYXJ5Q29sdW1uW107XG5cbiAgQElucHV0KCkgcm93SGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgpIG9mZnNldFg6IG51bWJlcjtcbiAgQElucHV0KCkgaW5uZXJXaWR0aDogbnVtYmVyO1xuXG4gIF9pbnRlcm5hbENvbHVtbnM6IElTdW1tYXJ5Q29sdW1uW107XG4gIHN1bW1hcnlSb3c6IGFueSA9IHt9O1xuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGlmICghdGhpcy5jb2x1bW5zIHx8ICF0aGlzLnJvd3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVJbnRlcm5hbENvbHVtbnMoKTtcbiAgICB0aGlzLnVwZGF0ZVZhbHVlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJbnRlcm5hbENvbHVtbnMoKSB7XG4gICAgdGhpcy5faW50ZXJuYWxDb2x1bW5zID0gdGhpcy5jb2x1bW5zLm1hcChjb2wgPT4gKHtcbiAgICAgIC4uLmNvbCxcbiAgICAgIGNlbGxUZW1wbGF0ZTogY29sLnN1bW1hcnlUZW1wbGF0ZVxuICAgIH0pKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlVmFsdWVzKCkge1xuICAgIHRoaXMuc3VtbWFyeVJvdyA9IHt9O1xuXG4gICAgdGhpcy5jb2x1bW5zXG4gICAgICAuZmlsdGVyKGNvbCA9PiAhY29sLnN1bW1hcnlUZW1wbGF0ZSlcbiAgICAgIC5mb3JFYWNoKGNvbCA9PiB7XG4gICAgICAgIGNvbnN0IGNlbGxzRnJvbVNpbmdsZUNvbHVtbiA9IHRoaXMucm93cy5tYXAocm93ID0+IHJvd1tjb2wucHJvcF0pO1xuICAgICAgICBjb25zdCBzdW1GdW5jID0gdGhpcy5nZXRTdW1tYXJ5RnVuY3Rpb24oY29sKTtcblxuICAgICAgICB0aGlzLnN1bW1hcnlSb3dbY29sLnByb3BdID0gY29sLnBpcGVcbiAgICAgICAgICA/IGNvbC5waXBlLnRyYW5zZm9ybShzdW1GdW5jKGNlbGxzRnJvbVNpbmdsZUNvbHVtbikpXG4gICAgICAgICAgOiBzdW1GdW5jKGNlbGxzRnJvbVNpbmdsZUNvbHVtbik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3VtbWFyeUZ1bmN0aW9uKGNvbHVtbjogSVN1bW1hcnlDb2x1bW4pOiAoYTogYW55W10pID0+IGFueSB7XG4gICAgaWYgKGNvbHVtbi5zdW1tYXJ5RnVuYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZGVmYXVsdFN1bUZ1bmM7XG4gICAgfSBlbHNlIGlmIChjb2x1bW4uc3VtbWFyeUZ1bmMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBub29wU3VtRnVuYztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbHVtbi5zdW1tYXJ5RnVuYztcbiAgICB9XG4gIH1cbn1cbiJdfQ==