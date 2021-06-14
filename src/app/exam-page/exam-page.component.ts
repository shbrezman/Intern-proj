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


  constructor(public userService: UserService, public testService: TestService, private router: Router) {

    this.test = {
      title: "math",
      questions: [
        {body : "2+2", answers : ["2", "4", "6", "22"], rightAnswer: "B", correct: null, examineeAnswer: ""},
        {body : "4+2", answers : ["2", "8", "6", "62"], rightAnswer: "C", correct: null, examineeAnswer: ""},
        {body : "11+11", answers : ["2", "42", "4", "22"], rightAnswer: "D", correct: null, examineeAnswer: ""},
      ],
      score: null

    }

  }

  clic(value, qIndex){

    this.testService.currentTest.questions[qIndex].examineeAnswer = String.fromCharCode(65 + parseInt(value));
    console.log(this.testService.currentTest.questions[qIndex].examineeAnswer);



    this.testService.currentTest.questions[qIndex].correct = this.testService.currentTest.questions[qIndex].examineeAnswer == this.testService.currentTest.questions[qIndex].rightAnswer
  }

  sendTest(){

    this.testService.currentTest.score = 0;
    this.testService.currentTest.questions.forEach(element => {
      if(element.correct) this.testService.currentTest.score += 10;
    });
    console.log(this.testService.currentTest.score);

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
