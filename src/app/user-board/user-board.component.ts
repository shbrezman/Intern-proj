import { UserModel } from './../models/user-model';
import { UserService } from './../services/user.service';
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
  public chartOptions: Partial<ChartOptions>;

  singleScore: number;

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
      { title: 'practice1', score: 88 },
      { title: 'practice2', score: 97 },
      { title: 'practice3', score: null },
      { title: 'practice4', score: null },
      { title: 'practice5', score: null },
    ],
    tests: [
      { title: 'test1', score: 90 },
      { title: 'test2', score: 95 },
      { title: 'test3', score: 65 },
      { title: 'test4', score: null },
      { title: 'test5', score: null },
    ]
  };

  constructor(public userService: UserService) {
    
    this.chartOptions = {
      series: [
        {
          name: "score",
          data: [10, 41, 35, 51, 49, 62, 69, 91]
        }
      ],
      chart: {
        height: 280,
        width: 350,
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
      title: {
        text: this.demoUser.name + " grid:",
        align: "left"
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
