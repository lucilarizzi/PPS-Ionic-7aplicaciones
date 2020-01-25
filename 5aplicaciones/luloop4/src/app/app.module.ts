import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule} from '@angular/fire';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment} from '../environments/environment';
import { AngularFirestoreModule, AngularFirestore} from '@angular/fire/firestore';
import { AngularFireStorageModule , AngularFireStorage,  AngularFireUploadTask} from '@angular/fire/storage';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, 
    IonicModule.forRoot({animated: false}), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireAuthModule,AngularFireStorageModule, AngularFirestoreModule, 
  ],
  providers: [
    StatusBar,
    SplashScreen, Flashlight, NativeAudio,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

