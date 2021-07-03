import { UserService } from './../services/user.service';
import { questionModel } from './../models/question-model';
import { testModel } from './../models/test-model';
import { TestService } from './../services/test.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  arr

  constructor(public testService: TestService, private userService: UserService, private router: Router) {

    this.arr = [0, 1, 2]

    testService.test.questions = [new questionModel, new questionModel, new questionModel]

      testService.test.questions[0].answers = ["", "", "", ""];
      testService.test.questions[1].answers = ["", "", "", ""];
      testService.test.questions[2].answers = ["", "", "", ""];
      // testService.test.questions[3].answers = ["", "", "", ""];
      // testService.test.questions[4].answers = ["", "", "", ""];
      // testService.test.questions[5].answers = ["", "", "", ""];
      // testService.test.questions[6].answers = ["", "", "", ""];
      // testService.test.questions[7].answers = ["", "", "", ""];
      // testService.test.questions[8].answers = ["", "", "", ""];
      // testService.test.questions[9].answers = ["", "", "", ""];

   }

  ngOnInit(): void {
  }
  create(){
    console.log(this.testService.test);
    for (let i = 0; i < this.userService.users.length; i++) {
      this.userService.users[i].tests = [...this.userService.users[i].tests, this.testService.test]
      this.userService.updateUser(this.userService.users[i].id, {tests: this.userService.users[i].tests}).subscribe(data =>{
        if(data){
          console.log(data)
        }
      },err =>{console.log(err);} )

    }
    this.testService.test = new testModel;
    this.router.navigate(['/supervisor-board'])


  }
}
