import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
 import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class sidebar 
{
  constructor(public translate: TranslateService) { 
  this.translate=translate;
    translate.use('en');
  }
  toLang(){
  	if (this.translate.currentLang == 'ar') {
    //alert('ar');
    this.translate.use('en');
    }
    else {
    this.translate.use('ar');
    }
  }
}