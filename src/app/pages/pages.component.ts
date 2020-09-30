import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styles: [],
})
export class PagesComponent implements OnInit {
  public linkTheme = document.querySelector("#theme");
  constructor() {}

  ngOnInit() {
    this.setTheme();
  }

  setTheme() {
    const theme = localStorage.getItem("theme") || "purple";
    this.linkTheme.setAttribute("href", `./assets/css/colors/${theme}.css`);
  }
}
