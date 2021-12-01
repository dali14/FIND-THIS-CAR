import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compte-info',
  templateUrl: './compte-info.component.html',
  styleUrls: ['./compte-info.component.css']
})
export class CompteInfoComponent implements OnInit {
  bg:string ='./assets/compteUser/user.png';
  constructor() { }

  ngOnInit(): void {
  }

}
