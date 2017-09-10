import { Component, OnInit, ViewChild } from '@angular/core'
import { AdsService } from '../../shared/ads.service'
import { Router } from '@angular/router'
import { FlashMessagesService } from 'angular2-flash-messages';
import { DialogService } from "ng2-bootstrap-modal";
import { adsDialog } from './adsDialog.component';
import {TranslateService} from 'ng2-translate';

@Component({
    templateUrl: 'Ads.component.html',
    providers: [AdsService]
})

export class Ads implements OnInit {
    private allAds = []
    p: number = 1;
    constructor(translate: TranslateService,private dialogService: DialogService, private ads: AdsService, private router: Router, private flashMessage: FlashMessagesService) {
         translate.use('en');
     }
    ngOnInit() {
        this.ads.getrequestedAds().subscribe(res => {
            this.allAds = res
            console.log(res)
            return this.allAds
        })
    }

    show(ads) {
        this.dialogService.addDialog(adsDialog, {
            name_en: ads.name, description_en: ads.description, start: ads.start,
            end: ads.end, link: ads.link,image: ads.adsImage
        });

    }

    delete(id,index) {
		this.ads.deleteAds(id).subscribe(res => {
			if (res == 200) {				
				window.scroll(0,0)
				//this.flashMessage.show('Ads deleted successfully', { cssClass: 'alert-success', timeout: 3000 })
						this.allAds.splice(index, 1)
						return this.allAds;
			}
		});
	}

	update(ads) {
		this.ads.store(ads)
		this.router.navigate(['/updateAds']);
	}
}