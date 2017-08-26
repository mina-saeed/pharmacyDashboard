
//import { orderService }       from '../shared/orders.service';


import { Component, OnInit,OnDestroy } from '@angular/core';
import { orderService }       from '../../shared/orders.service';

import {sidebar} from '../sidebar/sidebar.component'
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {Http , RequestOptions, Headers} from '@angular/http';


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

  constructor(private order:orderService ,private http:Http) { }

  ngOnInit() {
    this.secondOrders=[]
     let firstTempOrders =[]

    this.order.onStart().subscribe(message => {
            let temp = []
      var cookieDeliver =JSON.parse(orders.getCookie('pharmacyLocation'))



    var cookieValue = orders.getCookie('pharmacy');
    var allPharma = message.allPharmacies

    for(let i = 0;i < allPharma.length;i++){

    if(cookieValue == allPharma[i].email){


      var allOrders = message.allOrders
      allOrders.forEach(function(order){
                        
        let orderDestination = order.location



      cookieDeliver.forEach(function(t){

        console.log("location: "+t.name + "   order: "+orderDestination)
        if(t.name == orderDestination){

          if(t.priority == 1){
              
              firstTempOrders.push(order)

          }
        }
      })

     


    })
      return this.firstOrders = firstTempOrders 
    }
  }

  })


 this.order.getMessages().subscribe(message => {
       this.firstOrders.push(message);

    })

this.secondOrders=[]


this.order.secondPackage().subscribe((data) => {

            this.secondOrders=[]
          let secondPriorityTemp = []
          let firstPriorityTemp =[]
      var cookieDeliver =JSON.parse(orders.getCookie('pharmacyLocation'))
      var cookieValue = orders.getCookie('pharmacy');
    var allPharma = data.allPharmacies
    for(let i = 0;i < allPharma.length;i++){

    if(cookieValue == allPharma[i].email){

      var allOrders = data.allOrders

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

      this.secondOrders = secondPriorityTemp
      this.firstOrders = firstPriorityTemp
}
}
        });


  this.order.thirdPackage().subscribe((data) => {

    this.thirdOrders =[];
    let thirdPriorityTemp = []
      var cookieDeliver =JSON.parse(orders.getCookie('pharmacyLocation'))
    var allOrders = data.allOrders

    allOrders.forEach(function(order){

      let orderDestination = order.location
      cookieDeliver.forEach(function(t){

        if(t.name == orderDestination){

          if(t.priority == 3){
              
              thirdPriorityTemp.push(order)

          }
        
        }
      })

    })
      return this.thirdOrders = thirdPriorityTemp
  }); 



     this.order.fourthPackage().subscribe((data) => {
            this.fourthorders =[];
          let fourthPriorityTemp = []
      var cookieDeliver =JSON.parse(orders.getCookie('pharmacyLocation'))
      var allOrders = data.allOrders
      allOrders.forEach(function(order){
        let orderDestination = order.location
      if(cookieDeliver.includes(orderDestination)){
 
        var deliverArray = cookieDeliver.split(',')
        for (var s = 0 ; s < deliverArray.length;s++){
                  deliverArray[s] = deliverArray[s].replace(/[{()}]/g, '');
            var element = deliverArray[s].split(':')

            var key = element[0]
            var val = element[1]
            if(key.trim() === orderDestination.trim()){

              console.log("Forth")
              console.log(orderDestination+" -> "+key+'-- '+val)

              if(val== 4){
                console.log("Forth")
                        fourthPriorityTemp.push(order)
                          
              }

            }

        }
      }    

     
      })
      return this.fourthorders = fourthPriorityTemp
        });

/*     this.order.fifthPackage().subscribe((data) => {

var cookieValue = orders.getCookie('pharmacy');
    var allPharma = data.allPharmacies
    for(let i = 0;i < allPharma.length;i++){
    if(cookieValue == allPharma[i]){
            //  console.log(data.data[0])

            this.fifthOrders =[];
          let fifthhPriorityTemp = []
      var cookieDeliver:any = orders.getCookie('pharmacyLocation')
      var allOrders = data.allOrders
      allOrders.forEach(function(order){
        let orderDestination = order.location
      if(cookieDeliver.includes(orderDestination)){
 
        var deliverArray = cookieDeliver.split(',')
        for (var s = 0 ; s < deliverArray.length;s++){
                  deliverArray[s] = deliverArray[s].replace(/[{()}]/g, '');
            var element = deliverArray[s].split(':')

            var key = element[0]
            var val = element[1]
            if(key.trim() === orderDestination.trim()){

              console.log("Forth")
              console.log(orderDestination+" -> "+key+'-- '+val)

              if(val== 5){
                console.log("Forth")
                        fifthhPriorityTemp.push(order)
                          
              }

            }

        }
      }    

     
      })
      return this.fifthOrders = fifthhPriorityTemp
            }
            
    }

      
        });*/

/*this.order.secondPackage().subscribe(message=>{




  console.log("Second Orders  : ")
      let secondPriorityTemp = []

      let cookieDeliver:any = orders.getCookie('pharmacyLocation')
      var allOrders = orders.messages
      allOrders.forEach(function(order){
        let orderDestination = order.location
      if(cookieDeliver.includes(orderDestination)){
 
        var deliverArray = cookieDeliver.split(',')
        for (var s = 0 ; s < deliverArray.length;s++){
                  deliverArray[s] = deliverArray[s].replace(/[{()}]/g, '');
            var element = deliverArray[s].split(':')

            var key = element[0]
            var val = element[1]
            if(key.trim() === orderDestination.trim()){

              console.log("matched")
              console.log(orderDestination+" -> "+key+'-- '+val)
              if(val== 2){
                console.log("pushed")
                        secondPriorityTemp.push(order)
                          
              }

            }

        }
      }    

     
      })
      this.secondOrders = secondPriorityTemp

})*/
/*
    let headers = new Headers();
        headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');

        Observable.timer(0,30000)
    .switchMap(() => this.http.get(this.url+'/allOrders' ,new RequestOptions({headers: headers}))).map((data) => data.json())
        .subscribe((data) => {

          let secondPriorityTemp = []
      var cookieDeliver:any = orders.getCookie('pharmacyLocation')
      var allOrders = data.allOrders
      allOrders.forEach(function(order){
        let orderDestination = order.location
      if(cookieDeliver.includes(orderDestination)){
 
        var deliverArray = cookieDeliver.split(',')
        for (var s = 0 ; s < deliverArray.length;s++){
                  deliverArray[s] = deliverArray[s].replace(/[{()}]/g, '');
            var element = deliverArray[s].split(':')

            var key = element[0]
            var val = element[1]
            if(key.trim() === orderDestination.trim()){

              console.log("matched")
              console.log(orderDestination+" -> "+key+'-- '+val)
              if(val== 1){
                console.log("pushed")
                        secondPriorityTemp.push(order)
                          
              }
              if(val== 2){
                console.log("pushed")
                        secondPriorityTemp.push(order)
                          
              }

            }

        }
      }    

     
      })
      return this.messages = secondPriorityTemp
        }); */



    
  }


/*confirm(orderID){


  return this.order.confirmOrder(orderID).subscribe(result=>{
    
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

} */



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
