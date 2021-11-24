import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Users } from "src/app/users.module";
import { users } from "src/app/users-list";
import { find } from 'rxjs';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent implements OnInit {
  
  public usersList: Users[] = users;

  bgfind:string ='../assets/img/bgfind.png';
  logofind:string ='../assets/img/logofind.svg';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
   
  //console.log(this.usersList);
    };
  

}
