import { Injectable } from '@angular/core';
import { Api } from '../api/api';

/*
  Generated class for the TransfertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TransfertProvider {
 receivedTransfers:Array<any>;
 madeTransfers:Array<any>;
  constructor(private api:Api) {}

  getCompleteMadeTransfers(){
    let seq= this.api.get('operationdiotnako/effectuees/').share();
    seq.subscribe((res)=>{ 
    },err=>{
      this.api.showRequestError(err);
    });
    return seq;
  }

  getIncompleteMadeTransfers(){
    let seq= this.api.get('operationdiotnako/encours/').share();
    seq.subscribe((res)=>{ 
    },err=>{
      this.api.showRequestError(err);
    });
    return seq;
  }


  getReceivedTransfers(){
    let seq= this.api.get('operationdiotnako/recues/').share();
    seq.subscribe((res)=>{
    },err=>{
      this.api.showRequestError(err);
    });
    return seq;
  }

  makeNewTransfert(transfert:any){
    let seq= this.api.post('operationdiotnako/request',transfert).share();
    seq.subscribe((res)=>{
    },err=>{
      this.api.showRequestError(err);
    });
    return seq;
  }

  completeTransfert(transfert:any,confirmationObject:any){
    let seq= this.api.put('operationdiotnako/'+transfert.id+'/confirmation',confirmationObject).share();
    seq.subscribe((res)=>{
    },err=>{
      this.api.showRequestError(err);     
    });
    return seq;
  }

  getTransfert(id:any){
    let seq= this.api.get('operationdiotnako/'+id).share();
    seq.subscribe((res)=>{
    },err=>{
      this.api.showRequestError(err);  
    });
    return seq;
  }

}
