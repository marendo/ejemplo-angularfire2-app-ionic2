import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { EventProvider } from '../../providers/event/event';

/**
 * Generated class for the EventCreate page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-event-create',
  templateUrl: 'event-create.html',
})
export class EventCreatePage {

  constructor(public navCtrl: NavController, public eventProvider: EventProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventCreate');
  }

  goToHomePage(){ 
	this.navCtrl.pop(); 
  } 
  
  createEvent(eventName: string, eventDate: string, eventPrice: number, 
    eventCost: number) {
  this.eventProvider.createEvent(eventName, eventDate, eventPrice, eventCost)
  .then( newEvent => {
    this.navCtrl.pop();
  });
  }  
  
}
