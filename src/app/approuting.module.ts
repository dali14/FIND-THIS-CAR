import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { FindComponent } from './find/find.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForgetpassComponent } from './admin/forgetpass/forgetpass.component';
import { AdminComponent } from './admin/admin.component';
import { CompteInfoComponent } from './compte-user/compte-info/compte-info.component';


const routes: Routes = [
  {path : '' ,component:HomeComponent},
  {path : 'login', component: LoginComponent },
  {path : 'find', component: FindComponent},
  {path: 'showall', loadChildren: () => import('./showall/showall.module').then(m => m.ShowallModule) },
  {path:'admin',component:AdminComponent},
  {path:'forget',component:ForgetpassComponent},
  {path:'compteUser',loadChildren:()=>import('./compte-user/compte-user.module').then(m => m.CompteUserModule)},
  {path:'register2',component:CompteInfoComponent},
  {path : '**', component: NotFoundComponent}
  
  
];
@NgModule({
 imports: [RouterModule.forRoot(routes),FormsModule , CommonModule],
  exports: [RouterModule],
  declarations: [
   
  ]
})
export class AppRoutingModule {

 }

