import {Component, OnInit, ViewChild} from '@angular/core';

import {Chart} from 'chart.js';

import {ApexChart, ApexNonAxisChartSeries, ApexResponsive, ChartComponent} from "ng-apexcharts";
import {ProcessorServiceService} from "../../services/serviceApi/processor/processor-service.service";
import {Type} from "../../services/model/Type";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;

};

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})

export class PageHomeComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  nbFS:number=0;
  nbWeb:number=0;
  nbBd:number=0;
  nbStatusTotal:number=0;
  nbStatusActif:number=0;
  nbStatusInactif:number=0;

  constructor(private processorService:ProcessorServiceService) {

  }

  ngOnInit() {
    this.processorService.countProcessorType("FS").subscribe(nb=>{
      this.nbFS=nb
      console.log(nb)
    })
    this.processorService.countProcessorType("WEB").subscribe(nb=>{
      this.nbWeb=nb
      console.log(nb)
    })
    this.processorService.countProcessorType("DB").subscribe(nb=>{
      this.nbBd=nb
      console.log(nb)
    })
    this.processorService.countProcessor().subscribe(nb=>{
      this.nbStatusTotal=nb;
      console.log(nb)
    })
    this.processorService.countProcessorStatus("Actif").subscribe(nb=>{
      this.nbStatusActif=nb
      console.log(nb)
    })
    this.processorService.countProcessorStatus("Inactif").subscribe(nb=>{
      this.nbStatusInactif=nb
      console.log(nb)
    })
    setTimeout(()=>{
      this.chartOptions = {
        series: [this.nbWeb, this.nbFS, this.nbBd],
        chart: {
          width: 350,
          type: "pie"
        },
        labels: ["WEB", "FS", "BD"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                show: true,
                position: 'bottom',
                horizontalAlign: 'center'
              },
            }
          }
        ],

      }
      },500
    )

  }
  ngAfterViewInit() {
    let data: any,
      options: any,
      chart: any,
      ctx: any = document.getElementById('areaChart') as HTMLElement;



    data = {
      labels: ['WEB', 'FS', 'BD'],
      datasets: [
        {
          label: 'WEB',
          data: [0, 50, 45, 100],
          backgroundColor: 'rgb(0, 227, 150)',
          borderColor: 'rgba(39,100,79,0.95)',
          fill: true,
          lineTension: 0,
          radius: 5,
        },
        {
          label: 'FS',
          data: [30, 90, 111, 20],
          backgroundColor: 'rgb(69,168,252)',
          borderColor: '#077dd0',
          fill: true,
          lineTension: 0.2,
          radius: 5,
        },
        {
          label: 'BD',
          data: [40, 80, 90, 60],
          backgroundColor: 'rgb(246,184,77)',

          borderColor: '#ffe29a',
          fill: true,
          lineTension: 0.2,
          radius: 5,
        },
      ],
    };

    options = {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        position: 'top',
        text: 'Collecteur des données',
        fontSize: 16,
        fontColor: '#728e9b',
/*
        fontFamily:''
*/
      },
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          fontColor: '#999',
          fontSize: 14,

        },
      },
    };

    chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options,
    });
  }
}
