import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisteredPage } from '../registered/registered';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  toRegisteredPage(){
    this.navCtrl.push(RegisteredPage);
  }

  toForgotPasswordPage(){
    this.navCtrl.push(ForgotPasswordPage)
  }

}
