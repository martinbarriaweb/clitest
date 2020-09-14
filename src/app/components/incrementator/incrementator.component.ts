import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-incrementator",
  templateUrl: "./incrementator.component.html",
  styles: [],
})
export class IncrementatorComponent {
  @Input() progress = 50;
  @Input() btnClass = "btn btn-primary";
  @Output() exitValue: EventEmitter<number> = new EventEmitter();

  constructor() {}

  changeProgress(value: number) {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
      this.exitValue.emit(100);
      return;
    }
    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      this.exitValue.emit(0);
      return;
    }
    this.progress = this.progress + value;
    this.exitValue.emit(this.progress);
  }
}
