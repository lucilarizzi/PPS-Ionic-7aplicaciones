import { Component } from '@angular/core';
import { Usuario } from "../clases/usuario";
import { USUARIOS } from "../clases/usuarios";
import { Router } from '@angular/router';

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


  constructor(private router: Router, 
   
  ) 
  {
    this.miUsuario = new Usuario();
    this.error = false;
    this.mostrarLogIn = true;
    this.mostrarCliente = false;
    this.mesa = undefined;
    this.mostrarOpcionesTest = false;

  }

  ngOnInit() {


  }



  async onLogin(){
    
   

  }

  loguear() {

    let flag = false;

    console.log("LOGUEAR");
    for (var usuario of USUARIOS) {

      if (this.existe(usuario, this.miUsuario.email, this.miUsuario.clave)) {

        flag = true;
        console.log("usuario.tipo" + usuario.tipo);

        switch (usuario.tipo) {
          case 'mozo':
          case 'otro':
            this.router.navigateByUrl("/hola");
            console.log("HOLA");
            break;
          case "admin":
            this.router.navigateByUrl("/admin");
            console.log("HOLA admin");
            break;

        }
      }

    }

    if (!flag) {
      navigator.vibrate([500, 500]);
      this.error = true;
    }
  }


  camara() {

  /*   const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    }); */


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
  logCliente() {
    //recorrer lista de mesas y ver si existe
 
    this.router.navigateByUrl("/hola");
    console.log("cliente nro" + this.mesa);
  }

  existe(usuario: Usuario, mail2: string, clave2: string): boolean {
    if (usuario.clave == clave2 && usuario.email == mail2) {
      return true;
    }
    else {
      return false;
    }
  }

  usuarioElegido(tipoUsuario: string) {
    console.log("entro a fucniton y le llego" + tipoUsuario);
    switch (tipoUsuario) {
      case "m":
        console.log("entro a mozo");
        this.miUsuario.email = '2luloop@gmail.com';
        this.miUsuario.clave = "123456";
        break;
      case "a":
        this.miUsuario.email = 'lucilarizzi@gmail.com';
        this.miUsuario.clave = '123456';
        break;
      case "b":
        this.miUsuario.email = 'barra@coma.com';
        this.miUsuario.clave = 'barra';
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
    navigator.vibrate(3000);
  }
  volver2() {
    this.mostrarOpcionesTest = false;

  }


}



