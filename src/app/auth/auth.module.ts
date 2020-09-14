import { NgModule } from "@angular/core";

// MODULES
import { CommonModule } from "@angular/common";

import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent, RegisterComponent],
  imports: [CommonModule],
})
export class AuthModule {}
