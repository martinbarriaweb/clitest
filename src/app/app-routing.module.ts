import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// MODULES
import { PagesRoutingModule } from "./pages/pages.routing";
import { AuthRoutingModule } from "./auth/auth.routing";

import { NotfoundComponent } from "./notfound/notfound.component";

const routes: Routes = [
  // { path: "/dashboard", PagesRounting }
  // { path: "/auth", AuthRouting }

  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "**", component: NotfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
