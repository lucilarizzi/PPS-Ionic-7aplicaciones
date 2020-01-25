import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { ArchivosFirebaseService } from 'src/app/service/archivos-firebase.service';
import { Cosas } from 'src/app/clases/cosas';
@Component({
  selector: 'app-graf-cicle',
  templateUrl: './graf-cicle.page.html',
  styleUrls: ['./graf-cicle.page.scss'],
})
export class GrafCiclePage implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}],   
    yAxes: [{
      ticks: {
          suggestedMin: 0,
          suggestedMax: 10
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
  public barChartType: ChartType = 'pie';
  public barChartPlugins = [pluginDataLabels];
  public barChartData: ChartDataSets[] = [
    { data: [] },

  ];

  public chartColors: any[] = [
    {
      backgroundColor: [' red','gb(10, 98, 104)','rgb(153, 10, 117)','rgb(10, 153, 41)','#ef0051','#2291ff']   

    }];
  public laData=[];



  constructor(private servicioFOto: ArchivosFirebaseService) { }

  ngOnInit() {


    this.servicioFOto.traertodos(localStorage.getItem('cosas')).subscribe(user => {
      user.forEach(userData => {
        let data = userData.payload.doc.data() as Cosas;
        let id = userData.payload.doc.id;
        data.uid = id;
        this.barChartLabels.push(data.nombreArchivo.slice(0,10));
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

  
}