import { Component, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {admin} from "src/app/admin.list";
import {Admin} from "src/app/admin.module";



@Component({
  selector: 'app-admintable',
  templateUrl: './admintable.component.html',
  styleUrls: ['./admintable.component.css']
})
export class AdmintableComponent implements OnInit{
  
  public dataSource: Admin[] = admin;
  
  
  ngOnInit(): void {
    
  
   
}
}