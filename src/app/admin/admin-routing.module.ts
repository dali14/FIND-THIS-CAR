import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { CommonModule } from "@angular/common";
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  { path:'', component:AdminComponent},
  { path:'forget',component:ForgetpassComponent},
  { path:'dashboard', component:DashboardComponent},
  {path:'login-admin',component:LoginComponent}
  
  
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes),CommonModule],
    exports: [RouterModule],
    declarations: [
     ForgetpassComponent
     
  ]
  })
  export class AdminRoutingModule { }