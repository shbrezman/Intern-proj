import { TestService } from './../services/test.service';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  constructor(public imageService:ImageService, public testService: TestService, private router: Router) { }

  ngOnInit() {
    this.imageService.getImageDetailList();
  }

  nav(){
    if (this.testService.userRoll == 100){
      this.router.navigate(['/user-board']);
    }else{
      this.router.navigate(['/supervisor-board']);
    }
  }

}
