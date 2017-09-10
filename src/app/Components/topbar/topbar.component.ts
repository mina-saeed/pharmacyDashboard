import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {TranslateService} from 'ng2-translate';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html'
})
export class topbar
{
constructor(translate: TranslateService) { 
    translate.use('en');
  }
}