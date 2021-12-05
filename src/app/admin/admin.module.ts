import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginComponent } from './login/login.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { SidebarComponent } from './sidebar/sidebar.component';

//material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatStepperModule} from '@angular/material/stepper';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './forgetpass/dialog/dialog.component';
import { DialogContentComponent } from './forgetpass/dialog/components/dialog-content/dialog-content.component';
import { CardComponent } from './widgets/card/card.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PieComponent } from './widgets/pie/pie.component';
import { AdmintableComponent } from './widgets/admintable/admintable.component';
import { MatTableModule } from '@angular/material/table'  



@NgModule({
  declarations: [
    
    AdminComponent,
    NavComponent,
    DashboardComponent,
    LoginComponent,
    AddadminComponent,
    SidebarComponent,
    AreaComponent,
    DialogComponent,
    DialogContentComponent,
    CardComponent,
    PieComponent,
    AdmintableComponent,
    
  ],
  imports: [
    
    MatStepperModule,
    MatProgressBarModule,
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    AdminRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HighchartsChartModule,
    MatDialogModule,
    MatCardModule,
    MatDatepickerModule,
    MatTableModule
    
    
   
  ],
  exports:[
    AreaComponent,
    CardComponent,
    PieComponent, 
    
  ],
 
})

export class AdminModule { }
