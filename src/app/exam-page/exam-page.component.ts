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
  testSent = false;

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
    this.test.questions[qIndex].examineeAnswer = String.fromCharCode(value);
    this.test.questions[qIndex].correct = this.test.questions[qIndex].examineeAnswer == this.test.questions[qIndex].rightAnswer
  }

  sendTest(){
    this.testSent = true;
    this.test.score = 0;
    this.test.questions.forEach(element => {
      if(element.correct) this.test.score += 10;
    });
    console.log(this.test.score);

  }

  ngOnInit(): void {
  }

}
