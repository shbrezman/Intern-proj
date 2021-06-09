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
            if(user.roleNumber == 300)
            {
              this.userService.currentSuperAdmin = user;
              this.userService.getAllUsers(undefined, 200).subscribe(list =>{
                this.userService.supervisors = list;
                console.log(list)
              }, err => console.log(err))
              this.router.navigate(['/superadmin-board'])
            }
            if(user.roleNumber == 200)
            {
              this.userService.currentSuperVisor = user;
              this.userService.getAllUsers(this.userService.currentSuperVisor.medicalInstitution, 100)
              .subscribe(list =>{
                this.userService.users = list as UserModel[];
                console.log(this.userService.users)

              },err => console.log(err))
              setTimeout(() => {
                this.router.navigate(['/supervisor-board'])
              }, 1000);

            }
            if(user.roleNumber == 100)
            {
              this.userService.currentUser = user;
              this.router.navigate(['/user-board']);
            }

          },(err) =>{
            this.errMsg = 'this phone number not register, please try different number';
          });
          this.userService.IdentifiedUser = true;
      } else {
        this.errMsg = 'The input password not matched, try again';
      }
    });
  }
}