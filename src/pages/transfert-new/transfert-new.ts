import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api } from '../../providers';
import { TransfertProvider } from '../../providers/transfert/transfert';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

/**
 * Generated class for the TransfertNewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfert-new',
  templateUrl: 'transfert-new.html',
})
export class TransfertNewPage {
  transfert: { numeroCompte: string, montant: number } = {
    numeroCompte: '', montant: null
  };
  scanBarcode:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private api:Api,private transfertProvider:TransfertProvider,
    private barcodeScanner: BarcodeScanner) {
  }

  scanQrcode(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.transfert.numeroCompte=barcodeData.text;
     }).catch(err => {
         console.log('Error', err);
     });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransfertNewPage');
  }
  makeTransfert(){
    this.api.showLoader('Traitement en cours...')
    this.transfertProvider.makeNewTransfert(this.transfert)
    .subscribe((res)=>{
      this.api.hideLoader();
      this.navCtrl.push('TransfertConfirmationPage',res);
    },err=>{
      this.api.hideLoader();
    });
  }

}
