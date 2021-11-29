import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './approuting.module';
import { FindComponent } from './find/find.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { ShowallModule } from './showall/showall.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    ShowallModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
