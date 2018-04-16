import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RegisteredPage } from '../registered/registered';

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  toRegisteredPage(){
    this.navCtrl.push(RegisteredPage);
  }
}
