import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';

/**
 * Generated class for the EventList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {
  public eventList: Array<any>;
  
  constructor(public navCtrl: NavController, public eventProvider: EventProvider) {
  }

  ionViewDidEnter() {
  this.eventProvider.getEventList().then( eventListSnap => {
    this.eventList = eventListSnap;
  });
  } 

  goToHomePage(){ 
	this.navCtrl.pop(); 
  }  
  
  goToEventDetail(eventId){
    this.navCtrl.push('EventDetailPage', { 'eventId': eventId });
  }
}
