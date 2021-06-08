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


  demoUser = {
    name: 'shlomi brezman123',
    age: 31,
    id: '4ads399aa8348',
    passportNumber: '000000000',
    phoneNumber: '111',
    img: "mbdsvkjb",
    country: 'israel',
    city: 'jerusalem',
    academicInstitution: 'suroka',
    graduationYear: 2000,
    medicalInstitution: 'ziv',
    residancy: 'ma ze',
    department: 'heart',
    residancyYear: 3,
    practices: [
      { title: 'practice1', date: new Date(2020,3,6), score: 88 },
      { title: 'practice2', date: new Date(2020,4,8), score: 97 },
      { title: 'practice3', date: new Date(2020,6,12), score: 92 },
      { title: 'practice4', date: null, score: null },
      { title: 'practice5', date: null, score: null },
    ],
    tests: [
      { title: 'test1', date: new Date(2020,8,6), score: 90 },
      { title: 'test2', date: new Date(2020,10,8), score: 95 },
      { title: 'test3', date: new Date(2020,10,10), score: 89 },
      { title: 'test4', date: null, score: null },
      { title: 'test5', date: null, score: null },
    ]
  };

  lastTest = this.demoUser.tests[0];
  lastPractice = this.demoUser.practices[0];

  constructor(public userService: UserService) {

    this.demoUser.tests.find( test =>{
      this.testsResults.push(test.score);
      if(test.date > this.lastTest.date){
        this.lastTest= test;
      }
    })

    this.demoUser.practices.find( practice =>{
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

  ngOnInit(): void {
    console.log(this.userService.currentUser);

  }
}
