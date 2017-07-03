import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {ValidateService} from './shared/validate.service';
import {users} from './shared/users.service';


@Component({

	selector: 'app-pharmacysignup',

	templateUrl: './signuppharmacy.component.html',

})
export class pharmacysignupComponent implements OnInit{
	pharmacy:Object;
	name:String;
	email:String;
	password:String;
	logo:FileList;
	time:Number;
	telephone:String;
	mobile:String;
	location:location;
	FirstOption:boolean;
	SecondOption:boolean;
	ThirdOption:boolean;
	FourthOption:boolean;
	FifthOption:boolean;
	SixthOption:boolean;
	SeventhOption:boolean;
	EighthOption:boolean;
	

	
	constructor(
		private router: Router,
		private UserService: users,
		private route: ActivatedRoute,
		private FlashMessages: FlashMessagesService, 
		private validateService: ValidateService
	) {}
ngOnInit(){}

fileChange(event) 
	{
    	this.logo = event.target.files;
  	}

onSignupPharmacy()
{

	if (this.FirstOption)
	{
		this.location.location.push("FirstOption : null");
	}
	if (this.SecondOption)
	{
		this.location.location.push("SecondOption : null");
	}
	if (this.ThirdOption)
	{
		this.location.location.push("ThirdOption : null");
	}
	if (this.FourthOption)
	{
		this.location.location.push("FourthOption : null");
	}
	if (this.FifthOption)
	{
		this.location.location.push("FifthOption : null");
	}
	if (this.SixthOption)
	{
		this.location.location.push("SixthOption : null");
	}
	if (this.SeventhOption)
	{
		this.location.location.push("SeventhOption : null");
	}
	if (this.EighthOption)
	{
		this.location.location.push("EighthOption : null");
	}
	if (this.FirstOption)
	{
		this.location.deliverTo.push("FirstOption : null");
	}
	if (this.SecondOption)
	{
		this.location.deliverTo.push("SecondOption : null");
	}
	if (this.ThirdOption)
	{
		this.location.deliverTo.push("ThirdOption : null");
	}
	if (this.FourthOption)
	{
		this.location.deliverTo.push("FourthOption : null");
	}
	if (this.FifthOption)
	{
		this.location.deliverTo.push("FifthOption : null");
	}
	if (this.SixthOption)
	{
		this.location.deliverTo.push("SixthOption : null");
	}
	if (this.SeventhOption)
	{
		this.location.deliverTo.push("SeventhOption : null");
	}
	if (this.EighthOption)
	{
		this.location.deliverTo.push("EighthOption : null");
	}
	var formData: FormData = new FormData();

    if(this.logo)
      if (this.logo.length > 0)
      {
        let file: File = this.logo[0];
        formData.append('uploadFile', file, file.name);
      }

	  if (!this.validateService.validateIllegal(this.name)
      || !this.validateService.validateIllegal(this.location.street)
	  || !this.validateService.validateIllegal(this.location.city))
	   	{
			this.FlashMessages.show("please check your inputs in the name cell, street cell or city cell , they all have to be legal characters  ", { cssClass: 'alert-warning', timeout: 5000 });
			window.scrollTo(0,0);
      
    	}
	 else if (!this.validateService.validatePassword(this.password))
		{
			this.FlashMessages.show("please insert a valid Password with at least 8 characters and not more than 15 characters", { cssClass: 'alert-warning', timeout: 5000 });
			window.scrollTo(0,0);
    
    	}
	else if (!this.validateService.validateEmail(this.email))
	 	{
			this.FlashMessages.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
			window.scrollTo(0,0);
		
    	}
	
	else if (!this.validateService.validateTelephone(this.telephone)) 
		{
			this.FlashMessages.show('Please use a valid Telephone number', { cssClass: 'alert-danger', timeout: 3000 });
			window.scrollTo(0,0);
      
    	}
	
	else if (!this.validateService.validateMobile(this.mobile)) 
		{
			this.FlashMessages.show('Please use a valid mobile number', { cssClass: 'alert-danger', timeout: 3000 });
			window.scrollTo(0,0);
      
    	}

	else if (!this.validateService.validatePositive(this.time)) 
		{
			this.FlashMessages.show('Please use a valid positive time to enter', { cssClass: 'alert-danger', timeout: 3000 });
			window.scrollTo(0,0);
      
    	}
	else if (this.location.location.length == 0)
	 {
		this.FlashMessages.show('Please choose at least one location!', { cssClass: 'alert-danger', timeout: 3000 });
		window.scrollTo(0,0);
	
    }

	else if (this.location.deliverTo.length == 0) 
	{
		this.FlashMessages.show('Please choose at least one deliver to!', { cssClass: 'alert-danger', timeout: 3000 });
		window.scrollTo(0,0);
		
    }
		
	
	formData.append('name', this.name.toString());
	formData.append('email', this.email.toString());
	formData.append('telephone', this.telephone.toString());
	formData.append('mobile', this.mobile.toString());
	formData.append('password',this.password.toString());
	formData.append('time',  this.time.toString());
	formData.append('city', this.location.city.toString());
	formData.append('street', this.location.street.toString());

	let token = btoa(formData.toString());


	this.UserService.register(formData,token).subscribe (data =>{});

}	
}
interface location
{
	city:String;
	location:[String];
	street:String;
	deliverTo: [String];
}
