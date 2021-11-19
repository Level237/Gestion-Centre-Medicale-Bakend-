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
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { DoctorsRoutingModule } from "./doctors-routing.module";
import { AlldoctorsComponent } from "./alldoctors/alldoctors.component";
import { DeleteDialogComponent } from "./alldoctors/dialogs/delete/delete.component";
import { FormDialogComponent } from "./alldoctors/dialogs/form-dialog/form-dialog.component";
import { AddDoctorComponent } from "./add-doctor/add-doctor.component";
import { EditDoctorComponent } from "./edit-doctor/edit-doctor.component";
import { DoctorProfileComponent } from "./doctor-profile/doctor-profile.component";
import { MaterialFileInputModule } from "ngx-material-file-input";
import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { DoctorsService } from "./alldoctors/doctors.service";

@NgModule({
  declarations: [
    AlldoctorsComponent,
    DeleteDialogComponent,
    FormDialogComponent,
    AddDoctorComponent,
    EditDoctorComponent,
    DoctorProfileComponent,
  ],
  imports: [
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
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTabsModule,
    MatCheckboxModule,
    MaterialFileInputModule,
    DoctorsRoutingModule,
    MatProgressSpinnerModule,
  ],
  providers: [DoctorsService],
})
export class DoctorsModule {}
