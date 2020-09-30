import { Component, OnInit } from "@angular/core";
import { link } from "fs";

@Component({
  selector: "app-account-settings",
  templateUrl: "./account-settings.component.html",
  styleUrls: ["./account-settings.component.css"],
})
export class AccountSettingsComponent implements OnInit {
  public linkTheme = document.querySelector("#theme");
  constructor() {}

  ngOnInit() {}

  changeTheme(theme: string) {
    const urlTheme = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute("href", urlTheme);
    localStorage.setItem("theme", theme);
  }
}
