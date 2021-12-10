import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { FindComponent } from './find/find.component';
import { HomeComponent } from './home/home.component';

import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path : '' ,component:HomeComponent},
  
  {path : 'find', component: FindComponent},
  {path: 'showall', loadChildren: () => import('./showall/showall.module').then(m => m.ShowallModule) },
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {path : '**', component: NotFoundComponent},
  
];


@NgModule({
 imports: [RouterModule.forRoot(routes),FormsModule , CommonModule],
  exports: [RouterModule],
  declarations: [
   
  ]
})
export class AppRoutingModule {

 }

