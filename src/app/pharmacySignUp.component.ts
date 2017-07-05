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
	options: Array<any>;
    mySelectValue: Array<string>; // Array of strings for multi select, string for single select.


	
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
        this.selectedItemsLocation = [
                                {"id":2,"itemName":"Singapore"},
                                {"id":3,"itemName":"Australia"},
                                {"id":4,"itemName":"Canada"},
                                {"id":5,"itemName":"South Korea"}
                            ];
		
		this.selectedItemsDeliverTo = [
                                {"id":2,"itemName":"Zamalek"},
                                {"id":3,"itemName":"Shobra"},
                                {"id":4,"itemName":"Masr Gedida"},
                                {"id":5,"itemName":"Tahrir"}
                            ];

        this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		
        
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
    onItemDeSelectDeliverTo(item:any){
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

onSignupPharmacy(signupForm)
{
	
	var formData: FormData = new FormData();

    if(signupForm.logo)
      if (signupForm.logo.length > 0)
      {
        let file: File = signupForm.logo[0];
        formData.append('uploadFile', file, file.name);
      }

	  if (!this.validateService.validateIllegal(signupForm.name)
      || !this.validateService.validateIllegal(signupForm.street)
	  || !this.validateService.validateIllegal(signupForm.city))
	   	{
			this.FlashMessages.show("please check your inputs in the name cell, street cell or city cell , they all have to be legal characters  ", { cssClass: 'alert-warning', timeout: 5000 });
			
      
    	}
	 else if (!this.validateService.validatePassword(signupForm.password))
		{
			this.FlashMessages.show("please insert a valid Password with at least 8 characters and not more than 15 characters", { cssClass: 'alert-warning', timeout: 5000 });
			
    
    	}
	else if (!this.validateService.validateEmail(signupForm.email))
	 	{
			this.FlashMessages.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
			
		
    	}
	
	else if (!this.validateService.validateTelephone(signupForm.telephone)) 
		{
			this.FlashMessages.show('Please use a valid Telephone number', { cssClass: 'alert-danger', timeout: 3000 });
			
      
    	}
	
	else if (!this.validateService.validateMobile(signupForm.mobile)) 
		{
			this.FlashMessages.show('Please use a valid mobile number', { cssClass: 'alert-danger', timeout: 3000 });
			
      
    	}

	else if (!this.validateService.validatePositive(signupForm.time)) 
		{
			this.FlashMessages.show('Please use a valid positive time to enter', { cssClass: 'alert-danger', timeout: 3000 });
			
      
    	}
	else if (this.location.location.length == 0)
	 {
		this.FlashMessages.show('Please choose at least one location!', { cssClass: 'alert-danger', timeout: 3000 });
		
	
    }

	else if (this.location.deliverTo.length == 0) 
	{
		this.FlashMessages.show('Please choose at least one deliver to!', { cssClass: 'alert-danger', timeout: 3000 });
		
		
    }
	var i;
	
	
	for (i=0; i<this.selectedItemsDeliverTo.length; i++)
	{
		this.location.deliverTo.push(this.selectedItemsDeliverTo[i]);
	}
	for (i=0; i<this.selectedItemsLocation.length; i++)
	{
		this.location.location.push(this.selectedItemsLocation[i]);
	}

		
	
	formData.append('name', signupForm.name);
	console.log(signupForm.name);
	formData.append('email', signupForm.email);
	console.log(signupForm.email);
	formData.append('telephone', signupForm.telephone);
	console.log(signupForm.telephone);
	formData.append('mobile', signupForm.mobile);
	console.log(signupForm.mobile);
	formData.append('password',signupForm.password.toString);
	formData.append('time',  signupForm.time);
	console.log(signupForm.time);
	formData.append('city', signupForm.city);
	console.log(signupForm.city);
	formData.append('street', signupForm.street);
	console.log(signupForm.street);
	formData.append('location', this.location.location.toString());
	formData.append('deliverTo', this.location.deliverTo.toString());


	   let date = new Date();
 
 		let h = date.getHours();
 		let m  = date.getMinutes();
 		var minutes :string='';
 		var hours :string='' ;
 		if(m<10){
 			minutes = '0'+''+m+'';
 		}else{
 			minutes = ''+m+'';
 		}
 
 		if(h<10){
 			hours = '0'+''+h+'';
 		}else{
 			hours = ''+h+'';
 		}
 		let date_format = hours+':'+minutes;
 		let token = btoa(date_format+date_format);


	this.UserService.register(formData,token).subscribe (res =>{
		if (res)
		{
		  return this.router.navigate(['/login']) ;  
		}                 
        else
		{
            return false;
                     
		}
	});

}	
}
interface location
{
	city:String;
	location:[String];
	street:String;
	deliverTo: [String];
}

