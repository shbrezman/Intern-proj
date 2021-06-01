import { Router } from '@angular/router';
import { UserModel } from '../../models/user-model';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-acces',
  templateUrl: './login-acces.component.html',
  styleUrls: ['./login-acces.component.css'],
})
export class LoginAccesComponent implements OnInit {
  count: number;
  password: string;
  errMsg: string;
  constructor(private userService: UserService, private router: Router) {
    this.count = 0;
  }

  ngOnInit(): void {}

  autotab(original, destination) {
    if (
      original.getAttribute &&
      original.value.length == original.getAttribute('maxlength')
    )
      destination.focus();
    if (original.value > 0 && original.value < 10) {
      this.count++;
    }
  }

  sendClick(input: string) {
    this.userService.currentUser.phoneNumber = input;
    this.userService.sendSms().subscribe((data) => {
      console.log(data);
    });
  }
  chackPassword(p1: string, p2: string, p3: string, p4: string): void {
    this.password = p1;
    this.password += p2;
    this.password += p3;
    this.password += p4;
    

    this.userService.varifactionCode(this.password).subscribe((data) => {
      console.log(data);
      if (data.msg) {
        this.userService
          .getUser(this.userService.currentUser.phoneNumber)
          .subscribe((user) => {
            this.userService.currentUser = user as UserModel;
            this.userService.IdentifiedUser = true;
            this.router.navigate(['/user-board']);
          },(err) =>{
            this.errMsg = 'this phone number not register, please try different number';
          });
      } else {
        this.errMsg = 'The input password not matched, try again';
      }
    });
  }
}
