import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-registered',
  templateUrl: 'registered.html',
})
export class RegisteredPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisteredPage');
  }

  toRootPage(){
    this.navCtrl.popToRoot();
  }
}
