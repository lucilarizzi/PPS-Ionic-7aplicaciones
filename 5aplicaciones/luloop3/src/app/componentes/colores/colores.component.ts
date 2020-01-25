import { Component, OnInit, Input } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';

@Component({
  selector: 'app-colores',
  templateUrl: './colores.component.html',
  styleUrls: ['./colores.component.scss'],
})
export class ColoresComponent implements OnInit {
 
  @Input() idiomaSele;

  constructor(private nativeAudio: NativeAudio) { }

  ngOnInit() {

  }

  animal(elegido: string) {
    switch (elegido) {
      case 'leon':
        switch (this.idiomaSele) {
          case 'es':
            console.log("entro a es");
            this.nativeAudio.preloadSimple('leon', "assets/es/leon.mp3");
            this.nativeAudio.setVolumeForComplexAsset('leon', 1);
            this.nativeAudio.play('leon');
            setTimeout(() => this.nativeAudio.unload('leon'), 3000);
            break;
          case 'en':
            console.log("entro a en");
            this.nativeAudio.preloadSimple('lion', "assets/en/lion.mp3");
            this.nativeAudio.setVolumeForComplexAsset('lion', 1);
            this.nativeAudio.play('lion');
            setTimeout(() => this.nativeAudio.unload('lion'), 3000);
            break;
          case 'pr':
            console.log("entro a pr"); //ok
            this.nativeAudio.preloadSimple('leonp', "assets/pr/leon.mp3");
            this.nativeAudio.setVolumeForComplexAsset('leonp', 1);
            this.nativeAudio.play('leonp');
            setTimeout(() => this.nativeAudio.unload('leonp'), 3000);
            break;
        }
        break;
      case 'gato':
        switch (this.idiomaSele) {
          case 'es':
            console.log("entro a es");
            this.nativeAudio.preloadSimple('gato', "assets/es/gato.mp3");
            this.nativeAudio.setVolumeForComplexAsset('gato', 1);
            this.nativeAudio.play('gato');
            setTimeout(() => this.nativeAudio.unload('gato'), 3000);
            break;
          case 'en':
            console.log("entro a en");
            this.nativeAudio.preloadSimple('cat', "assets/en/cat.mp3");
            this.nativeAudio.setVolumeForComplexAsset('cat', 1);
            this.nativeAudio.play('cat');
            setTimeout(() => this.nativeAudio.unload('cat'), 3000);
            break;
          case 'pr':
            console.log("entro a pr");
            this.nativeAudio.preloadSimple('gatop', "assets/pr/gato.mp3");
            this.nativeAudio.setVolumeForComplexAsset('gatop', 1);
            this.nativeAudio.play('gatop');
            setTimeout(() => this.nativeAudio.unload('gatop'), 3000);
            break;
        }
        break;
      case 'perro':
        switch (this.idiomaSele) {
          case 'es':
            console.log("entro a es");
            this.nativeAudio.preloadSimple('perro', "assets/es/perro.mp3");
            this.nativeAudio.setVolumeForComplexAsset('perro', 1);
            this.nativeAudio.play('perro');
            setTimeout(() => this.nativeAudio.unload('perro'), 3000);
            break;
          case 'en':
            console.log("entro a en");
            this.nativeAudio.preloadSimple('dog', "assets/en/dog.mp3");
            this.nativeAudio.setVolumeForComplexAsset('dog', 1);
            this.nativeAudio.play('dog');
            setTimeout(() => this.nativeAudio.unload('dog'), 3000);
            break;
          case 'pr':
            console.log("entro a pr");
            this.nativeAudio.preloadSimple('perrop', "assets/pr/perro.mp3");
            this.nativeAudio.setVolumeForComplexAsset('perrop', 1);
            this.nativeAudio.play('perrop');
            setTimeout(() => this.nativeAudio.unload('perrop'), 3000);
            break;
        }
        break;
      case 'cerdo':
        switch (this.idiomaSele) {
          case 'es':
            console.log("entro a es");
            this.nativeAudio.preloadSimple('cerdo', "assets/es/cerdo.mp3");
            this.nativeAudio.setVolumeForComplexAsset('cerdo', 1);
            this.nativeAudio.play('cerdo');
            setTimeout(() => this.nativeAudio.unload('cerdo'), 3000);
            break;
          case 'en':
            console.log("entro a en");
            this.nativeAudio.preloadSimple('pig', "assets/en/pig.mp3");
            this.nativeAudio.setVolumeForComplexAsset('pig', 1);
            this.nativeAudio.play('pig');
            setTimeout(() => this.nativeAudio.unload('pig'), 3000);
            break;
          case 'pr':
            console.log("entro a pr");
            this.nativeAudio.preloadSimple('porcop', "assets/pr/porco.mp3");
            this.nativeAudio.setVolumeForComplexAsset('porcop', 1);
            this.nativeAudio.play('porcop');
            setTimeout(() => this.nativeAudio.unload('porcop'), 3000);
            break;
        }
        break;
      case 'vaca':
        switch (this.idiomaSele) {
          case 'es':
            console.log("entro a es");
            this.nativeAudio.preloadSimple('vaca', "assets/es/vaca.mp3");
            this.nativeAudio.setVolumeForComplexAsset('vaca', 1);
            this.nativeAudio.play('vaca');
            setTimeout(() => this.nativeAudio.unload('vaca'), 3000);
            break;
          case 'en':
            console.log("entro a en");
            this.nativeAudio.preloadSimple('cow', "assets/en/cow.mp3");
            this.nativeAudio.setVolumeForComplexAsset('cow', 1);
            this.nativeAudio.play('cow');
            setTimeout(() => this.nativeAudio.unload('cow'), 3000);
            break;
          case 'pr':
            console.log("entro a pr");

            this.nativeAudio.preloadSimple('vacap', "assets/pr/vaca.mp3");
            this.nativeAudio.setVolumeForComplexAsset('vacap', 1);
            this.nativeAudio.play('vacap');
            setTimeout(() => this.nativeAudio.unload('vacap'), 3000);
            break;
        }
        break;
      case 'oveja':
        switch (this.idiomaSele) {
          case 'es':
            console.log("entro a es");
            this.nativeAudio.preloadSimple('oveja', "assets/es/oveja.mp3");
            this.nativeAudio.setVolumeForComplexAsset('oveja', 1);
            this.nativeAudio.play('oveja');
            setTimeout(() => this.nativeAudio.unload('oveja'), 3000);
            break;
          case 'en':
            console.log("entro a en");

            this.nativeAudio.preloadSimple('sheep', "assets/en/sheep.mp3");
            this.nativeAudio.setVolumeForComplexAsset('sheep', 1);
            this.nativeAudio.play('sheep');
            setTimeout(() => this.nativeAudio.unload('sheep'), 3000);
            break;
          case 'pr':
            console.log("entro a pr");
            this.nativeAudio.preloadSimple('ovejap', "assets/pr/oveja.mp3");
            this.nativeAudio.setVolumeForComplexAsset('ovejap', 1);
            this.nativeAudio.play('ovejap')
            setTimeout(() => this.nativeAudio.unload('ovejap'), 3000);
            break;
        }
        break;
    }
  }
}
