import { NgModule } from "@angular/core";
import { RegisterComponent } from "./register.component";
import { AuthService } from "./auth-service";

@NgModule({
    declarations: [
      RegisterComponent
    ],
    imports: [
    ],
    providers: [AuthService],
  })
  export class AppModule { }
  