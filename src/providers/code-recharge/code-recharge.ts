import { Injectable } from "@angular/core";
import { Api } from "../api/api";

/*
  Generated class for the CodeRechargeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CodeRechargeProvider {
  constructor(public api: Api) {}

  genererCodeRecharge(rechargeData: any) {
    let seq = this.api
      .post("rechargediotnako/generer-coderechage/", rechargeData)
      .share();
    seq.subscribe(
      res => {},
      err => {
        this.api.showRequestError(err);
      }
    );
    return seq;
  }

  activerCodeRecharge(recharge: any) {
    let seq = this.api
      .put("rechargediotnako/" + recharge.id + "/activer/", {})
      .share();
    seq.subscribe(
      res => {},
      err => {
        this.api.showRequestError(err);
      }
    );
    return seq;
  }

  desactiverCodeRecharge(recharge: any) {
    let seq = this.api
      .put("rechargediotnako/" + recharge.id + "/desactiver/", {})
      .share();
    seq.subscribe(
      res => {},
      err => {
        this.api.showRequestError(err);
      }
    );
    return seq;
  }

  utiliserCodeRecharge(rechargeData: any) {
    let seq = this.api
      .put("rechargediotnako/utiliser/", rechargeData)
      .share();
    seq.subscribe(
      res => {},
      err => {
        this.api.showRequestError(err);
      }
    );
    return seq;
  }

  getMyNonUsedRecharge() {
    let seq = this.api
      .get("rechargediotnako/myrecharges/notused/")
      .share();
    seq.subscribe(
      res => {},
      err => {
        this.api.showRequestError(err);
      }
    );
    return seq;
  }
  getMyUsedRecharge() {
    let seq = this.api
      .get("rechargediotnako/myrecharges/used/")
      .share();
    seq.subscribe(
      res => {},
      err => {
        this.api.showRequestError(err);
      }
    );
    return seq;
  }
  getRechargeSharedWithMe() {
    let seq = this.api
      .get("rechargediotnako/shared/with-me/")
      .share();
    seq.subscribe(
      res => {},
      err => {
        this.api.showRequestError(err);
      }
    );
    return seq;
  }
}
