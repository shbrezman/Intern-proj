import { environment } from './../../../environments/environment';
import { TestService } from './../../services/test.service';
import { UserModel } from '../../models/user-model';
import { HttpResponse } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { testModel } from 'src/app/models/test-model';
import { questionModel } from 'src/app/models/question-model';


@Component({
  selector: 'app-filling-details',
  templateUrl: './filling-details.component.html',
  styleUrls: ['./filling-details.component.css']
})
export class FillingDetailsComponent implements OnInit {

  screen = true;
  progressNumber = 0;
  hospitals = environment.hospitals;

  constructor(public userService: UserService, private router: Router, private testService: TestService) { }

  ngOnInit(): void {
  }

  show(item){
    console.log(item)
  }

  next(): void{
    this.screen = false;
    this.progressNumber = 50;
  }
  done(): void{
    this.userService.currentUser.tests = environment.tests;
    this.userService.currentUser.practices = environment.practices;

    this.userService.currentUser.roleNumber = 100;
    this.testService.userRoll = 100;
    this.userService.IdentifiedUser = true;


    this.userService.registerUser(this.userService.currentUser).subscribe(data =>{
      if(data){
        this.router.navigate(['/end-of-registration'])
      }
    },
    error =>{
      console.log(error)

    }
      )
  }

}
