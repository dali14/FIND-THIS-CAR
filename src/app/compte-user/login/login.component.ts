import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bg:string ='./assets/compteUser/user.png';
  constructor() { }

  ngOnInit(): void {
  }

}
