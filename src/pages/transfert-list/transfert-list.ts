import { Component, OnInit } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TransfertProvider } from "../../providers/transfert/transfert";
import { Api } from "../../providers";

/**
 * Generated class for the TransfertListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-transfert-list",
  templateUrl: "transfert-list.html"
})
export class TransfertListPage implements OnInit {
  ngOnInit(): void {
    this.findTransfertEffectuees();
    this.findTransfertEncours();
    this.findTransfertRecues();
  }
  segment: any;
  transfertEffectuees: any;
  transfertRecues: any;
  transfertEnCours: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private transfertProvider: TransfertProvider,
    public api: Api
  ) {
    this.segment = "effectues";
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad TransfertListPage");
  }

  doRefresh(refresher: any) {
    console.log("Begin async operation", refresher);

    setTimeout(() => {
      this.findTransfertEffectuees();
      this.findTransfertEncours();
      this.findTransfertRecues();
      refresher.complete();
    }, 2000);
  }

  findTransfertEffectuees() {
    // this.api.showLoader("");
    this.transfertProvider.getCompleteMadeTransfers().subscribe(
      res => {
        this.transfertEffectuees = res;
        console.log(res);
        // this.api.hideLoader();
      },
      err => {
        console.error("ERROR", err);
        // this.api.hideLoader();
      }
    );
  }

  findTransfertRecues() {
    // this.api.showLoader("");
    this.transfertProvider.getReceivedTransfers().subscribe(
      res => {
        this.transfertRecues = res;
        console.log(res);
        // this.api.hideLoader();
      },
      err => {
        console.error("ERROR", err);
        // this.api.hideLoader();
      }
    );
  }

  findTransfertEncours() {
    // this.api.showLoader("");
    this.transfertProvider.getIncompleteMadeTransfers().subscribe(
      res => {
        this.transfertEnCours = res;
        console.log(res);
        // this.api.hideLoader();
      },
      err => {
        console.error("ERROR", err);
        // this.api.hideLoader();
      }
    );
  }

  goToTransfertNewPage() {
    this.navCtrl.push("TransfertNewPage");
  }
}
