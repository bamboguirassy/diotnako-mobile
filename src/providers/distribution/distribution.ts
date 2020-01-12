import { Injectable } from "@angular/core";
import { Api } from "../api/api";

/*
  Generated class for the DistributionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DistributionProvider {
  constructor(public api: Api) {}

  devenirDistributeurRequest(user: any,distributeur:any) {
    let seq = this.api
      .post("distributeurdiotnako/devenir/" + user.id + "/user", distributeur)
      .share();
    seq.subscribe(
      res => {},
      err => {
        this.api.showRequestError(err);
      }
    );
    return seq;
  }

  confirmerDevenirDistributeur(distributeur: any, confirmationData: any) {
    let seq = this.api
      .put(
        "distributeurdiotnako/confirmer/" + distributeur.id,
        confirmationData
      )
      .share();
    seq.subscribe(
      res => {},
      err => {
        this.api.showRequestError(err);
      }
    );
  }

  getMyDistributeur(){
    let seq = this.api
      .get("distributeurdiotnako/myaccount/")
      .share();
    seq.subscribe(
      res => {},
      err => {
        this.api.showRequestError(err);
      }
    );
  }
}
