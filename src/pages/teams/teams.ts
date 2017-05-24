import { Component } from '@angular/core';
import { IonicPage, LoadingController, NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../pages';
import * as _ from 'lodash';
import { EliteApi } from '../../shared/shared';

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})

export class TeamsPage {

  private allTeams: any;
  private allTeamDivisions: any;
  teams = [];
  
  constructor(
    public navCtrl: NavController, 
    public LoadingController: LoadingController, 
    public navParams: NavParams, 
    private eliteApi : EliteApi) {  }
  
  itemTapped($event, team){
    this.navCtrl.push(TeamHomePage, team);
  }

  ionViewDidLoad() {

    let loader = this.LoadingController.create({
      content: 'Getting Data...',
    });
    loader.present().then(() =>{
      let seletedTourney = this.navParams.data;
      this.eliteApi.getTournamentData(seletedTourney.id).subscribe(data => {
        this.allTeams = data.teams;
        this.allTeamDivisions = 
          _.chain(data.teams)
            .groupBy('division')
            .toPairs()
            .map(item => _.zipObject(['divisionName', 'divisionTeams'], item))
            .value();
        this.teams =  this.allTeamDivisions;
        console.log("division teams",this.teams);
        loader.dismiss();
      });
    });
    console.log('ionViewDidLoad TeamsPage');
  }
}
