import { TestService } from './../services/test.service';
import { UserModel } from '../models/user-model';
import { UserService } from '../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
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
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.css'],
})
export class UserBoardComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  @ViewChild("chart2") chart2: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions2: Partial<ChartOptions>;

  singleScore: number;
  practiceResults = [];
  testsResults = [];

  lastTest = this.userService.currentUser.tests[0];
  lastPractice = this.userService.currentUser.practices[0];

  constructor(public userService: UserService, private testService: TestService, private router: Router) {

    this.userService.currentUser.tests.find( test =>{
      this.testsResults.push(test.score);
      if(test.date > this.lastTest.date){
        this.lastTest= test;
      }
    })

    this.userService.currentUser.practices.find( practice =>{
      this.practiceResults.push(practice.score);
      if(practice.date > this.lastPractice.date){
        this.lastPractice = practice;
      }
    })

    this.chartOptions = {
      series: [
        {
          name: "score",
          data: this.testsResults,
          color: "#66ff66"
        }
      ],
      chart: {
        height: 210,
        width: 430,
        type: "line",
        zoom: {
          enabled: false
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
    };

    this.chartOptions2 = {
      series: [
        {
          name: "score",
          data: this.practiceResults,
          color: "#80ffff"
        }
      ],
      chart: {
        height: 210,
        width: 430,
        type: "line",
        zoom: {
          enabled: false
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
      }
    };

  }

  showExam(index): void{
    this.testService.currentTest = this.userService.currentUser.tests[index];
    this.router.navigate(['/exam-page'])
  }

  showPractice(index): void{
    this.testService.currentTest = this.userService.currentUser.practices[index];
    this.router.navigate(['/exam-page'])
  }

  ngOnInit(): void {
    console.log(this.userService.currentUser);

  }
}
