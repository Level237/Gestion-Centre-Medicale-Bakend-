import { Component, OnInit, ViewChild } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexPlotOptions,
  ApexStroke,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexFill,
} from "ng-apexcharts";
export type areaChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
};

export type linechartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors: string[];
};

export type radialChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  plotOptions: ApexPlotOptions;
};
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.sass"],
})
export class DashboardComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public areaChartOptions: Partial<areaChartOptions>;
  public radialChartOptions: Partial<radialChartOptions>;
  public linechartOptions: Partial<linechartOptions>;
  constructor() {}

  // TODO start
  tasks = [
    {
      id: "1",
      title: "Check patient report",
      done: true,
      priority: "High",
    },
    {
      id: "2",
      title: "Request for festivle holiday",
      done: false,
      priority: "High",
    },
    {
      id: "3",
      title: "Order new medicine stock",
      done: false,
      priority: "Low",
    },
    {
      id: "4",
      title: "Remind for lunch in hotel",
      done: true,
      priority: "Normal",
    },
    {
      id: "5",
      title: "Conference in london",
      done: false,
      priority: "High",
    },
    {
      id: "6",
      title: "Announcement for",
      done: false,
      priority: "Normal",
    },
    {
      id: "7",
      title: "call bus driver",
      done: true,
      priority: "High",
    },
    {
      id: "8",
      title: "Web service data load issue",
      done: false,
      priority: "High",
    },
    {
      id: "9",
      title: "Java compile error",
      done: false,
      priority: "Low",
    },
    {
      id: "10",
      title: "Integrate project with spring boot",
      done: true,
      priority: "High",
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  toggle(task, nav: any) {
    task.done = !task.done;
  }
  // TODO end

  ngOnInit() {
    this.chart1();
    this.chart2();
    this.chart3();
  }
  private chart1() {
    this.areaChartOptions = {
      series: [
        {
          name: "New Patients",
          data: [31, 40, 28, 51, 42, 85, 77],
        },
        {
          name: "Old Patients",
          data: [11, 32, 45, 32, 34, 52, 41],
        },
      ],
      chart: {
        height: 350,
        type: "area",
        toolbar: {
          show: false,
        },
        foreColor: "#9aa0ac",
      },
      colors: ["#7D4988", "#66BB6A"],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      legend: {
        show: true,
        position: "top",
        horizontalAlign: "center",
        offsetX: 0,
        offsetY: 0,
      },

      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };
  }
  private chart2() {
    this.radialChartOptions = {
      series: [44, 55, 67],
      chart: {
        height: 265,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: "22px",
            },
            value: {
              fontSize: "16px",
            },
            total: {
              show: true,
              label: "Total",
              formatter: function (w) {
                return "249";
              },
            },
          },
        },
      },
      colors: ["#ffc107", "#3f51b5", "#8bc34a"],

      labels: ["Face TO Face", "E-Consult", "Available"],
    };
  }
  private chart3() {
    this.linechartOptions = {
      series: [
        {
          name: "Male",
          data: [44, 55, 57, 56, 61, 58],
        },
        {
          name: "Female",
          data: [76, 85, 101, 98, 87, 105],
        },
      ],
      chart: {
        type: "bar",
        height: 350,
        dropShadow: {
          enabled: true,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
        toolbar: {
          show: false,
        },
        foreColor: "#9aa0ac",
      },
      colors: ["#5C9FFB", "#AEAEAE"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          borderRadius: 5,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      yaxis: {},
      fill: {
        opacity: 1,
      },
      tooltip: {
        theme: "dark",
        marker: {
          show: true,
        },
        x: {
          show: true,
        },
      },
    };
  }
}
