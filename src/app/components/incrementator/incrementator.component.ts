import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-incrementator",
  templateUrl: "./incrementator.component.html",
  styles: [],
})
export class IncrementatorComponent {
  progress = 50;

  constructor() {}

  changeProgress(n: number) {
    if (this.progress >= 100 && n > 0) {
      return;
    }
    if (this.progress <= 0 && n < 0) {
      return;
    }
    this.progress = this.progress + n;
  }

  get getProgress() {
    return this.progress + "%";
  }
}
