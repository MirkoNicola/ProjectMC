import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { GuardianGuard } from './guards/guardian.guard';

const routes: Routes = [
  {
    path:"", redirectTo:"register",pathMatch:"full"
  },
  {
    path: "register", component:RegisterComponent
  },
  {
    path:"logIn", component:LogInComponent
  },
  {
    path:"**",component:RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
