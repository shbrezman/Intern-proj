import { TestService } from './../services/test.service';
import { UserService } from '../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
import { Router } from '@angular/router';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-super-board',
  templateUrl: './super-board.component.html',
  styleUrls: ['./super-board.component.css'],
})
export class SuperBoardComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;




  internsAbove80 = 0;
  allScore = 0;
  overallLastTestScore = [];
  averageDevision = 0;

  constructor(public userService: UserService, private router: Router, public testService: TestService) {

    for (let i = 0; i < userService.users.length; i++) {
      var lastTestDate = null;
      var lastTestScore = null;
      for (let j = 0; j < userService.users[i].tests.length; j++) {

        if((!lastTestDate && userService.users[i].tests[j].date) ||
          (lastTestDate && userService.users[i].tests[j].date && userService.users[i].tests[j].date > lastTestDate)){
          lastTestScore = userService.users[i].tests[j].score;
          lastTestDate = userService.users[i].tests[j].date;
        }

      }
      this.userService.users[i]['lastScore'] =  lastTestScore;
      this.userService.users[i]['lastTestDate'] = lastTestDate;
      this.overallLastTestScore.push(lastTestScore);
    }


    for (let i = 0; i < userService.users.length; i++) {
      var scoreCount = null;
      var itaretionCount = null;
      this.userService.users[i]['tsetsTaken'] = 0;

        for (let j = 0; j < this.userService.users[i].tests.length; j++){
          if(this.userService.users[i].tests[j].score){
            scoreCount += this.userService.users[i].tests[j].score;
            itaretionCount ++;
            this.userService.users[i]['tsetsTaken'] ++;
          }
        }
      this.userService.users[i]['internAverage'] = scoreCount / this.userService.users[i]['tsetsTaken']
      if(scoreCount && itaretionCount){
        this.allScore += scoreCount / itaretionCount;
        this.averageDevision ++;
      }


      if (scoreCount / itaretionCount > 80) this.internsAbove80++
    }

    this.chartOptions = {
      series: [
        {
          name: "score",
          data: this.overallLastTestScore,
          color: "#66ff66"
        }
      ],

      chart: {
        height: 320,
        width: 1050,
        type: "scatter",
        zoom: {
          enabled: false,
          type:'xy'
        }
      },

      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          "",
          ""
        ]
      },
      yaxis: {
        min: 0,
        max: 100,
        tickAmount: 5
      }


    };
  }

  internClick(index): void{
    this.userService.currentUser = this.userService.users[index];
    this.router.navigate(['/user-board'])
  }



  ngOnInit(): void {}
}
