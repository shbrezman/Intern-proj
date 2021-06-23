import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  fileDetailsList: AngularFireList<any>;

  constructor(private firebase: AngularFireDatabase) { }

  getImageDetailList() {
    this.fileDetailsList = this.firebase.list('fileDetails');
  }

  insertImageDetails(formValues) {

    this.fileDetailsList.push(formValues);
  }
}
