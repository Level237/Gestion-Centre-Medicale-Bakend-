import { Component, Output, EventEmitter, ChangeDetectionStrategy, Input } from '@angular/core';
export class DataTableFooterComponent {
    constructor() {
        this.selectedCount = 0;
        this.page = new EventEmitter();
    }
    get isVisible() {
        return this.rowCount / this.pageSize > 1;
    }
    get curPage() {
        return this.offset + 1;
    }
}
DataTableFooterComponent.decorators = [
    { type: Component, args: [{
                selector: 'datatable-footer',
                template: `
    <div
      class="datatable-footer-inner"
      [ngClass]="{ 'selected-count': selectedMessage }"
      [style.height.px]="footerHeight"
    >
      <ng-template
        *ngIf="footerTemplate"
        [ngTemplateOutlet]="footerTemplate.template"
        [ngTemplateOutletContext]="{
          rowCount: rowCount,
          pageSize: pageSize,
          selectedCount: selectedCount,
          curPage: curPage,
          offset: offset
        }"
      >
      </ng-template>
      <div class="page-count" *ngIf="!footerTemplate">
        <span *ngIf="selectedMessage"> {{ selectedCount?.toLocaleString() }} {{ selectedMessage }} / </span>
        {{ rowCount?.toLocaleString() }} {{ totalMessage }}
      </div>
      <datatable-pager
        *ngIf="!footerTemplate"
        [pagerLeftArrowIcon]="pagerLeftArrowIcon"
        [pagerRightArrowIcon]="pagerRightArrowIcon"
        [pagerPreviousIcon]="pagerPreviousIcon"
        [pagerNextIcon]="pagerNextIcon"
        [page]="curPage"
        [size]="pageSize"
        [count]="rowCount"
        [hidden]="!isVisible"
        (change)="page.emit($event)"
      >
      </datatable-pager>
    </div>
  `,
                host: {
                    class: 'datatable-footer'
                },
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
DataTableFooterComponent.propDecorators = {
    footerHeight: [{ type: Input }],
    rowCount: [{ type: Input }],
    pageSize: [{ type: Input }],
    offset: [{ type: Input }],
    pagerLeftArrowIcon: [{ type: Input }],
    pagerRightArrowIcon: [{ type: Input }],
    pagerPreviousIcon: [{ type: Input }],
    pagerNextIcon: [{ type: Input }],
    totalMessage: [{ type: Input }],
    footerTemplate: [{ type: Input }],
    selectedCount: [{ type: Input }],
    selectedMessage: [{ type: Input }],
    page: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi9wcm9qZWN0cy9zd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3NyYy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUE4Q2hHLE1BQU0sT0FBTyx3QkFBd0I7SUE1Q3JDO1FBd0RXLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBR3pCLFNBQUksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVN6RCxDQUFDO0lBUEMsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7OztZQW5FRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQ1Q7Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxrQkFBa0I7aUJBQzFCO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7MkJBRUUsS0FBSzt1QkFDTCxLQUFLO3VCQUNMLEtBQUs7cUJBQ0wsS0FBSztpQ0FDTCxLQUFLO2tDQUNMLEtBQUs7Z0NBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFFTCxLQUFLOzhCQUNMLEtBQUs7bUJBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YXRhYmxlRm9vdGVyRGlyZWN0aXZlIH0gZnJvbSAnLi9mb290ZXIuZGlyZWN0aXZlJztcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGF0YWJsZS1mb290ZXInLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXZcbiAgICAgIGNsYXNzPVwiZGF0YXRhYmxlLWZvb3Rlci1pbm5lclwiXG4gICAgICBbbmdDbGFzc109XCJ7ICdzZWxlY3RlZC1jb3VudCc6IHNlbGVjdGVkTWVzc2FnZSB9XCJcbiAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwiZm9vdGVySGVpZ2h0XCJcbiAgICA+XG4gICAgICA8bmctdGVtcGxhdGVcbiAgICAgICAgKm5nSWY9XCJmb290ZXJUZW1wbGF0ZVwiXG4gICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZvb3RlclRlbXBsYXRlLnRlbXBsYXRlXCJcbiAgICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgICByb3dDb3VudDogcm93Q291bnQsXG4gICAgICAgICAgcGFnZVNpemU6IHBhZ2VTaXplLFxuICAgICAgICAgIHNlbGVjdGVkQ291bnQ6IHNlbGVjdGVkQ291bnQsXG4gICAgICAgICAgY3VyUGFnZTogY3VyUGFnZSxcbiAgICAgICAgICBvZmZzZXQ6IG9mZnNldFxuICAgICAgICB9XCJcbiAgICAgID5cbiAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8ZGl2IGNsYXNzPVwicGFnZS1jb3VudFwiICpuZ0lmPVwiIWZvb3RlclRlbXBsYXRlXCI+XG4gICAgICAgIDxzcGFuICpuZ0lmPVwic2VsZWN0ZWRNZXNzYWdlXCI+IHt7IHNlbGVjdGVkQ291bnQ/LnRvTG9jYWxlU3RyaW5nKCkgfX0ge3sgc2VsZWN0ZWRNZXNzYWdlIH19IC8gPC9zcGFuPlxuICAgICAgICB7eyByb3dDb3VudD8udG9Mb2NhbGVTdHJpbmcoKSB9fSB7eyB0b3RhbE1lc3NhZ2UgfX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRhdGF0YWJsZS1wYWdlclxuICAgICAgICAqbmdJZj1cIiFmb290ZXJUZW1wbGF0ZVwiXG4gICAgICAgIFtwYWdlckxlZnRBcnJvd0ljb25dPVwicGFnZXJMZWZ0QXJyb3dJY29uXCJcbiAgICAgICAgW3BhZ2VyUmlnaHRBcnJvd0ljb25dPVwicGFnZXJSaWdodEFycm93SWNvblwiXG4gICAgICAgIFtwYWdlclByZXZpb3VzSWNvbl09XCJwYWdlclByZXZpb3VzSWNvblwiXG4gICAgICAgIFtwYWdlck5leHRJY29uXT1cInBhZ2VyTmV4dEljb25cIlxuICAgICAgICBbcGFnZV09XCJjdXJQYWdlXCJcbiAgICAgICAgW3NpemVdPVwicGFnZVNpemVcIlxuICAgICAgICBbY291bnRdPVwicm93Q291bnRcIlxuICAgICAgICBbaGlkZGVuXT1cIiFpc1Zpc2libGVcIlxuICAgICAgICAoY2hhbmdlKT1cInBhZ2UuZW1pdCgkZXZlbnQpXCJcbiAgICAgID5cbiAgICAgIDwvZGF0YXRhYmxlLXBhZ2VyPlxuICAgIDwvZGl2PlxuICBgLFxuICBob3N0OiB7XG4gICAgY2xhc3M6ICdkYXRhdGFibGUtZm9vdGVyJ1xuICB9LFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBEYXRhVGFibGVGb290ZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBmb290ZXJIZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCkgcm93Q291bnQ6IG51bWJlcjtcbiAgQElucHV0KCkgcGFnZVNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgb2Zmc2V0OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBhZ2VyTGVmdEFycm93SWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSBwYWdlclJpZ2h0QXJyb3dJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhZ2VyUHJldmlvdXNJY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHBhZ2VyTmV4dEljb246IHN0cmluZztcbiAgQElucHV0KCkgdG90YWxNZXNzYWdlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGZvb3RlclRlbXBsYXRlOiBEYXRhdGFibGVGb290ZXJEaXJlY3RpdmU7XG5cbiAgQElucHV0KCkgc2VsZWN0ZWRDb3VudDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgc2VsZWN0ZWRNZXNzYWdlOiBzdHJpbmcgfCBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBwYWdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXQgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnJvd0NvdW50IC8gdGhpcy5wYWdlU2l6ZSA+IDE7XG4gIH1cblxuICBnZXQgY3VyUGFnZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm9mZnNldCArIDE7XG4gIH1cbn1cbiJdfQ==