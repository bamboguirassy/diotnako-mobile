import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransfertListPage } from './transfert-list';

@NgModule({
  declarations: [
    TransfertListPage,
  ],
  imports: [
    IonicPageModule.forChild(TransfertListPage),
  ],
})
export class TransfertListPageModule {}
