import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowallComponent } from './showall.component';
import { ShowallRoutingModule } from './showall-routing.module';




@NgModule({
  declarations: [
    ShowallComponent
  ],
  imports: [
    CommonModule,
    ShowallRoutingModule
  ]
})
export class ShowallModule { }
