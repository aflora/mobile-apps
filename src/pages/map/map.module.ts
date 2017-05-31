import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPage } from './map';

//import { AgmCoreModule } from '@agm/core';
import { SebmGoogleMap } from 'angular2-google-maps/core';


@NgModule({
  declarations: [
    MapPage,
  ],
  imports: [
    IonicPageModule.forChild(MapPage),
   SebmGoogleMap
  ],
  exports: [
    MapPage
  ]
})
export class GamePageModule {}
