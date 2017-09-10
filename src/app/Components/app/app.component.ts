import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  title = 'app';
  	constructor(public translate: TranslateService) { 
    this.translate=translate;
    //alert(this.translate.currentLang);
	//this.translate.use('en');
	//alert(this.translate.currentLang);
	}
}
