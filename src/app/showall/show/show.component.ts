import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {users} from "src/app/users-list";
import { Users } from "src/app/users.module";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  public users?: Users;
  bgshow:string ='../assets/img/bgshow.svg';
  constructor(private route: ActivatedRoute) { }



  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const username =params.get("Name");
      this.users = users.filter(users =>users.Name === username)[0];

      
    });


  }

}
