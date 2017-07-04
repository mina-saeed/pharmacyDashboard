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
	dropdownListLocation = [];
    selectedItemsLocation = [];
    dropdownSettingsLocation = {};
	dropdownListDeliverTo = [];
    selectedItemsDeliverTo = [];
    dropdownSettingsDeliverTo = {};


	
	constructor(
		private router: Router,
		private UserService: users,
		private route: ActivatedRoute,
		private FlashMessages: FlashMessagesService, 
		private validateService: ValidateService
	) {}
ngOnInit()
{
		 this.dropdownListLocation = [
                              {"id":1,"itemName":"India"},
                              {"id":2,"itemName":"Singapore"},
                              {"id":3,"itemName":"Australia"},
                              {"id":4,"itemName":"Canada"},
                              {"id":5,"itemName":"South Korea"},
                              {"id":6,"itemName":"Germany"},
                              {"id":7,"itemName":"France"},
                              {"id":8,"itemName":"Russia"},
                              {"id":9,"itemName":"Italy"},
                              {"id":10,"itemName":"Sweden"}
                            ];
        this.selectedItemsLocation = [
                                {"id":2,"itemName":"Singapore"},
                                {"id":3,"itemName":"Australia"},
                                {"id":4,"itemName":"Canada"},
                                {"id":5,"itemName":"South Korea"}
                            ];
        this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Nasr City"},
                              {"id":2,"itemName":"Zamalek"},
                              {"id":3,"itemName":"Shobra"},
                              {"id":4,"itemName":"Masr Gedida"},
                              {"id":5,"itemName":"Tahrir"},
                              {"id":6,"itemName":"Mohandesen"},
                              {"id":7,"itemName":"Tagamooh"},
                              {"id":8,"itemName":"Ramsis"},
                              {"id":9,"itemName":"Sheraton"},
                              {"id":10,"itemName":"Nozha"}
                            ];
        this.selectedItemsDeliverTo = [
                                {"id":2,"itemName":"Zamalek"},
                                {"id":3,"itemName":"Shobra"},
                                {"id":4,"itemName":"Masr Gedida"},
                                {"id":5,"itemName":"Tahrir"}
                            ];
        this.dropdownSettingsDeliverTo = { 
                                  singleSelection: false, 
                                  text:"Select Deliver to",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                };                       
    
}

 onItemSelectLocation(item:any){
        console.log(item);
        console.log(this.selectedItemsLocation);
    }
    OnItemDeSelectLocation(item:any){
        console.log(item);
        console.log(this.selectedItemsLocation);
    }
    onSelectAllLocation(items: any){
        console.log(items);
    }
    onDeSelectAllLocation(items: any){
        console.log(items);
    }


	onItemSelectDeliverTo(item:any){
        console.log(item);
        console.log(this.selectedItemsDeliverTo);
    }
    OnItemDeSelectDeliverTo(item:any){
        console.log(item);
        console.log(this.selectedItemsDeliverTo);
    }
    onSelectAllDeliverTo(items: any){
        console.log(items);
    }
    onDeSelectAllDeliverTo(items: any){
        console.log(items);
    }

fileChange(event) 
	{
    	this.logo = event.target.files;
  	}

onSignupPharmacy()
{
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
	console.log(this.name);
	console.log(this.email);
	console.log(this.telephone);
	console.log(this.mobile);
	console.log(this.time);
	console.log(this.location.city);
	console.log(this.location.street);
		
	
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

