import { Component, OnInit } from "@angular/core";
import { link } from "fs";

@Component({
  selector: "app-account-settings",
  templateUrl: "./account-settings.component.html",
  styleUrls: ["./account-settings.component.css"],
})
export class AccountSettingsComponent implements OnInit {
  public linkTheme = document.querySelector("#theme");
  public links: NodeListOf<Element>;
  constructor() {}

  ngOnInit() {
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    this.links = document.querySelectorAll(".selector");
    this.links.forEach((element) => {
      element.classList.remove("working");
      const btnTheme: string = element.getAttribute("data-theme");
      const currentTheme = localStorage.getItem("theme");
      if (btnTheme === currentTheme) {
        element.classList.add("working");
      }
    });
  }

  changeTheme(theme: string) {
    const urlTheme = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute("href", urlTheme);
    localStorage.setItem("theme", theme);
    this.checkCurrentTheme();
  }
}
