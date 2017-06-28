import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// We import the authentication provider to test the log-out function.
import { AuthProvider } from '../../providers/auth/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public authProvider: AuthProvider) {}

  goToProfile(){ 
    this.navCtrl.push('ProfilePage'); 
  }  

  goToCreate(){ 
	this.navCtrl.push('EventCreatePage'); 
  }

  goToList(){ 
	this.navCtrl.push('EventListPage'); 
  }

}
