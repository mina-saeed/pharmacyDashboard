import { Component, OnInit, ViewChild } from '@angular/core'
import { requestService } from '../../shared/requests.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import { DialogService } from "ng2-bootstrap-modal";
import { productDialog } from './dialog.component';

@Component({
	templateUrl: 'prices.component.html',
	providers: [requestService]
})

export class prices implements OnInit {

	private nonFixedMedicines =[]
	constructor(private dialogService: DialogService, private prices: requestService, private router: Router, private flashMessage: FlashMessagesService) { }
	ngOnInit() {
		this.prices.nonFixedMedicines().subscribe(data=>{
			this.nonFixedMedicines = data
			console.log(this.nonFixedMedicines)
			return this.nonFixedMedicines
		})
			}
}