import { Component, OnInit, ViewChild } from "@angular/core";
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexXAxis,
  ApexFill,
  ApexStroke,
  ApexLegend,
  ApexPlotOptions,
  ApexDataLabels,
  ApexTooltip,
  ApexYAxis,
  ApexGrid,
  ApexMarkers,
} from "ng-apexcharts";
export type circleChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive | ApexResponsive[];
};
export type radarChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  fill: ApexFill;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};
export type areaChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};
export type pieChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
  responsive: ApexResponsive[];
  labels: any;
};
export type avgLecChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  tooltip: ApexTooltip;
  legend: ApexLegend;
  fill: ApexFill;
  title: ApexTitleSubtitle;
};
declare const Chart: any;
declare const window: any;
@Component({
  selector: "app-chart-widget",
  templateUrl: "./chart-widget.component.html",
  styleUrls: ["./chart-widget.component.sass"],
})
export class ChartWidgetComponent implements OnInit {
  public radarChartOptions: any;
  public circleChartOptions: any;
  public areaChartOptions: any;
  public pieChartOptions: any;
  public avgLecChartOptions: any;

  public areaChartOptions2: any;
  public areaChartData: any;
  public areaChartLabels: any;
  public areaChartPlugins: any;

  public radarChartOptions2: any;
  public radarChartLabels: any;
  public radarChartData: any;
  public radarChartType: any;
  public radarChartColors: any;
  public radarChartPlugins: any;
  constructor() {}
  @ViewChild("chart", { static: true }) chart: ChartComponent;

