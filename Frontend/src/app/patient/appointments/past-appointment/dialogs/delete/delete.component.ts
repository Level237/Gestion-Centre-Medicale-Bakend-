import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Component, Inject } from "@angular/core";
import { PastAppointmentService } from "../../past-appointment.service";
@Component({
  selector: "app-delete",
  templateUrl: "./delete.component.html",
  styleUrls: ["./delete.component.sass"],
})
export class PastDeleteDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<PastDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public appointmentService: PastAppointmentService
  ) {}
  onNoClick(): void {
    this.dialogRef.close();
  }
  confirmDelete(): void {
    this.appointmentService.deletePastAppointment(this.data.id);
  }
}
