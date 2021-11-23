import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bg: string ='../assets/img/bghome.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
