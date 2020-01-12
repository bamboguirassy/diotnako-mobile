import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the CompteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CompteProvider {

  constructor(public api: Api) {
  }

  findAccountByIdentifiant(identifiant:any){
    this.api.showLoader('');
    let seq= this.api.get('').share();
    seq.subscribe((res)=>{
      this.api.hideLoader();
    },err=>{
      this.api.showRequestError(err);
      this.api.hideLoader();
    });
    return seq;
  }

  activateAccount(account:any){
    this.api.showLoader('Activation en cours...');
    let seq= this.api.put('',account).share();
    seq.subscribe((res)=>{
      this.api.hideLoader();
    },err=>{
      this.api.showRequestError(err);
      this.api.hideLoader();
    });
    return seq;
  }

  deactivateAccount(account){
    this.api.showLoader('Désactivation en cours...');
    let seq= this.api.put('',account).share();
    seq.subscribe((res)=>{
      this.api.hideLoader();
    },err=>{
      this.api.showRequestError(err);
      this.api.hideLoader();
    });
    return seq;
  }

  changeAccountContacts(account){
    this.api.showLoader('');
    let seq= this.api.put('',account).share();
    seq.subscribe((res)=>{
      this.api.hideLoader();
    },err=>{
      this.api.showRequestError(err);
      this.api.hideLoader();
    });
    return seq;
  }

}
