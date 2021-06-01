import { UserModel } from './../models/user-model';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.css'],
})
export class UserBoardComponent implements OnInit {

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

  constructor(public userService: UserService) {}

  ngOnInit(): void {
    console.log(this.userService.currentUser);

  }
}
