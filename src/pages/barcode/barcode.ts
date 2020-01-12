import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BarcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {
 account:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.account=navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodePage');
  }

}
