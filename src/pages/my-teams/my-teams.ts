import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController,  NavParams } from 'ionic-angular';
import { TournamentsPage, TeamHomePage } from '../pages';
import { EliteApi } from '../../shared/shared';

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {

  favorites = [
        {
            team: { id: 6182, name: 'HC Elite 7th', coach: 'Michelotti' },
            tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
            tournamentName: 'March Madness Tournament'
        },
        {
            team: { id: 805, name: 'HC Elite', coach: 'Michelotti' },
            tournamentId: '98c6857e-b0d1-4295-b89e-2d95a45437f2',
            tournamentName: 'Holiday Hoops Challenge'
        }
  ];

  constructor(
    private navCtrl: NavController, 
    public LoadingController : LoadingController, 
    public navParams: NavParams, 
    private eliteApi: EliteApi) {
  }

  goToTournaments(){
    this.navCtrl.push(TournamentsPage)
  }

  favoriteTapped($event, favorite){
    let loader = this.LoadingController.create({
      content: 'Getting Data...',
      dismissOnPageChange: true
    });
    loader.present().then(() =>{
        this.eliteApi.getTournamentData(favorite.tournamentId).subscribe(t => this.navCtrl.push(TeamHomePage, favorite.team));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

}
