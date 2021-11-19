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
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatDialogModule } from "@angular/material/dialog";
import { MatSortModule } from "@angular/material/sort";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RoomRoutingModule } from "./room-routing.module";
import { AllroomComponent } from "./allroom/allroom.component";
import { DeleteDialogComponent } from "./allroom/dialog/delete/delete.component";
import { FormDialogComponent } from "./allroom/dialog/form-dialog/form-dialog.component";
import { EditAllotmentComponent } from "./edit-allotment/edit-allotment.component";
import { AddAllotmentComponent } from "./add-allotment/add-allotment.component";
import { RoomService } from "./allroom/room.service";

@NgModule({
  declarations: [
    AllroomComponent,
    DeleteDialogComponent,
    FormDialogComponent,
    EditAllotmentComponent,
    AddAllotmentComponent,
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
    MatCheckboxModule,
    MatToolbarModule,
    MatSelectModule,
    MatDatepickerModule,
    RoomRoutingModule,
    MatProgressSpinnerModule,
  ],
  providers: [RoomService],
})
export class RoomModule {}
