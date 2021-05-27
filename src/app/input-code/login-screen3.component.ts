import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-screen3',
  templateUrl: './login-screen3.component.html',
  styleUrls: ['./login-screen3.component.css'],
})
export class LoginScreen3Component implements OnInit {
  password: string;
  count: number;
  errMsg = '';

  constructor(public userService: UserService, private router: Router) {
    this.count = 0;
  }

  ngOnInit(): void {}
  chackPassword(p1: string, p2: string, p3: string, p4: string): void {
    this.password = p1;
    this.password += p2;
    this.password += p3;
    this.password += p4;

    this.userService.varifactionCode(this.password).subscribe((data) => {
      console.log(data);
      if (data.msg) {
        this.router.navigate(['/faceScan']);
      } else {
        this.errMsg = 'The input password not matched, try again';
      }
    });
  }

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

  resend() {
    this.userService.sendSms().subscribe(data => {console.log(data)});
  }
}
