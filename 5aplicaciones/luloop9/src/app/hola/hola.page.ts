import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { HomePageModule } from '../home/home.module'
import { HomePage } from '../home/home.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { PuntosService } from '../service/puntos.service';
import { Cosas } from '../clases/cosas';
import { Usuario } from '../clases/usuario';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { NativeAudio } from '@ionic-native/native-audio/ngx';



@Component({
  selector: 'app-hola',
  templateUrl: './hola.page.html',
  styleUrls: ['./hola.page.scss'],
})
export class HolaPage implements OnInit {

  mesaActual: string;
  dinero;
  itemsCopia: Usuario;
  spinner;

  constructor(private nativeAudio: NativeAudio, private router: Router, private barcodeScanner: BarcodeScanner, private credito: PuntosService) {
    console.log(" ");
  }

  ngOnInit() {
    this.spinner = true;
    setTimeout(() => this.spinner = false, 2000);

    this.nativeAudio.preloadSimple('splash', "assets/sonidos/144.mp3");
    this.nativeAudio.play('splash');
    setTimeout(() => {
      this.nativeAudio.unload('splash');
    }, 1000);

    this.itemsCopia = new Usuario();
    this.dinero = 0;
    this.credito.traertodos("users")
      .subscribe(user => {
        user.forEach(userData => {

          let data = userData.payload.doc.data() as Usuario;
          let id = userData.payload.doc.id;
          data.uid = id;
          console.log(data, "data");
          console.log(id + "id");


          if (data.email == this.credito.auth.whoIsLogIn().email) {
            this.itemsCopia = data;
          }
        });
      });;
  }



  abrirScanner() {
    this.barcodeScanner.scan().then(barcodeData => {
      
      switch (barcodeData.text) {
        case "8c95def646b6127282ed50454b73240300dccabc":
          this.dinero = this.itemsCopia.credito + 10;
          break;
        case "ae338e4e0cbb4e4bcffaf9ce5b409feb8edd5172 ":
          this.dinero = this.itemsCopia.credito + 50;
          break;
        case "2786f4877b9091dcad7f35751bfcf5d5ea712b2f":
          this.dinero = this.itemsCopia.credito + 100;
          break;
      }
      console.log('Barcode data', barcodeData);
      this.credito.actualizarCredito('users', barcodeData.text, this.itemsCopia, this.dinero);
    }).catch(err => {
      console.log('Error', err);
    });

  }


  limpiar() {

    this.itemsCopia.codigosCargados=[];
    this.dinero=0
        this.credito.actualizarCredito('users', " ", this.itemsCopia, this.dinero);
  }
























  /* 
    pps4a()
    {
  
      this.router.navigate(["/chat"]  );
      localStorage.setItem('chat', '4a');
      
    }
    
    pps4b()
    {
      this.router.navigate(["/chat"]); 
      localStorage.setItem('chat', '4b');
  
    } */


}
