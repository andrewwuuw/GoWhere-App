import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisteredPage } from '../registered/registered';
import { ForgotPasswordPage } from '../forgot-password/forgot-password';
import { MainPage } from '../main/main';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  registered = RegisteredPage;
  forgotPassword = ForgotPasswordPage;

  constructor(public navCtrl: NavController) {

  }

  login():void {
    this.navCtrl.setRoot(MainPage);
  }

}
