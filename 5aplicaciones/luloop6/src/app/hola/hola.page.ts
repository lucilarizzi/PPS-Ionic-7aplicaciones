import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { HomePageModule } from '../home/home.module'
import { HomePage } from '../home/home.page';
import { NativeAudio } from '@ionic-native/native-audio/ngx';



@Component({
  selector: 'app-hola',
  templateUrl: './hola.page.html',
  styleUrls: ['./hola.page.scss'],
})
export class HolaPage implements OnInit {

  mesaActual:string;
  public lottieConfig: Object;
  spinner;

  constructor(private router: Router , private nativeAudio: NativeAudio) 
  {
    this.nativeAudio.preloadSimple('splash', "assets/sonidos/144.mp3");
    console.log(" ");
    this.lottieConfig = {
      path: 'assets/ani2/data.json',
      loop: true
    };
  
   }

  ngOnInit() {
    this.spinner = true;
    setTimeout(() => this.spinner = false, 2000);
    this.nativeAudio.play('splash');
    setTimeout(() => {
      this.nativeAudio.unload('splash');
    }, 1000);
  }

  lindas()
  {

    this.router.navigate(["/cosas", 'cosasLindas']  );
    localStorage.setItem('cosas', 'EdificioCosasLindas');
    
  }
  
  feas()
  {
    this.router.navigate(["/cosas", 'cosasFeas']); 
    localStorage.setItem('cosas', 'EdificioCosasFeas');

  }
  

}
