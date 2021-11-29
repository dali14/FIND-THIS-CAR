import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowallComponent } from './showall.component';
import { ShowallRoutingModule } from './showall-routing.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ShowallComponent
  ],
  imports: [
    CommonModule,
    ShowallRoutingModule,
    FormsModule
  ]
})
export class ShowallModule { }
