import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteUserComponent } from './compte-user.component';
import { CompteInfoComponent } from './compte-info/compte-info.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:CompteUserComponent},
  {path:'register2',component:CompteInfoComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    CompteInfoComponent,
    LoginComponent
  ]
})
export class CompteUserRoutingModule { }
