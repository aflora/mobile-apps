import { Component, ViewChild } from '@angular/core';
import {Events, Nav, Platform, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { MyTeamsPage, TournamentsPage, TeamHomePage } from '../pages/pages';
import { EliteApi, UserSettings } from '../shared/shared';


@Component({
  templateUrl: 'app.html',
  providers: [
    EliteApi, 
    UserSettings,
    HttpModule,
    ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  
  favoriteTeams: any[];
  rootPage: any = MyTeamsPage;

  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public userSettings : UserSettings,
    public loadingController: LoadingController,
    private eliteApi : EliteApi,
    private events: Events,
    public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Home', component: HomePage },
    //   { title: 'List', component: ListPage }
    // ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.refreshFavorites();
      this.events.subscribe("favorites:changed", () => this.refreshFavorites());
    });
  }

  // openPage(page) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.nav.setRoot(page.component);
  // }
  
  refreshFavorites(){
    this.userSettings.getAllFavorites((items) => {
      this.favoriteTeams = items;
    });
  }

  goHome() {
    this.nav.setRoot(MyTeamsPage);
  }

  gotoTeam(favorite){
     let loader = this.loadingController.create({
       content: "Getting data....",
       dismissOnPageChange: true
     });
     loader.present();
     this.eliteApi.getTournamentData(favorite.tournamentId).subscribe(l => this.nav.push(TeamHomePage, favorite.team));
  }

  goToTournament(){
    this.nav.push(TournamentsPage);
  }
}
