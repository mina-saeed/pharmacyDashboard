import {Injectable} from '@angular/core'
import {Http , RequestOptions, Headers} from '@angular/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { of } from 'rxjs/observable/of';

@Injectable()

export class orderService {

  private url = 'http://146.185.148.66:3008';
  private ordersUrl ='http://146.185.148.66:3009';
  private FirstReceiversUrl = 'http://146.185.148.66:3010';

  private SecondReceiversUrl = 'http://146.185.148.66:3021';
  private ThirdReceiversUrl = 'http://146.185.148.66:3022';
  private FourthReceiversUrl = 'http://146.185.148.66:3023';
  private FifthReceiversUrl = 'http://146.185.148.66:3024';
  private confirmedOrder = 'http://146.185.148.66:3015';  
  private socket;

private cancel = 'http://146.185.148.66:3333';
constructor(private http:Http){
  //setInterval(this.secondPackage,5000)

  //setInterval(this.thirdPackage,10000)
 this.onStart()


}  


onStart() {


    let headers = new Headers();
        headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');

     return this.http.get(this.url+'/allOrders' ,new RequestOptions({headers: headers})).map(res=>{

//       orderService.orders = res.json()
       return res.json()

     })

}




  getMessages() {
    this.socket=io(this.FirstReceiversUrl)
    let observable = new Observable(observer => {
      
      this.socket.on('first', (data) => {

       
        observer.next(data);

      });

    })   

    return observable;
  }

  second() {
    this.socket=io(this.SecondReceiversUrl)
    let observable = new Observable(observer => {
      
      this.socket.on('secondOrders', (data) => {
        observer.next(data);

      });

    })   
     
    return observable;
  }

  third() {
    this.socket=io(this.ThirdReceiversUrl)
    let observable = new Observable(observer => {
      
      this.socket.on('thirdOrders', (data) => {
        observer.next(data);

      });

    })   
     
    return observable;
  }

  fourth() {
    this.socket=io(this.FourthReceiversUrl)
    let observable = new Observable(observer => {
      
      this.socket.on('fourthOrders', (data) => {
        observer.next(data);

      });

    })   
     
    return observable;
  }

  fifth() {
    this.socket=io(this.FifthReceiversUrl)
    let observable = new Observable(observer => {
      
      this.socket.on('fifthOrders', (data) => {
        observer.next(data);

      });

    })   
     
    return observable;
  }

confirmOrder(order){
/*  console.log(order)
*/      let headers = new Headers();
          headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
          headers.append('Content-Type', 'application/json')
      let cookieValue = this.getCookie('pharmacy');    
          let body={
            requestOrder:order._id,
            order: order.order,
            pharmacyEmail: cookieValue
          };

    return this.http.post(this.ordersUrl+'/confirmOrder', JSON.stringify(body), new RequestOptions({headers: headers})).map(res=>{
      
  return res.json()
    })
}

  cancelOrder() {
    this.socket=io(this.cancel)
    let observable = new Observable(observer => {
      
      this.socket.on('cancelledOrder', (data) => {
        observer.next(data.orderData);

      });

    })   
     
    return observable;
  }
     getCookie(name: string) {
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
