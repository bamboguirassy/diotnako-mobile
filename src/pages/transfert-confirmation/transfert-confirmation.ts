import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Api } from '../../providers';
import { TransfertProvider } from '../../providers/transfert/transfert';

/**
 * Generated class for the TransfertConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfert-confirmation',
  templateUrl: 'transfert-confirmation.html',
})
export class TransfertConfirmationPage {
  confirmation: { codeConfirmation: number } = { codeConfirmation: null };
  transfert:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private api:Api,private transfertProvider:TransfertProvider,private app:App) {
      this.transfert=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransfertConfirmationPage');
  }

  confirmTransfert() {
    this.api.showLoader('Confirmation en cours...');
    this.transfertProvider.completeTransfert(this.transfert,this.confirmation)
    .subscribe((resp)=>{
      this.api.hideLoader();
      this.app.getRootNav().setRoot('TransfertShowPage',resp);
    },err=>{
      this.api.hideLoader();
    })
  }

}
