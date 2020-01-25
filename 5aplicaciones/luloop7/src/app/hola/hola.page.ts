import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Alert } from 'selenium-webdriver';
import { ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../service/auth.service';
import { NativeAudio } from '@ionic-native/native-audio/ngx';




@Component({
  selector: 'app-hola',
  templateUrl: './hola.page.html',
  styleUrls: ['./hola.page.scss'],
})
export class HolaPage implements OnInit {

  lat: number;
  lng: number;
  height = 0;
  spinner;

  public lottieConfig: Object;


  title: string = 'Todos al Mecon';

  zoom: number = 8;

  constructor(public platform: Platform,  private toastCtrl: ToastController, private nativeAudio: NativeAudio,     private authSvc: AuthService) {
    console.log(platform.height());
    this.height = platform.height() - 56;
    this.lottieConfig = {
      path: 'assets/ani2/data.json',
      loop: true
    };
  
  }



  ngOnInit(): void {


    this.nativeAudio.preloadSimple('splash', "assets/sonidos/144.mp3");
    this.nativeAudio.play('splash');
    setTimeout(() => {
      this.nativeAudio.unload('splash');
    }, 1000);


    this.spinner = true;
    setTimeout(() => this.spinner = false, 2000)

      navigator.geolocation.getCurrentPosition((resp) => {
        this.lat = resp.coords.latitude;

        this.lng = resp.coords.longitude;
        console.log("this.lat" + this.lat);
        console.log("this.lat" + this.lng);

        let toast = this.toastCtrl.create({
          message: 'Latitude: ' + resp.coords.latitude + '\n' +
          'Longitude: ' + resp.coords.longitude + '\n' +
          'Altitude: ' + resp.coords.altitude + '\n' +
          'Accuracy: ' + resp.coords.accuracy + '\n' +
          'Altitude Accuracy: ' + resp.coords.altitudeAccuracy + '\n' +
          'Heading: ' + resp.coords.heading + '\n' +
          'Speed: ' + resp.coords.speed + '\n' +
          'Timestamp: ' + resp.timestamp + '\n' ,
          duration: 3000,
          color: 'danger',
          position: 'bottom'}).then( rest=>{
            rest.present();          
            navigator.vibrate(500);
          });
       
        navigator.vibrate;


      } , (error) => {
          console.log('Error getting location', error);
        } , { timeout: 10000}) ;



    
  }

  activar() {



   let aux = navigator.geolocation.watchPosition((resp) => {
      this.lat = resp.coords.latitude
      this.lng = resp.coords.longitude
      console.log("this.lat" + this.lat);
      console.log("this.lat" + this.lng);

      if (this.lat < -34.571273 && this.lat > -34.811273 ) {
        let toast = this.toastCtrl.create({
          message: 'Ya estamo \n' + 'Latitude: ' + resp.coords.latitude + '\n' +
          'Longitude: ' + resp.coords.longitude + '\n' ,
          duration: 3000,
          color: 'danger',
          position: 'bottom'}).then( rest=>{
            rest.present();          
            navigator.vibrate(500);
          });

          navigator.geolocation.clearWatch(aux);
        navigator.vibrate;

 
      }
    }, ((error) => {
      console.log('no estamo', error);
    }));





  }
}







