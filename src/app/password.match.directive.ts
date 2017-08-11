import { Directive, forwardRef, Attribute } from '@angular/core';
import { NG_VALIDATORS,Validator,
             Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import {Input} from '@angular/core';
 
    @Directive({
        selector: '[validateEqualTo][formControlName],[validateEqualTo][formControl],[validateEqual][ngModel]',
        providers: [
                    { provide: NG_VALIDATORS, 
                      useExisting: forwardRef(() => EqualTextValidator),
                      multi: true }
                   ]
    })
    export class EqualTextValidator implements Validator {
        @Input() validateEqualTo : string;
        validate(c: AbstractControl) {
             let passwordVal = c.value; 
             let repeatEle = c.root.get(this.validateEqualTo);
             return this.checkEquality(passwordVal,repeatEle);
            }
        checkEquality(passwordVal: string, repeatEle: any){
            if ( repeatEle && passwordVal != repeatEle.value) return  {
                validateEqual:true
            }
            return null;
        } 
    }