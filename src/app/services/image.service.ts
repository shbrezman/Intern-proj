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
    this.fileDetailsList = this.Firebase.list('fileDetails',
      ref => ref.orderByChild('medInstatution').equalTo(this.userService.currentUser.medicalInstitution || this.userService.currentSuperVisor.medicalInstitution)
    );

  }

  insertImageDetails(formValues) {

    this.fileDetailsList.push(formValues);
  }
}


