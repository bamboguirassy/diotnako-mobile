import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, App } from 'ionic-angular';
import { User } from '../../providers';

/**
 * Generated class for the RegistrationConfirmationCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration-confirmation-code',
  templateUrl: 'registration-confirmation-code.html',
})
export class RegistrationConfirmationCodePage {
 account:any;
 confirmationCode:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public user:User,public toastController: ToastController,private app:App) {
      this.account=this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationConfirmationCodePage');
  }

  confirmRegistration(){
    let confirmData={id:this.account.id,code:this.confirmationCode};
    this.user.confirmRegistration(confirmData).subscribe((resp) => {
      this.app.getRootNav().setRoot('LoginPage');
    }, (err) => {
      // Unable to sign up
      let toast = this.toastController.create({
        message: err.error.message,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

}
