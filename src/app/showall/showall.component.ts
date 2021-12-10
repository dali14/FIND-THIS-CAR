import { Component, NgModule, OnInit } from '@angular/core';
import {users} from "./../users-list";
import { Users } from "./../users.module";
import { FormsModule } from '@angular/forms';
import { share } from 'rxjs';

@Component({
  selector: 'app-showall',
  templateUrl: './showall.component.html',
  styleUrls: ['./showall.component.css'],
  
})
export class ShowallComponent implements OnInit {
  
  public usersList: Users[] = users;
  public nom!:string;
  
  bgshowall:string ='../assets/img/bgshowall.svg';

  constructor() { 
    
  }
 
  ngOnInit(): void {
    
    this.usersList= users;
  }


  search(){
    if(this.nom != ""){
      this.usersList = this.usersList.filter(res=>{
        return res.Name.toLowerCase().match(this.nom.toLocaleLowerCase())||res.ville.toLowerCase().match(this.nom.toLocaleLowerCase())||res.tel.toLowerCase().match(this.nom.toLocaleLowerCase())||res.email.toLowerCase().match(this.nom.toLocaleLowerCase())


      })
    }else if(this.nom == ""){
      this.ngOnInit();
    }
    
      
  }

}
