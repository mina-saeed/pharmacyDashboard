
import { Component, OnInit,OnDestroy } from '@angular/core';
import { orderService }       from '../shared/orders.service';
import {sidebar} from '../sidebar/sidebar.component'


 @Component({

 	templateUrl:'orders.component.html',
 	providers: [orderService]

 })

 export class orders implements OnInit, OnDestroy {
  messages = [];
  connection;
  message;
  ordr;
  newOrders={};

  constructor(private order:orderService) {}

/*  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.message = '';
  }*/

  ngOnInit() {
    this.connection = this.order.getMessages().subscribe(message => {
      this.messages.push(message);
    })
    this.connection = this.order.secondPriority().subscribe(ordr => {
      console.log(ordr)
      this.newOrders= ordr
    })    
    
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
