import { Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {ValidateService} from './shared/validate.service';
import {users} from './shared/users.service';


@Component({
	moduleId:module.id,

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
	city:String;
	street:String;
	dropdownListLocation = [];
    selectedItemsLocation = [];
    dropdownSettingsLocation = {};
	dropdownListLocationCairo = [];
    selectedItemsLocationCairo = [];
    dropdownSettingsLocationCairo = {};
	dropdownListLocationGiza = [];
    selectedItemsLocationGiza = [];
    dropdownSettingsLocationGiza = {};
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
	console.log(this.city);
	this.city = 'Giza';
	if (this.city == 'Cairo')
	{
		 this.dropdownListLocation = [
                              {"id":1,"itemName":"Abbassia"},
                              {"id":2,"itemName":"Abdeen"},
                              {"id":3,"itemName":"Al-Matariyyah"},
                              {"id":4,"itemName":"Ain Shams"},
                              {"id":5,"itemName":"Azbakeya"},
                              {"id":6,"itemName":"Bab al-Louq"},
                              {"id":7,"itemName":"Bulaq"},
                              {"id":8,"itemName":"Daher"},
                              {"id":9,"itemName":"Downtown"},
                              {"id":10,"itemName":"El-Manial"},
							  {"id":11,"itemName":"El-Marg"},
                              {"id":12,"itemName":"El-Quba"},
                              {"id":13,"itemName":"El-Sakakini"},
                              {"id":14,"itemName":"El-Tagamu El-Khames"},
                              {"id":15,"itemName":"Elsahel"},
                              {"id":16,"itemName":"Ezbet El-Nakhl"},
                              {"id":17,"itemName":"Faggala"},
                              {"id":18,"itemName":"Fustat"},
                              {"id":19,"itemName":"Garden City"},
                              {"id":20,"itemName":"Heliopolis"},
							  {"id":21,"itemName":"Maadi"},
                              {"id":22,"itemName":"Mokattam"},
                              {"id":23,"itemName":"Old cairo"},
                              {"id":24,"itemName":"Rhoda"},
                              {"id":25,"itemName":"Shubra"},
                              {"id":26,"itemName":"Shubra El-Kheima"},
                              {"id":27,"itemName":"Zamalek"}
                 
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Abbassia"},
                              {"id":2,"itemName":"Abdeen"},
                              {"id":3,"itemName":"Al-Matariyyah"},
                              {"id":4,"itemName":"Ain Shams"},
                              {"id":5,"itemName":"Azbakeya"},
                              {"id":6,"itemName":"Bab al-Louq"},
                              {"id":7,"itemName":"Bulaq"},
                              {"id":8,"itemName":"Daher"},
                              {"id":9,"itemName":"Downtown"},
                              {"id":10,"itemName":"El-Manial"},
							  {"id":11,"itemName":"El-Marg"},
                              {"id":12,"itemName":"El-Quba"},
                              {"id":13,"itemName":"El-Sakakini"},
                              {"id":14,"itemName":"El-Tagamu El-Khames"},
                              {"id":15,"itemName":"Elsahel"},
                              {"id":16,"itemName":"Ezbet El-Nakhl"},
                              {"id":17,"itemName":"Faggala"},
                              {"id":18,"itemName":"Fustat"},
                              {"id":19,"itemName":"Garden City"},
                              {"id":20,"itemName":"Heliopolis"},
							  {"id":21,"itemName":"Maadi"},
                              {"id":22,"itemName":"Mokattam"},
                              {"id":23,"itemName":"Old cairo"},
                              {"id":24,"itemName":"Rhoda"},
                              {"id":25,"itemName":"Shubra"},
                              {"id":26,"itemName":"Shubra El-Kheima"},
                              {"id":27,"itemName":"Zamalek"}
                            ];
		this.selectedItemsLocation = [
                                {"id":27,"itemName":"Zamalek"},
                                {"id":22,"itemName":"Mokattam"},
                                {"id":21,"itemName":"Maadi"},
                                {"id":4,"itemName":"Ain Shams"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                                {"id":27,"itemName":"Zamalek"},
                                {"id":22,"itemName":"Mokattam"},
                                {"id":21,"itemName":"Maadi"},
                                {"id":4,"itemName":"Ain Shams"}
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
	else if (this.city== 'Giza')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Agouza"},
                              {"id":2,"itemName":"Dokki"},
                              {"id":3,"itemName":"Imbaba"},
                              {"id":4,"itemName":"Mohandessin"},
                              {"id":5,"itemName":"Alwaraq"},
                              {"id":6,"itemName":"Bolaq Aldakrour"},
                              {"id":7,"itemName":"Alkitkat"},
                              {"id":8,"itemName":"Alagoza"},
                              {"id":9,"itemName":"Bien Alsaryaat"},
                              {"id":10,"itemName":"Faisal"},
							  {"id":11,"itemName":"Alharam"},
                              {"id":12,"itemName":"Almonieb"},
                              {"id":13,"itemName":"Osiem"},
                              {"id":14,"itemName":"Kerdasa"},
                              {"id":15,"itemName":"Alhawamdia"},
                              {"id":16,"itemName":"Abo Alnomros"},
                              {"id":17,"itemName":"Alssaf"},
                              {"id":18,"itemName":"Albadrachine"},
                              {"id":19,"itemName":"Alayaat"},
                              {"id":20,"itemName":"Atfieh"},
							  {"id":21,"itemName":"Alshiekh Zaied"},
                              {"id":22,"itemName":"6th of October"}
                              
                            ];
		this.dropdownListDeliverTo = [
							  {"id":1,"itemName":"Agouza"},
                              {"id":2,"itemName":"Dokki"},
                              {"id":3,"itemName":"Imbaba"},
                              {"id":4,"itemName":"Mohandessin"},
                              {"id":5,"itemName":"Alwaraq"},
                              {"id":6,"itemName":"Bolaq Aldakrour"},
                              {"id":7,"itemName":"Alkitkat"},
                              {"id":8,"itemName":"Alagoza"},
                              {"id":9,"itemName":"Bien Alsaryaat"},
                              {"id":10,"itemName":"Faisal"},
							  {"id":11,"itemName":"Alharam"},
                              {"id":12,"itemName":"Almonieb"},
                              {"id":13,"itemName":"Osiem"},
                              {"id":14,"itemName":"Kerdasa"},
                              {"id":15,"itemName":"Alhawamdia"},
                              {"id":16,"itemName":"Abo Alnomros"},
                              {"id":17,"itemName":"Alssaf"},
                              {"id":18,"itemName":"Albadrachine"},
                              {"id":19,"itemName":"Alayaat"},
                              {"id":20,"itemName":"Atfieh"},
							  {"id":21,"itemName":"Alshiekh Zaied"},
                              {"id":22,"itemName":"6th of October"}
							
		];
		this.selectedItemsLocation = [
                                {"id":11,"itemName":"Alharam"},
                              	{"id":12,"itemName":"Almonieb"},
                              	{"id":13,"itemName":"Osiem"},
                            ];
		
		
		this.selectedItemsDeliverTo = [
                                {"id":11,"itemName":"Alharam"},
                              	{"id":12,"itemName":"Almonieb"},
                              	{"id":13,"itemName":"Osiem"},
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
	else{
		this.dropdownListLocation = [
                              {"id":1,"itemName":"Abbassia"},
                              {"id":2,"itemName":"Abdeen"},
                              {"id":3,"itemName":"Al-Matariyyah"},
                              {"id":4,"itemName":"Ain Shams"},
                              {"id":5,"itemName":"Azbakeya"},
                              {"id":6,"itemName":"Bab al-Louq"},
                              {"id":7,"itemName":"Bulaq"},
                              {"id":8,"itemName":"Daher"},
                              {"id":9,"itemName":"Downtown"},
                              {"id":10,"itemName":"El-Manial"},
							  {"id":11,"itemName":"El-Marg"},
                              {"id":12,"itemName":"El-Quba"},
                              {"id":13,"itemName":"El-Sakakini"},
                              {"id":14,"itemName":"El-Tagamu El-Khames"},
                              {"id":15,"itemName":"Elsahel"},
                              {"id":16,"itemName":"Ezbet El-Nakhl"},
                              {"id":17,"itemName":"Faggala"},
                              {"id":18,"itemName":"Fustat"},
                              {"id":19,"itemName":"Garden City"},
                              {"id":20,"itemName":"Heliopolis"},
							  {"id":21,"itemName":"Maadi"},
                              {"id":22,"itemName":"Mokattam"},
                              {"id":23,"itemName":"Old cairo"},
                              {"id":24,"itemName":"Rhoda"},
                              {"id":25,"itemName":"Shubra"},
                              {"id":26,"itemName":"Shubra El-Kheima"},
                              {"id":27,"itemName":"Zamalek"}
                 
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Abbassia"},
                              {"id":2,"itemName":"Abdeen"},
                              {"id":3,"itemName":"Al-Matariyyah"},
                              {"id":4,"itemName":"Ain Shams"},
                              {"id":5,"itemName":"Azbakeya"},
                              {"id":6,"itemName":"Bab al-Louq"},
                              {"id":7,"itemName":"Bulaq"},
                              {"id":8,"itemName":"Daher"},
                              {"id":9,"itemName":"Downtown"},
                              {"id":10,"itemName":"El-Manial"},
							  {"id":11,"itemName":"El-Marg"},
                              {"id":12,"itemName":"El-Quba"},
                              {"id":13,"itemName":"El-Sakakini"},
                              {"id":14,"itemName":"El-Tagamu El-Khames"},
                              {"id":15,"itemName":"Elsahel"},
                              {"id":16,"itemName":"Ezbet El-Nakhl"},
                              {"id":17,"itemName":"Faggala"},
                              {"id":18,"itemName":"Fustat"},
                              {"id":19,"itemName":"Garden City"},
                              {"id":20,"itemName":"Heliopolis"},
							  {"id":21,"itemName":"Maadi"},
                              {"id":22,"itemName":"Mokattam"},
                              {"id":23,"itemName":"Old cairo"},
                              {"id":24,"itemName":"Rhoda"},
                              {"id":25,"itemName":"Shubra"},
                              {"id":26,"itemName":"Shubra El-Kheima"},
                              {"id":27,"itemName":"Zamalek"}
                            ];
		this.selectedItemsLocation = [
                                {"id":27,"itemName":"Zamalek"},
                                {"id":22,"itemName":"Mokattam"},
                                {"id":21,"itemName":"Maadi"},
                                {"id":4,"itemName":"Ain Shams"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                                {"id":27,"itemName":"Zamalek"},
                                {"id":22,"itemName":"Mokattam"},
                                {"id":21,"itemName":"Maadi"},
                                {"id":4,"itemName":"Ain Shams"}
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


onSignupPharmacy(data:any)
{
	console.log(data);

}
/*onSignupPharmacy(signupForm)
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

}	*/
}
interface location
{
	city:String;
	location:[String];
	street:String;
	deliverTo: [String];
}

