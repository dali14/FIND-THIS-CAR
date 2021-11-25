import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './approuting.module';
import { FindComponent } from './find/find.component';

import { ShowallModule } from './showall/showall.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    FindComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowallModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
