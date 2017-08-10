import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
 
@Component({
  selector: 'pie-chart-demo',
  templateUrl: './pie.component.html'
})
export class pie {
  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
 
  // events
  public chartClickedPie(e:any):void {
    console.log(e);
  }
 
  public chartHoveredPie(e:any):void {
    console.log(e);
  }
}
