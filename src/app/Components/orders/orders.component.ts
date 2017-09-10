
//import { orderService }       from '../shared/orders.service';

import { Component, OnInit,OnDestroy } from '@angular/core';
import { orderService }       from '../../shared/orders.service';

import {sidebar} from '../sidebar/sidebar.component'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {Http , RequestOptions, Headers} from '@angular/http';
import { Router } from '@angular/router'
import {TranslateService} from 'ng2-translate';

 @Component({

   templateUrl:'orders.component.html',
   providers: [orderService]

 })

 export class orders implements OnInit {
  
  private firstOrders =[]
  private  secondOrders =[];
  private thirdOrders =[];  
  private fourthorders =[]
  private fifthOrders = []

  connection;
  message;
  ordr;


  constructor(translate: TranslateService,private order:orderService ,private http:Http, private router: Router) { 
    translate.use('en');
  }

  ngOnInit() {
    document.cookie = "order=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    this.secondOrders=[]
     let firstTempOrders =[]

    this.order.onStart().subscribe(message => {
            let temp = []
      var cookieDeliver =JSON.parse(orders.getCookie('pharmacyLocation'))


    var cookieValue = orders.getCookie('pharmacy');
    var allPharma = message.allPharmacies

    for(let i = 0;i < allPharma.length;i++){

    if(cookieValue == allPharma[i]){


      var allOrders = message.allOrders
      allOrders.forEach(function(order){
/*                 console.log(order)      */ 
        let orderDestination = order.location



      cookieDeliver.forEach(function(t){

/*        console.log("location: "+t.name + "   order: "+orderDestination)*/
        if(t.name == orderDestination){

          if(t.priority == 1){
              
              firstTempOrders.push(order)

          }
        }
      })

     


    })
      let orderSFormat = []
       firstTempOrders.forEach(function(item){
         let tempOrder
         if(item.type=="image"){
           tempOrder = {
           _id: item._id,
           location: item.location,
           address: item.address,
           type: item.type,
           order:item.order


         }

         }else{
                   tempOrder = {
           _id: item._id,
           location: item.location,
           address: item.address,
           type: item.type,
           order:JSON.parse(item.order),


         }  
         }

         
         orderSFormat.push(tempOrder)
         
    })
      return this.firstOrders = orderSFormat 

    }
  }

  })


 this.order.getMessages().subscribe(message => {
            let temp = []
      var cookieDeliver =JSON.parse(orders.getCookie('pharmacyLocation'))
let dataObject =  JSON.parse(JSON.stringify(message))
let ordersData = dataObject.orders
let ordersPharma = dataObject.data
    var cookieValue = orders.getCookie('pharmacy');


    for(let i = 0;i < ordersPharma.length;i++){

    if(cookieValue == ordersPharma[i]){


        ordersData.forEach(function(order){
/*                 console.log(order)      */ 
        let orderDestination = order.location



      cookieDeliver.forEach(function(t){

/*        console.log("location: "+t.name + "   order: "+orderDestination)*/
        if(t.name == orderDestination){

          if(t.priority == 1){
              
              firstTempOrders.push(order)

          }
        }
      })

     


    })
      let orderSFormat = []
       firstTempOrders.forEach(function(item){
         let tempOrder
         if(item.type=="image"){
           tempOrder = {
           _id: item._id,
           location: item.location,
           address: item.address,
           type: item.type,
           order:item.order


         }
         
         }else{
                   tempOrder = {
           _id: item._id,
           location: item.location,
           address: item.address,
           type: item.type,
           order:JSON.parse(item.order),


         }  
         }

         
         orderSFormat.push(tempOrder)
         
    })
      return this.firstOrders = orderSFormat 
    }
  }


    })
this.secondOrders=[] 
this.thirdOrders=[]
this.fourthorders=[]
this.fifthOrders =[]
this.order.second().subscribe(data=>{

let dataObject =  JSON.parse(JSON.stringify(data))
let ordersData = dataObject.allOrders
let ordersPharma = dataObject.allPharmacies

            this.secondOrders=[]
          let secondPriorityTemp = []
          let firstPriorityTemp = []
      var cookieDeliver =JSON.parse(orders.getCookie('pharmacyLocation'))
      var cookieValue = orders.getCookie('pharmacy');
    
    for(let i = 0;i < ordersPharma.length;i++){

    if(cookieValue == ordersPharma[i]){

      var allOrders = ordersData

      allOrders.forEach(function(order){
                        
        let orderDestination = order.location


      cookieDeliver.forEach(function(t){

        if(t.name == orderDestination){

          if(t.priority == 2){
              
               secondPriorityTemp.push(order)

          }
          if(t.priority == 1){
              
               firstPriorityTemp.push(order)

          }        
       }
      })

     


    })
      let orderSFormat = []
       firstPriorityTemp.forEach(function(item){
         let tempOrder
         if(item.type=="image"){
           tempOrder = {
           _id: item._id,
           location: item.location,
           address: item.address,
           type: item.type,
           order:item.order


         }
         
         }else{
                   tempOrder = {
           _id: item._id,
           location: item.location,
           address: item.address,
           type: item.type,
           order:JSON.parse(item.order),


         }  
         }

         
         orderSFormat.push(tempOrder)
         
    })
      let secondorderSFormat = []
       secondPriorityTemp.forEach(function(item){
         let tempOrder
         if(item.type=="image"){
           tempOrder = {
           _id: item._id,
           location: item.location,
           address: item.address,
           type: item.type,
           order:item.order


         }
         
         }else{
                   tempOrder = {
           _id: item._id,
           location: item.location,
           address: item.address,
           type: item.type,
           order:JSON.parse(item.order),


         }  
         }

         
         secondorderSFormat.push(tempOrder)
         
    })       
      this.secondOrders = secondorderSFormat
      this.firstOrders = orderSFormat

}
}
})


this.order.third().subscribe(data=>{

let dataObject =  JSON.parse(JSON.stringify(data))
let ordersData = dataObject.allOrders
let ordersPharma = dataObject.allPharmacies

            this.thirdOrders=[]
          let thirdPriorityTemp = []
      var cookieDeliver =JSON.parse(orders.getCookie('pharmacyLocation'))
      var cookieValue = orders.getCookie('pharmacy');
    
    for(let i = 0;i < ordersPharma.length;i++){

    if(cookieValue == ordersPharma[i]){

      var allOrders = ordersData

      allOrders.forEach(function(order){
                        
        let orderDestination = order.location


      cookieDeliver.forEach(function(t){

        if(t.name == orderDestination){

          if(t.priority == 3){
              
               thirdPriorityTemp.push(order)

          }
/*          if(t.priority == 1){
              
               firstPriorityTemp.push(order)

          }  */      
       }
      })

     


    })
      let orderSFormat = []
       thirdPriorityTemp.forEach(function(item){
         let tempOrder
         if(item.type=="image"){
           tempOrder = {
           _id: item._id,
           location: item.location,
           address: item.address,
           type: item.type,
           order:item.order


         }
         
         }else{
                   tempOrder = {
           _id: item._id,
           location: item.location,
           address: item.address,
           type: item.type,
           order:JSON.parse(item.order),


         }  
         }

         
         orderSFormat.push(tempOrder)
         
    })
      let thirdorderSFormat = []
       thirdPriorityTemp.forEach(function(item){
         let tempOrder
         if(item.type=="image"){
           tempOrder = {
           _id: item._id,
           location: item.location,
           address: item.address,
           type: item.type,
           order:item.order


         }
         
         }else{
                   tempOrder = {
           _id: item._id,
           location: item.location,
           address: item.address,
           type: item.type,
           order:JSON.parse(item.order),


         }  
         }

         
         thirdorderSFormat.push(tempOrder)
         
    })       
      this.thirdOrders = thirdorderSFormat

}
}
})

this.order.fourth().subscribe(data=>{

let dataObject =  JSON.parse(JSON.stringify(data))
let ordersData = dataObject.allOrders
let ordersPharma = dataObject.allPharmacies

            this.fourthorders=[]
          let fourthPriorityTemp = []
      var cookieDeliver =JSON.parse(orders.getCookie('pharmacyLocation'))
      var cookieValue = orders.getCookie('pharmacy');
    
    for(let i = 0;i < ordersPharma.length;i++){

    if(cookieValue == ordersPharma[i]){

      var allOrders = ordersData

      allOrders.forEach(function(order){
                        
        let orderDestination = order.location


      cookieDeliver.forEach(function(t){

        if(t.name == orderDestination){

          if(t.priority == 4){
              
               fourthPriorityTemp.push(order)

          }
/*          if(t.priority == 1){
              
               firstPriorityTemp.push(order)

          }  */      
       }
      })

     


    })
      let orderSFormat = []
       fourthPriorityTemp.forEach(function(item){
         let tempOrder
         if(item.type=="image"){
           tempOrder = {
           _id: item._id,
           location: item.location,
           address: item.address,
           type: item.type,
           order:item.order


         }
         
         }else{
                   tempOrder = {
           _id: item._id,
           location: item.location,
           address: item.address,
           type: item.type,
           order:JSON.parse(item.order),


         }  
         }

         
         orderSFormat.push(tempOrder)
         
    })
      let fourthorderSFormat = []
       fourthPriorityTemp.forEach(function(item){
         let tempOrder
         if(item.type=="image"){
           tempOrder = {
           _id: item._id,
           location: item.location,
           address: item.address,
           type: item.type,
           order:item.order


         }
         
         }else{
                   tempOrder = {
           _id: item._id,
           location: item.location,
           address: item.address,
           type: item.type,
           order:JSON.parse(item.order),


         }  
         }

         
         fourthorderSFormat.push(tempOrder)
         
    })       
      this.fourthorders = fourthorderSFormat

}
}
})



this.order.cancelOrder().subscribe(data=>{

  let cancelOrder = JSON.parse(JSON.stringify(data))
      var cookieValue = orders.getCookie('pharmacy');
  cancelOrder.forEach(function(item){

      if(item.pahrmacy == cookieValue){

          alert("Order To : "+item.address+" In "+item.location+" cancelled ")
      }
  })
})

}
show(order){
 document.cookie = "order=" +JSON.stringify(order)

this.router.navigate(['orderDetails'])

}

confirm(orderID){

console.log(orderID)
  return this.order.confirmOrder(orderID).subscribe(result=>{



   if(result.status==409){
     alert("Sorry , Another pharmacy confirmed this order")
   }
    
    if(this.firstOrders.length>0){
    for(let i= 0; i<this.firstOrders.length;i++){

          if(this.firstOrders[i]._id == result.allOrders){

                this.firstOrders.splice(i,1)
          }
    }
}

    if(this.secondOrders.length>0){
    for(let i= 0; i<this.secondOrders.length;i++){

          if(this.secondOrders[i]._id == result.allOrders){

                this.secondOrders.splice(i,1)
                //this.firstOrders = orders.secondOrdersShared
          }
    }
    
}


    if(this.thirdOrders.length>0){
    for(let i= 0; i<this.thirdOrders.length;i++){

          if(this.thirdOrders[i]._id == result.allOrders){

                this.thirdOrders.splice(i,1)
               // this.firstOrders = this.thirdOrders

          }


    }
}


   })

} 



     public static  getCookie(name: string) {
        let ca: Array<string> = document.cookie.split(';');
        let caLen: number = ca.length;
        let cookieName = `${name}=`;
        let c: string;

        for (let i: number = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) == 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }
  
}
