import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {WebcamImage} from 'ngx-webcam';
import {Subject, Observable} from 'rxjs';

@Component({
  selector: 'app-face-scan',
  templateUrl: './face-scan.component.html',
  styleUrls: ['./face-scan.component.css']
})
export class FaceScanComponent implements OnInit {

  activ = true;

  public webcamImage: WebcamImage = null;
  private trigger: Subject<void> = new Subject<void>();
  triggerSnapshot(): void {
  this.trigger.next();

  }
  handleImage(webcamImage: WebcamImage): void {
    
    this.webcamImage = webcamImage;

    this.userService.currentUser.img = webcamImage.imageAsDataUrl;
   }

   public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
   }
  constructor(public userService: UserService) { }

  ngOnInit(): void {

  }
  finished(): void{
    this.activ = false;

    this.userService.IdentifiedUser = true;

  }

}
