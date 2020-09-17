import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IncrementatorComponent } from "./incrementator/incrementator.component";
import { FormsModule } from "@angular/forms";
import { DonutComponent } from './donut/donut.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [IncrementatorComponent, DonutComponent],
  exports: [IncrementatorComponent, DonutComponent],
  imports: [CommonModule, FormsModule, ChartsModule]
})
export class ComponentsModule { }
