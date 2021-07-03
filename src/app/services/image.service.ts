import { TestService } from './test.service';
import { UserService } from './user.service';
import { Injectable, Query } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  query;
  fileDetailsList: AngularFireList<any>;

  constructor(private Firebase: AngularFireDatabase, private userService: UserService, private testService: TestService) { }

  getImageDetailList() {

    //this.fileDetailsList = this.Firebase.list('fileDetails')
    //this.query = this.testService.userRoll == 100 ? this.userService.currentSuperVisor.medicalInstitution : this.userService.currentSuperVisor.medicalInstitution;
    this.fileDetailsList = this.Firebase.list('fileDetails',
      ref => ref.orderByChild('medInstatution').equalTo(this.userService.currentUser.medicalInstitution || this.userService.currentSuperVisor.medicalInstitution)
    );

  }

  insertImageDetails(formValues) {

    this.fileDetailsList.push(formValues);
  }
}

// var ref = firebase.database().ref("dinosaurs");
//      ref.orderByKey().endAt("pterodactyl").on("child_added", function(snapshot) {
//        console.log(snapshot.key);
