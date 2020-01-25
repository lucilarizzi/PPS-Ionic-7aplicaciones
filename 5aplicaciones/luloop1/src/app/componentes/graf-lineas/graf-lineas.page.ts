import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { ArchivosFirebaseService } from 'src/app/service/archivos-firebase.service';
import { Cosas } from 'src/app/clases/cosas';

@Component({
  selector: 'app-graf-lineas',
  templateUrl: './graf-lineas.page.html',
  styleUrls: ['./graf-lineas.page.scss'],
})
export class GrafLineasPage implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}],   
    yAxes: [{
      ticks: {
          suggestedMin: 0,
          suggestedMax: 8
      }
  }]},
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [pluginDataLabels];
  public barChartData: ChartDataSets[] = [
    { data: [] },

  ];

  public chartColors: any[] = [
    {
      backgroundColor: ['rgb(10, 98, 104)','rgb(153, 10, 117)','rgb(10, 153, 41)','#ef0051','#2291ff']   

    }];
  public laData=[];



  constructor(private servicioFOto: ArchivosFirebaseService) { }

  ngOnInit() {


    this.servicioFOto.traertodos(localStorage.getItem('cosas')).subscribe(user => {
      user.forEach(userData => {
        let data = userData.payload.doc.data() as Cosas;
        let id = userData.payload.doc.id;
        data.uid = id;
        this.barChartLabels.push(data. usuario);
        console.log(data.yaVoto.length);        
        this.laData.push(  data.yaVoto.length);
      });
    });;

    this.barChartData[0].data= this.laData;

  }
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }
}