import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// MODULES
import { AppRoutingModule } from "./app-routing.module";
import { PagesModule } from "./pages/pages.module";
import { AuthModule } from "./auth/auth.module";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { NotfoundComponent } from "./notfound/notfound.component";

@NgModule({
  declarations: [AppComponent, DashboardComponent, NotfoundComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, AuthModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
