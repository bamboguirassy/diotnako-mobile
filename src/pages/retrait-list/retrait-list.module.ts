import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetraitListPage } from './retrait-list';

@NgModule({
  declarations: [
    RetraitListPage,
  ],
  imports: [
    IonicPageModule.forChild(RetraitListPage),
  ],
})
export class RetraitListPageModule {}
