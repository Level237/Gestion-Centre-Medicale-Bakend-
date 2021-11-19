import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray } from "@angular/cdk/drag-drop";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";
import { formatDate } from "@angular/common";
@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.sass"],
})
export class TaskComponent implements OnInit {
  mode = new FormControl("side");
  taskForm: FormGroup;
  showFiller = false;
  isNewEvent = false;
  dialogTitle: string;
  userImg: string;
  constructor(private fb: FormBuilder) {
    this.taskForm = this.createFormGroup(null);
  }

  tasks = [
    {
      id: "1",
      img: "assets/images/user/user1.jpg",
      name: "Sarah Smith",
      title: "Develop angular project",
      done: true,
      note: "note details",
      priority: "High",
      due_date: "2/12/2020",
    },
    {
      id: "2",
      img: "assets/images/user/user2.jpg",
      name: "John Deo",
      title: "File not found exception solve",
      done: false,
      note: "note details",
      priority: "High",
      due_date: "2/12/2019",
    },
    {
      id: "3",
      img: "assets/images/user/user3.jpg",
      name: "Jens Brincker",
      title: "Test project and find bug",
      done: false,
      note: "note details",
      priority: "Low",
      due_date: "2/12/2017",
    },
    {
      id: "4",
      img: "assets/images/user/user4.jpg",
      name: "Mark Hay",
      title: "Image not found error",
      done: true,
      note: "note details",
      priority: "Normal",
      due_date: "2/12/2020",
    },
    {
      id: "5",
      img: "assets/images/user/user5.jpg",
      name: "Anthony Davie",
      title: "Solve client error in form",
      done: false,
      note: "note details",
      priority: "High",
      due_date: "2/12/2019",
    },
    {
      id: "6",
      img: "assets/images/user/user6.jpg",
      name: "Sue Woodger",
      title: "Tab button is flickering on hover",
      done: false,
      note: "note details",
      priority: "Normal",
      due_date: "2/12/2017",
    },
    {
      id: "7",
      img: "assets/images/user/user7.jpg",
      name: "John Deo",
      title: "Chart responsive issue solve",
      done: true,
      note: "note details",
      priority: "High",
      due_date: "2/12/2019",
    },
    {
      id: "8",
      img: "assets/images/user/user8.jpg",
      name: "Jens Brincker",
      title: "Web service data load issue",
      done: false,
      note: "note details",
      priority: "High",
      due_date: "2/12/2020",
    },
    {
      id: "9",
      img: "assets/images/user/user9.jpg",
      name: "Sarah Smith",
      title: "Java compile error",
      done: false,
      note: "note details",
      priority: "Low",
      due_date: "2/12/2017",
    },
    {
      id: "10",
      img: "assets/images/user/user10.jpg",
      name: "Mark Hay",
      title: "Integrate project with spring boot",
      done: true,
      note: "note details",
      priority: "High",
      due_date: "2/12/2019",
    },
    {
      id: "11",
      img: "assets/images/user/user1.jpg",
      name: "John Deo",
      title: "Update latest angular version",
      done: false,
      note: "note details",
      priority: "High",
      due_date: "2/12/2017",
    },
    {
      id: "12",
      img: "assets/images/user/user2.jpg",
      name: "Jens Brincker",
      title: "Integrate lazy loading on project",
      done: false,
      note: "note details",
      priority: "Normal",
      due_date: "2/12/2020",
    },
    {
      id: "13",
      img: "assets/images/user/user3.jpg",
      name: "Mark Hay",
      title: "js file not load properly",
      done: true,
      note: "note details",
      priority: "Normal",
      due_date: "2/12/2019",
    },
    {
      id: "14",
      img: "assets/images/user/user4.jpg",
      name: "Anthony Davie",
      title: "need to change color of table",
      done: false,
      note: "note details",
      priority: "Normal",
      due_date: "2/12/2017",
    },
    {
      id: "15",
      img: "assets/images/user/user5.jpg",
      name: "Sue Woodger",
      title: "modal window select item issue",
      done: false,
      note: "note details",
      priority: "Low",
      due_date: "2/12/2017",
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
  toggle(task, nav: any) {
    nav.close();
    task.done = !task.done;
  }
  addNewTask(nav: any) {
    this.resetFormField();
    this.isNewEvent = true;
    this.dialogTitle = "New Task";
    this.userImg = "assets/images/user/user1.jpg";
    nav.open();
  }
  taskClick(task, nav: any): void {
    this.isNewEvent = false;
    this.dialogTitle = "Edit Task";
    this.userImg = task.img;
    nav.open();
    this.taskForm = this.createFormGroup(task);
  }
  closeSlider(nav: any) {
    if (nav.open()) {
      nav.close();
    }
  }
  createFormGroup(data: any) {
    return this.fb.group({
      id: [data ? data.id : this.getRandomID()],
      img: [data ? data.img : "assets/images/user/user1.jpg"],
      name: [data ? data.name : null],
      title: [data ? data.title : null],
      done: [data ? data.done : null],
      priority: [data ? data.priority : null],
      due_date: [
        formatDate(
          data
            ? data.due_date
            : formatDate(new Date(), "yyyy-MM-dd", "en") || "",
          "yyyy-MM-dd",
          "en"
        ),
      ],
      note: [data ? data.note : null],
    });
  }
  saveTask() {
    this.tasks.unshift(this.taskForm.value);
    this.resetFormField();
  }
  editTask() {
    const targetIdx = this.tasks
      .map((item) => item.id)
      .indexOf(this.taskForm.value.id);
    this.tasks[targetIdx] = this.taskForm.value;
  }
  deleteTask(nav: any) {
    const targetIdx = this.tasks
      .map((item) => item.id)
      .indexOf(this.taskForm.value.id);
    this.tasks.splice(targetIdx, 1);
    nav.close();
  }
  resetFormField() {
    this.taskForm.controls.name.reset();
    this.taskForm.controls.title.reset();
    this.taskForm.controls.done.reset();
    this.taskForm.controls.priority.reset();
    this.taskForm.controls.due_date.reset();
    this.taskForm.controls.note.reset();
  }
  public getRandomID(): string {
    const S4 = () => {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4();
  }
  ngOnInit(): void {}
}
