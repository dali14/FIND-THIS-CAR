import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  bgfind: string ='../assets/img/bgfind.png';

  constructor() { }

  ngOnInit(): void {
  }
  public user = [
    {
      name:'dali',
      age:30,
      email:'',
    } ,
    {
      name:'dali',
      age:30,
      email:'',
    } ,
    {
      name:'dali',
      age:30,
      email:'',
    } 



  ]




}
