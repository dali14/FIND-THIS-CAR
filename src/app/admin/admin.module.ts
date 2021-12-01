import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';

import { NavbaradminComponent } from './navbaradmin/navbaradmin.component';




@NgModule({
  declarations: [
    
    AdminComponent,
         
    
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
