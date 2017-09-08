import {Injectable} from '@angular/core'
import {Http , RequestOptions, Headers} from '@angular/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import { of } from 'rxjs/observable/of';

@Injectable()

export class orderService {
  public static orders:Array<any>=[]
  public static orderPharmacies:Array<any>=[]
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
  //setInterval(this.secondPackage,5000)

  //setInterval(this.thirdPackage,10000)
 this.onStart()


}  


onStart() {


    let headers = new Headers();
        headers.append('Authorization', 'Basic YWRtaW46MTIzNDU2');

     return this.http.get(this.url+'/allOrders' ,new RequestOptions({headers: headers})).map(res=>{
       let temp = res.json()

     //  orderService.orderPharmacies.push(temp.allPharmacies)
       orderService.orders.push(temp)
//       orderService.orders = res.json()
       return res.json()

     })

}
secondPackage(){
      return  new Observable(observer => {
/*                    let ordersData={
              allOrders:orderService.orders,
              allPharmacies: orderService.orderPharmacies
            }*/
          setInterval(() => {

              observer.next(orderService.orders);
            
            
          }, 15000);
          
      });
}

thirdPackage(){

      return  new Observable(observer => {
            let ordersData={
              allOrders:orderService.orders,
              allPharmacies: orderService.orderPharmacies
            }
          setInterval(() => {

              observer.next(JSON.parse(JSON.stringify(orderService.orders)));
          }, 60000);
          
      });

}

fourthPackage() {

      return  new Observable(observer => {
                                let ordersData={
              allOrders:orderService.orders,
              allPharmacies: orderService.orderPharmacies
            }
          setInterval(() => {

              observer.next(JSON.parse(JSON.stringify(orderService.orders)));
          }, 90000);
          
      });

}
fifthPackage() {

      return  new Observable(observer => {
                                let ordersData={
              allOrders:orderService.orders,
              allPharmacies: orderService.orderPharmacies
            }
          setInterval(() => {

              observer.next(JSON.parse(JSON.stringify(orderService.orders)));
          }, 120000);
          
      });

}



  getMessages() {
    this.socket=io(this.FirstReceiversUrl)
    let observable = new Observable(observer => {
      
      this.socket.on('first', (data) => {
            let ordersData={
              allOrders:data.orders,
              allPharmacies: data.data
            }
        //orderService.orderPharmacies.push(data.data)
       
        observer.next(ordersData);
orderService.orders.push(ordersData)  
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
