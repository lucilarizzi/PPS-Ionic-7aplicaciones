import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, Route } from '@angular/router';
import { HomePageModule } from '../home/home.module'
import { HomePage } from '../home/home.page';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Gyroscope, GyroscopeOrientation, GyroscopeOptions } from '@ionic-native/gyroscope/ngx';
import { Sensors, TYPE_SENSOR } from '@ionic-native/sensors/ngx';
import { Flashlight } from '@ionic-native/flashlight/ngx';


@Component({
  selector: 'app-hola',
  templateUrl: './hola.page.html',
  styleUrls: ['./hola.page.scss'],
})
export class HolaPage implements OnInit, OnDestroy {

  mesaActual: string;
  orientacion: any;
  estaActivo: boolean;
  estadoluz: boolean;
  public lottieConfig: Object;
  spinner;

  constructor(private router: Router,
    private nativeAudio: NativeAudio,
    private screenOrientation: ScreenOrientation,
    public splashScreen: SplashScreen,
    private sensors: Sensors,
    private flashlight: Flashlight) {
    this.lottieConfig = {
      path: 'assets/ani2/data.json',
      loop: true
    };
    this.nativeAudio.preloadSimple('splash', "assets/sonidos/144.mp3");
    console.log(" ");
    this.estaActivo = false;
    this.estadoluz = false;

  }

  ngOnInit() {
    this.spinner = true;
    setTimeout(() => this.spinner = false, 2000)
    /*     this.sensors.enableSensor(TYPE_SENSOR.ACCELEROMETER);
        this.sensors.enableSensor(TYPE_SENSOR.GYROSCOPE_UNCALIBRATED); */
    this.splashScreen.hide();
    this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.ANY);

    this.nativeAudio.preloadSimple('alarmas1', "assets/alarma1.mp3").then(this.onSuccess, this.onError);
    this.nativeAudio.preloadSimple('alarmas2', "assets/alarma2.mp3").then(this.onSuccess, this.onError);
    this.nativeAudio.preloadSimple('alarmas3', "assets/alarma3.mp3").then(this.onSuccess, this.onError);
    this.nativeAudio.preloadSimple('alarmas4', "assets/alarma4.mp3").then(this.onSuccess, this.onError);

    this.nativeAudio.play('splash');
    setTimeout(() => {
      this.nativeAudio.unload('splash');
    }, 1000);



  }



  ngOnDestroy() {
    this.nativeAudio.unload('alarmas1').then(this.onSuccess, this.onError);
    this.nativeAudio.unload('alarmas2').then(this.onSuccess, this.onError);
    this.nativeAudio.unload('alarmas3').then(this.onSuccess, this.onError);
    this.nativeAudio.unload('alarmas4').then(this.onSuccess, this.onError);
  }

  prenderLuz() {
    if (this.estadoluz) {
      this.flashlight.switchOff()
      this.estadoluz = false;
    } else {
      this.flashlight.switchOn()
      navigator.vibrate(1000);
      this.estadoluz = true;
    }
  }


  /*  alarma2() {
 
     this.sensors.enableSensor(TYPE_SENSOR.ACCELEROMETER);
 
     this.screenOrientation.onChange().subscribe(
       e => {
 
         this.sensors.getState().then(count => {
           this.orientacion = count;
           console.log("count" + count);
           console.log("count0:  " + Math.round(count[0]));
           console.log("count1:  " + Math.round(count[1]));
           console.log("count:  " + Math.round(count[2]));
 
           if (count[0] > 0 && count[1] < 0 && count[2] < 0) {
             this.nativeAudio.setVolumeForComplexAsset('alarmas2', 1);
             this.nativeAudio.play('alarmas2').then(this.onSuccess, this.onError);
           }
           else if (count[0] < 0 && count[1] > 0 && count[2] < 0) {
             this.nativeAudio.setVolumeForComplexAsset('alarmas1', 0.6);
             this.nativeAudio.play('alarmas1').then(this.onSuccess, this.onError);
           }
           else if (count[0] > 0 && count[1] < 0 && count[2] > 0 || count[0] < 0 && count[1] < 0 && count[2] < 0) {
             this.nativeAudio.setVolumeForComplexAsset('alarmas3', 0.6);
             this.nativeAudio.play('alarmas3').then(this.onSuccess, this.onError);
           }
           else if (count[0] > 0 && count[1] > 0 && count[2] > 0 || count[0] > 0 && count[1] > 0 && count[2] > 0) {
 
             this.nativeAudio.setVolumeForComplexAsset('alarmas4', 0.6);
             this.nativeAudio.play('alarmas4').then(this.onSuccess, this.onError);
           }
         });
       }
     );
   } */



  alarma() {
    if (!this.estaActivo) {

      document.getElementById('botonLindo').setAttribute("style", " background-color: yellow");
      this.estaActivo = true;
      this.screenOrientation.onChange().subscribe(
        e => {
          console.log(this.screenOrientation.type);
          switch (this.screenOrientation.type) {
            case "landscape-secondary":
              this.nativeAudio.setVolumeForComplexAsset('alarmas1', 1);
              this.nativeAudio.play('alarmas1').then(this.onSuccess, this.onError);
              break;
            case "portrait-primary":
              if (this.estaActivo) {
                this.prenderLuz();
              }
              break;
            case "portrait-secondary":
              this.nativeAudio.setVolumeForComplexAsset('alarmas4', 1);
              this.nativeAudio.play('alarmas4').then(this.onSuccess, this.onError);
              break;
            case "landscape-primary":
              this.nativeAudio.setVolumeForComplexAsset('alarmas2', 1);
              this.nativeAudio.play('alarmas2').then(this.onSuccess, this.onError);
              break;

          }
        });

    } else {
      document.getElementById('botonLindo').setAttribute("style", " background-color:  rgb(187, 184, 184)");
      this.estaActivo = false;
      this.nativeAudio.unload('alarmas1').then(this.onSuccess, this.onError);
      this.nativeAudio.unload('alarmas2').then(this.onSuccess, this.onError);
      this.nativeAudio.unload('alarmas3').then(this.onSuccess, this.onError);
      this.nativeAudio.unload('alarmas4').then(this.onSuccess, this.onError);

    }
  }


  onSuccess(e) {
    console.log("todo bien" + e)
  }
  onError(e) {
    console.log("NO funciona" + e)
  }




}
