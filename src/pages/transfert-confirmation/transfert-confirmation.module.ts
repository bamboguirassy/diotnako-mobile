import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransfertConfirmationPage } from './transfert-confirmation';

@NgModule({
  declarations: [
    TransfertConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(TransfertConfirmationPage),
  ],
})
export class TransfertConfirmationPageModule {}
