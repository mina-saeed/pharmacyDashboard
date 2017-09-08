import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { requestService } from '../../shared/requests.service'
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({

	templateUrl: 'newMedicine.component.html',
	providers: [requestService]
})

export class newMedicine {

	constructor(private request: requestService, private router: Router, private flash: FlashMessagesService) { }

requestMedicine(requestData){
	let medicineRequestFormat = {
		name: requestData.name_english,
		barcode: requestData.barcode,
		description: requestData.english_description,
		category: requestData.category,
		milligrams: requestData.milligrams,
		email: this.getCookie('pharmacy')


	}
	this.request.sendRequest(medicineRequestFormat).subscribe(res=>{

		console.log(res)
	})

}
     public getCookie(name: string) {
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
