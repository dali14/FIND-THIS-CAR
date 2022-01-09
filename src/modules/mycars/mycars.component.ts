import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Cars } from 'src/app/cars.module';
import { CarsService } from "src/app/services/cars.service";

@Component({
  selector: 'app-mycars',
  templateUrl: './mycars.component.html',
  styleUrls: ['./mycars.component.css']
})
export class MycarsComponent implements OnInit {
  public dataSource: any = [];
  
  constructor(public servicecar:CarsService,
    private toastr:ToastrService) { }
    iduser:string;
  ngOnInit(): void {

      this.iduser = localStorage.getItem('userid');
      this.iduser = this.iduser.slice(1,-1);

    this.servicecar.getcarbyuserid(this.iduser).subscribe(
      res => this.dataSource =res
    );
  }



}
