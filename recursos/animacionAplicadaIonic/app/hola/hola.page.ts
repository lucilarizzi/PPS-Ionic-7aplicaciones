import { Component, OnInit } from '@angular/core';
import { Router, Route } from '@angular/router';
import { HomePageModule } from '../home/home.module'
import { HomePage } from '../home/home.page';
@Component({
  selector: 'app-hola',
  templateUrl: './hola.page.html',
  styleUrls: ['./hola.page.scss'],
})
export class HolaPage implements OnInit {

  mesaActual:string;

  constructor(/* private mesa:HomePageModule */) 
  {
    console.log(" ");
   /*  this.mesaActual = mesa.; */

   }

  ngOnInit() {
  }

}
