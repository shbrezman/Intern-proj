import { UserModel } from '../../models/user-model';
import { HttpResponse } from '@angular/common/http';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filling-details',
  templateUrl: './filling-details.component.html',
  styleUrls: ['./filling-details.component.css']
})
export class FillingDetailsComponent implements OnInit {

  screen = true;
  progressNumber = 0;
  error = false;
  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  next(): void{
    this.screen = false;
    this.progressNumber = 50;
  }
  done(): void{
    this.userService.currentUser.practices = [
      {title: 'Practice1', date: null, score: null },
      {title: 'Practice2', date: null, score: null },
      {title: 'Practice3', date: null, score: null },
      {title: 'Practice4', date: null, score: null },
      {title: 'Practice5', date: null, score: null },
    ];

    this.userService.currentUser.tests = [
      {title: 'Test1', date: null, score: null },
      {title: 'Test2', date: null, score: null },
      {title: 'Test3', date: null, score: null },
      {title: 'Test4', date: null, score: null },
      {title: 'Test5', date: null, score: null },
    ];


    this.userService.registerUser(this.userService.currentUser).subscribe(data =>{
      if(data){
        this.router.navigate(['/end-of-registration'])
      }
    },
    error =>{
      console.log(error)
     this.error = true;
    }
      )
  }

}
