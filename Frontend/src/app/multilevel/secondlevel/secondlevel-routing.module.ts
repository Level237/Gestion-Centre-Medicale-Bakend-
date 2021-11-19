import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Second1Component } from "./second1/second1.component";
import { Second2Component } from "./second2/second2.component";

const routes: Routes = [
  {
    path: "second1",
    component: Second1Component,
  },
  {
    path: "second2",
    component: Second2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecondLevelRoutingModule {}
