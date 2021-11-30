import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteUserComponent } from './compte-user.component';


const routes: Routes = [
  {path:'',component:CompteUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompteUserRoutingModule { }
