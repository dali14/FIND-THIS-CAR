import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {

  bgfind:string ='../assets/img/bgfind.png';
  logofind:string ='../assets/img/logofind.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
