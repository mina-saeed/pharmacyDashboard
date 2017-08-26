import {Injectable} from '@angular/core'
import {Http , RequestOptions, Headers} from '@angular/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class orderService {
  private url = 'http://146.185.148.66:3008';
  private ordersUrl ='http://146.185.148.66:3009';
  private FirstReceiversUrl = 'http://146.185.148.66:3010';

  private SecondReceiversUrl = 'http://146.185.148.66:3011';
  private ThirdReceiversUrl = 'http://146.185.148.66:3012';
  private FourthReceiversUrl = 'http://146.185.148.66:3013';
  private FifthReceiversUrl = 'http://146.185.148.66:3014';
  private confirmedOrder = 'http://146.185.148.66:3015';  
  private socket;

private secondPackageUrl = 'http://146.185.148.66:3020';
private thirdPackageUrl = 'http://146.185.148.66:3020';
constructor(private http:Http){
 this.onStart()

/* setInterval(this.secondPackage,30000)*/

}  


onStart() {

    let headers = new Headers();
        headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');

     return this.http.get(this.url+'/allOrders' ,new RequestOptions({headers: headers})).map(res=>{

       return res.json()

     })

}

secondPackage() {

    let headers = new Headers();
        headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');


      return  Observable.interval(30000)
    .switchMap(() => this.http.get(this.secondPackageUrl+'/allOrders' ,new RequestOptions({headers: headers}))).map((data) => data.json())

}

thirdPackage() {

    let headers = new Headers();
        headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');


      return  Observable.interval(60000)
    .switchMap(() => this.http.get(this.thirdPackageUrl+'/allOrders' ,new RequestOptions({headers: headers}))).map((data) => data.json())

}

fourthPackage() {

    let headers = new Headers();
        headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');


      return  Observable.interval(90000)
    .switchMap(() => this.http.get(this.thirdPackageUrl+'/allOrders' ,new RequestOptions({headers: headers}))).map((data) => data.json())

}
fifthPackage() {

    let headers = new Headers();
        headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');


      return  Observable.interval(120000)
    .switchMap(() => this.http.get(this.thirdPackageUrl+'/allOrders' ,new RequestOptions({headers: headers}))).map((data) => data.json())

}



  getMessages() {
    this.socket=io(this.FirstReceiversUrl)
    let observable = new Observable(observer => {
      
      this.socket.on('first', (data) => {

        observer.next(data.orders);    

      });

    })     
    return observable;
  }


confirmOrder(orderID:any){
      let headers = new Headers();
          headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');
          headers.append('Content-Type', 'application/json')
      let cookieValue = this.getCookie('pharmacy');    
          let body={
            requestOrder:orderID,
            pharmacyEmail: cookieValue
          };

    return this.http.post(this.ordersUrl+'/confirmOrder', JSON.stringify(body), new RequestOptions({headers: headers})).map(res=>{
      
  return res.json()
    })
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
