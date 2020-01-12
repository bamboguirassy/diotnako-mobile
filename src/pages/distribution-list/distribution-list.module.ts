import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DistributionListPage } from './distribution-list';

@NgModule({
  declarations: [
    DistributionListPage,
  ],
  imports: [
    IonicPageModule.forChild(DistributionListPage),
  ],
})
export class DistributionListPageModule {}
