import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import { AngularFireStorageModule, AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';

import { File } from '@ionic-native/file/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx'
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { ImagePicker } from '@ionic-native/image-picker/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { ToastController } from '@ionic/angular';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Spinner2Component } from './componentes/spinner2/spinner2.component';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [AppComponent, Spinner2Component],
  entryComponents: [],
  imports: [BrowserModule,
    IonicModule.forRoot({ animated: false }),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), ChartsModule,
    AngularFireAuthModule, AngularFireStorageModule, AngularFirestoreModule, ReactiveFormsModule
  ],
  providers: [
    StatusBar, NgxSpinnerModule, 
    SplashScreen, ToastController, NativeAudio, Spinner2Component,
    Flashlight, File, Base64, MediaCapture, FileChooser, FileOpener, FileTransfer,
    Camera, ImagePicker, AngularFirestore,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

