import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Component, Input, EventEmitter, Output, OnInit } from "@angular/core";

@Component({
  selector: "app-incrementator",
  templateUrl: "./incrementator.component.html",
  styles: [],
})
export class IncrementatorComponent implements OnInit {
  @Input() progress = 50;
  @Input() btnClass = "btn-primary";
  @Output() exitValue: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`;
  }

  onChange(event: number) {
    if (event >= 100) {
      this.progress = 100;
    } else if (event <= 0) {
      this.progress = 0;
    } else {
      this.progress = event;
    }
    this.exitValue.emit(event);
  }

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
