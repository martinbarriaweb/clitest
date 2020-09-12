import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { Graphics1Component } from "./pages/graphics1/graphics1.component";
import { NotfoundComponent } from "./pages/notfound/notfound.component";
import { PagesComponent } from "./pages/pages.component";
import { ProgressComponent } from "./pages/progress/progress.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "progress", component: ProgressComponent },
      { path: "graphics", component: Graphics1Component },
    ],
  },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  // { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