  ngOnInit() {
    this.initChartReport1();
    this.initChartReport2();
    this.initChartReport3();
    this.initChartReport4();
    this.pieChart();
    this.radarChart();
    this.chartArea();
  }
  private initChartReport1() {
    this.areaChartOptions2 = {
      elements: {
        point: {
          radius: 0,
          hitRadius: 5,
          hoverRadius: 5,
        },
      },
      legend: {
        display: true,
        labels: {
          fontColor: "#9aa0ac",
        },
        position: "top",
      },
      scales: {
        xAxes: [
          {
            display: false,
          },
        ],
        yAxes: [
          {
            display: false,
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    this.areaChartPlugins = [
      {
        afterLayout: (chart) => {
          const ctx = chart.chart.ctx;
          const gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
          const dataset = chart.data.datasets[0];

          gradientStroke.addColorStop(0, "#5555FF");
          gradientStroke.addColorStop(1, "#9787FF");
          dataset.backgroundColor = gradientStroke;
          dataset.borderColor = "transparent";
          dataset.pointBorderColor = "transparent";
          dataset.pointBackgroundColor = "transparent";
          dataset.lineTension = "0.4";

          const gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
          const dataset2 = chart.data.datasets[1];
          gradientStroke2.addColorStop(0, "#FF55B8");
          gradientStroke2.addColorStop(1, "#FF8787");
          dataset2.backgroundColor = gradientStroke2;
          dataset2.borderColor = "transparent";
          dataset2.pointBorderColor = "transparent";
          dataset2.pointBackgroundColor = "transparent";
          dataset2.lineTension = "0.4";
        },
      },
    ];

    this.areaChartData = [
      {
        label: "Foods",
        data: [24, 18, 16, 18, 24, 36, 28],
      },
      {
        label: "Electronics",
        data: [20, 22, 30, 22, 18, 22, 30],
      },
    ];

    this.areaChartLabels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

    // area chart end
  }
  private initChartReport2() {
    this.radarChartPlugins = [
      {
        afterLayout: (chart) => {
          const ctx = chart.chart.ctx;
          const gradientStroke = ctx.createLinearGradient(0, 0, 0, 150);
          const dataset = chart.data.datasets[0];

          gradientStroke.addColorStop(0, "rgba(85, 85, 255, 0.9)");
          gradientStroke.addColorStop(1, "rgba(151, 135, 255, 0.8)");
          dataset.backgroundColor = gradientStroke;
          dataset.borderColor = "transparent";
          dataset.pointBackgroundColor = "transparent";
          dataset.pointBorderColor = "transparent";
          dataset.pointHoverBackgroundColor = "transparent";
          dataset.pointHoverBorderColor = "transparent";
          dataset.pointHitRadius = 50;

          const gradientStroke2 = ctx.createLinearGradient(0, 0, 0, 150);
          const dataset2 = chart.data.datasets[1];
          gradientStroke2.addColorStop(0, "rgba(255, 85, 184, 0.9)");
          gradientStroke2.addColorStop(1, "rgba(255, 135, 135, 0.8)");
          dataset2.backgroundColor = gradientStroke2;
          dataset2.borderColor = "transparent";
          dataset2.pointBackgroundColor = "transparent";
          dataset2.pointBorderColor = "transparent";
          dataset2.pointHoverBackgroundColor = "transparent";
          dataset2.pointHoverBorderColor = "transparent";
          dataset2.pointHitRadius = 50;
        },
        beforeDatasetsDraw: (chart) => {
          chart.ctx.shadowColor = "rgba(0, 0, 0, 0.25)";
          chart.ctx.shadowBlur = 40;
        },
        afterDatasetsDraw: (chart) => {
          chart.ctx.shadowColor = "rgba(0, 0, 0, 0)";
          chart.ctx.shadowBlur = 0;
        },
      },
    ];

    this.radarChartLabels = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

    this.radarChartData = [
      { data: [25, 59, 90, 81, 60, 82, 52], label: "Product", fill: true },
      { data: [40, 100, 40, 90, 40, 90, 84], label: "Services", fill: true },
    ];
    this.radarChartType = "radar";
    this.radarChartColors = [
      {
        backgroundColor: ["rgba(109, 144, 232,0.8)"],
      },
      {
        backgroundColor: ["rgba(255, 140, 96,0.8)"],
      },
    ];
    this.radarChartOptions2 = {
      legend: {
        display: true,
        labels: {
          fontColor: "#9aa0ac",
        },
        position: "top",
      },
      gridLines: {
        display: false,
      },
      scale: {
        ticks: {
          maxTicksLimit: 1,
          display: false,
        },
      },
    };
    // end radar chart
  }
  private initChartReport3() {
    this.pieChartOptions = {
      series: [44, 55, 13, 43, 22],
      chart: {
        type: "donut",
        width: 200,
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      labels: ["Science", "Mathes", "Economics", "History", "Music"],
      responsive: [
        {
          breakpoint: 480,
          options: {},
        },
      ],
    };
  }
  private initChartReport4() {
    this.avgLecChartOptions = {
      series: [
        {
          name: "Avg. Lecture",
          data: [65, 72, 62, 73, 66, 74, 63, 67],
        },
      ],
      chart: {
        height: 350,
        type: "line",
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
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        categories: ["Jan", "Feb", "March", "Apr", "May", "Jun", "July", "Aug"],
        title: {
          text: "Weekday",
        },
      },
      yaxis: {
        title: {
          text: "Avg. Lecture",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#35fdd8"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      markers: {
        size: 4,
        colors: ["#FFA41B"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7,
        },
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
  private pieChart() {
    this.circleChartOptions = {
      series: [76, 67, 61, 90],
      chart: {
        height: 275,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: "30%",
            background: "transparent",
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          },
        },
      },
      colors: ["#FF4560", "#775DD0", "#00E396", "#FEB019"],
      labels: ["Vimeo", "Messenger", "Facebook", "LinkedIn"],
      legend: {
        show: true,
        floating: true,
        fontSize: "12px",
        position: "left",
        offsetX: 10,
        offsetY: 10,
        labels: {
          useSeriesColors: true,
        },
        formatter: function (seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
        },
        itemMargin: {
          horizontal: 3,
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              show: false,
            },
          },
        },
      ],
    };
  }
  private radarChart() {
    this.radarChartOptions = {
      series: [
        {
          name: "Blue",
          data: [80, 50, 30, 40, 100, 20],
        },
        {
          name: "Green",
          data: [20, 30, 40, 80, 20, 80],
        },
        {
          name: "Orange",
          data: [44, 76, 78, 13, 43, 10],
        },
      ],
      chart: {
        height: 240,
        type: "radar",
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1,
        },
      },
      stroke: {
        width: 0,
      },
      fill: {
        opacity: 0.4,
      },
      markers: {
        size: 0,
      },
      xaxis: {
        categories: ["2011", "2012", "2013", "2014", "2015", "2016"],
      },
    };
  }
  private chartArea() {
    this.areaChartOptions = {
      chart: {
        height: 240,
        type: "area",
        toolbar: {
          show: false,
        },
        foreColor: "#9aa0ac",
      },
      legend: {
        show: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42],
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34],
        },
      ],
      xaxis: {
        type: "datetime",
        categories: ["1990", "1991", "1992", "1993", "1994"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    };
  }
}
