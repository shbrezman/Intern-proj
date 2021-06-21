import { UserModel } from '../../models/user-model';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen2',
  templateUrl: './login-screen2.component.html',
  styleUrls: ['./login-screen2.component.css']
})
export class LoginScreen2Component implements OnInit {

  user: UserModel ;
  error = false;

  password = 0;
  constructor(private userService: UserService, private router: Router) {
    this.user = userService.currentUser;



   }

  ngOnInit(): void {

  }


  getInformation(): void{

    this.userService.currentUser = this.user;

    this.userService.getUser(this.userService.currentUser.phoneNumber).subscribe(user =>{
      this.error = true;
    },err =>{
      this.userService.sendSms().subscribe(data => {console.log(data)});
      this.router.navigate(['/loginScreen3'])
    })
  }
}
