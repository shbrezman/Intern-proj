import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TestService } from '../services/test.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-exam-page',
  templateUrl: './exam-page.component.html',
  styleUrls: ['./exam-page.component.css']
})
export class ExamPageComponent implements OnInit {

  charNum = 65;

  constructor(public userService: UserService, public testService: TestService, private router: Router) {



  }

  clic(value){
    console.log(value);

    console.log();


  }

  ngOnInit(): void {
  }

}
