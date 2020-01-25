import { Component } from '@angular/core';
import { Usuario } from "../clases/usuario";
import { USUARIOS } from "../clases/usuarios";
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Observable, timer } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  miUsuario: Usuario;
  error: boolean;
  mesa: string;

  mostrarLogIn: boolean;
  mostrarCliente: boolean;

  mostrarOpcionesTest: boolean;
  splash: boolean;

  ///////////lottie
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;


  constructor(private router: Router,
    private authSvc: AuthService,
    private flashlight: Flashlight,
    public splashScreen: SplashScreen
  ) {
    this.miUsuario = new Usuario();
    this.error = false;
    this.mostrarLogIn = false;
    this.mostrarCliente = false;
    this.mesa = undefined;
    this.mostrarOpcionesTest = false;
    this.splash = true;

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


  ngOnInit() {

    this.authSvc.signOut();

    this.splashScreen.hide();
    this.mostrarLogIn = true;   
    setTimeout(() => {
      this.splash = false     
    },3100);
    
  }


  async onLogin() {
    await this.authSvc.onLogin(this.miUsuario).then(() => {
      setTimeout(() => {

        if (this.authSvc.isLogged) {
          console.log('Usuario logueado exitosamente!');
          this.router.navigateByUrl('/hola');
        }
        else {
          this.vibrar2()
        }
   
      console.log("this.authSvc.isLogged" + this.authSvc.isLogged);
      console.log(" this.authSvc.whoIsLogIn()" + this.authSvc.whoIsLogIn());
    }, 1500 );
  });

  }



  nuevoUsuario() {
    this.authSvc.registrarse(this.miUsuario).then(() => {
      if (this.authSvc.whoIsLogIn()) {
        console.log('Usuario Nuevo Registrado');
        this.router.navigateByUrl('/hola');
      }
    });


  }


  volver() {
    this.router.navigateByUrl('');
    console.log('volvert');
    this.mostrarLogIn = true;
    this.mostrarCliente = false;

  }
  desplegar() {
    console.log('desplegar');
    this.mostrarOpcionesTest = true;
  }

  usuarioElegido(tipoUsuario: string) {
    console.log("entro a fucniton y le llego" + tipoUsuario);
    switch (tipoUsuario) {
      case "m":
        console.log("entro a mozo");
        this.miUsuario.email = 'lola@mail.com';
        this.miUsuario.clave = "123457";
        break;
      case "a":
        this.miUsuario.email = 'octavio@gmail.com';
        this.miUsuario.clave = '123456';
        break;
      case "b":
        this.miUsuario.email = 'barra@coma.com';
        this.miUsuario.clave = 'barraaa';
        break;
      /*       case "c":
              this.miUsuario.email = 'invitado';
              this.miUsuario.clave = 'invitado';
              break; */
    }
  }

  pedirNumeroMesa() {
    this.mostrarLogIn = false;
    this.mostrarCliente = true;

  }

  vibrar2() {
    navigator.vibrate(500);
  }
  volver2() {
    this.mostrarOpcionesTest = false;

  }


}



