import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// MODULES
import { AppRoutingModule } from "./app-routing.module";
import { PagesModule } from "./pages/pages.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { RegisterComponent } from "./auth/register/register.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PagesModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
