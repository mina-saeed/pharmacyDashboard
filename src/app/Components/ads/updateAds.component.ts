import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { AdsService } from '../../shared/ads.service'
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({

    templateUrl: 'updateAds.component.html',
    providers: [AdsService]
})

export class updateAds implements OnInit {
    oldAds: any
    engname: string
    engdesc: string
    start: string
    end: string
    link: string
    filesToUpload: Array<File> = [];

    constructor(private AdsService: AdsService, private router: Router, private flash: FlashMessagesService) { }
    ngOnInit() {
        this.oldAds = JSON.parse((this.AdsService.retreive()));
        this.engname = this.oldAds.name;
        this.engdesc = this.oldAds.description;
        this.start = this.oldAds.start;
        this.end = this.oldAds.end;
        this.link = this.oldAds.link;
    }
    fileChange(event) {
        this.filesToUpload = <Array<File>>event.target.files;
    }

    addAds() {

        if (this.filesToUpload.length > 0) {
            if (this.end > this.start) {
                const files: Array<File> = this.filesToUpload;
                const formData = new FormData();
                formData.append('image', files[0], files[0]['name']);
                formData.append('name', this.engname)
                formData.append('description', this.engdesc)
                formData.append('start', this.start)
                formData.append('end', this.end)
                formData.append('link', this.link)
                formData.append('id', this.oldAds._id)                
                this.AdsService.updateAds(formData).subscribe(res => {
                    if (res) {
                        console.log(res)
                        this.AdsService.clear();
                        this.router.navigate(['/requestedAds'])                        
                        this.flash.show('Ads updated Successfully', { cssClass: 'alert-success', timeout: 3000 })
                    }
                })
            } else {
                window.scroll(0, 0)
                this.flash.show('End Date must be greater than Start Date', { cssClass: 'alert-danger', timeout: 3000 })
            }
        }
        else {
            window.scroll(0, 0)
            this.flash.show('Please add an Image', { cssClass: 'alert-danger', timeout: 3000 })
        }
    }
}