import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    @Input() label: string="";
    @Input() total: string="";
    @Input() percentage: string="";

  Highcharts = Highcharts ;
  chartOptions = {};
  constructor() { }

  ngOnInit(): void {
    this.chartOptions={
      chart: {
          type: 'area',
          backgroundColor:null,
          borderwidth:0,
          margin:[2, 2, 2, 2],
          height:100,
      },
      title: {
          text: null
      },
      subtitle: {
          text: null
      },
      exporting:{
          enabled:false
      },
      
      yAxis: {
          title: {
              text: 'Billions'
          },
          
      },
      tooltip: {
          split: true
          
      },
    
      series: [{

          data:[71,80,40,66]
      }

      ]
  };

  HC_exporting(Highcharts); /*for eport the data */



    setTimeout(() =>{
      window.dispatchEvent(new Event('resize'));
    },300);

 
  }

}
