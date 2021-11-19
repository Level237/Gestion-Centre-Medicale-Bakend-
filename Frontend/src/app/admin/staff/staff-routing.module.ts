import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AllstaffComponent } from "./allstaff/allstaff.component";
import { AddStaffComponent } from "./add-staff/add-staff.component";
import { EditStaffComponent } from "./edit-staff/edit-staff.component";
import { StaffProfileComponent } from "./staff-profile/staff-profile.component";
import { Page404Component } from "./../../authentication/page404/page404.component";
const routes: Routes = [
  {
    path: "all-staff",
    component: AllstaffComponent,
  },
  {
    path: "add-staff",
    component: AddStaffComponent,
  },
  {
    path: "edit-staff",
    component: EditStaffComponent,
  },
  {
    path: "staff-profile",
    component: StaffProfileComponent,
  },
  { path: "**", component: Page404Component },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StaffRoutingModule {}
