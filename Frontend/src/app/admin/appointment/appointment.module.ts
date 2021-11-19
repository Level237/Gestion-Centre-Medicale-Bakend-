import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { AppointmentRoutingModule } from "./appointment-routing.module";
import { BookappointmentComponent } from "./bookappointment/bookappointment.component";
import { EditappointmentComponent } from "./editappointment/editappointment.component";
import { ViewappointmentComponent } from "./viewappointment/viewappointment.component";
import { DeleteDialogComponent } from "./viewappointment/dialogs/delete/delete.component";
import { FormDialogComponent } from "./viewappointment/dialogs/form-dialog/form-dialog.component";
import { AppointmentService } from "./viewappointment/appointment.service";

@NgModule({
  declarations: [
    BookappointmentComponent,
    EditappointmentComponent,
    ViewappointmentComponent,
    DeleteDialogComponent,
    FormDialogComponent,
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSortModule,
    MatRadioModule,
    MatSelectModule,
    MatCheckboxModule,
    MaterialFileInputModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
  ],
  providers: [AppointmentService],
})
export class AppointmentModule {}
