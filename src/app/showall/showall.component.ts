import { Component, OnInit } from '@angular/core';
import {users} from "./../users-list";
import { Users } from "./../users.module";

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css']
})
export class ShowallComponent implements OnInit {
  public usersList: Users[] = users;
  bgshowall:string ='../assets/img/bgshowall.svg';

  constructor() { }

  ngOnInit(): void {
  }

}
