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
public translate: TranslateService;
  constructor(translate: TranslateService) { 
  this.translate=translate;
  //alert(this.translate.currentLang);
   this.translate.use('en');
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