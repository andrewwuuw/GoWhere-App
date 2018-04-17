import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { MapPage } from '../map/map';
import { LandscapePage } from '../landscape/landscape';
import { DynamicPage } from '../dynamic/dynamic';

/**
 * Generated class for the MainPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  chatRoot = ChatPage
  mapRoot = MapPage
  landscapeRoot = LandscapePage
  dynamicRoot = DynamicPage


  constructor(public navCtrl: NavController) {}

}
