import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';


@Component({
  selector: 'app-file-list',
  templateUrl: './file-list.component.html',
  styleUrls: ['./file-list.component.css']
})
export class FileListComponent implements OnInit {

  fileList: any[];


  constructor(private imageService: ImageService) { }

  ngOnInit() {

    this.imageService.fileDetailsList.snapshotChanges().subscribe(
      list => {
        this.fileList = list.map(item => { return item.payload.val(); });
      }
    );
  }
}
