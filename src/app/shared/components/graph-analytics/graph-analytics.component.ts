import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { RouterModule } from '@angular/router';
// import { NgApexchartsModule } from 'ng-apexcharts';
import { ApexTheme, NgApexchartsModule , ApexOptions } from 'ng-apexcharts';
// import { ChartDB } from 'src/app/fack-db/chartData';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexLegend,
  ApexFill,
  ApexGrid,
  ApexPlotOptions,
  ApexTooltip,
  ApexMarkers
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  tooltip: ApexTooltip;
  labels: string[];
  colors: string[];
  legend: ApexLegend;
  fill: ApexFill;
  grid: ApexGrid;
  markers: ApexMarkers;
  theme: ApexTheme;
};

@Component({
  standalone: true,
  imports: [CommonModule, 
    NgApexchartsModule,
    RouterModule],
  selector: 'app-graph-analytics',
  templateUrl: './graph-analytics.component.html',
  styleUrl: './graph-analytics.component.scss',

})
export class AnalyticsGraphComponent implements OnInit {
  @Input() plotGraphData: any[] = []; 
 


  chartDB: any;
  bar1CAC!: ApexOptions;

  constructor(){
    // this.chartDB = ChartDB;
    const { bar1CAC} = this.chartDB;
    this.bar1CAC = bar1CAC;
  }

  // public props
  @ViewChild('chart') chart!: ChartComponent;
  @ViewChild('customerChart') customerChart!: ChartComponent;
  chartOptions!: Partial<ChartOptions>;
  chartOptions_1!: Partial<ChartOptions>;
  chartOptions_2!: Partial<ChartOptions>;
  chartOptions_3!: Partial<ChartOptions>;
 
 
  ngOnInit(): void {

    if(this.plotGraphData){
      this.createChart(); 
      this.plotGraphData = this.plotGraphData;  
    }
  }

 

createChart() {
 
    // Safely handle undefined or missing properties
    const candidates = this.plotGraphData?.map((item: any) => item?.name || 'Unknown Candidate');  
    const weeklyVotes = this.plotGraphData?.map((item: any) => item.weeklyVotes ?? 0);  
  
    // console.log('Candidates:', candidates);
    // console.log('Weekly Votes:', weeklyVotes);
  
    if (!candidates.length || !weeklyVotes.length) {
      console.error('Invalid data for chart rendering');
      return;
    }

  // Now update the chart options with data for series and xaxis
  this.bar1CAC = {
      chart: {
          type: 'bar',
          height: 350
      },
      plotOptions: {
          bar: {
              horizontal: false,
              columnWidth: '55%',
              // @ts-ignore
              endingShape: 'rounded'
          }
      },
      dataLabels: {
          enabled: false
      },
      stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
      },
      series: [{
          name: 'Votes',
          data: weeklyVotes 
      }],
      xaxis: {
          categories: candidates,
      },
      yaxis: {
          title: {
              text: 'Votes'
          }
      },
      fill: {
          opacity: 1
      },
      tooltip: {
          y: {
              formatter: function (val: any) {
                  return val + " votes";
              }
          }
      }
  };
}
}



