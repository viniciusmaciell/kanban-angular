import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BoardComponent } from "./board/board.component";
import { ErrorComponent } from "./error/error.component";
import { AuthGuardService } from "./guards/auth-guard";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "board", component: BoardComponent, canActivate: [AuthGuardService] },
  { path: "error", component: ErrorComponent },
  { path: "**", redirectTo: "/error" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
