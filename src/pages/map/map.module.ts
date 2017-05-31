import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MapPage } from './map';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    MapPage,
  ],
  imports: [
    IonicPageModule.forChild(MapPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJspnd0d6Dy2xI6ly1ZFSUvoSE3F-V4ME'
    })
  ],
  exports: [
    MapPage
  ]
})
export class GamePageModule {}
