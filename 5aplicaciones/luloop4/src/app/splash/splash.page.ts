
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';
import { Observable, timer } from 'rxjs';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  public showContent: boolean = false;
  constructor(private nativeAudio: NativeAudio, public splashScreen: SplashScreen, private router: Router, public navCtrl: NavController) {
    this.lottieConfig = {
      path: 'assets/ani/data.json',
      /*  renderer: 'canvas', */
      /* autoplay: true,  */
      loop: true
    };
  }


  ngOnInit() {
    this.nativeAudio.preloadSimple('splash', "assets/sonidos/142.mp3")
     }


  public resolve(): Observable<number> {
    return timer(10000);
  }

  ionViewDidEnter() {

    setTimeout(() => {
      this.showContent = true;
      this.splashScreen.hide();
    }, 1000);
    this.nativeAudio.play('splash');
    this.resolve();
    setTimeout(() => {
      this.nativeAudio.unload('splash');
      this.router.navigateByUrl("/home");
      this.router.resetConfig([
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'hola', loadChildren:'./hola/hola.module#HolaPageModule'},
        { path: 'home', loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)},
        { path: 'admin', loadChildren: './admin/admin.module#AdminPageModule' },
        { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },]);



    }, 2300);


  }
}

