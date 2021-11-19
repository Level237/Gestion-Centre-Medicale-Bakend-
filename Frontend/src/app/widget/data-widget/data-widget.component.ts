import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
@Component({
  selector: "app-data-widget",
  templateUrl: "./data-widget.component.html",
  styleUrls: ["./data-widget.component.sass"],
})
export class DataWidgetComponent implements OnInit {
  constructor() {}

  // TODO start
  tasks = [
    {
      id: "1",
      title: "Submit Science Homework",
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
      title: "Order new java book",
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
      title: "Pay Hostel Fees",
      done: false,
      priority: "High",
    },
    {
      id: "6",
      title: "Attend Seminar On Sunday",
      done: false,
      priority: "Normal",
    },
    {
      id: "7",
      title: "Renew bus pass",
      done: true,
      priority: "High",
    },
    {
      id: "8",
      title: "Issue book in library",
      done: false,
      priority: "High",
    },
    {
      id: "9",
      title: "Project report submit",
      done: false,
      priority: "Low",
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  toggle(task, nav: any) {
    task.done = !task.done;
  }
  // TODO end
  ngOnInit() {}
}
