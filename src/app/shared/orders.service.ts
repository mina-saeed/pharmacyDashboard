import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class orderService {
  private url = 'http://146.185.148.66:3008';  
  private socket;
/*  
  sendMessage(message){


 //this.socket = io.connect(this.url);

//this.socket.emit('room', message.email);


//    this.socket.emit('add-message', message);    
  }*/
onReload() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('onReload', (data) => {

var cookieValue = this.getCookie('pharmacy');
    var allPharma = data.data
    for(let i = 0;i < allPharma.length;i++){
    if(cookieValue == data.data[i]){
            //  console.log(data.data[0])

        observer.next(data.orders);    
      }
    }
      });

    })     
    return observable;
  }  
  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('first', (data) => {

var cookieValue = this.getCookie('pharmacy');
    var allPharma = data.data
    for(let i = 0;i < allPharma.length;i++){
    if(cookieValue == data.data[i]){
            //  console.log(data.data[0])

        observer.next(data.orders);    
      }
    }
      });

    })     
    return observable;
  }
  secondPriority() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);

      this.socket.on('second', (data) => {

var cookieValue = this.getCookie('pharmacy');
    var allSecondPharma = data.data
    for(let j = 0;j<allSecondPharma.length;j++){
    if(cookieValue == data.data[j]){


        observer.next(data.orders);    
      }
    }
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
