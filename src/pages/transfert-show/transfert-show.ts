import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TransfertShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfert-show',
  templateUrl: 'transfert-show.html',
})
export class TransfertShowPage {
  transfert:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.transfert=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransfertShowPage');
  }

}
