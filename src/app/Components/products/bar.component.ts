import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {users} from '../../shared/users.service';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'bar-chart-demo',
  templateUrl: './bar.component.html',
  providers:[users]
  
})
export class bar implements OnInit{
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];
  public pieChartType:string = 'pie';
  constructor(private users:users,translate: TranslateService){
      translate.use('en');

  }
 ngOnInit(){
   this.users.pharmacyHistory().subscribe(res => {
    console.log(res)
   })

 }
  // events
  public chartClickedPie(e:any):void {
    console.log(e);
  }
 
  public chartHoveredPie(e:any):void {
    console.log(e);
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
