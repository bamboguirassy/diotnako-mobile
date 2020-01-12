import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransfertNewPage } from './transfert-new';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    TransfertNewPage,
  ],
  imports: [
    IonicPageModule.forChild(TransfertNewPage),
  ],
  providers: [
    BarcodeScanner
  ]
})
export class TransfertNewPageModule {}
