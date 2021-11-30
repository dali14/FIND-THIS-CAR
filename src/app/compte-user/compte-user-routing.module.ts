import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompteUserComponent } from './compte-user.component';
import { CompteInfoComponent } from './compte-info/compte-info.component';


const routes: Routes = [
  {path:'',component:CompteUserComponent},
  {path:'register2',component:CompteInfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [
    CompteInfoComponent
  ]
})
export class CompteUserRoutingModule { }
