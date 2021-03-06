import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Http } from '@angular/http';
//import { GamePage } from '../pages';
import * as _ from 'lodash';
import { EliteApi } from '../../shared/shared';

@IonicPage()
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})
export class StandingsPage {
  allStandings: any[];
  standings : any;
  team      : any;
  divisionFilter = 'division';
  constructor(
    //private http: Http,
    public navCtrl: NavController, 
    public navParams: NavParams,
    public eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    this.team = this.navParams.data;
    let tourneyData = this.eliteApi.getCurrentTourney();
    this.standings = tourneyData.standings;
    // this.allStandings = _.chain(this.standings)
    //                       .groupBy('division')
    //                       .toPairs()
    //                       .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
    //                       .value();
    
    //console.log('ionViewDidLoad StandingsPage', this.allStandings, this.standings);
    this.allStandings = tourneyData.standings;
    this.filterDivision();
  }
  getHeader(record, recordIndex, records){
    if (recordIndex === 0 || record.division !== records[recordIndex-1].division) {
      return record.division;
    }
    return null;  
  }
  
  filterDivision(){
    if(this.divisionFilter === 'All'){
        this.standings = this.allStandings;
    } else {
        this.standings = _.filter(this.allStandings, s => s.division === this.team.division);
    }
  }
}
