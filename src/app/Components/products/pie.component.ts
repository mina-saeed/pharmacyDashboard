import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { users } from '../../shared/users.service'

@Component({
  selector: 'pie-chart-demo',
  templateUrl: './pie.component.html',
  providers: [ users]
  
})
export class pie implements OnInit{
  private history: any  
  constructor(private users: users) { }
  ngOnInit(){
    this.users.pharmacyHistory().subscribe(res => {
      console.log(res)
      return this.history = res; // card commented in html 
    })
  }
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
