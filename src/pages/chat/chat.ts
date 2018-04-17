import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  chats = [
    {name: "阿凡達", message: "晚餐吃什麼？", avatar: "http://upload.dianyingjie.com/2017/0404/1491275068881.jpeg"}
  ]

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

}
