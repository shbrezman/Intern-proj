import { TestService } from './../services/test.service';
import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';


@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css']
})
export class FilesComponent implements OnInit {

  constructor(private service:ImageService, public testService: TestService) { }

  ngOnInit() {
    this.service.getImageDetailList();
  }

}
