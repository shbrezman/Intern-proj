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
  test;

  constructor(public userService: UserService, public testService: TestService, private router: Router) {}

  clickInput(value, qIndex){

    this.testService.currentTest.questions[qIndex].examineeAnswer = String.fromCharCode(65 + parseInt(value));
    this.testService.currentTest.questions[qIndex].correct = this.testService.currentTest.questions[qIndex].examineeAnswer == this.testService.currentTest.questions[qIndex].rightAnswer
  }

  sendTest(){

    this.testService.currentTest.date = new Date();
    this.testService.currentTest.score = 0;
    this.testService.currentTest.questions.forEach(element => {
      if(element.correct) this.testService.currentTest.score += 10;
    });

    this.userService.currentUser.tests[this.testService.currentTestIndex] = this.testService.currentTest;
    this.userService.updateUser(this.userService.currentUser.id, this.userService.currentUser.tests).subscribe(data =>{
      if(data){
        console.log(data)
      }
    },err =>{console.log(err);});
  }


  ngOnInit(): void {
  }

}
