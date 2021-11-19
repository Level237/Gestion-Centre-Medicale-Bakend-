import { First3Component } from "./first3/first3.component";
import { First2Component } from "./first2/first2.component";
import { First1Component } from "./first1/first1.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "first1",
    component: First1Component,
  },
  {
    path: "first2",
    component: First2Component,
  },
  {
    path: "first3",
    component: First3Component,
  },
  {
    path: "secondlevel",
    loadChildren: () =>
      import("./secondlevel/secondlevel.module").then(
        (m) => m.SecondLevelModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MultilevelRoutingModule {}
