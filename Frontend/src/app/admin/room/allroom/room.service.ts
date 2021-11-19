import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Room } from "./room.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { UnsubscribeOnDestroyAdapter } from "src/app/shared/UnsubscribeOnDestroyAdapter";
@Injectable()
export class RoomService extends UnsubscribeOnDestroyAdapter {
  private readonly API_URL = "assets/data/rooms.json";
  isTblLoading = true;
  dataChange: BehaviorSubject<Room[]> = new BehaviorSubject<Room[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;
  constructor(private httpClient: HttpClient) {
    super();
  }
  get data(): Room[] {
    return this.dataChange.value;
  }
  getDialogData() {
    return this.dialogData;
  }
  /** CRUD METHODS */
  getAllRooms(): void {
    this.subs.sink = this.httpClient.get<Room[]>(this.API_URL).subscribe(
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
  addRoom(room: Room): void {
    this.dialogData = room;

    /*  this.httpClient.post(this.API_URL, room).subscribe(data => {
      this.dialogData = room;
      },
      (err: HttpErrorResponse) => {
     // error code here
    });*/
  }
  updateRoom(room: Room): void {
    this.dialogData = room;

    /* this.httpClient.put(this.API_URL + room.id, room).subscribe(data => {
      this.dialogData = room;
    },
    (err: HttpErrorResponse) => {
      // error code here
    }
  );*/
  }
  deleteRoom(id: number): void {
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
