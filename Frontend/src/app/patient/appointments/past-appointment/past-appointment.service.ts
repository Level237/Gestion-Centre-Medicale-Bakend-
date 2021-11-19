import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PastAppointment } from "./past-appointment.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
@Injectable()
export class PastAppointmentService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "assets/data/past-appointment.json";
  isTblLoading = true;
  dataChange: BehaviorSubject<PastAppointment[]> = new BehaviorSubject<
    PastAppointment[]
  >([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): PastAppointment[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllPastAppointment(): void {
    this.subs.sink = this.httpClient
      .get<PastAppointment[]>(this.API_URL)
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
  addPastAppointment(appointment: PastAppointment): void {
    this.dialogData = appointment;

    /*  this.httpClient.post(this.API_URL, appointment).subscribe(data => {
      this.dialogData = appointment;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updatePastAppointment(appointment: PastAppointment): void {
    this.dialogData = appointment;

    /* this.httpClient.put(this.API_URL + appointment.id, appointment).subscribe(data => {
      this.dialogData = appointment;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deletePastAppointment(id: number): void {
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
