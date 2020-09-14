import { NgModule } from "@angular/core";

// MODULES
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NotfoundComponent } from "./notfound/notfound.component";
import { ProgressComponent } from "./progress/progress.component";
import { Graphics1Component } from "./graphics1/graphics1.component";
import { SharedModule } from "../shared/shared.module";
import { PagesComponent } from "./pages.component";

@NgModule({
  declarations: [
    ProgressComponent,
    NotfoundComponent,
    Graphics1Component,
    PagesComponent,
  ],
  exports: [
    ProgressComponent,
    NotfoundComponent,
    Graphics1Component,
    PagesComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class PagesModule {}
