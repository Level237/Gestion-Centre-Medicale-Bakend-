import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Appointments } from "./appointments.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
@Injectable()
export class AppointmentsService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "http://laravel8.test:8080/api/Appointment";
  isTblLoading = true;
  dataChange: BehaviorSubject<Appointments[]> = new BehaviorSubject<
    Appointments[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Appointments[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllAppointmentss(): void {
    this.subs.sink = this.httpClient
      .get<Appointments[]>(this.API_URL)
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
  addAppointments(appointments: Appointments): void {
    this.dialogData = appointments;

    /*  this.httpClient.post(this.API_URL, appointments).subscribe(data => {
      this.dialogData = appointments;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateAppointments(appointments: Appointments): void {
    this.dialogData = appointments;

    /* this.httpClient.put(this.API_URL + appointments.id, appointments).subscribe(data => {
      this.dialogData = appointments;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteAppointments(id: number): void {
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
