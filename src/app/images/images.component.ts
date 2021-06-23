import { TestService } from './../services/test.service';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  constructor(private service:ImageService, public testService: TestService) { }

  ngOnInit() {
    this.service.getImageDetailList();
  }

}
