import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {users} from '../../shared/users.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import {ValidateService} from '../../shared/validate.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';
import 'rxjs/add/operator/map'
import {orderService} from '../../shared/orders.service'
import { NG_VALIDATORS,Validator,
             Validators,AbstractControl,ValidatorFn } from '@angular/forms';
//import {EqualValidator} from '../../password.match.directive';
declare var require: any;
var settings = JSON.parse(JSON.stringify(require('../../settings.json')));

@Component({
	moduleId:module.id,
	selector: 'app-login',

	templateUrl:'./login.component.html',
	providers:[users , orderService]
})


export class login implements OnInit {
	pharmacy: Object;
	pharmaName:String;
	email:String;
	password:String;
  password2:String;
	logo:FileList;
	time:Number;
	telephone:String;
	mobile:String;
	location:location;
	city:String = " ";
  street:String;
  regions = [];
  locations = [];
  deliverTo =[];
	dropdownListLocation = [];
  selectedItemsLocation = [];
  dropdownSettingsLocation = {};
	dropdownListDeliverTo = [];
  selectedItemsDeliverTo = [];
  dropdownSettingsDeliverTo = {};
  singleLocation : String;
  forget: Boolean;
  type: String = "pharmacy";
  token: String;
  requestDeliverTo: [DeliverTo];
 

	constructor(
		private user: users,
		private router: Router,
		private flashMessage: FlashMessagesService, 
		private validateService: ValidateService,
    private orders: orderService
		 ){}

