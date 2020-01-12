import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { App, LoadingController, ToastController } from 'ionic-angular';
import moment from 'moment';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {
  // url: string = 'http://127.0.0.1:8000/api';
  url: string = 'https://senwallet-backend.webinoss.com/web/app_dev.php/api';
  token: string='';
  welcomePage: string = 'WelcomePage';
  tokenName: string = 'Bambo';
  publicEndpoints:any = ['user/access/new','login_check','comptediotnako/access/confirmation/'];
  firstConnexionCN:string='fc';
  loader:any;

  constructor(public http: HttpClient, private cookieService: CookieService,
     public app: App,public loadingCtl:LoadingController,public toastCtrl: ToastController) {
  }

  showLoader(message:string){
    this.loader=this.loadingCtl.create({
      content:message
    }),
    this.loader.present();
  }

  hideLoader(){
    this.loader.dismiss();
  }

  setToken(token: string) {
    this.cookieService.set(this.tokenName, token);
  }

  isNotFirstConnexion(): boolean {
    return this.cookieService.check(this.firstConnexionCN);
  }

  setNotFirstConnexion(){
    this.cookieService.set(this.firstConnexionCN, 'first');
  }

  getBuiltToken() {
    if (this.cookieService.check(this.tokenName)) {
      this.token = this.cookieService.get(this.tokenName);
    } else {
      //got to homepage
      this.app.getActiveNav().setRoot(this.welcomePage, {}, {
        animate: true,
        direction: 'forward'
      });
    }
    return this.token;
  }

  getToken(){
    this.token=null;
    if (this.cookieService.check(this.tokenName)) {
      this.token = this.cookieService.get(this.tokenName);
    }
    return this.token;
  }

  removeToken() {
    if (this.cookieService.check(this.tokenName)) {
      this.cookieService.delete(this.tokenName);
      this.app.getRootNav().setRoot(this.welcomePage, {}, {
        animate: true,
        direction: 'forward'
      });
    }
  }

  showRequestError(err:any){
    let toast = this.toastCtrl.create({
      message: err.error.message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: new HttpParams()
      };
    }

    // Support easy query params for GET requests
    if (params) {
      reqOpts.params = new HttpParams();
      for (let k in params) {
        reqOpts.params = reqOpts.params.set(k, params[k]);
      }
    }
    if (this.publicEndpoints.includes(endpoint)) {
      return this.http.get(this.url + '/' + endpoint, reqOpts);
    }
    return this.http.get(this.url + '/' + endpoint + '?bambo=' + this.getBuiltToken(), reqOpts);
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    if (this.publicEndpoints.includes(endpoint)) {
      return this.http.post(this.url + '/' + endpoint,body, reqOpts);
    }
    return this.http.post(this.url + '/' + endpoint + '?bambo=' + this.getBuiltToken(), body, reqOpts);
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    if (this.publicEndpoints.includes(endpoint)) {
      return this.http.put(this.url + '/' + endpoint, body, reqOpts);
    }
    return this.http.put(this.url + '/' + endpoint + '?bambo=' + this.getBuiltToken(), body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.url + '/' + endpoint + '?bambo=' + this.getBuiltToken(), reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.patch(this.url + '/' + endpoint + '?bambo=' + this.getBuiltToken(), body, reqOpts);
  }

  formatDate(date:Date){
    if(date==null){
      return '';
    }
   return moment(date).format('YYYY-MM-DD hh:mm:ss');
  }
}
