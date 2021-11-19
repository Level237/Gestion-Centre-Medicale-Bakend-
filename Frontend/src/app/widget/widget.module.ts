import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { FormsModule } from "@angular/forms";
import { WidgetRoutingModule } from "./widget-routing.module";
import { ChartWidgetComponent } from "./chart-widget/chart-widget.component";
import { DataWidgetComponent } from "./data-widget/data-widget.component";
import { NgApexchartsModule } from "ng-apexcharts";
import { ChartsModule as chartjsModule } from "ng2-charts";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatIconModule } from "@angular/material/icon";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [ChartWidgetComponent, DataWidgetComponent],
  imports: [
    CommonModule,
    WidgetRoutingModule,
    PerfectScrollbarModule,
    NgApexchartsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    DragDropModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTabsModule,
    chartjsModule,
  ],
})
export class WidgetModule {}
