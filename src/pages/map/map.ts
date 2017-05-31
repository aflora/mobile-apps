import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { EliteApi } from '../../shared/shared';

declare var window: any;

@Component({
  selector: "gmap",
  templateUrl: 'map.html'
})

export class MapPage {

  map: any;
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(private navParams: NavParams, private eliteApi: EliteApi) {

  }

  ionViewLoaded(){
    // let games = this.navParams.data;
    // let tourneyData = this.eliteApi.getCurrentTourney();
    // let location = tourneyData.locations[games.locationId];

    // this.map = {
    //   lat: location.latitude,
    //   lng: location.longitude,
    //   zoom: 12,
    //   markerLabel: games.location 
    // };

  }

  getDirections() { 
    //window.location = `geo:${this.map.lat},${this.map.lng};u=35`; 
  }

}
