import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';
import { HomePage } from '../home/home';

/**
 * Generated class for the EventDetail page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  segment: 'event-detail/:eventId'
})
@Component({
  selector: 'page-event-detail',
  templateUrl: 'event-detail.html',
})
export class EventDetailPage {
  public currentEvent: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public eventProvider: EventProvider) {
  }
  
  goToHomePage(){ 
	this.navCtrl.setRoot(HomePage);
  } 
  
  ionViewDidEnter(){
  this.eventProvider.getEventDetail(this.navParams.get('eventId'))
  .then( eventSnap => {
    this.currentEvent = eventSnap;
  });
  }

}
