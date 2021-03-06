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
	city:String = " ";
	street:String;
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
	console.log(this.city);
	
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

	


	onChange(newValue) {
    console.log(newValue);
    this.city= newValue;
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
    else if (this.city== 'Alexandria')
    {
        this.dropdownListLocation = [
                                {"id":1,"itemName":"AbuQir"},
                                {"id":2,"itemName":"Maamoura"},
                                {"id":3,"itemName":"Montaza"},
                                {"id":4,"itemName":"Mandara"},
                                {"id":5,"itemName":"Asafra"},
                                {"id":6,"itemName":"Miami"},
                                {"id":7,"itemName":"Sidi Bishr"},
                                {"id":8,"itemName":"Victoria"},
                                {"id":9,"itemName":"Laurent"},
                                {"id":10,"itemName":"Tharwat"},
                                {"id":11,"itemName":"San Stefano"},
                                {"id":12,"itemName":"Gianaclis"},
                                {"id":13,"itemName":"Schutz"},
                                {"id":14,"itemName":"Zezenia"},
                                {"id":15,"itemName":"Glim"},
                                {"id":16,"itemName":"Bacchus"},
                                {"id":17,"itemName":"Saba Pasha"},
                                {"id":18,"itemName":"Fleming"},
                                {"id":19,"itemName":"Stanley"},
                                {"id":20,"itemName":"Rushdy"},
                                {"id":21,"itemName":"Mustafa Kamel"},
                                {"id":22,"itemName":"Kafr  Abdu"},
                                {"id":23,"itemName":"Smouha"},
                                {"id":24,"itemName":"Nozha"},
                                {"id":25,"itemName":"Sidi Gaber"},
                                {"id":26,"itemName":"Cleopatra"},
                                {"id":27,"itemName":"Sporting"},
                                {"id":28,"itemName":"Al Ibrahimiyya"},
                                {"id":29,"itemName":"Camp Caesar"},
                                {"id":30,"itemName":"Al Shatby"},
                                {"id":31,"itemName":"Hadara"},
                                {"id":32,"itemName":"Azarita"},
                                {"id":33,"itemName":"Muharram Bek"},
                                {"id":34,"itemName":"El Raml Station"},
                                {"id":35,"itemName":"KoumAlDikka"},
                                {"id":36,"itemName":"Anfoushi"},
                                {"id":37,"itemName":"Al Manshiyya"},
                                {"id":38,"itemName":"Al Attarin"},
                                {"id":39,"itemName":"Karmouz"},
                                {"id":40,"itemName":"Ras El Tin"},
                                {"id":41,"itemName":"El Labban"},
                                {"id":42,"itemName":"Qabbary"},
                                {"id":43,"itemName":"Wardian"},
                                {"id":44,"itemName":"El Max"},
                                {"id":45,"itemName":"Dekheila"},
                                {"id":46,"itemName":"Agami"},
                                {"id":47,"itemName":"Al Hanuviel"},
                                {"id":48,"itemName":"Amreya"},
                                {"id":49,"itemName":"King Mariout"},
                                {"id":50,"itemName":"Burg al-Arab"}
        ];
        this.dropdownListDeliverTo = [
							      {"id":1,"itemName":"AbuQir"},
                                {"id":2,"itemName":"Maamoura"},
                                {"id":3,"itemName":"Montaza"},
                                {"id":4,"itemName":"Mandara"},
                                {"id":5,"itemName":"Asafra"},
                                {"id":6,"itemName":"Miami"},
                                {"id":7,"itemName":"Sidi Bishr"},
                                {"id":8,"itemName":"Victoria"},
                                {"id":9,"itemName":"Laurent"},
                                {"id":10,"itemName":"Tharwat"},
                                {"id":11,"itemName":"San Stefano"},
                                {"id":12,"itemName":"Gianaclis"},
                                {"id":13,"itemName":"Schutz"},
                                {"id":14,"itemName":"Zezenia"},
                                {"id":15,"itemName":"Glim"},
                                {"id":16,"itemName":"Bacchus"},
                                {"id":17,"itemName":"Saba Pasha"},
                                {"id":18,"itemName":"Fleming"},
                                {"id":19,"itemName":"Stanley"},
                                {"id":20,"itemName":"Rushdy"},
                                {"id":21,"itemName":"Mustafa Kamel"},
                                {"id":22,"itemName":"Kafr  Abdu"},
                                {"id":23,"itemName":"Smouha"},
                                {"id":24,"itemName":"Nozha"},
                                {"id":25,"itemName":"Sidi Gaber"},
                                {"id":26,"itemName":"Cleopatra"},
                                {"id":27,"itemName":"Sporting"},
                                {"id":28,"itemName":"Al Ibrahimiyya"},
                                {"id":29,"itemName":"Camp Caesar"},
                                {"id":30,"itemName":"Al Shatby"},
                                {"id":31,"itemName":"Hadara"},
                                {"id":32,"itemName":"Azarita"},
                                {"id":33,"itemName":"Muharram Bek"},
                                {"id":34,"itemName":"El Raml Station"},
                                {"id":35,"itemName":"KoumAlDikka"},
                                {"id":36,"itemName":"Anfoushi"},
                                {"id":37,"itemName":"Al Manshiyya"},
                                {"id":38,"itemName":"Al Attarin"},
                                {"id":39,"itemName":"Karmouz"},
                                {"id":40,"itemName":"Ras El Tin"},
                                {"id":41,"itemName":"El Labban"},
                                {"id":42,"itemName":"Qabbary"},
                                {"id":43,"itemName":"Wardian"},
                                {"id":44,"itemName":"El Max"},
                                {"id":45,"itemName":"Dekheila"},
                                {"id":46,"itemName":"Agami"},
                                {"id":47,"itemName":"Al Hanuviel"},
                                {"id":48,"itemName":"Amreya"},
                                {"id":49,"itemName":"King Mariout"},
                                {"id":50,"itemName":"Burg al-Arab"}
							
		];
		this.selectedItemsLocation = [
                                {"id":36,"itemName":"Anfoushi"},
                                {"id":37,"itemName":"Al Manshiyya"},
                                {"id":38,"itemName":"Al Attarin"},
                                {"id":39,"itemName":"Karmouz"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                                {"id":36,"itemName":"Anfoushi"},
                                {"id":37,"itemName":"Al Manshiyya"},
                                {"id":38,"itemName":"Al Attarin"},
                                {"id":39,"itemName":"Karmouz"}
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
    else if (this.city== 'Suez')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Arbaeen"},
                              {"id":2,"itemName":"Suez"},
                              {"id":3,"itemName":"Ganayen"},
                              {"id":4,"itemName":"Faisal"},
                              {"id":5,"itemName":"Attaka"}      
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Arbaeen"},
                              {"id":2,"itemName":"Suez"},
                              {"id":3,"itemName":"Ganayen"},
                              {"id":4,"itemName":"Faisal"},
                              {"id":5,"itemName":"Attaka"} 
							  
		];
		this.selectedItemsLocation = [
                                {"id":1,"itemName":"Arbaeen"},
                              {"id":2,"itemName":"Suez"},
                              {"id":3,"itemName":"Ganayen"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                                {"id":1,"itemName":"Arbaeen"},
                              {"id":2,"itemName":"Suez"},
                              {"id":3,"itemName":"Ganayen"}
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

    else if (this.city== 'Ismailia')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Ismailia"},
                              {"id":2,"itemName":"Al Tal Al-Kabeer"},
                              {"id":3,"itemName":"Fayed"},
                              {"id":4,"itemName":"Al-Qantara"},
                              {"id":5,"itemName":"Al-Qantara Gharb"}, 
                              {"id":6,"itemName":"Abou Sweir"},
                              {"id":7,"itemName":"Al Qassassin"}       
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Ismailia"},
                              {"id":2,"itemName":"Al Tal Al-Kabeer"},
                              {"id":3,"itemName":"Fayed"},
                              {"id":4,"itemName":"Al-Qantara"},
                              {"id":5,"itemName":"Al-Qantara Gharb"}, 
                              {"id":6,"itemName":"Abou Sweir"},
                              {"id":7,"itemName":"Al Qassassin"} 
							  
		];
		this.selectedItemsLocation = [
                              {"id":3,"itemName":"Fayed"},
                              {"id":4,"itemName":"Al-Qantara"},
                              {"id":5,"itemName":"Al-Qantara Gharb"}, 
                              {"id":6,"itemName":"Abou Sweir"},
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":3,"itemName":"Fayed"},
                              {"id":4,"itemName":"Al-Qantara"},
                              {"id":5,"itemName":"Al-Qantara Gharb"}, 
                              {"id":6,"itemName":"Abou Sweir"},
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
    else if (this.city== 'Port Said')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Al-Ganoub"},
                              {"id":2,"itemName":"Al-Zohour"},
                              {"id":3,"itemName":"Al-Dawahy"},
                              {"id":4,"itemName":"Al-Sharq"},
                              {"id":5,"itemName":"Al-Manakh"}, 
                              {"id":6,"itemName":"Al-Arab"}  
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Al-Ganoub"},
                              {"id":2,"itemName":"Al-Zohour"},
                              {"id":3,"itemName":"Al-Dawahy"},
                              {"id":4,"itemName":"Al-Sharq"},
                              {"id":5,"itemName":"Al-Manakh"}, 
                              {"id":6,"itemName":"Al-Arab"}
							  
		];
		this.selectedItemsLocation = [
                              {"id":3,"itemName":"Al-Dawahy"},
                              {"id":4,"itemName":"Al-Sharq"},
                              {"id":5,"itemName":"Al-Manakh"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":3,"itemName":"Al-Dawahy"},
                              {"id":4,"itemName":"Al-Sharq"},
                              {"id":5,"itemName":"Al-Manakh"},
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
    else if (this.city== 'Damietta')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Farskor"},
                              {"id":2,"itemName":"Al-Zarqa"},
                              {"id":3,"itemName":"Kafr Saad"},
                              {"id":4,"itemName":"Kafr Batikh"}
                              
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Farskor"},
                              {"id":2,"itemName":"Al-Zarqa"},
                              {"id":3,"itemName":"Kafr Saad"},
                              {"id":4,"itemName":"Kafr Batikh"}
							  
		];
		this.selectedItemsLocation = [
                              {"id":2,"itemName":"Al-Zarqa"},
                              {"id":3,"itemName":"Kafr Saad"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":2,"itemName":"Al-Zarqa"},
                              {"id":3,"itemName":"Kafr Saad"}
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
    else if (this.city== 'Sharqia')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"El-Hossaynya"},
                              {"id":2,"itemName":"Faqous"},
                              {"id":3,"itemName":"Belbis"},
                              {"id":4,"itemName":"Menia El-Qamh"},
                              {"id":5,"itemName":"Abou Hamad"},
                              {"id":6,"itemName":"Awlad Saqr"},
                              {"id":7,"itemName":"Al-Asher men Ramadan"},
                              {"id":8,"itemName":"Al Salehya Al Gadida"},
                              {"id":9,"itemName":"Kafr Saqr"},
                              {"id":10,"itemName":"Abou kebir"},
                              {"id":11,"itemName":"Al Qenayat"},
                              {"id":12,"itemName":"Mashtoul el Souq"},
                              {"id":13,"itemName":"Derb Negm"},
                              {"id":14,"itemName":"Al-Ibrahimya"},
                              {"id":15,"itemName":"Hahya"},
                              {"id":16,"itemName":"Al-Qareen"},
                              {"id":17,"itemName":"San Al-Hagar"}
                              
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"El-Hossaynya"},
                              {"id":2,"itemName":"Faqous"},
                              {"id":3,"itemName":"Belbis"},
                              {"id":4,"itemName":"Menia El-Qamh"},
                              {"id":5,"itemName":"Abou Hamad"},
                              {"id":6,"itemName":"Awlad Saqr"},
                              {"id":7,"itemName":"Al-Asher men Ramadan"},
                              {"id":8,"itemName":"Al Salehya Al Gadida"},
                              {"id":9,"itemName":"Kafr Saqr"},
                              {"id":10,"itemName":"Abou kebir"},
                              {"id":11,"itemName":"Al Qenayat"},
                              {"id":12,"itemName":"Mashtoul el Souq"},
                              {"id":13,"itemName":"Derb Negm"},
                              {"id":14,"itemName":"Al-Ibrahimya"},
                              {"id":15,"itemName":"Hahya"},
                              {"id":16,"itemName":"Al-Qareen"},
                              {"id":17,"itemName":"San Al-Hagar"}
							  
		];
		this.selectedItemsLocation = [
                              {"id":1,"itemName":"El-Hossaynya"},
                              {"id":2,"itemName":"Faqous"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":1,"itemName":"El-Hossaynya"},
                              {"id":2,"itemName":"Faqous"}
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
    else if (this.city== 'Qaliubiya')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Banha"},
                              {"id":2,"itemName":"Qalyoub"},
                              {"id":3,"itemName":"Al Qanater El Khayria"},
                              {"id":4,"itemName":"Shoubra Al Kheima"},
                              {"id":5,"itemName":"Al Khanka"},
                              {"id":6,"itemName":"Kafr Al Sheikh"},
                              {"id":7,"itemName":"Shebin Al Qanater"},
                              {"id":8,"itemName":"Toukh"},
                              {"id":9,"itemName":"Al Obour"},
                              {"id":10,"itemName":"Qeha"},
                              {"id":11,"itemName":"Al Khosous"},
                              {"id":12,"itemName":"Kafr Sheikh Ebrahim"}
                              
                              
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Banha"},
                              {"id":2,"itemName":"Qalyoub"},
                              {"id":3,"itemName":"Al Qanater El Khayria"},
                              {"id":4,"itemName":"Shoubra Al Kheima"},
                              {"id":5,"itemName":"Al Khanka"},
                              {"id":6,"itemName":"Kafr Al Sheikh"},
                              {"id":7,"itemName":"Shebin Al Qanater"},
                              {"id":8,"itemName":"Toukh"},
                              {"id":9,"itemName":"Al Obour"},
                              {"id":10,"itemName":"Qeha"},
                              {"id":11,"itemName":"Al Khosous"},
                              {"id":12,"itemName":"Kafr Sheikh Ebrahim"}
							  
		];
		this.selectedItemsLocation = [
                              {"id":11,"itemName":"Al Khosous"},
                              {"id":12,"itemName":"Kafr Sheikh Ebrahim"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":11,"itemName":"Al Khosous"},
                              {"id":12,"itemName":"Kafr Sheikh Ebrahim"}
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
    else if (this.city== 'El-Beheira')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Rashid"},
                              {"id":2,"itemName":"Shabrakhit"},
                              {"id":3,"itemName":"Aytay Al Baroud"},
                              {"id":4,"itemName":"Abu Hummus"},
                              {"id":5,"itemName":"Housh Eissa"},
                              {"id":6,"itemName":"Kafr El Dawar"},
                              {"id":7,"itemName":"El Dalngat"},
                              {"id":8,"itemName":"Kom Hamada"},
                              {"id":9,"itemName":"Damanhour"},
                              {"id":10,"itemName":"El Rahmanya"},
                              {"id":11,"itemName":"El NubaryaEl Gadida"},
                              {"id":12,"itemName":"Wady Natroun"},
                              {"id":12,"itemName":"Badr"}
                              
                              
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Rashid"},
                              {"id":2,"itemName":"Shabrakhit"},
                              {"id":3,"itemName":"Aytay Al Baroud"},
                              {"id":4,"itemName":"Abu Hummus"},
                              {"id":5,"itemName":"Housh Eissa"},
                              {"id":6,"itemName":"Kafr El Dawar"},
                              {"id":7,"itemName":"El Dalngat"},
                              {"id":8,"itemName":"Kom Hamada"},
                              {"id":9,"itemName":"Damanhour"},
                              {"id":10,"itemName":"El Rahmanya"},
                              {"id":11,"itemName":"El NubaryaEl Gadida"},
                              {"id":12,"itemName":"Wady Natroun"},
                              {"id":12,"itemName":"Badr"}
							  
		];
		this.selectedItemsLocation = [
                               {"id":12,"itemName":"Wady Natroun"},
                               {"id":12,"itemName":"Badr"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                               {"id":12,"itemName":"Wady Natroun"},
                               {"id":12,"itemName":"Badr"}
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

     else if (this.city== 'Kafr El-Shaeikh')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Desouq"},
                              {"id":2,"itemName":"Fowah"},
                              {"id":3,"itemName":"Mutubas"},
                              {"id":4,"itemName":"Qalin"},
                              {"id":5,"itemName":"Sidi Salem"},
                              {"id":6,"itemName":"Al Reyad"},
                              {"id":7,"itemName":"Beila"},
                              {"id":8,"itemName":"Al Hamoul"},
                              {"id":9,"itemName":"Al Brolos"}
                        
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Desouq"},
                              {"id":2,"itemName":"Fowah"},
                              {"id":3,"itemName":"Mutubas"},
                              {"id":4,"itemName":"Qalin"},
                              {"id":5,"itemName":"Sidi Salem"},
                              {"id":6,"itemName":"Al Reyad"},
                              {"id":7,"itemName":"Beila"},
                              {"id":8,"itemName":"Al Hamoul"},
                              {"id":9,"itemName":"Al Brolos"}
                        
							  
		];
		this.selectedItemsLocation = [
                              {"id":7,"itemName":"Beila"},
                              {"id":8,"itemName":"Al Hamoul"},
                              {"id":9,"itemName":"Al Brolos"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":7,"itemName":"Beila"},
                              {"id":8,"itemName":"Al Hamoul"},
                              {"id":9,"itemName":"Al Brolos"}
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

    else if (this.city== 'Gharbia')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Kafr El Zayat"},
                              {"id":2,"itemName":"Al Santa"},
                              {"id":3,"itemName":"Al Mahala Al Kobra"},
                              {"id":4,"itemName":"Basyoun"},
                              {"id":5,"itemName":"Zefta"},
                              {"id":6,"itemName":"Samanoud"},
                              {"id":7,"itemName":"Tanta"},
                              {"id":8,"itemName":"Qotor"}
                              
                        
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Kafr El Zayat"},
                              {"id":2,"itemName":"Al Santa"},
                              {"id":3,"itemName":"Al Mahala Al Kobra"},
                              {"id":4,"itemName":"Basyoun"},
                              {"id":5,"itemName":"Zefta"},
                              {"id":6,"itemName":"Samanoud"},
                              {"id":7,"itemName":"Tanta"},
                              {"id":8,"itemName":"Qotor"}
                              
                        
							  
		];
		this.selectedItemsLocation = [
                              {"id":6,"itemName":"Samanoud"},
                              {"id":7,"itemName":"Tanta"},
                              {"id":8,"itemName":"Qotor"}
                              
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":6,"itemName":"Samanoud"},
                              {"id":7,"itemName":"Tanta"},
                              {"id":8,"itemName":"Qotor"}
                              
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

    else if (this.city== 'Monofia')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Shebin El Kom"},
                              {"id":2,"itemName":"Menouf"},
                              {"id":3,"itemName":"Ashmoun"},
                              {"id":4,"itemName":"Qouisna"},
                              {"id":5,"itemName":"Tela"}
                              
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Shebin El Kom"},
                              {"id":2,"itemName":"Menouf"},
                              {"id":3,"itemName":"Ashmoun"},
                              {"id":4,"itemName":"Qouisna"},
                              {"id":5,"itemName":"Tela"}
							  
		];
		this.selectedItemsLocation = [
                              {"id":3,"itemName":"Ashmoun"},
                              {"id":4,"itemName":"Qouisna"},
                              {"id":5,"itemName":"Tela"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":3,"itemName":"Ashmoun"},
                              {"id":4,"itemName":"Qouisna"},
                              {"id":5,"itemName":"Tela"}
                              
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

     else if (this.city== 'Qena')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Abou Tesht"},
                              {"id":2,"itemName":"Farshout"},
                              {"id":3,"itemName":"Nagaa Hamady"},
                              {"id":4,"itemName":"Al Waqf"},
                              {"id":5,"itemName":"Deshna"},
                              {"id":6,"itemName":"Qeft"},
                              {"id":7,"itemName":"Qous"},
                              {"id":8,"itemName":"Neqada"}
                              
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Abou Tesht"},
                              {"id":2,"itemName":"Farshout"},
                              {"id":3,"itemName":"Nagaa Hamady"},
                              {"id":4,"itemName":"Al Waqf"},
                              {"id":5,"itemName":"Deshna"},
                              {"id":6,"itemName":"Qeft"},
                              {"id":7,"itemName":"Qous"},
                              {"id":8,"itemName":"Neqada"}
                             
		];
		this.selectedItemsLocation = [
                              {"id":6,"itemName":"Qeft"},
                              {"id":7,"itemName":"Qous"},
                              {"id":8,"itemName":"Neqada"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":6,"itemName":"Qeft"},
                              {"id":7,"itemName":"Qous"},
                              {"id":8,"itemName":"Neqada"}
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

    else if (this.city== 'Menia')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Maghagha"},
                              {"id":2,"itemName":"Bany Mazar"},
                              {"id":3,"itemName":"Matay"},
                              {"id":4,"itemName":"Samalout"},
                              {"id":5,"itemName":"Abou Qerqas"},
                              {"id":6,"itemName":"Malawy"},
                              {"id":7,"itemName":"Deir Mowas"},
                              {"id":8,"itemName":"Al Adwa"}
                              
                            ];
		this.dropdownListDeliverTo = [
                             {"id":1,"itemName":"Maghagha"},
                              {"id":2,"itemName":"Bany Mazar"},
                              {"id":3,"itemName":"Matay"},
                              {"id":4,"itemName":"Samalout"},
                              {"id":5,"itemName":"Abou Qerqas"},
                              {"id":6,"itemName":"Malawy"},
                              {"id":7,"itemName":"Deir Mowas"},
                              {"id":8,"itemName":"Al Adwa"}
                             
		];
		this.selectedItemsLocation = [
                              {"id":6,"itemName":"Malawy"},
                              {"id":7,"itemName":"Deir Mowas"},
                              {"id":8,"itemName":"Al Adwa"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":6,"itemName":"Malawy"},
                              {"id":7,"itemName":"Deir Mowas"},
                              {"id":8,"itemName":"Al Adwa"}
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

    else if (this.city== 'Fayoum')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Ebshoway"},
                              {"id":2,"itemName":"Atsa"},
                              {"id":3,"itemName":"Al Fayoum"},
                              {"id":4,"itemName":"Senouras"},
                              {"id":5,"itemName":"Tameya"},
                              {"id":6,"itemName":"Youssef El Sadiq"}
                        
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Ebshoway"},
                              {"id":2,"itemName":"Atsa"},
                              {"id":3,"itemName":"Al Fayoum"},
                              {"id":4,"itemName":"Senouras"},
                              {"id":5,"itemName":"Tameya"},
                              {"id":6,"itemName":"Youssef El Sadiq"}
                             
		];
		this.selectedItemsLocation = [
                              {"id":4,"itemName":"Senouras"},
                              {"id":5,"itemName":"Tameya"},
                              {"id":6,"itemName":"Youssef El Sadiq"}
                             
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":4,"itemName":"Senouras"},
                              {"id":5,"itemName":"Tameya"},
                              {"id":6,"itemName":"Youssef El Sadiq"}
                             
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

    else if (this.city== 'Beni Swaif')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Al Wasty"},
                              {"id":2,"itemName":"Beni Swaif"},
                              {"id":3,"itemName":"Nasser"},
                              {"id":4,"itemName":"Ehnasya"},
                              {"id":5,"itemName":"Beba"},
                              {"id":6,"itemName":"Samasta"},
                              {"id":7,"itemName":"Al Fashn"},
                              {"id":8,"itemName":"Beni Swaif Al Gadida"}
                        
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Al Wasty"},
                              {"id":2,"itemName":"Beni Swaif"},
                              {"id":3,"itemName":"Nasser"},
                              {"id":4,"itemName":"Ehnasya"},
                              {"id":5,"itemName":"Beba"},
                              {"id":6,"itemName":"Samasta"},
                              {"id":7,"itemName":"Al Fashn"},
                              {"id":8,"itemName":"Beni Swaif Al Gadida"}
                             
		];
		this.selectedItemsLocation = [
                              {"id":6,"itemName":"Samasta"},
                              {"id":7,"itemName":"Al Fashn"},
                              {"id":8,"itemName":"Beni Swaif Al Gadida"}
                             
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":6,"itemName":"Samasta"},
                              {"id":7,"itemName":"Al Fashn"},
                              {"id":8,"itemName":"Beni Swaif Al Gadida"}
                             
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

    else if (this.city== 'Sohag')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Akhmim"},
                              {"id":2,"itemName":"Al Balina"},
                              {"id":3,"itemName":"Gerga"},
                              {"id":4,"itemName":"Dar El Salam"},
                              {"id":5,"itemName":"Guhayna"},
                              {"id":6,"itemName":"Sohag"},
                              {"id":7,"itemName":"Tama"},
                              {"id":8,"itemName":"Tahta"},
                              {"id":9,"itemName":"Al Maragha"},
                              {"id":10,"itemName":"Al Monshah"}
                        
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Akhmim"},
                              {"id":2,"itemName":"Al Balina"},
                              {"id":3,"itemName":"Gerga"},
                              {"id":4,"itemName":"Dar El Salam"},
                              {"id":5,"itemName":"Guhayna"},
                              {"id":6,"itemName":"Sohag"},
                              {"id":7,"itemName":"Tama"},
                              {"id":8,"itemName":"Tahta"},
                              {"id":9,"itemName":"Al Maragha"},
                              {"id":10,"itemName":"Al Monshah"}
                    
		];
		this.selectedItemsLocation = [
                              {"id":8,"itemName":"Tahta"},
                              {"id":9,"itemName":"Al Maragha"},
                              {"id":10,"itemName":"Al Monshah"}
                             
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":8,"itemName":"Tahta"},
                              {"id":9,"itemName":"Al Maragha"},
                              {"id":10,"itemName":"Al Monshah"}
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
     else if (this.city== 'Assiut')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Dayrout"},
                              {"id":2,"itemName":"Al Qoussya"},
                              {"id":3,"itemName":"Abnoub"},
                              {"id":4,"itemName":"Manfalout"},
                              {"id":5,"itemName":"Assiut"},
                              {"id":6,"itemName":"Al Fath"},
                              {"id":7,"itemName":"Abou Ti"},
                              {"id":8,"itemName":"Al Ghanayem"},
                              {"id":9,"itemName":"Sahel Selim"},
                              {"id":10,"itemName":"Al Badary"},
                              {"id":11,"itemName":"Al Sadfa"}
                        
                            ];
		this.dropdownListDeliverTo = [
                               {"id":1,"itemName":"Dayrout"},
                              {"id":2,"itemName":"Al Qoussya"},
                              {"id":3,"itemName":"Abnoub"},
                              {"id":4,"itemName":"Manfalout"},
                              {"id":5,"itemName":"Assiut"},
                              {"id":6,"itemName":"Al Fath"},
                              {"id":7,"itemName":"Abou Ti"},
                              {"id":8,"itemName":"Al Ghanayem"},
                              {"id":9,"itemName":"Sahel Selim"},
                              {"id":10,"itemName":"Al Badary"},
                              {"id":11,"itemName":"Al Sadfa"}
                        
                    
		];
		this.selectedItemsLocation = [
                              {"id":7,"itemName":"Abou Ti"},
                              {"id":8,"itemName":"Al Ghanayem"},
                              {"id":9,"itemName":"Sahel Selim"}
                             
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":7,"itemName":"Abou Ti"},
                              {"id":8,"itemName":"Al Ghanayem"},
                              {"id":9,"itemName":"Sahel Selim"}
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

    else if (this.city== 'Marsa Matrouh')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Al Hamam"},
                              {"id":2,"itemName":"Al Alamin"},
                              {"id":3,"itemName":"Al Dabaa"},
                              {"id":4,"itemName":"Marsa Matrouh"},
                              {"id":5,"itemName":"Al Negila"},
                              {"id":6,"itemName":"Barany"},
                              {"id":7,"itemName":"Al Saloum"},
                              {"id":8,"itemName":"Siwa"}
                        
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Al Hamam"},
                              {"id":2,"itemName":"Al Alamin"},
                              {"id":3,"itemName":"Al Dabaa"},
                              {"id":4,"itemName":"Marsa Matrouh"},
                              {"id":5,"itemName":"Al Negila"},
                              {"id":6,"itemName":"Barany"},
                              {"id":7,"itemName":"Al Saloum"},
                              {"id":8,"itemName":"Siwa"}
                    
		];
		this.selectedItemsLocation = [
                              {"id":6,"itemName":"Barany"},
                              {"id":7,"itemName":"Al Saloum"},
                              {"id":8,"itemName":"Siwa"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":6,"itemName":"Barany"},
                              {"id":7,"itemName":"Al Saloum"},
                              {"id":8,"itemName":"Siwa"}
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

     else if (this.city== 'New Valley')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Al Kharga"},
                              {"id":2,"itemName":"Paris"},
                              {"id":3,"itemName":"Balat"},
                              {"id":4,"itemName":"Al Dakhla"},
                              {"id":5,"itemName":"Al Farafra"}
                              
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Al Kharga"},
                              {"id":2,"itemName":"Paris"},
                              {"id":3,"itemName":"Balat"},
                              {"id":4,"itemName":"Al Dakhla"},
                              {"id":5,"itemName":"Al Farafra"}
		];
		this.selectedItemsLocation = [
                              {"id":3,"itemName":"Balat"},
                              {"id":4,"itemName":"Al Dakhla"},
                              {"id":5,"itemName":"Al Farafra"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":3,"itemName":"Balat"},
                              {"id":4,"itemName":"Al Dakhla"},
                              {"id":5,"itemName":"Al Farafra"}
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

    else if (this.city== 'Red Sea')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Ras Ghareb"},
                              {"id":2,"itemName":"Hurghada"},
                              {"id":3,"itemName":"Al Quessir"},
                              {"id":4,"itemName":"Safaga"},
                              {"id":5,"itemName":"Marsa Alam"},
                              {"id":6,"itemName":"Shalatin"}
                              
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Ras Ghareb"},
                              {"id":2,"itemName":"Hurghada"},
                              {"id":3,"itemName":"Al Quessir"},
                              {"id":4,"itemName":"Safaga"},
                              {"id":5,"itemName":"Marsa Alam"},
                              {"id":6,"itemName":"Shalatin"}
		];
		this.selectedItemsLocation = [
                              {"id":4,"itemName":"Safaga"},
                              {"id":5,"itemName":"Marsa Alam"},
                              {"id":6,"itemName":"Shalatin"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":4,"itemName":"Safaga"},
                              {"id":5,"itemName":"Marsa Alam"},
                              {"id":6,"itemName":"Shalatin"}
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
    else if (this.city== 'Luxor')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Luxor"},
                              {"id":2,"itemName":"Al Bayadya"},
                              {"id":3,"itemName":"Al Zinya"},
                              {"id":4,"itemName":"Al Toud"},
                              {"id":5,"itemName":"Al Qarna"},
                              {"id":6,"itemName":"Armant"},
                              {"id":7,"itemName":"Esna"}
                              
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Luxor"},
                              {"id":2,"itemName":"Al Bayadya"},
                              {"id":3,"itemName":"Al Zinya"},
                              {"id":4,"itemName":"Al Toud"},
                              {"id":5,"itemName":"Al Qarna"},
                              {"id":6,"itemName":"Armant"},
                              {"id":7,"itemName":"Esna"}
		];
		this.selectedItemsLocation = [
                              {"id":5,"itemName":"Al Qarna"},
                              {"id":6,"itemName":"Armant"},
                              {"id":7,"itemName":"Esna"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":5,"itemName":"Al Qarna"},
                              {"id":6,"itemName":"Armant"},
                              {"id":7,"itemName":"Esna"}
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

    else if (this.city== 'Aswan')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Edfo"},
                              {"id":2,"itemName":"Kom Embo"},
                              {"id":3,"itemName":"Draw"},
                              {"id":4,"itemName":"Aswan"},
                              {"id":5,"itemName":"Markaz Nasser"},
                              {"id":6,"itemName":"Abu Simble"},
                              {"id":7,"itemName":"Klabsha"},
                              {"id":5,"itemName":"Al Radissiar"},
                              {"id":6,"itemName":"Al Bassilya"},
                              {"id":7,"itemName":"Al Sobaaya"}
                              
                            ];
		this.dropdownListDeliverTo = [
                             {"id":1,"itemName":"Edfo"},
                              {"id":2,"itemName":"Kom Embo"},
                              {"id":3,"itemName":"Draw"},
                              {"id":4,"itemName":"Aswan"},
                              {"id":5,"itemName":"Markaz Nasser"},
                              {"id":6,"itemName":"Abu Simble"},
                              {"id":7,"itemName":"Klabsha"},
                              {"id":5,"itemName":"Al Radissiar"},
                              {"id":6,"itemName":"Al Bassilya"},
                              {"id":7,"itemName":"Al Sobaaya"}
                              
		];
		this.selectedItemsLocation = [
                              {"id":6,"itemName":"Abu Simble"},
                              {"id":7,"itemName":"Klabsha"},
                              {"id":5,"itemName":"Al Radissiar"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":6,"itemName":"Abu Simble"},
                              {"id":7,"itemName":"Klabsha"},
                              {"id":5,"itemName":"Al Radissiar"}
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

    else if (this.city== 'North Sinai')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Beaar AlAbd"},
                              {"id":2,"itemName":"Nakhal"},
                              {"id":3,"itemName":"Al Hasna"},
                              {"id":4,"itemName":"Al Areesh"},
                              {"id":5,"itemName":"Al Sheikh Zowayed"},
                              {"id":6,"itemName":"Rafah"}
                    
                            ];
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Beaar AlAbd"},
                              {"id":2,"itemName":"Nakhal"},
                              {"id":3,"itemName":"Al Hasna"},
                              {"id":4,"itemName":"Al Areesh"},
                              {"id":5,"itemName":"Al Sheikh Zowayed"},
                              {"id":6,"itemName":"Rafah"}
                    
                              
		];
		this.selectedItemsLocation = [
                              {"id":3,"itemName":"Al Hasna"},
                              {"id":4,"itemName":"Al Areesh"},
                              {"id":5,"itemName":"Al Sheikh Zowayed"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":3,"itemName":"Al Hasna"},
                              {"id":4,"itemName":"Al Areesh"},
                              {"id":5,"itemName":"Al Sheikh Zowayed"}
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

else if (this.city== 'South Sinai')
	{
		this.dropdownListLocation = [
							  {"id":1,"itemName":"Abou Redis"},
                              {"id":2,"itemName":"Abou Zanima"},
                              {"id":3,"itemName":"Newibaa"},
                              {"id":4,"itemName":"Dahab"},
                              {"id":5,"itemName":"Ras Sedr"},
                              {"id":6,"itemName":"Sharm El Sheikh"},
                              {"id":7,"itemName":"Saint Catherine"},
                              {"id":8,"itemName":"Tour Sinai"},
                              {"id":9,"itemName":"Taba"},
                    
                            ];
		this.dropdownListDeliverTo = [
                             {"id":1,"itemName":"Abou Redis"},
                              {"id":2,"itemName":"Abou Zanima"},
                              {"id":3,"itemName":"Newibaa"},
                              {"id":4,"itemName":"Dahab"},
                              {"id":5,"itemName":"Ras Sedr"},
                              {"id":6,"itemName":"Sharm El Sheikh"},
                              {"id":7,"itemName":"Saint Catherine"},
                              {"id":8,"itemName":"Tour Sinai"},
                              {"id":9,"itemName":"Taba"},
                    
                              
		];
		this.selectedItemsLocation = [
                              {"id":4,"itemName":"Dahab"},
                              {"id":5,"itemName":"Ras Sedr"},
                              {"id":6,"itemName":"Sharm El Sheikh"}
                            ];
		
		
		this.selectedItemsDeliverTo = [
                              {"id":4,"itemName":"Dahab"},
                              {"id":5,"itemName":"Ras Sedr"},
                              {"id":6,"itemName":"Sharm El Sheikh"}
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

