import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-super-board',
  templateUrl: './super-board.component.html',
  styleUrls: ['./super-board.component.css'],
})
export class SuperBoardComponent implements OnInit {


  demoUser = {
    _id: '60b74b6a06514318c0847352',
    name: 'supervisor',
    age: 31,
    id: '4ads399aa8348',
    passportNumber: '000000000',
    phoneNumber: '888',
    roleType: 'supervisor',
    roleNumber: 200,
    img: 'some data',
    country: 'israel',
    city: 'jerusalem',
    academicInstitution: 'suroka',
    graduationYear: 2000,
    medicalInstitution: 'ziv',
    residancy: 'ma ze',
    department: 'heart',
    residancyYear: 3,
  };

  demoList = [
    {
      academicInstitution: 'suroka',
      age: 31,
      city: 'jerusalem',
      country: 'israel',
      department: 'heart',
      graduationYear: 2000,
      id: '4ads399aa8348',
      img: 'some data',
      medicalInstitution: 'ziv',
      name: 'intern1',
      passportNumber: '000000000',
      phoneNumber: '112',
      residancy: 'ma ze',
      residancyYear: 3,
      roleNumber: 100,
      roleType: 'inten',
      tests: [
        {
          _id: '60b74d5d06514318c0847369',
          title: 'practice1',
          date: '1999-12-31T22:00:00.000Z',
          score: 80,
        },
        {
          _id: '60b74d5d06514318c084736a',
          title: 'practice2',
          date: '2000-01-31T22:00:00.000Z',
          score: 30,
        },
        {
          _id: '60b74d5d06514318c084736b',
          title: 'practice3',
          date: '2000-01-31T22:00:00.000Z',
          score: 75,
        },
        {
          _id: '60b74d5d06514318c084736c',
          title: 'practice4',
          date: '2000-01-31T22:00:00.000Z',
          score: null,
        },
        {
          _id: '60b74d5d06514318c084736d',
          title: 'practice5',
          date: null,
          score: null,
        },
      ],
      practices: [
        { title: 'test1', date: '2000-01-02T22:00:00.000Z', score: 90 },
        { title: 'test2', date: '2000-02-02T22:00:00.000Z', score: 70 },
        { title: 'test3', date: '2000-02-02T22:00:00.000Z', score: 100 },
        { title: 'test4', date: '2000-02-02T22:00:00.000Z', score: null },
        { title: 'test5', date: null, score: null },
      ],
    },
    {
      academicInstitution: 'suroka',
      age: 31,
      city: 'jerusalem',
      country: 'israel',
      department: 'heart',
      graduationYear: 2000,
      id: '4ads399aa8348',
      img: 'some data',
      medicalInstitution: 'ziv',
      name: 'intern2',
      passportNumber: '000000000',
      phoneNumber: '112',
      residancy: 'ma ze',
      residancyYear: 3,
      roleNumber: 100,
      roleType: 'inten',
      tests: [
        {
          _id: '60b74d5d06514318c0847369',
          title: 'practice1',
          date: '1999-12-31T22:00:00.000Z',
          score: 80,
        },
        {
          _id: '60b74d5d06514318c084736a',
          title: 'practice2',
          date: '2000-01-31T22:00:00.000Z',
          score: 100,
        },
        {
          _id: '60b74d5d06514318c084736b',
          title: 'practice3',
          date: '2000-01-31T22:00:00.000Z',
          score: 75,
        },
        {
          _id: '60b74d5d06514318c084736c',
          title: 'practice4',
          date: '2000-01-31T22:00:00.000Z',
          score: null,
        },
        {
          _id: '60b74d5d06514318c084736d',
          title: 'practice5',
          date: null,
          score: null,
        },
      ],
      practices: [
        { title: 'test1', date: '2000-01-02T22:00:00.000Z', score: 90 },
        { title: 'test2', date: '2000-02-02T22:00:00.000Z', score: 70 },
        { title: 'test3', date: '2000-02-02T22:00:00.000Z', score: 100 },
        { title: 'test4', date: '2000-02-02T22:00:00.000Z', score: null },
        { title: 'test5', date: null, score: null },
      ],
    },
    {
      academicInstitution: 'suroka',
      age: 31,
      city: 'jerusalem',
      country: 'israel',
      department: 'heart',
      graduationYear: 2000,
      id: '4ads399aa8348',
      img: 'some data',
      medicalInstitution: 'ziv',
      name: 'intern3',
      passportNumber: '000000000',
      phoneNumber: '112',
      residancy: 'ma ze',
      residancyYear: 3,
      roleNumber: 100,
      roleType: 'inten',
      tests: [
        {
          _id: '60b74d5d06514318c0847369',
          title: 'practice1',
          date: '1999-12-31T22:00:00.000Z',
          score: 80,
        },
        {
          _id: '60b74d5d06514318c084736a',
          title: 'practice2',
          date: '2000-01-31T22:00:00.000Z',
          score: 100,
        },
        {
          _id: '60b74d5d06514318c084736b',
          title: 'practice3',
          date: '2000-01-31T22:00:00.000Z',
          score: 75,
        },
        {
          _id: '60b74d5d06514318c084736c',
          title: 'practice4',
          date: '2000-01-31T22:00:00.000Z',
          score: null,
        },
        {
          _id: '60b74d5d06514318c084736d',
          title: 'practice5',
          date: null,
          score: null,
        },
      ],
      practices: [
        { title: 'test1', date: '2000-01-02T22:00:00.000Z', score: 90 },
        { title: 'test2', date: '2000-02-02T22:00:00.000Z', score: 70 },
        { title: 'test3', date: '2000-02-02T22:00:00.000Z', score: 100 },
        { title: 'test4', date: '2000-02-02T22:00:00.000Z', score: null },
        { title: 'test5', date: null, score: null },
      ],
    },
    {
      academicInstitution: 'suroka',
      age: 31,
      city: 'jerusalem',
      country: 'israel',
      department: 'heart',
      graduationYear: 2000,
      id: '4ads399aa8348',
      img: 'some data',
      medicalInstitution: 'ziv',
      name: 'intern4',
      passportNumber: '000000000',
      phoneNumber: '112',
      residancy: 'ma ze',
      residancyYear: 3,
      roleNumber: 100,
      roleType: 'inten',
      tests: [
        {
          _id: '60b74d5d06514318c0847369',
          title: 'practice1',
          date: '1999-12-31T22:00:00.000Z',
          score: 80,
        },
        {
          _id: '60b74d5d06514318c084736a',
          title: 'practice2',
          date: '2000-01-31T22:00:00.000Z',
          score: 100,
        },
        {
          _id: '60b74d5d06514318c084736b',
          title: 'practice3',
          date: '2000-01-31T22:00:00.000Z',
          score: 75,
        },
        {
          _id: '60b74d5d06514318c084736c',
          title: 'practice4',
          date: '2000-01-31T22:00:00.000Z',
          score: null,
        },
        {
          _id: '60b74d5d06514318c084736d',
          title: 'practice5',
          date: null,
          score: null,
        },
      ],
      practices: [
        { title: 'test1', date: '2000-01-02T22:00:00.000Z', score: 90 },
        { title: 'test2', date: '2000-02-02T22:00:00.000Z', score: 70 },
        { title: 'test3', date: '2000-02-02T22:00:00.000Z', score: 100 },
        { title: 'test4', date: '2000-02-02T22:00:00.000Z', score: null },
        { title: 'test5', date: null, score: null },
      ],
    },
    {
      academicInstitution: 'suroka',
      age: 31,
      city: 'jerusalem',
      country: 'israel',
      department: 'heart',
      graduationYear: 2000,
      id: '4ads399aa8348',
      img: 'some data',
      medicalInstitution: 'ziv',
      name: 'intern5',
      passportNumber: '000000000',
      phoneNumber: '112',
      residancy: 'ma ze',
      residancyYear: 3,
      roleNumber: 100,
      roleType: 'inten',
      tests: [
        {
          _id: '60b74d5d06514318c0847369',
          title: 'practice1',
          date: '1999-12-31T22:00:00.000Z',
          score: 80,
        },
        {
          _id: '60b74d5d06514318c084736a',
          title: 'practice2',
          date: '2000-01-31T22:00:00.000Z',
          score: 100,
        },
        {
          _id: '60b74d5d06514318c084736b',
          title: 'practice3',
          date: '2000-01-31T22:00:00.000Z',
          score: 75,
        },
        {
          _id: '60b74d5d06514318c084736c',
          title: 'practice4',
          date: '2000-01-31T22:00:00.000Z',
          score: null,
        },
        {
          _id: '60b74d5d06514318c084736d',
          title: 'practice5',
          date: null,
          score: null,
        },
      ],
      practices: [
        { title: 'test1', date: '2000-01-02T22:00:00.000Z', score: 90 },
        { title: 'test2', date: '2000-02-02T22:00:00.000Z', score: 70 },
        { title: 'test3', date: '2000-02-02T22:00:00.000Z', score: 100 },
        { title: 'test4', date: '2000-02-02T22:00:00.000Z', score: null },
        { title: 'test5', date: null, score: null },
      ],
    }
  ];

  internsAbove80 = 0;
  allScore = 0;

  constructor(public userService: UserService) {
    this.demoList.forEach(element => {
      var scoreCount = 0;
      var itaretionCount = 0;
      element.tests.forEach(element => {
        if(element.score){
          scoreCount += element.score;
          itaretionCount ++;
        };
      });
      this.allScore += scoreCount / itaretionCount
      if (scoreCount / itaretionCount > 80) this.internsAbove80++
    });
  }

  ngOnInit(): void {}
}
