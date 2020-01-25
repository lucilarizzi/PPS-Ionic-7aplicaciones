import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner2',
  templateUrl: './spinner2.component.html',
  styleUrls: ['./spinner2.component.scss'],
})
export class Spinner2Component implements OnInit {

  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  public showContent: boolean = false;
  constructor() {
    this.lottieConfig = {
      path: 'assets/ani2/data.json',
      loop: true
  };
  }

  ngOnInit() {}

}
