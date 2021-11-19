import { Component } from "@angular/core";

@Component({
  selector: "app-chartjs",
  templateUrl: "./chartjs.component.html",
  styleUrls: ["./chartjs.component.scss"],
})
export class ChartjsComponent {
  constructor() {}

  // Line chert start
  public lineChartOptions = {
    responsive: true,
    tooltips: {
      mode: "index",
      titleFontSize: 12,
      titleFontColor: "#000",
      bodyFontColor: "#000",
      backgroundColor: "#fff",
      titleFontFamily: "Poppins",
      bodyFontFamily: "Poppins",
      cornerRadius: 3,
      intersect: false,
    },
    legend: {
      display: false,
      labels: {
        usePointStyle: true,
        fontFamily: "Poppins",
      },
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: false,
            drawBorder: false,
          },
          scaleLabel: {
            display: false,
            labelString: "Month",
          },
          ticks: {
            fontFamily: "Poppins",
            fontColor: "#9aa0ac", // Font Color
          },
        },
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            display: false,
            drawBorder: false,
          },
          scaleLabel: {
            display: true,
            labelString: "Value",
            fontFamily: "Poppins",
          },
          ticks: {
            fontFamily: "Poppins",
            fontColor: "#9aa0ac", // Font Color
          },
        },
      ],
    },
    title: {
      display: false,
      text: "Normal Legend",
    },
  };
  lineChartData = [
    {
      label: "Foods",
      data: [0, 30, 10, 120, 50, 63, 10],
      backgroundColor: "transparent",
      borderColor: "#222222",
      borderWidth: 2,
      pointStyle: "circle",
      pointRadius: 3,
      pointBorderColor: "transparent",
      pointBackgroundColor: "#222222",
    },
    {
      label: "Electronics",
      data: [0, 50, 40, 80, 40, 79, 120],
      backgroundColor: "transparent",
      borderColor: "#f96332",
      borderWidth: 2,
      pointStyle: "circle",
      pointRadius: 3,
      pointBorderColor: "transparent",
      pointBackgroundColor: "#f96332",
    },
  ];

  lineChartLabels = ["January", "February", "Mars", "April"];

  // Line chert end

  // area chart start
  public areaChartOptions = {
    responsive: true,
    tooltips: {
      mode: "index",
      titleFontSize: 12,
      titleFontColor: "#000",
      bodyFontColor: "#000",
      backgroundColor: "#fff",
      titleFontFamily: "Poppins",
      bodyFontFamily: "Poppins",
      cornerRadius: 3,
      intersect: false,
    },
    legend: {
      display: false,
      labels: {
        usePointStyle: true,
        fontFamily: "Poppins",
      },
    },
    scales: {
      xAxes: [
        {
          display: true,
          gridLines: {
            display: false,
            drawBorder: false,
          },
          scaleLabel: {
            display: false,
            labelString: "Month",
          },
          ticks: {
            fontFamily: "Poppins",
            fontColor: "#9aa0ac", // Font Color
          },
        },
      ],
      yAxes: [
        {
          display: true,
          gridLines: {
            display: false,
            drawBorder: false,
          },
          scaleLabel: {
            display: true,
            labelString: "Value",
            fontFamily: "Poppins",
          },
          ticks: {
            fontFamily: "Poppins",
            fontColor: "#9aa0ac", // Font Color
          },
        },
      ],
    },
    title: {
      display: false,
      text: "Normal Legend",
    },
  };
  areaChartData = [
    {
      label: "Foods",
      data: [0, 105, 190, 140, 270],
      borderWidth: 2,
      pointStyle: "circle",
      pointRadius: 3,
      pointBorderColor: "transparent",
    },
    {
      label: "Electronics",
      data: [0, 152, 80, 250, 190],
      borderWidth: 2,
      pointStyle: "circle",
      pointRadius: 3,
      pointBorderColor: "transparent",
    },
  ];

  areaChartLabels = ["January", "February", "March", "April", "May"];
  // area chart end

  // barChart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: "#9aa0ac",
      },
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontFamily: "Poppins",
            fontColor: "#9aa0ac", // Font Color
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            fontFamily: "Poppins",
            fontColor: "#9aa0ac", // Font Color
          },
        },
      ],
    },
  };
  public barChartLabels: string[] = [
    "2001",
    "2002",
    "2003",
    "2004",
    "2005",
    "2006",
    "2007",
  ];
  public barChartType = "bar";
  public barChartLegend = true;

  public barChartData: any[] = [
    { data: [58, 60, 74, 78, 55, 64, 42], label: "Series A" },
    { data: [30, 45, 51, 22, 79, 35, 82], label: "Series B" },
  ];

  public barChartColors: Array<any> = [
    {
      backgroundColor: "rgba(109, 144, 232, 0.8)",
      borderColor: "rgba(109, 144, 232,1)",
      pointBackgroundColor: "rgba(109, 144, 232,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(109, 144, 232,0.8)",
    },
    {
      backgroundColor: "rgba(255, 140, 96, 0.8)",
      borderColor: "rgba(255, 140, 96,1)",
      pointBackgroundColor: "rgba(255, 140, 96,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255, 140, 96,0.8)",
    },
  ];
  // end bar chart

  // start radar chart
  public radarChartLabels: string[] = [
    "A1",
    "A2",
    "A3",
    "A4",
    "A5",
    "A6",
    "A7",
  ];

  public radarChartData: any = [
    { data: [58, 60, 74, 78, 55, 64, 42], label: "Series A" },
    { data: [30, 45, 51, 22, 79, 35, 82], label: "Series B" },
  ];
  public radarChartType = "radar";
  public radarChartColors: any[] = [
    {
      backgroundColor: ["rgba(109, 144, 232,0.8)"],
    },
    {
      backgroundColor: ["rgba(255, 140, 96,0.8)"],
    },
  ];
  public radarChartOptions: any = {
    animation: false,
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: "#9aa0ac",
      },
    },
    scale: {
      ticks: {
        beginAtZero: true,
        fontFamily: "Poppins",
        fontColor: "#9aa0ac", // Font Color
      },
    },
  };
  // end radar chart

  // Doughnut chart start
  public doughnutChartLabels: string[] = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
  ];
  public doughnutChartData: number[] = [45, 25, 20, 10];
  public doughnutChartColors: any[] = [
    {
      backgroundColor: ["#735A84", "#E76412", "#9BC311", "#4E98D9"],
    },
  ];

  public doughnutChartType = "doughnut";
  public doughnutChartOptions: any = {
    animation: false,
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: "#9aa0ac",
      },
    },
  };

  // Doughnut chart end

  // Bubble chart start
  public bubbleChartOptions: any = {
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: "#9aa0ac",
      },
    },
    scales: {
      xAxes: [
        {
          ticks: {
            min: 0,
            max: 80,
            fontFamily: "Poppins",
            fontColor: "#9aa0ac", // Font Color
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 250000,
            fontFamily: "Poppins",
            fontColor: "#9aa0ac", // Font Color
          },
        },
      ],
    },
  };
  public bubbleChartType = "bubble";
  public bubbleChartLegend = true;

  public bubbleChartData: Array<any> = [
    {
      data: [
        { x: 45, y: 150000, r: 22.22 },
        { x: 42, y: 110000, r: 33.0 },
        { x: 60, y: 80637, r: 15.22 },
        { x: 75, y: 195055, r: 21.5 },
        { x: 30, y: 160446, r: 35.67 },
        { x: 25, y: 80446, r: 25.67 },
        { x: 10, y: 228446, r: 30.32 },
      ],
      label: "Units sold, Sales and Profitability",
    },
  ];

  // Bubble chart end

  // pie chart start
  public pieChartLabels: string[] = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
  ];
  public pieChartData: number[] = [45, 25, 20, 10];
  public pieChartType = "pie";
  public pieChartColors: any[] = [
    {
      backgroundColor: ["#60A3F6", "#7C59E7", "#DD6811", "#5BCFA5"],
    },
  ];
  public pieChartOptions: any = {
    animation: false,
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: "#9aa0ac",
      },
    },
  };
  // pie chart end

  // Polar chart start
  public polarAreaChartLabels: string[] = [
    "Project 1",
    "Project 2",
    "Project 3",
    "Project 4",
  ];
  public polarAreaChartData: number[] = [15, 18, 9, 19];
  public polarAreaLegend = true;
  public ploarChartColors: any[] = [
    {
      backgroundColor: ["#60A3F6", "#7C59E7", "#DD6811", "#5BCFA5"],
    },
  ];

  public polarAreaChartType = "polarArea";
  public polarChartOptions: any = {
    animation: false,
    responsive: true,
    legend: {
      display: true,
      labels: {
        fontColor: "#9aa0ac",
      },
    },
  };
  // Polar chart start
}
