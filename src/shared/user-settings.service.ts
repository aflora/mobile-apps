import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';
//import * as _ from 'lodash';


@Injectable()
export class UserSettings {
 //storage = new Storage(IonicStorageModule);
  constructor(
      public storage: Storage,
      private events: Events ) {  }  

  favoriteTeam(team, tournamentId, tournamentName){
      let item = { team: team, tournamentId: tournamentId, tournamentName: tournamentName };
      this.storage.set(`${team.id}`, JSON.stringify(item));
      this.events.publish("favorites:changed");
  }

  unfavoriteTeam(team){
      this.storage.remove(`${team.id}`);
      this.events.publish("favorites:changed");
  }

  

  isFavoriteTeam(teamId){
      return this.storage.get(`${teamId}`).then(value => value ? true : false);
  }

  getAllFavorites(callback) {
     let items = [];
     this.storage.forEach((value) => {
            items.push(JSON.parse(value));
     }).then(()=>{
          callback(items);
     });
  }

}
  

