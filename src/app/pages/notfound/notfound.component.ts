import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-notfound",
  templateUrl: "./notfound.component.html",
  styles: ["./notfound.component.css"],
})
export class NotfoundComponent implements OnInit {
  year = new Date().getFullYear();

  constructor() {
    console.log(this.year);
  }

  ngOnInit() {}
}
