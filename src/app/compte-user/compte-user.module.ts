import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompteUserRoutingModule } from './compte-user-routing.module';
import { CompteUserComponent } from './compte-user.component';


@NgModule({
  declarations: [
    CompteUserComponent
  ],
  imports: [
    CommonModule,
    CompteUserRoutingModule
  ]
})
export class CompteUserModule { }
