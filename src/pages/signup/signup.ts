import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController, App } from 'ionic-angular';

import { User, Api } from '../../providers';
import { DatePicker } from '@ionic-native/date-picker';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: {
    prenom: string, nom: string, email: string,
    username: string, plainPassword: string, telephone: string, adresse: string, dateNaissance: any, tempDate: Date
  } = {
      prenom: '',
      nom: '',
      email: '',
      username: '',
      plainPassword: '',
      telephone: '+221',
      adresse: '',
      dateNaissance: '',
      tempDate: null
    };

  createdAccount: any;

  constructor(public navCtrl: NavController,
    public user: User, private datePicker: DatePicker,
    public toastCtrl: ToastController,
    public translateService: TranslateService, public api: Api,private app:App) {
  }

  showDatepicker() {
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => this.account.tempDate = date,
      err => console.log('Error occurred while getting date: ', err)
    );
  }


  doSignup() {
    this.account.dateNaissance = this.api.formatDate(this.account.tempDate);
    // Attempt to signup through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.createdAccount = resp;
      this.app.getRootNav().setRoot('RegistrationConfirmationCodePage', this.createdAccount);
    }, (err) => {
      // Unable to sign up
      this.api.showRequestError(err);
    });
  }

}
