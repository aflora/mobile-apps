import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, NavParams } from 'ionic-angular';
import { TeamsPage } from '../pages';
import { EliteApi } from '../../shared/shared';

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  tournaments : any;
  constructor(public navCtrl: NavController, public LoadingController : LoadingController, public navParams: NavParams, private eliteApi: EliteApi) {
  }

  goToTMyTeam(){
    this.navCtrl.pop();
  }

  itemTapped($event, tourney){
    this.navCtrl.push(TeamsPage, tourney);
  }

  ionViewLoaded(){
   
    console.log('## lifecycle ## ionViewLoaded');

  }

  ionViewWillEnter(){
    console.log('## lifecycle ## ionViewWillEnter');
  }

  ionViewWillLeave(){
    console.log('## lifecycle ## ionViewWillLeave');
  }

  ionViewDidUnload(){
    console.log('## lifecycle ## ionViewDidUnload');
  }

  ionViewDidLoad() {
    let loader = this.LoadingController.create({
      content: 'Getting tournaments...',
      //spinner: 'dots'
    });

    loader.present().then(() =>{
        this.eliteApi.getTournaments().then(data => this.tournaments = data);
        loader.dismiss();
    });

    console.log('## lifecycle ## ionViewDidLoad');
  }
}
