import { Component } from '@angular/core';
import { DialogComponent, DialogService } from 'ng2-bootstrap-modal';

export interface AdsModel {
    name_en: string;
    description_en: string;
    start: string
    end: string
    link: string
    image: string

}

@Component({
    selector: 'alert',
    template: `<div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                     <button type="button" class="close" (click)="close()" >&times;</button>
                     <h4 class="modal-title">{{name_en}}</h4>
                   </div>
                   <div class="modal-body">
              <img src={{image}} alt="No Image" width="550" height="300">
              <p>Description: <strong>{{description_en}}</strong></p>
              <p>StartDate: <strong>{{start}}</strong></p>
              <p>EndDate: <strong>{{end}}</strong></p>
              <p>Link: <strong>{{link}}</strong></p>
                   <div class="modal-footer">
                     <button type="button" class="btn btn-primary" (click)="close()">OK</button>
                   </div>
                </div>
             </div>`
})
export class adsDialog extends DialogComponent<AdsModel, null> implements AdsModel {
    name_en: string;
    description_en: string;
    start: string
    end: string
    link: string
    image: string

    constructor(dialogService: DialogService) {
        super(dialogService);
    }
}
