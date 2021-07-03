import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user-model';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-superadmin-board',
  templateUrl: './superadmin-board.component.html',
  styleUrls: ['./superadmin-board.component.css']
})
export class SuperadminBoardComponent implements OnInit {

  hospitals = environment.hospitals;

  constructor(public userService: UserService, private router: Router, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  supservisorClick(index: number): void{
    this.userService.currentSuperVisor = this.userService.supervisors[index];
    this.userService.getAllUsers(this.userService.currentSuperVisor.medicalInstitution, 100)
    .subscribe(list =>{
      this.userService.users = list as UserModel[];
      console.log(this.userService.users)
      this.router.navigate(['/supervisor-board'])
    },err => console.log(err))


  }

  createSupervisor(name: string, phoneNumber: string, id: string, medicalInstitution: string): void{

    this.userService.currentSuperVisor.name = name;
    this.userService.currentSuperVisor.phoneNumber = phoneNumber;
    this.userService.currentSuperVisor.id = id;
    this.userService.currentSuperVisor.roleNumber = 200;
    this.userService.currentSuperVisor.roleType = "supervisor";
    this.userService.currentSuperVisor.medicalInstitution = medicalInstitution;
    this.userService.currentSuperVisor.img = 'https://www.mantruckandbus.com/fileadmin/media/bilder/021/man-holger-von-der-heide-interview-header.jpg';

    this.userService.registerUser(this.userService.currentSuperVisor).subscribe(data =>{
      if(data){
        console.log(data)
        this.userService.supervisors.push(data as UserModel);

      }
    },err =>{console.log(err);} )
  }
}
