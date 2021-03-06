import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';

const routes: Routes = [

  { path:'', component:AdminComponent},
  { path:'forget',component:ForgetpassComponent}
  
  ];
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [
     ForgetpassComponent
  ]
  })
  export class AdminRoutingModule { }