		 ngOnInit()
{
	this.regions = settings.public.cities;
		/*this.dropdownListLocation = [
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
    */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Abbassia","priority":0},
                              {"id":2,"itemName":"Abdeen","priority":0},
                              {"id":3,"itemName":"Al-Matariyyah","priority":0},
                              {"id":4,"itemName":"Ain Shams","priority":0},
                              {"id":5,"itemName":"Azbakeya","priority":0},
                              {"id":6,"itemName":"Bab al-Louq","priority":0},
                              {"id":7,"itemName":"Bulaq","priority":0},
                              {"id":8,"itemName":"Daher","priority":0},
                              {"id":9,"itemName":"Downtown","priority":0},
                              {"id":10,"itemName":"El-Manial","priority":0},
							                {"id":11,"itemName":"El-Marg","priority":0},
                              {"id":12,"itemName":"El-Quba","priority":0},
                              {"id":13,"itemName":"El-Sakakini","priority":0},
                              {"id":14,"itemName":"El-Tagamu El-Khames","priority":0},
                              {"id":15,"itemName":"Elsahel","priority":0},
                              {"id":16,"itemName":"Ezbet El-Nakhl","priority":0},
                              {"id":17,"itemName":"Faggala","priority":0},
                              {"id":18,"itemName":"Fustat","priority":0},
                              {"id":19,"itemName":"Garden City","priority":0},
                              {"id":20,"itemName":"Heliopolis","priority":0},
							                {"id":21,"itemName":"Maadi","priority":0},
                              {"id":22,"itemName":"Mokattam","priority":0},
                              {"id":23,"itemName":"Old cairo","priority":0},
                              {"id":24,"itemName":"Rhoda","priority":0},
                              {"id":25,"itemName":"Shubra","priority":0},
                              {"id":26,"itemName":"Shubra El-Kheima","priority":0},
                              {"id":27,"itemName":"Zamalek","priority":0}
                            ];
		/*this.selectedItemsLocation = [
                                {"id":27,"itemName":"Zamalek"},
                                {"id":22,"itemName":"Mokattam"},
                                {"id":21,"itemName":"Maadi"},
                                {"id":4,"itemName":"Ain Shams"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                                {"id":27,"itemName":"Zamalek"},
                                {"id":22,"itemName":"Mokattam"},
                                {"id":21,"itemName":"Maadi"},
                                {"id":4,"itemName":"Ain Shams"}
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
      */
        
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
  console.log(settings.public.gizaList); 
  switch (this.city) {
            case "Cairo": this.locations = settings.public.cairoList;this.deliverTo = settings.public.cairoList;break;
            case "Giza": this.locations = settings.public.gizaList; this.deliverTo =  settings.public.gizaList;break;
            case "Alexandria": this.locations = settings.public.alexandriaList;this.deliverTo= settings.public.alexandriaList; break;
            case "Suez": this.locations = settings.public.suezList; this.deliverTo = settings.public.suezList; break;
            case "Ismailia": this.locations = settings.public.ismailiaList;this.deliverTo = settings.public.ismailiaList; break;
            case "Port Said": this.locations = settings.public.portsaidList;this.deliverTo= settings.public.portsaidList; break;
            case "Damietta": this.locations = settings.public.damiettaList; this.deliverTo = settings.public.damiettaList; break;
            case "Sharqia": this.locations = settings.public.sharqiaList; this.deliverTo = settings.public.sharqiaList; break;
            case "Qaliubiya": this.locations = settings.public.qaliubiyaList; this. deliverTo = settings.public.qaliubiyaList; break;
            case "El-Beheira": this.locations = settings.public.ElBeheiraList; this.deliverTo = settings.public.ElBeheiraList;break;
            case "Kafr El-Shaeikh": this.locations = settings.public.KafrElShaeikhList;this.deliverTo = settings.public.KafrElShaeikhList; break;
            case "Gharbia": this.locations = settings.public.GharbiaList;this.deliverTo = settings.public.GharbiaList;break;
            case "Monofia": this.locations = settings.public.MonofiaList;this.deliverTo = settings.public.MonofiaList;break;
            case "Qena": this.locations = settings.public.QenaList;this.deliverTo = settings.public.QenaList;break;
            case "Menia": this.locations = settings.public.MeniaList;this.deliverTo = settings.public.MeniaList;break;
            case "Fayoum": this.locations = settings.public.FayoumList;this.deliverTo = settings.public.FayoumList;break;
            case "Beni Swaif": this.locations = settings.public.BeniSwaifList;this.deliverTo = settings.public.BeniSwaifList;break;
            case "Sohag": this.locations = settings.public.SohagList;this.deliverTo = settings.public.SohagList;break;
            case "Assiut": this.locations = settings.public.AssiutList;this.deliverTo = settings.public.Assiut;break;
            case "Marsa Matrouh": this.locations = settings.public.MarsaMatrouhList;this.deliverTo = settings.public.MarsaMatrouhList;break;
            case "New Valley": this.locations = settings.public.NewValleyList;this.deliverTo = settings.public.NewValleyList;break;
            case "Red Sea": this.locations = settings.public.RedSeaList;this.deliverTo = settings.public.RedSeaList;break;
            case "Luxor": this.locations = settings.public.LuxorList;this.deliverTo = settings.public.LuxorList;break;
            case "Aswan": this.locations = settings.public.AswanList;this.deliverTo = settings.public.AswanList;break;
            case "North Sinai": this.locations = settings.public.NorthSinaiList;this.deliverTo = settings.public.NorthSinaiList;break;
            case "South Sinai": this.locations = settings.public.SouthSinaiList;this.deliverTo = settings.public.SouthSinaiList;break;
        }
         /* for (var i=0; i<this.deliverTo.length; i++ )
            {
              this.deliverTo[i].name = this.dropdownListDeliverTo[i];
              console.log(this.dropdownListDeliverTo[i]);
            }
          */
    if (this.city == 'Cairo')
	{
		/* this.dropdownListLocation = [
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
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Abbassia","priority":0},
                              {"id":2,"itemName":"Abdeen","priority":0},
                              {"id":3,"itemName":"Al-Matariyyah","priority":0},
                              {"id":4,"itemName":"Ain Shams","priority":0},
                              {"id":5,"itemName":"Azbakeya","priority":0},
                              {"id":6,"itemName":"Bab al-Louq","priority":0},
                              {"id":7,"itemName":"Bulaq","priority":0},
                              {"id":8,"itemName":"Daher","priority":0},
                              {"id":9,"itemName":"Downtown","priority":0},
                              {"id":10,"itemName":"El-Manial","priority":0},
							                {"id":11,"itemName":"El-Marg","priority":0},
                              {"id":12,"itemName":"El-Quba","priority":0},
                              {"id":13,"itemName":"El-Sakakini","priority":0},
                              {"id":14,"itemName":"El-Tagamu El-Khames","priority":0},
                              {"id":15,"itemName":"Elsahel","priority":0},
                              {"id":16,"itemName":"Ezbet El-Nakhl","priority":0},
                              {"id":17,"itemName":"Faggala","priority":0},
                              {"id":18,"itemName":"Fustat","priority":0},
                              {"id":19,"itemName":"Garden City","priority":0},
                              {"id":20,"itemName":"Heliopolis","priority":0},
							                {"id":21,"itemName":"Maadi","priority":0},
                              {"id":22,"itemName":"Mokattam","priority":0},
                              {"id":23,"itemName":"Old cairo","priority":0},
                              {"id":24,"itemName":"Rhoda","priority":0},
                              {"id":25,"itemName":"Shubra","priority":0},
                              {"id":26,"itemName":"Shubra El-Kheima","priority":0},
                              {"id":27,"itemName":"Zamalek","priority":0}
                            ];
                            
                            
		/*this.selectedItemsLocation = [
                                {"id":27,"itemName":"Zamalek"},
                                {"id":22,"itemName":"Mokattam"},
                                {"id":21,"itemName":"Maadi"},
                                {"id":4,"itemName":"Ain Shams"}
                            ];
		*/
		
		this.selectedItemsDeliverTo = [
                                {"id":27,"itemName":"Zamalek","priority":0},
                                {"id":22,"itemName":"Mokattam","priority":0},
                                {"id":21,"itemName":"Maadi","priority":0},
                                {"id":4,"itemName":"Ain Shams","priority":0}
                            ];

    /*this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                };
    */ 
		
        
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
		/*this.dropdownListLocation = [
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
                            */
		this.dropdownListDeliverTo = [
							                {"id":1,"itemName":"Agouza","priority":0},
                              {"id":2,"itemName":"Dokki","priority":0},
                              {"id":3,"itemName":"Imbaba","priority":0},
                              {"id":4,"itemName":"Mohandessin","priority":0},
                              {"id":5,"itemName":"Alwaraq","priority":0},
                              {"id":6,"itemName":"Bolaq Aldakrour","priority":0},
                              {"id":7,"itemName":"Alkitkat","priority":0},
                              {"id":8,"itemName":"Alagoza","priority":0},
                              {"id":9,"itemName":"Bien Alsaryaat","priority":0},
                              {"id":10,"itemName":"Faisal","priority":0},
							                {"id":11,"itemName":"Alharam","priority":0},
                              {"id":12,"itemName":"Almonieb","priority":0},
                              {"id":13,"itemName":"Osiem","priority":0},
                              {"id":14,"itemName":"Kerdasa","priority":0},
                              {"id":15,"itemName":"Alhawamdia","priority":0},
                              {"id":16,"itemName":"Abo Alnomros","priority":0},
                              {"id":17,"itemName":"Alssaf","priority":0},
                              {"id":18,"itemName":"Albadrachine","priority":0},
                              {"id":19,"itemName":"Alayaat","priority":0},
                              {"id":20,"itemName":"Atfieh","priority":0},
							                {"id":21,"itemName":"Alshiekh Zaied","priority":0},
                              {"id":22,"itemName":"6th of October","priority":0}
							
		];
	/*	this.selectedItemsLocation = [
                                {"id":11,"itemName":"Alharam"},
                              	{"id":12,"itemName":"Almonieb"},
                              	{"id":13,"itemName":"Osiem"},
                            ];
		*/
		
		this.selectedItemsDeliverTo = [
                                {"id":11,"itemName":"Alharam","priority":0},
                              	{"id":12,"itemName":"Almonieb","priority":0},
                              	{"id":13,"itemName":"Osiem","priority":0},
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		*/
        
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
      /*  this.dropdownListLocation = [
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
                                {"id":34,"itemName":"El Raml Station"},
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
          */
        this.dropdownListDeliverTo = [
							                  {"id":1,"itemName":"AbuQir","priority":0},
                                {"id":2,"itemName":"Maamoura","priority":0},
                                {"id":3,"itemName":"Montaza","priority":0},
                                {"id":4,"itemName":"Mandara","priority":0},
                                {"id":5,"itemName":"Asafra","priority":0},
                                {"id":6,"itemName":"Miami","priority":0},
                                {"id":7,"itemName":"Sidi Bishr","priority":0},
                                {"id":8,"itemName":"Victoria","priority":0},
                                {"id":9,"itemName":"Laurent","priority":0},
                                {"id":10,"itemName":"Tharwat","priority":0},
                                {"id":11,"itemName":"San Stefano","priority":0},
                                {"id":12,"itemName":"Gianaclis","priority":0},
                                {"id":13,"itemName":"Schutz","priority":0},
                                {"id":14,"itemName":"Zezenia","priority":0},
                                {"id":15,"itemName":"Glim","priority":0},
                                {"id":16,"itemName":"Bacchus","priority":0},
                                {"id":17,"itemName":"Saba Pasha","priority":0},
                                {"id":18,"itemName":"Fleming","priority":0},
                                {"id":19,"itemName":"Stanley","priority":0},
                                {"id":20,"itemName":"Rushdy","priority":0},
                                {"id":21,"itemName":"Mustafa Kamel","priority":0},
                                {"id":22,"itemName":"Kafr  Abdu","priority":0},
                                {"id":23,"itemName":"Smouha","priority":0},
                                {"id":24,"itemName":"Nozha","priority":0},
                                {"id":25,"itemName":"Sidi Gaber","priority":0},
                                {"id":26,"itemName":"Cleopatra","priority":0},
                                {"id":27,"itemName":"Sporting","priority":0},
                                {"id":28,"itemName":"Al Ibrahimiyya","priority":0},
                                {"id":29,"itemName":"Camp Caesar","priority":0},
                                {"id":30,"itemName":"Al Shatby","priority":0},
                                {"id":31,"itemName":"Hadara","priority":0},
                                {"id":32,"itemName":"Azarita","priority":0},
                                {"id":33,"itemName":"Muharram Bek","priority":0},
                                {"id":34,"itemName":"El Raml Station","priority":0},
                                {"id":35,"itemName":"KoumAlDikka","priority":0},
                                {"id":36,"itemName":"Anfoushi","priority":0},
                                {"id":37,"itemName":"Al Manshiyya","priority":0},
                                {"id":38,"itemName":"Al Attarin","priority":0},
                                {"id":39,"itemName":"Karmouz","priority":0},
                                {"id":40,"itemName":"Ras El Tin","priority":0},
                                {"id":41,"itemName":"El Labban","priority":0},
                                {"id":42,"itemName":"Qabbary","priority":0},
                                {"id":43,"itemName":"Wardian","priority":0},
                                {"id":44,"itemName":"El Max","priority":0},
                                {"id":45,"itemName":"Dekheila","priority":0},
                                {"id":46,"itemName":"Agami","priority":0},
                                {"id":47,"itemName":"Al Hanuviel","priority":0},
                                {"id":48,"itemName":"Amreya","priority":0},
                                {"id":49,"itemName":"King Mariout","priority":0},
                                {"id":50,"itemName":"Burg al-Arab","priority":0}
							
		];
		/*this.selectedItemsLocation = [
                                {"id":36,"itemName":"Anfoushi"},
                                {"id":37,"itemName":"Al Manshiyya"},
                                {"id":38,"itemName":"Al Attarin"},
                                {"id":39,"itemName":"Karmouz"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                                {"id":36,"itemName":"Anfoushi","priority":0},
                                {"id":37,"itemName":"Al Manshiyya","priority":0},
                                {"id":38,"itemName":"Al Attarin","priority":0},
                                {"id":39,"itemName":"Karmouz","priority":0}
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		
        */
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
		/*this.dropdownListLocation = [
							  {"id":1,"itemName":"Arbaeen"},
                              {"id":2,"itemName":"Suez"},
                              {"id":3,"itemName":"Ganayen"},
                              {"id":4,"itemName":"Faisal"},
                              {"id":5,"itemName":"Attaka"}      
                            ];
      */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Arbaeen","priority":0},
                              {"id":2,"itemName":"Suez","priority":0},
                              {"id":3,"itemName":"Ganayen","priority":0},
                              {"id":4,"itemName":"Faisal","priority":0},
                              {"id":5,"itemName":"Attaka","priority":0} 
							  
    ];
                            /*
		this.selectedItemsLocation = [
                                {"id":1,"itemName":"Arbaeen"},
                              {"id":2,"itemName":"Suez"},
                              {"id":3,"itemName":"Ganayen"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":1,"itemName":"Arbaeen","priority":0},
                              {"id":2,"itemName":"Suez","priority":0},
                              {"id":3,"itemName":"Ganayen","priority":0}
                            ];

       /* this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		
        */
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
	/*	this.dropdownListLocation = [
							  {"id":1,"itemName":"Ismailia"},
                              {"id":2,"itemName":"Al Tal Al-Kabeer"},
                              {"id":3,"itemName":"Fayed"},
                              {"id":4,"itemName":"Al-Qantara"},
                              {"id":5,"itemName":"Al-Qantara Gharb"}, 
                              {"id":6,"itemName":"Abou Sweir"},
                              {"id":7,"itemName":"Al Qassassin"}       
                            ];
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Ismailia","priority":0},
                              {"id":2,"itemName":"Al Tal Al-Kabeer","priority":0},
                              {"id":3,"itemName":"Fayed","priority":0},
                              {"id":4,"itemName":"Al-Qantara","priority":0},
                              {"id":5,"itemName":"Al-Qantara Gharb","priority":0}, 
                              {"id":6,"itemName":"Abou Sweir","priority":0},
                              {"id":7,"itemName":"Al Qassassin","priority":0} 
							  
		];
		/*this.selectedItemsLocation = [
                              {"id":3,"itemName":"Fayed"},
                              {"id":4,"itemName":"Al-Qantara"},
                              {"id":5,"itemName":"Al-Qantara Gharb"}, 
                              {"id":6,"itemName":"Abou Sweir"},
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":3,"itemName":"Fayed","priority":0},
                              {"id":4,"itemName":"Al-Qantara","priority":0},
                              {"id":5,"itemName":"Al-Qantara Gharb","priority":0}, 
                              {"id":6,"itemName":"Abou Sweir","priority":0},
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		
        */
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
		/*this.dropdownListLocation = [
							                {"id":1,"itemName":"Al-Ganoub"},
                              {"id":2,"itemName":"Al-Zohour"},
                              {"id":3,"itemName":"Al-Dawahy"},
                              {"id":4,"itemName":"Al-Sharq"},
                              {"id":5,"itemName":"Al-Manakh"}, 
                              {"id":6,"itemName":"Al-Arab"}  
                            ];
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Al-Ganoub","priority":0},
                              {"id":2,"itemName":"Al-Zohour","priority":0},
                              {"id":3,"itemName":"Al-Dawahy","priority":0},
                              {"id":4,"itemName":"Al-Sharq","priority":0},
                              {"id":5,"itemName":"Al-Manakh","priority":0}, 
                              {"id":6,"itemName":"Al-Arab","priority":0}
							  
		];
		/*this.selectedItemsLocation = [
                              {"id":3,"itemName":"Al-Dawahy"},
                              {"id":4,"itemName":"Al-Sharq"},
                              {"id":5,"itemName":"Al-Manakh"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":3,"itemName":"Al-Dawahy","priority":0},
                              {"id":4,"itemName":"Al-Sharq","priority":0},
                              {"id":5,"itemName":"Al-Manakh","priority":0},
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		
        */
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
		/*this.dropdownListLocation = [
							  {"id":1,"itemName":"Farskor"},
                              {"id":2,"itemName":"Al-Zarqa"},
                              {"id":3,"itemName":"Kafr Saad"},
                              {"id":4,"itemName":"Kafr Batikh"}
                              
                            ];
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Farskor","priority":0},
                              {"id":2,"itemName":"Al-Zarqa","priority":0},
                              {"id":3,"itemName":"Kafr Saad","priority":0},
                              {"id":4,"itemName":"Kafr Batikh","priority":0}
							  
		];
		/*this.selectedItemsLocation = [
                              {"id":2,"itemName":"Al-Zarqa"},
                              {"id":3,"itemName":"Kafr Saad"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":2,"itemName":"Al-Zarqa","priority":0},
                              {"id":3,"itemName":"Kafr Saad","priority":0}
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		*/
        
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
		/*this.dropdownListLocation = [
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
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"El-Hossaynya","priority":0},
                              {"id":2,"itemName":"Faqous","priority":0},
                              {"id":3,"itemName":"Belbis","priority":0},
                              {"id":4,"itemName":"Menia El-Qamh","priority":0},
                              {"id":5,"itemName":"Abou Hamad","priority":0},
                              {"id":6,"itemName":"Awlad Saqr","priority":0},
                              {"id":7,"itemName":"Al-Asher men Ramadan","priority":0},
                              {"id":8,"itemName":"Al Salehya Al Gadida","priority":0},
                              {"id":9,"itemName":"Kafr Saqr","priority":0},
                              {"id":10,"itemName":"Abou kebir","priority":0},
                              {"id":11,"itemName":"Al Qenayat","priority":0},
                              {"id":12,"itemName":"Mashtoul el Souq","priority":0},
                              {"id":13,"itemName":"Derb Negm","priority":0},
                              {"id":14,"itemName":"Al-Ibrahimya","priority":0},
                              {"id":15,"itemName":"Hahya","priority":0},
                              {"id":16,"itemName":"Al-Qareen","priority":0},
                              {"id":17,"itemName":"San Al-Hagar","priority":0}
							  
		];
		/*this.selectedItemsLocation = [
                              {"id":1,"itemName":"El-Hossaynya"},
                              {"id":2,"itemName":"Faqous"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":1,"itemName":"El-Hossaynya","priority":0},
                              {"id":2,"itemName":"Faqous","priority":0}
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		
        */
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
		/*this.dropdownListLocation = [
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
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Banha","priority":0},
                              {"id":2,"itemName":"Qalyoub","priority":0},
                              {"id":3,"itemName":"Al Qanater El Khayria","priority":0},
                              {"id":4,"itemName":"Shoubra Al Kheima","priority":0},
                              {"id":5,"itemName":"Al Khanka","priority":0},
                              {"id":6,"itemName":"Kafr Al Sheikh","priority":0},
                              {"id":7,"itemName":"Shebin Al Qanater","priority":0},
                              {"id":8,"itemName":"Toukh","priority":0},
                              {"id":9,"itemName":"Al Obour","priority":0},
                              {"id":10,"itemName":"Qeha","priority":0},
                              {"id":11,"itemName":"Al Khosous","priority":0},
                              {"id":12,"itemName":"Kafr Sheikh Ebrahim","priority":0}
							  
		];
	/*	this.selectedItemsLocation = [
                              {"id":11,"itemName":"Al Khosous"},
                              {"id":12,"itemName":"Kafr Sheikh Ebrahim"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":11,"itemName":"Al Khosous","priority":0},
                              {"id":12,"itemName":"Kafr Sheikh Ebrahim","priority":0}
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		
        */
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
	/*	this.dropdownListLocation = [
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
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Rashid","priority":0},
                              {"id":2,"itemName":"Shabrakhit","priority":0},
                              {"id":3,"itemName":"Aytay Al Baroud","priority":0},
                              {"id":4,"itemName":"Abu Hummus","priority":0},
                              {"id":5,"itemName":"Housh Eissa","priority":0},
                              {"id":6,"itemName":"Kafr El Dawar","priority":0},
                              {"id":7,"itemName":"El Dalngat","priority":0},
                              {"id":8,"itemName":"Kom Hamada","priority":0},
                              {"id":9,"itemName":"Damanhour","priority":0},
                              {"id":10,"itemName":"El Rahmanya","priority":0},
                              {"id":11,"itemName":"El NubaryaEl Gadida","priority":0},
                              {"id":12,"itemName":"Wady Natroun","priority":0},
                              {"id":12,"itemName":"Badr","priority":0}
							  
		];
		/*this.selectedItemsLocation = [
                               {"id":12,"itemName":"Wady Natroun"},
                               {"id":12,"itemName":"Badr"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                               {"id":12,"itemName":"Wady Natroun","priority":0},
                               {"id":12,"itemName":"Badr","priority":0}
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		
        */
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
		/*this.dropdownListLocation = [
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
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Desouq","priority":0},
                              {"id":2,"itemName":"Fowah","priority":0},
                              {"id":3,"itemName":"Mutubas","priority":0},
                              {"id":4,"itemName":"Qalin","priority":0},
                              {"id":5,"itemName":"Sidi Salem","priority":0},
                              {"id":6,"itemName":"Al Reyad","priority":0},
                              {"id":7,"itemName":"Beila","priority":0},
                              {"id":8,"itemName":"Al Hamoul","priority":0},
                              {"id":9,"itemName":"Al Brolos","priority":0}
                        
							  
		];
		/*this.selectedItemsLocation = [
                              {"id":7,"itemName":"Beila"},
                              {"id":8,"itemName":"Al Hamoul"},
                              {"id":9,"itemName":"Al Brolos"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":7,"itemName":"Beila","priority":0},
                              {"id":8,"itemName":"Al Hamoul","priority":0},
                              {"id":9,"itemName":"Al Brolos","priority":0}
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		
        */
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
		/*this.dropdownListLocation = [
							  {"id":1,"itemName":"Kafr El Zayat"},
                              {"id":2,"itemName":"Al Santa"},
                              {"id":3,"itemName":"Al Mahala Al Kobra"},
                              {"id":4,"itemName":"Basyoun"},
                              {"id":5,"itemName":"Zefta"},
                              {"id":6,"itemName":"Samanoud"},
                              {"id":7,"itemName":"Tanta"},
                              {"id":8,"itemName":"Qotor"}
                              
                        
                            ];
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Kafr El Zayat","priority":0},
                              {"id":2,"itemName":"Al Santa","priority":0},
                              {"id":3,"itemName":"Al Mahala Al Kobra","priority":0},
                              {"id":4,"itemName":"Basyoun","priority":0},
                              {"id":5,"itemName":"Zefta","priority":0},
                              {"id":6,"itemName":"Samanoud","priority":0},
                              {"id":7,"itemName":"Tanta","priority":0},
                              {"id":8,"itemName":"Qotor","priority":0}
                              
                        
							  
		];
		/*this.selectedItemsLocation = [
                              {"id":6,"itemName":"Samanoud"},
                              {"id":7,"itemName":"Tanta"},
                              {"id":8,"itemName":"Qotor"}
                              
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":6,"itemName":"Samanoud"},
                              {"id":7,"itemName":"Tanta"},
                              {"id":8,"itemName":"Qotor"}
                              
                            ];

     /*   this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		
       */ 
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
		/*this.dropdownListLocation = [
							  {"id":1,"itemName":"Shebin El Kom"},
                              {"id":2,"itemName":"Menouf"},
                              {"id":3,"itemName":"Ashmoun"},
                              {"id":4,"itemName":"Qouisna"},
                              {"id":5,"itemName":"Tela"}
                              
                            ];
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Shebin El Kom","priority":0},
                              {"id":2,"itemName":"Menouf","priority":0},
                              {"id":3,"itemName":"Ashmoun","priority":0},
                              {"id":4,"itemName":"Qouisna","priority":0},
                              {"id":5,"itemName":"Tela","priority":0}
							  
		];
		/*this.selectedItemsLocation = [
                              {"id":3,"itemName":"Ashmoun"},
                              {"id":4,"itemName":"Qouisna"},
                              {"id":5,"itemName":"Tela"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":3,"itemName":"Ashmoun","priority":0},
                              {"id":4,"itemName":"Qouisna","priority":0},
                              {"id":5,"itemName":"Tela","priority":0}
                              
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		
        */
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
		/*this.dropdownListLocation = [
							  {"id":1,"itemName":"Abou Tesht"},
                              {"id":2,"itemName":"Farshout"},
                              {"id":3,"itemName":"Nagaa Hamady"},
                              {"id":4,"itemName":"Al Waqf"},
                              {"id":5,"itemName":"Deshna"},
                              {"id":6,"itemName":"Qeft"},
                              {"id":7,"itemName":"Qous"},
                              {"id":8,"itemName":"Neqada"}
                              
                            ];
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Abou Tesht","priority":0},
                              {"id":2,"itemName":"Farshout","priority":0},
                              {"id":3,"itemName":"Nagaa Hamady","priority":0},
                              {"id":4,"itemName":"Al Waqf","priority":0},
                              {"id":5,"itemName":"Deshna","priority":0},
                              {"id":6,"itemName":"Qeft","priority":0},
                              {"id":7,"itemName":"Qous","priority":0},
                              {"id":8,"itemName":"Neqada","priority":0}
                             
		];
	/*	this.selectedItemsLocation = [
                              {"id":6,"itemName":"Qeft"},
                              {"id":7,"itemName":"Qous"},
                              {"id":8,"itemName":"Neqada"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":6,"itemName":"Qeft","priority":0},
                              {"id":7,"itemName":"Qous","priority":0},
                              {"id":8,"itemName":"Neqada","priority":0}
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		
        */
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
		/*this.dropdownListLocation = [
							  {"id":1,"itemName":"Maghagha"},
                              {"id":2,"itemName":"Bany Mazar"},
                              {"id":3,"itemName":"Matay"},
                              {"id":4,"itemName":"Samalout"},
                              {"id":5,"itemName":"Abou Qerqas"},
                              {"id":6,"itemName":"Malawy"},
                              {"id":7,"itemName":"Deir Mowas"},
                              {"id":8,"itemName":"Al Adwa"}
                              
                            ];
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Maghagha","priority":0},
                              {"id":2,"itemName":"Bany Mazar","priority":0},
                              {"id":3,"itemName":"Matay","priority":0},
                              {"id":4,"itemName":"Samalout","priority":0},
                              {"id":5,"itemName":"Abou Qerqas","priority":0},
                              {"id":6,"itemName":"Malawy","priority":0},
                              {"id":7,"itemName":"Deir Mowas","priority":0},
                              {"id":8,"itemName":"Al Adwa","priority":0}
                             
		];
		/*this.selectedItemsLocation = [
                              {"id":6,"itemName":"Malawy"},
                              {"id":7,"itemName":"Deir Mowas"},
                              {"id":8,"itemName":"Al Adwa"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":6,"itemName":"Malawy","priority":0},
                              {"id":7,"itemName":"Deir Mowas","priority":0},
                              {"id":8,"itemName":"Al Adwa","priority":0}
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		*/
        
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
		/*this.dropdownListLocation = [
							  {"id":1,"itemName":"Ebshoway"},
                              {"id":2,"itemName":"Atsa"},
                              {"id":3,"itemName":"Al Fayoum"},
                              {"id":4,"itemName":"Senouras"},
                              {"id":5,"itemName":"Tameya"},
                              {"id":6,"itemName":"Youssef El Sadiq"}
                        
                            ];
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Ebshoway","priority":0},
                              {"id":2,"itemName":"Atsa","priority":0},
                              {"id":3,"itemName":"Al Fayoum","priority":0},
                              {"id":4,"itemName":"Senouras","priority":0},
                              {"id":5,"itemName":"Tameya","priority":0},
                              {"id":6,"itemName":"Youssef El Sadiq","priority":0}
                             
		];
		/*this.selectedItemsLocation = [
                              {"id":4,"itemName":"Senouras"},
                              {"id":5,"itemName":"Tameya"},
                              {"id":6,"itemName":"Youssef El Sadiq"}
                             
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":4,"itemName":"Senouras","priority":0},
                              {"id":5,"itemName":"Tameya","priority":0},
                              {"id":6,"itemName":"Youssef El Sadiq","priority":0}
                             
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		
        */
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
		/*this.dropdownListLocation = [
							  {"id":1,"itemName":"Al Wasty"},
                              {"id":2,"itemName":"Beni Swaif"},
                              {"id":3,"itemName":"Nasser"},
                              {"id":4,"itemName":"Ehnasya"},
                              {"id":5,"itemName":"Beba"},
                              {"id":6,"itemName":"Samasta"},
                              {"id":7,"itemName":"Al Fashn"},
                              {"id":8,"itemName":"Beni Swaif Al Gadida"}
                        
                            ];
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Al Wasty","priority":0},
                              {"id":2,"itemName":"Beni Swaif","priority":0},
                              {"id":3,"itemName":"Nasser","priority":0},
                              {"id":4,"itemName":"Ehnasya","priority":0},
                              {"id":5,"itemName":"Beba","priority":0},
                              {"id":6,"itemName":"Samasta","priority":0},
                              {"id":7,"itemName":"Al Fashn","priority":0},
                              {"id":8,"itemName":"Beni Swaif Al Gadida","priority":0}
                             
		];
		/*this.selectedItemsLocation = [
                              {"id":6,"itemName":"Samasta"},
                              {"id":7,"itemName":"Al Fashn"},
                              {"id":8,"itemName":"Beni Swaif Al Gadida"}
                             
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":6,"itemName":"Samasta","priority":0},
                              {"id":7,"itemName":"Al Fashn","priority":0},
                              {"id":8,"itemName":"Beni Swaif Al Gadida","priority":0}
                             
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		
        */
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
		/*this.dropdownListLocation = [
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
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Akhmim","priority":0},
                              {"id":2,"itemName":"Al Balina","priority":0},
                              {"id":3,"itemName":"Gerga","priority":0},
                              {"id":4,"itemName":"Dar El Salam","priority":0},
                              {"id":5,"itemName":"Guhayna","priority":0},
                              {"id":6,"itemName":"Sohag","priority":0},
                              {"id":7,"itemName":"Tama","priority":0},
                              {"id":8,"itemName":"Tahta","priority":0},
                              {"id":9,"itemName":"Al Maragha","priority":0},
                              {"id":10,"itemName":"Al Monshah","priority":0}
                    
		];
		/*this.selectedItemsLocation = [
                              {"id":8,"itemName":"Tahta"},
                              {"id":9,"itemName":"Al Maragha"},
                              {"id":10,"itemName":"Al Monshah"}
                             
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":8,"itemName":"Tahta","priority":0},
                              {"id":9,"itemName":"Al Maragha","priority":0},
                              {"id":10,"itemName":"Al Monshah","priority":0}
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		
        */
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
		/*this.dropdownListLocation = [
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
                            */
		this.dropdownListDeliverTo = [
                               {"id":1,"itemName":"Dayrout","priority":0},
                              {"id":2,"itemName":"Al Qoussya","priority":0},
                              {"id":3,"itemName":"Abnoub","priority":0},
                              {"id":4,"itemName":"Manfalout","priority":0},
                              {"id":5,"itemName":"Assiut","priority":0},
                              {"id":6,"itemName":"Al Fath","priority":0},
                              {"id":7,"itemName":"Abou Ti","priority":0},
                              {"id":8,"itemName":"Al Ghanayem","priority":0},
                              {"id":9,"itemName":"Sahel Selim","priority":0},
                              {"id":10,"itemName":"Al Badary","priority":0},
                              {"id":11,"itemName":"Al Sadfa","priority":0}
                        
                    
		];
		/*this.selectedItemsLocation = [
                              {"id":7,"itemName":"Abou Ti"},
                              {"id":8,"itemName":"Al Ghanayem"},
                              {"id":9,"itemName":"Sahel Selim"}
                             
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":7,"itemName":"Abou Ti","priority":0},
                              {"id":8,"itemName":"Al Ghanayem","priority":0},
                              {"id":9,"itemName":"Sahel Selim","priority":0}
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		*/
        
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
		/*this.dropdownListLocation = [
							  {"id":1,"itemName":"Al Hamam"},
                              {"id":2,"itemName":"Al Alamin"},
                              {"id":3,"itemName":"Al Dabaa"},
                              {"id":4,"itemName":"Marsa Matrouh"},
                              {"id":5,"itemName":"Al Negila"},
                              {"id":6,"itemName":"Barany"},
                              {"id":7,"itemName":"Al Saloum"},
                              {"id":8,"itemName":"Siwa"}
                        
                            ];
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Al Hamam","priority":0},
                              {"id":2,"itemName":"Al Alamin","priority":0},
                              {"id":3,"itemName":"Al Dabaa","priority":0},
                              {"id":4,"itemName":"Marsa Matrouh","priority":0},
                              {"id":5,"itemName":"Al Negila","priority":0},
                              {"id":6,"itemName":"Barany","priority":0},
                              {"id":7,"itemName":"Al Saloum","priority":0},
                              {"id":8,"itemName":"Siwa","priority":0}
                    
		];
		/*this.selectedItemsLocation = [
                              {"id":6,"itemName":"Barany"},
                              {"id":7,"itemName":"Al Saloum"},
                              {"id":8,"itemName":"Siwa"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":6,"itemName":"Barany","priority":0},
                              {"id":7,"itemName":"Al Saloum","priority":0},
                              {"id":8,"itemName":"Siwa","priority":0}
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		*/
        
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
		/*this.dropdownListLocation = [
							  {"id":1,"itemName":"Al Kharga"},
                              {"id":2,"itemName":"Paris"},
                              {"id":3,"itemName":"Balat"},
                              {"id":4,"itemName":"Al Dakhla"},
                              {"id":5,"itemName":"Al Farafra"}
                              
                            ];
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Al Kharga","priority":0},
                              {"id":2,"itemName":"Paris","priority":0},
                              {"id":3,"itemName":"Balat","priority":0},
                              {"id":4,"itemName":"Al Dakhla","priority":0},
                              {"id":5,"itemName":"Al Farafra","priority":0}
		];
		/*this.selectedItemsLocation = [
                              {"id":3,"itemName":"Balat"},
                              {"id":4,"itemName":"Al Dakhla"},
                              {"id":5,"itemName":"Al Farafra"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":3,"itemName":"Balat","priority":0},
                              {"id":4,"itemName":"Al Dakhla","priority":0},
                              {"id":5,"itemName":"Al Farafra","priority":0}
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		*/
        
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
		/*this.dropdownListLocation = [
							  {"id":1,"itemName":"Ras Ghareb"},
                              {"id":2,"itemName":"Hurghada"},
                              {"id":3,"itemName":"Al Quessir"},
                              {"id":4,"itemName":"Safaga"},
                              {"id":5,"itemName":"Marsa Alam"},
                              {"id":6,"itemName":"Shalatin"}
                              
                            ];
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Ras Ghareb","priority":0},
                              {"id":2,"itemName":"Hurghada","priority":0},
                              {"id":3,"itemName":"Al Quessir","priority":0},
                              {"id":4,"itemName":"Safaga","priority":0},
                              {"id":5,"itemName":"Marsa Alam","priority":0},
                              {"id":6,"itemName":"Shalatin","priority":0}
		];
		/*this.selectedItemsLocation = [
                              {"id":4,"itemName":"Safaga"},
                              {"id":5,"itemName":"Marsa Alam"},
                              {"id":6,"itemName":"Shalatin"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":4,"itemName":"Safaga","priority":0},
                              {"id":5,"itemName":"Marsa Alam","priority":0},
                              {"id":6,"itemName":"Shalatin","priority":0}
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		*/
        
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
		/*this.dropdownListLocation = [
							                {"id":1,"itemName":"Luxor"},
                              {"id":2,"itemName":"Al Bayadya"},
                              {"id":3,"itemName":"Al Zinya"},
                              {"id":4,"itemName":"Al Toud"},
                              {"id":5,"itemName":"Al Qarna"},
                              {"id":6,"itemName":"Armant"},
                              {"id":7,"itemName":"Esna"}
                              
                            ];
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Luxor","priority":0},
                              {"id":2,"itemName":"Al Bayadya","priority":0},
                              {"id":3,"itemName":"Al Zinya","priority":0},
                              {"id":4,"itemName":"Al Toud","priority":0},
                              {"id":5,"itemName":"Al Qarna","priority":0},
                              {"id":6,"itemName":"Armant","priority":0},
                              {"id":7,"itemName":"Esna","priority":0}
		];
		/*this.selectedItemsLocation = [
                              {"id":5,"itemName":"Al Qarna"},
                              {"id":6,"itemName":"Armant"},
                              {"id":7,"itemName":"Esna"}
                            ];
		*/
		
		this.selectedItemsDeliverTo = [
                              {"id":5,"itemName":"Al Qarna","priority":0},
                              {"id":6,"itemName":"Armant","priority":0},
                              {"id":7,"itemName":"Esna","priority":0}
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		*/
        
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
		/*this.dropdownListLocation = [
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
                            */
		this.dropdownListDeliverTo = [
                             {"id":1,"itemName":"Edfo","priority":0},
                              {"id":2,"itemName":"Kom Embo","priority":0},
                              {"id":3,"itemName":"Draw","priority":0},
                              {"id":4,"itemName":"Aswan","priority":0},
                              {"id":5,"itemName":"Markaz Nasser","priority":0},
                              {"id":6,"itemName":"Abu Simble","priority":0},
                              {"id":7,"itemName":"Klabsha","priority":0},
                              {"id":5,"itemName":"Al Radissiar","priority":0},
                              {"id":6,"itemName":"Al Bassilya","priority":0},
                              {"id":7,"itemName":"Al Sobaaya","priority":0}
                              
		];
		/*this.selectedItemsLocation = [
                              {"id":6,"itemName":"Abu Simble"},
                              {"id":7,"itemName":"Klabsha"},
                              {"id":5,"itemName":"Al Radissiar"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":6,"itemName":"Abu Simble","priority":0},
                              {"id":7,"itemName":"Klabsha","priority":0},
                              {"id":5,"itemName":"Al Radissiar","priority":0}
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		*/
        
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
		/*this.dropdownListLocation = [
							  {"id":1,"itemName":"Beaar AlAbd"},
                              {"id":2,"itemName":"Nakhal"},
                              {"id":3,"itemName":"Al Hasna"},
                              {"id":4,"itemName":"Al Areesh"},
                              {"id":5,"itemName":"Al Sheikh Zowayed"},
                              {"id":6,"itemName":"Rafah"}
                    
                            ];
                            */
		this.dropdownListDeliverTo = [
                              {"id":1,"itemName":"Beaar AlAbd","priority":0},
                              {"id":2,"itemName":"Nakhal","priority":0},
                              {"id":3,"itemName":"Al Hasna","priority":0},
                              {"id":4,"itemName":"Al Areesh","priority":0},
                              {"id":5,"itemName":"Al Sheikh Zowayed","priority":0},
                              {"id":6,"itemName":"Rafah","priority":0}
                    
                              
		];
		/*this.selectedItemsLocation = [
                              {"id":3,"itemName":"Al Hasna"},
                              {"id":4,"itemName":"Al Areesh"},
                              {"id":5,"itemName":"Al Sheikh Zowayed"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":3,"itemName":"Al Hasna","priority":0},
                              {"id":4,"itemName":"Al Areesh","priority":0},
                              {"id":5,"itemName":"Al Sheikh Zowayed","priority":0}
                            ];

        /*this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		*/
        
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
		/*this.dropdownListLocation = [
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
                            */
		this.dropdownListDeliverTo = [
                             {"id":1,"itemName":"Abou Redis","priority":0},
                              {"id":2,"itemName":"Abou Zanima","priority":0},
                              {"id":3,"itemName":"Newibaa","priority":0},
                              {"id":4,"itemName":"Dahab","priority":0},
                              {"id":5,"itemName":"Ras Sedr","priority":0},
                              {"id":6,"itemName":"Sharm El Sheikh","priority":0},
                              {"id":7,"itemName":"Saint Catherine","priority":0},
                              {"id":8,"itemName":"Tour Sinai","priority":0},
                              {"id":9,"itemName":"Taba","priority":0},
                    
                              
		];
		/*this.selectedItemsLocation = [
                              {"id":4,"itemName":"Dahab"},
                              {"id":5,"itemName":"Ras Sedr"},
                              {"id":6,"itemName":"Sharm El Sheikh"}
                            ];
		
		*/
		this.selectedItemsDeliverTo = [
                              {"id":4,"itemName":"Dahab","priority":0},
                              {"id":5,"itemName":"Ras Sedr","priority":0},
                              {"id":6,"itemName":"Sharm El Sheikh","priority":0}
                            ];

      /*  this.dropdownSettingsLocation = { 
                                  singleSelection: false, 
                                  text:"Select Locations",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true,
                                  classes:"myclass custom-class"
                                }; 
		
        */
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
    

 	/*onItemSelectLocation(item:any){
       // console.log(item);
      //  console.log(this.selectedItemsLocation);
    }
    OnItemDeSelectLocation(item:any){
     //   console.log(item);
      //  console.log(this.selectedItemsLocation);
    }
    onSelectAllLocation(items: any){
     //   console.log(items);
    }
    onDeSelectAllLocation(items: any){
    //    console.log(items);
    }
*/

	onItemSelectDeliverTo(item:any){
    //    console.log(item);
    //    console.log(this.selectedItemsDeliverTo);
    }
    onItemDeSelectDeliverTo(item:any){
    //    console.log(item);
   //     console.log(this.selectedItemsDeliverTo);
    }
    onSelectAllDeliverTo(items: any){
     //   console.log(items);
    }
    onDeSelectAllDeliverTo(items: any){
    //    console.log(items);
    }
  
fileChange(event) 
	{
    	this.logo = event.target.files;
  	}


	onLogin(userData){
		//17-06-27 03:07
		let date = new Date()

		let h = date.getHours()
		let m  = date.getMinutes()
		var minutes :string=''
		var hours :string='' 
		if(m<10){
			minutes = '0'+''+m+''
		}else{
			minutes = ''+m+''
		}

		if(h<10){
			hours = '0'+''+h+''
		}else{
			hours = ''+h+''
		}
		let date_format = hours+':'+minutes
		let token = btoa(date_format+date_format)


		 this.user.getUser(userData.email, userData.password , token).subscribe(data => {
    				if(data){
              
                //    this.orders.sendMessage(data)
/*                    this.socket = io(this.socketChannel);
                    this.socket.emit('join', {email: data});*/
    					//console.log(data)
              document.cookie = "pharmacy="+data.email+"";
              document.cookie = "pharmacyLocation="+data.deliverTo+"";
/*              console.log(data)
              console.log(data.id);
              console.log(data.username);
              console.log(data.email);*/
              this.user.storeUserData(data.id, data.email, data.username);
    					return this.router.navigate(['orders'])    				
    				}else{
    					return false
    				}

      		});


	}

//onRegister(data:any){

	onRegister(data:any){
		//console.log(data);
  if (!this.validateService.validatePassword(data.password)
      || !this.validateService.validatePassword(data.password2)) {
      console.log("please insert a valid Password with at least 8 characters and not more than 15 characters");
      window.scrollTo(0,0);
    }

    else if (!(data.password == data.password2)) {
      console.log('Passwords do not match!');
      window.scrollTo(0,0);
    }

  /*var formData: FormData = new FormData();
  formData.append('name', data.pharma_name);
  console.log(data.pharma_name);
  formData.append('email', data.email);
  console.log(data.email);
  formData.append('telephone', data.telephone);
  console.log(data.telephone);
  formData.append('mobile', data.mobile);
  console.log(data.mobile);
  formData.append('password',data.password.toString);
  formData.append('time',  data.time);
  console.log(data.time);
  formData.append('city', data.city);
  console.log(data.address.city);
  formData.append('street', data.street);
  console.log(data.address.street);
  
  console.log (this.selectedItemsDeliverTo.length);
  var i =0;
  for ( i; i< this.selectedItemsDeliverTo.length; i++)
  {
    formData.append('deliverTo',this.selectedItemsDeliverTo[i].itemName  + ':null' );
    console.log(this.selectedItemsDeliverTo[i].itemName  + ':null');
  }
  console.log(this.selectedItemsLocation.length);
  var j =0;
  for ( j; j< this.selectedItemsLocation.length; j++)
  { 
    console.log(this.selectedItemsLocation[j].itemName  + ':null');
    formData.append('location',this.selectedItemsLocation[j].itemName + ':null');
  }
  
 
    if(data.logo)
      if (data.logo.length > 0)
      {
        let file: File = data.logo[0];
        formData.append('uploadFile', file, file.name);
      }*/

	/*  if (!this.validateService.validateIllegal(data.pharmaName)
      || !this.validateService.validateIllegal(data.street)
	  || !this.validateService.validateIllegal(data.city))
	   	{
			this.flashMessage.show("please check your inputs in the name cell, street cell or city cell , they all have to be legal characters  ", { cssClass: 'alert-warning', timeout: 5000 });
			
      
    	}
	 else if (!this.validateService.validatePassword(data.password))
		{
			this.flashMessage.show("please insert a valid Password with at least 8 characters and not more than 15 characters", { cssClass: 'alert-warning', timeout: 5000 });
			
    
    	}
	else if (!this.validateService.validateEmail(data.email))
	 	{
			this.flashMessage.show('Please use a valid email', { cssClass: 'alert-danger', timeout: 3000 });
			
		
    	}
	
	else if (!this.validateService.validateTelephone(data.telephone)) 
		{
			this.flashMessage.show('Please use a valid Telephone number', { cssClass: 'alert-danger', timeout: 3000 });
			
      
    	}
	
	else if (!this.validateService.validateMobile(data.mobile)) 
		{
			this.flashMessage.show('Please use a valid mobile number', { cssClass: 'alert-danger', timeout: 3000 });
			
      
    	}
*/
var location_string = JSON.stringify(this.selectedItemsLocation)
var locationObj = JSON.parse(location_string)

var requestLocations = []
locationObj.forEach(function(item){
  requestLocations.push(item.itemName)
  

})
var deliverTo_string = JSON.stringify(this.selectedItemsDeliverTo)
var deliverToObj = JSON.parse(deliverTo_string)


deliverToObj.forEach(function(item){
  this.requestDeliverTo.name.push(item.itemName);
  this.requestDeliverTo.priority.push(item.priority);
  
})


var pharmaLoaction = JSON.stringify(requestLocations)
var deliver = JSON.stringify(this.requestDeliverTo)


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

    var requestBody = {
      name: data.pharma_name,
      email:data.email,
      password: data.password,
      city:data.address.city,
      location: data.address.singleLocation,
      street: data.address.street,
      deliverTo: deliver,
      deliverTime: data.time,
      telephone: data.telephone,
      mobile: data.mobile
    }

	this.user.register(JSON.stringify(requestBody),token).subscribe (res =>{
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
	createNewAccount()
	{
		this.router.navigate(['/pharmacysignup']);
  }
  forgetPass()	
  {
    this.router.navigate(['/forgotPass']);
  }
  forgotPassword()
  {
    const body =
    {
      type:"pharmacy",
      email:this.email,
      token: this.token
  
    }
    this.user.storeUserDataEmail(body.email);
   
    this.user.forgetPassword(body).subscribe(resp =>
      {
        
        if(resp == 200){
          console.log("user found");
          console.log(body.email);
         /* this.flashMessage.show(resp.message , {
            cssClass : 'alert-success',
            timeout : 5000
          });*/
        }
        else {
          console.log("user not found");
         /* this.flashMessage.show(resp.message ,{
            cssClass : 'alert-danger',
            timeout : 5000
          });*/
        }
        return this.router.navigate(['login']);
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
interface DeliverTo
{
  name: String;
  priority: Number;
}