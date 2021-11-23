import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindComponent } from './find/find.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path : '' ,component:HomeComponent},
  {path : 'login', component: LoginComponent },
  {path : 'find', component: FindComponent},
  {path : '**', component: NotFoundComponent}
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [
    /**NotFoundComponent,
    LoginComponent,
    NavbarComponent*/
  ]
})
export class AppRoutingModule {

 }

