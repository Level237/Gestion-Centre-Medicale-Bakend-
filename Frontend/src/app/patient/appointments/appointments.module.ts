import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

import { AppointmentsRoutingModule } from "./appointments-routing.module";
import { UpcomingAppointmentComponent } from "./upcoming-appointment/upcoming-appointment.component";
import { DeleteDialogComponent } from "./upcoming-appointment/dialogs/delete/delete.component";
import { FormDialogComponent } from "./upcoming-appointment/dialogs/form-dialog/form-dialog.component";
import { PastAppointmentComponent } from "./past-appointment/past-appointment.component";
import { PastDeleteDialogComponent } from "./past-appointment/dialogs/delete/delete.component";
import { TodayAppointmentComponent } from "./today-appointment/today-appointment.component";
import { DeleteComponent } from "./today-appointment/dialogs/delete/delete.component";
import { UpcomingAppointmentService } from "./upcoming-appointment/upcoming-appointment.service";
import { PastAppointmentService } from "./past-appointment/past-appointment.service";

@NgModule({
  declarations: [
    UpcomingAppointmentComponent,
    DeleteDialogComponent,
    FormDialogComponent,
    PastAppointmentComponent,
    PastDeleteDialogComponent,
    TodayAppointmentComponent,
    DeleteComponent,
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSortModule,
    MatCheckboxModule,
    MatToolbarModule,
    MaterialFileInputModule,
    MatProgressSpinnerModule,
  ],
  providers: [UpcomingAppointmentService, PastAppointmentService],
})
export class AppointmentsModule {}
