import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AlldoctorsComponent } from "./alldoctors/alldoctors.component";
import { AddDoctorComponent } from "./add-doctor/add-doctor.component";
import { EditDoctorComponent } from "./edit-doctor/edit-doctor.component";
import { DoctorProfileComponent } from "./doctor-profile/doctor-profile.component";
import { Page404Component } from "./../../authentication/page404/page404.component";
const routes: Routes = [
  {
    path: "allDoctors",
    component: AlldoctorsComponent,
  },
  {
    path: "add-doctor",
    component: AddDoctorComponent,
  },
  {
    path: "edit-doctor",
    component: EditDoctorComponent,
  },
  {
    path: "doctor-profile",
    component: DoctorProfileComponent,
  },
  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule {}
