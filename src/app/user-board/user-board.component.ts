import { UserModel } from './../models/user-model';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-board',
  templateUrl: './user-board.component.html',
  styleUrls: ['./user-board.component.css']
})
export class UserBoardComponent implements OnInit {



  constructor(public userService: UserService) {



   }

  ngOnInit(): void {
    
    console.log(this.userService.currentUser);


  }

}
