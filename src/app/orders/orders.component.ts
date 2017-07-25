import { Component, OnInit,OnDestroy } from '@angular/core';
import { orderService }       from '../shared/orders.service';

 @Component({

 	templateUrl:'orders.component.html',
 	providers: [orderService]

 })
 export class orders implements OnInit, OnDestroy {
  messages = [];
  connection;
  message;
  
  constructor(private order:orderService) {}

/*  sendMessage(){
    this.chatService.sendMessage(this.message);
    this.message = '';
  }*/

  ngOnInit() {
    this.connection = this.order.getMessages().subscribe(message => {
      this.messages.push(message);
    })
    this.connection = this.order.secondPriority().subscribe(message => {
      this.messages.push(message);
    })    
    
  }
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
