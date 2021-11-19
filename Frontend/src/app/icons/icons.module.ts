import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IconsRoutingModule } from "./icons-routing.module";
import { MaterialComponent } from "./material/material.component";
import { FontAwesomeComponent } from "./font-awesome/font-awesome.component";
@NgModule({
  declarations: [MaterialComponent, FontAwesomeComponent],
  imports: [CommonModule, IconsRoutingModule],
})
export class IconsModule {}
