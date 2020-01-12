import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Api, User } from '../../providers';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  segment: string;
  iconPath: string = '../assets/img/diotnako/senwallet.png';
  account: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private api: Api, private user: User) {
    this.loadAccount();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  loadAccount() {
    // this.api.showLoader('');
    this.user.getMyAccount()
      .subscribe((res) => {
        this.account = res;
        // this.api.hideLoader();
      }, err => {
        this.api.showRequestError(err);
        // this.api.hideLoader();
      })
    console.log('attention: ' + this.account);
  }

  logout() {
    this.api.removeToken();
    this.user.logout();
    this.navCtrl.setRoot('WelcomePage');
  }

  goToBarrecode() {
    this.navCtrl.push('BarcodePage', this.account);
  }

  goToTransfertIndex(){
    this.navCtrl.push('TransfertListPage');
  }
  
  goToCodeRechargeIndex(){
    this.navCtrl.push('CodeRechargeListPage');
  }
  
  goToDepotIndex(){
    this.navCtrl.push('DepotListPage');
  }
  
  goToRetraitIndex(){
    this.navCtrl.push('RetraitListPage');
  }
  
  goToDistributionIndex(){
    this.navCtrl.push('DistributionListPage');
  }

  doRefresh(refresher:any) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      this.loadAccount();
      refresher.complete();
    }, 2000);
  }

}
