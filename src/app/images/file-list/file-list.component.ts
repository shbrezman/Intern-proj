import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-file-list',
  templateUrl: './File-list.component.html'
})
export class FileListComponent implements OnInit {

  fileList: any[];


  constructor(private service: ImageService) { }

  ngOnInit() {
    this.service.fileDetailsList.snapshotChanges().subscribe(
      list => {
        this.fileList = list.map(item => { return item.payload.val(); });

        console.log(this.fileList);
      }
    );
  }

  show(item){
    console.log(item);
  }
}