import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NgModule } from '@angular/core';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  username ='';
  password ='';
  wrongCredentials = false ;

  constructor(private sessionLogint :SessionLoginService,
    private router :Router ) { }

  ngOnInit(){}


  login() {
    this.wrongCredentials =false ;
    this.sessionLogint.login(this.username,this.password).subscribe(result =>{
      this.router.navigate(['/']);


    }, error => {
      this.wrongCredentials=true;
    });
  }
}