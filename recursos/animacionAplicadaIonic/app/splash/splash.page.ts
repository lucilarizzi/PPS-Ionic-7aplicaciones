import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage {

  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  public showContent: boolean = false;
  constructor( public splashScreen: SplashScreen, private router: Router) {
    this.lottieConfig = {
      path: 'assets/ani/data.json',
    /*  renderer: 'canvas', */
      /* autoplay: true,  */
      loop: true
  };
  }

  public resolve(): Observable<number> {
    return timer(10000);
   } 

  ionViewDidEnter() {
    this.splashScreen.hide();
    setTimeout(()=>this.showContent=true, 1000);
    this.resolve();
    setTimeout(()=>this.router.navigateByUrl("/home"),2000); 
  }
}

