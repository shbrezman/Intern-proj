import { UserModel } from './../models/user-model';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-acces',
  templateUrl: './login-acces.component.html',
  styleUrls: ['./login-acces.component.css']
})
export class LoginAccesComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  loginClick(input: string){
    this.userService.getUser(input).subscribe(user =>{
      this.userService.currentUser = user as UserModel;
      console.log(this.userService.currentUser)
    })
  }
}
