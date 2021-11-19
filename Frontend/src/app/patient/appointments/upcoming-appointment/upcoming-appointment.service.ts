import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UpcomingAppointment } from "./upcoming-appointment.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
@Injectable()
export class UpcomingAppointmentService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "assets/data/upcoming-appointment.json";
  isTblLoading = true;
  dataChange: BehaviorSubject<UpcomingAppointment[]> = new BehaviorSubject<
    UpcomingAppointment[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): UpcomingAppointment[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllUpcomingAppointment(): void {
    this.subs.sink = this.httpClient
      .get<UpcomingAppointment[]>(this.API_URL)
      .subscribe(
        (data) => {
          this.isTblLoading = false;
          this.dataChange.next(data);
        },
        (error: HttpErrorResponse) => {
          this.isTblLoading = false;
          console.log(error.name + " " + error.message);
        }
      );
  }
  addUpcomingAppointment(appointment: UpcomingAppointment): void {
    this.dialogData = appointment;

    /*  this.httpClient.post(this.API_URL, appointment).subscribe(data => {
      this.dialogData = appointment;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateUpcomingAppointment(appointment: UpcomingAppointment): void {
    this.dialogData = appointment;

    /* this.httpClient.put(this.API_URL + appointment.id, appointment).subscribe(data => {
      this.dialogData = appointment;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteUpcomingAppointment(id: number): void {
    console.log(id);

    /*  this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(id);
      },
      (err: HttpErrorResponse) => {
         // error code here
      }
    );*/
  }
}
