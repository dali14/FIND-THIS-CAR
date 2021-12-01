import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte-user',
  templateUrl: './compte-user.component.html',
  styleUrls: ['./compte-user.component.css']
})
export class CompteUserComponent implements OnInit {
  bg:string ='./assets/compteUser/user.png';
  constructor() { }

  ngOnInit(): void {
  }

}
