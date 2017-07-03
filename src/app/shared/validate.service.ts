import {Injectable} from '@angular/core'

@Injectable()
export class ValidateService {
  constructor() { }

  validateEmail(email) 
  {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  validateIllegal(text) 
  {
    const re = /^[a-z\d\-_\s]+$/i;
    return re.test(text);
  }

  validatePassword(password) 
  {
    const pass = /^([a-zA-Z0-9@*#]{8,15})$/;
    return pass.test(password);
  }

  validateTelephone(telephone) 
  {
    const p = /^\(?([0]{1})\)?[-.]?([0-9]{5})[-.]?([0-9]{4})$/;
    return p.test(telephone);
  }

  validateMobile(mobile) {
    const p = /^\(?([0-9]{3})\)?[-.]?([0-9]{4})[-.]?([0-9]{4})$/;
    return p.test(mobile);
  }

  validateNumber(number) 
  {
    const re = /^\d+(\.\d{1,2})?$/;
    return re.test(number);
  }

  validatePositive(Number) {
    if (Number > 0) {
      return true;
    }
    else {
      return false;
    }
  }

}