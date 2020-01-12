import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, App } from 'ionic-angular';

import { User, Api } from '../../providers';
import { MainPage } from '../';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { username: string, password: string } = {
    username: '',
    password: ''
  };

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,private app:App,
    private api:Api) {
  }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      //find account info
      this.user.getMyAccount()
      .subscribe((resp)=>{
        console.log(this.user._account);
      },err=>{
        this.api.showRequestError(err);
      })
      this.app.getRootNav().setRoot(MainPage);
    }, (err) => {
      // this.navCtrl.push(WelcomePage);
      // Unable to log in
      this.api.showRequestError(err);
    });
  }
}
