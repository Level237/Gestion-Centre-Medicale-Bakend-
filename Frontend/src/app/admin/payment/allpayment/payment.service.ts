import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Payment } from "./payment.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
@Injectable()
export class PaymentService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "assets/data/payment.json";
  isTblLoading = true;
  dataChange: BehaviorSubject<Payment[]> = new BehaviorSubject<Payment[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Payment[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllPayments(): void {
    this.subs.sink = this.httpClient.get<Payment[]>(this.API_URL).subscribe(
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
  addPayment(payment: Payment): void {
    this.dialogData = payment;

    /*  this.httpClient.post(this.API_URL, payment).subscribe(data => {
      this.dialogData = payment;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updatePayment(payment: Payment): void {
    this.dialogData = payment;

    /* this.httpClient.put(this.API_URL + payment.id, payment).subscribe(data => {
      this.dialogData = payment;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deletePayment(id: number): void {
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
