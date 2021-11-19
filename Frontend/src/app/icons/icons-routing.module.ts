import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MaterialComponent } from "./material/material.component";
import { FontAwesomeComponent } from "./font-awesome/font-awesome.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "material",
    pathMatch: "full",
  },
  {
    path: "material",
    component: MaterialComponent,
  },
  {
    path: "font-awesome",
    component: FontAwesomeComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IconsRoutingModule {}
