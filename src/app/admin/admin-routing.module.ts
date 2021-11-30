import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonModule } from "@angular/common";

const routes: Routes = [

  { path:'', component:AdminComponent},
  { path:'forget',component:ForgetpassComponent},
  { path:'Dashboard',component:DashboardComponent}
  
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes),CommonModule],
    exports: [RouterModule],
    declarations: [
     ForgetpassComponent,
     DashboardComponent
  ]
  })
  export class AdminRoutingModule { }