<<<<<<< HEAD
import { Component, OnInit,OnDestroy } from '@angular/core';
import { orderService }       from '../shared/orders.service';
=======
import {Component} from '@angular/core'
import {sidebar} from '../sidebar/sidebar.component'


>>>>>>> a22b16a7a176e067a6487df75b33376ecc05a6b1

 @Component({

 	templateUrl:'orders.component.html',
 	providers: [orderService]

 })
<<<<<<< HEAD
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
=======
 export class orders{
	 
 }
>>>>>>> a22b16a7a176e067a6487df75b33376ecc05a6b1
