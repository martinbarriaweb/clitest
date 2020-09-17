import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ChartsModule } from 'ng2-charts';

// MODULES
import { SharedModule } from "../shared/shared.module";
import { ComponentsModule } from "../components/components.module";

import { ProgressComponent } from "./progress/progress.component";
import { Graphics1Component } from "./graphics1/graphics1.component";
import { PagesComponent } from "./pages.component";

@NgModule({
  declarations: [ProgressComponent, Graphics1Component, PagesComponent],
  exports: [ProgressComponent, Graphics1Component, PagesComponent],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    SharedModule,
    ComponentsModule,
    ChartsModule
  ],
})
export class PagesModule { }
