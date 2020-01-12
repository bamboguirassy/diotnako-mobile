import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransfertShowPage } from './transfert-show';

@NgModule({
  declarations: [
    TransfertShowPage,
  ],
  imports: [
    IonicPageModule.forChild(TransfertShowPage),
  ],
})
export class TransfertShowPageModule {}
