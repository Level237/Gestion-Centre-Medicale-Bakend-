import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GalleryComponent } from "./gallery/gallery.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "gallery",
    pathMatch: "full",
  },
  {
    path: "gallery",
    component: GalleryComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaRoutingModule {}
