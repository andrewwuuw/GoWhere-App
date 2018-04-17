import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisteredPage } from '../pages/registered/registered';
import { ForgotPasswordPage } from '../pages/forgot-password/forgot-password';
import { HttpProvider } from '../providers/http/http';
import { ChatPage } from '../pages/chat/chat';
import { MapPage } from '../pages/map/map';
import { LandscapePage } from '../pages/landscape/landscape';
import { DynamicPage } from '../pages/dynamic/dynamic';
import { MainPage } from '../pages/main/main';
import { NavbarPage } from '../pages/navbar/navbar';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisteredPage,
    ForgotPasswordPage,
    MainPage,
    ChatPage,
    MapPage,
    LandscapePage,
    DynamicPage,
    NavbarPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisteredPage,
    ForgotPasswordPage,
    MainPage,
    ChatPage,
    MapPage,
    LandscapePage,
    DynamicPage,
    NavbarPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpProvider
  ]
})
export class AppModule {}
