import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from './components/dialog-content/dialog-content.component';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  animal?: string;
  name?: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}


    openDialog(){

      const dialogRef = this.dialog.open(DialogContentComponent,{

        data: {name: this.name, animal: this.animal},

      });
         dialogRef.afterClosed().subscribe(
          result => {console.log('dialog Result');
          this.animal = result;
         }
      );

    }



}
