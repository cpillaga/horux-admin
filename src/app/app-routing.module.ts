import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { LoginComponent } from './public/pages/login/login.component';
import { ValidateTokenGuard } from "./admin/core/guards/validate-token.guard";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent },

  // ** PRIVATE ROUTES
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
        canActivate: [ValidateTokenGuard],
        canLoad: [ValidateTokenGuard]
      }
    ]
  },

  { path: "**", redirectTo: "not-found" },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: []
})
export class AppRoutingModule { }
