import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["progress.component.css"],
})
export class ProgressComponent implements OnInit {
  progress1 = 25;
  progress2 = 60;
  constructor() {}

  ngOnInit() {}

  get getProgress1() {
    return `${this.progress1}%`;
  }
  get getProgress2() {
    return `${this.progress2}%`;
  }
}
