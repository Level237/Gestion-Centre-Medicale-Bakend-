import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChartsRoutingModule } from "./charts-routing.module";
import { EchartComponent } from "./echart/echart.component";
import { ChartjsComponent } from "./chartjs/chartjs.component";
import { ApexchartComponent } from "./apexchart/apexchart.component";
import { NgxEchartsModule } from "ngx-echarts";
import { ChartsModule as chartjsModule } from "ng2-charts";
import { NgxchartComponent } from "./ngxchart/ngxchart.component";
import { NgxChartsModule } from "@swimlane/ngx-charts";
import { NgApexchartsModule } from "ng-apexcharts";
import { GaugeModule } from "angular-gauge";
import { GaugeComponent } from "./gauge/gauge.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { NgxGaugeModule } from "ngx-gauge";
@NgModule({
  declarations: [
    EchartComponent,
    ChartjsComponent,
    ApexchartComponent,
    NgxchartComponent,
    GaugeComponent,
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import("echarts"),
    }),
    chartjsModule,
    NgxChartsModule,
    NgApexchartsModule,
    MatMenuModule,
    MatIconModule,
    GaugeModule.forRoot(),
    NgxGaugeModule,
  ],
})
export class ChartsModule {}
