import { Component, ViewChild, OnDestroy } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnDestroy {

 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nativeAudio: NativeAudio
  ) {
    this.initializeApp();
  }


  ngOnDestroy() {
    this.nativeAudio.preloadSimple('leon', "assets/sonidos/141.mp3");
    this.nativeAudio.setVolumeForComplexAsset('leon', 1);
    this.nativeAudio.play('leon');
    setTimeout(() => this.nativeAudio.unload('leon'), 3000);
     }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
    });
  }
}
