import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})
export class GamePage {

  game: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi : EliteApi) {
    this.game = this.navParams.data;
  }
  teamTapped(teamId){
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id === teamId);
    this.navCtrl.push(TeamHomePage, team);
  }
  ionViewDidLoad() {
    this.game = this.navParams.data;
    console.log('game Clicked', this.navParams.data);
    console.log('ionViewDidLoad GamePage', this.game.team1);
  }

}