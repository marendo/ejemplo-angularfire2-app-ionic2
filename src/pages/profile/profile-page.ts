import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController  } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { AuthProvider } from '../../providers/auth/auth';
import firebase from 'firebase/app';

/**
 * Generated class for the ProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profile-page',
  templateUrl: 'profile-page.html',
})
export class ProfilePage {

  public userProfile: any;
  public birthDate: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
			  public profileProvider: ProfileProvider, public authProvider: AuthProvider) {
  }

  ionViewDidEnter() {
  this.profileProvider.getUserProfile().then( profileSnap => {
    this.userProfile = profileSnap;
    this.birthDate = this.userProfile.birthDate;
  });
  }

  logOut(){
  this.authProvider.logoutUser().then(() => {
    this.navCtrl.setRoot('LoginPage');
  });
  }  

  logoutUser(): firebase.Promise<void> {
  firebase.database().ref('/userProfile')
    .child(firebase.auth().currentUser.uid).off();

  return firebase.auth().signOut();
  }

  updateName(){
  let alert = this.alertCtrl.create({
    message: "Your first name & last name",
    inputs: [
      {
        name: 'firstName',
        placeholder: 'Your first name',
        value: this.userProfile.firstName
      },
      {
        name: 'lastName',
        placeholder: 'Your last name',
        value: this.userProfile.lastName
      },
    ],
    buttons: [
      {
        text: 'Cancel',
      },
      {
        text: 'Save',
        handler: data => {
          this.profileProvider.updateName(data.firstName, data.lastName);
		  this.userProfile.firstName = data.firstName;
		  this.userProfile.lastName = data.lastName;
        }
      }
    ]
  });
  alert.present();
  }

  updateDOB(birthDate){
  this.profileProvider.updateDOB(birthDate);
  }

updateEmail(){
  let alert = this.alertCtrl.create({
    inputs: [
      {
        name: 'newEmail',
        placeholder: 'Your new email',
      },
      {
        name: 'password',
        placeholder: 'Your password',
        type: 'password'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
      },
      {
        text: 'Save',
        handler: data => {
          this.profileProvider.updateEmail(data.newEmail, data.password);
        }
      }
    ]
  });
  alert.present();
}

  updatePassword(){
  let alert = this.alertCtrl.create({
    inputs: [
      {
        name: 'newPassword',
        placeholder: 'Your new password',
        type: 'password'
      },
      {
        name: 'oldPassword',
        placeholder: 'Your old password',
        type: 'password'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
      },
      {
        text: 'Save',
        handler: data => {
          this.profileProvider.updatePassword(data.newPassword, data.oldPassword);
        }
      }
    ]
  });
  alert.present();
  }
  
}
