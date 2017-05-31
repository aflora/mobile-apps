import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { TournamentsPage, MyTeamsPage, TeamsPage, TeamDetailPage, TeamHomePage, StandingsPage, GamePage, MapPage } from '../pages/pages';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { AgmCoreModule } from '@agm/core';
import {GoogleMapsAPIWrapper} from 'angular2-google-maps/core/services/google-maps-api-wrapper';


@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    TeamHomePage,
    StandingsPage,
    GamePage,
    MapPage,
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__myDB',
      driverOrder: ['indexeddb','sqlite', 'websql']
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBJspnd0d6Dy2xI6ly1ZFSUvoSE3F-V4ME',
      libraries: ['places']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    TeamHomePage,
    StandingsPage,
    GamePage,
    MapPage

  ],
  providers: [    
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   [GoogleMapsAPIWrapper]
  ]
})
export class AppModule {}
