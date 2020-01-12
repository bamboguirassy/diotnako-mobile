import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';

import { Api } from '../api/api';

/**
 * Most apps have the concept of a User. This is a simple provider
 * with stubs for login/signup/etc.
 *
 * This User provider makes calls to our API at the `login` and `signup` endpoints.
 *
 * By default, it expects `login` and `signup` to return a JSON object of the shape:
 *
 * ```json
 * {
 *   status: 'success',
 *   user: {
 *     // User fields your app needs, like "id", "name", "email", etc.
 *   }
 * }Ø
 * ```
 *
 * If the `status` field is not `success`, then an error is detected and returned.
 */
@Injectable()
export class User {
  _account: any;

  constructor(public api: Api) { }

  /**
   * Send a POST request to our login endpoint with the data
   * the user entered on the form.
   */
  login(accountInfo: any) {
    this.api.showLoader('Connexion en cours...');
    let seq = this.api.post('login_check', accountInfo).share();

    seq.subscribe((res: any) => {

      // If the API returned a successful response, mark the user as logged in
      // if (res.status == 'success') {
      //   console.error('ERROR',res);
      //   // this._loggedIn(res);
      // } else {
      // }
      this.api.setToken(res.token);
      console.log(res);
      this.api.hideLoader();
    }, err => {
      console.error('ERROR', err);
      this.api.hideLoader();
    });

    return seq;
  }

  /**
   * Send a POST request to our signup endpoint with the data
   * the user entered on the form.
   */
  signup(accountInfo: any) {
    this.api.showLoader('Création compte en cours...');

    let seq = this.api.post('user/access/new', accountInfo).share();

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      // if (res.status == 'success') {
      //   this._loggedIn(res);
      // }
      this.api.hideLoader();
    }, err => {
      console.error('ERROR', err);
      this.api.hideLoader();
    });

    return seq;
  }

  confirmRegistration(confirmationData: any) {
    this.api.showLoader("Confirmation du code en cours...");
    let seq = this.api.put('comptediotnako/access/confirmation/', confirmationData).share();
    seq.subscribe((res: any) => {
      this.api.hideLoader();
    }, err => {
      console.error('ERROR', err);
      this.api.hideLoader();
    });
    return seq;

  }

  getMyAccount(){
    let seq=this.api.get('comptediotnako/mon-compte/');
    seq.subscribe((res:any)=>{
      this._loggedIn(res);
    },err=>{
      console.error('ERROR',err);
    });
    return seq;
  }

  /**
   * Log the user out, which forgets the session
   */
  logout() {
    this._account = null;
  }

  /**
   * Process a login/signup response to store user data
   */
  _loggedIn(resp) {
    this._account = resp;
  }
}
