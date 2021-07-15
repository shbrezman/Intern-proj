import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css'],
})
export class UploadFileComponent implements OnInit {
  imgSrc: string;
  selectedImage: any = null;
  isSubmitted: boolean;

  formTemplate = new FormGroup({
    caption: new FormControl('', Validators.required),
    fileUrl: new FormControl('', Validators.required),
  });

  constructor(
    private storage: AngularFireStorage,
    private imageService: ImageService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.resetForm();
  }

  showPreview(event: any) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      this.selectedImage = event.target.files[0];
    } else {
      this.imgSrc =
        'https://tapsmart-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/files-icon-750x400.png';
      this.selectedImage = null;
    }
  }

  onSubmit(formValue) {
    this.isSubmitted = true;
    if (this.formTemplate.valid) {
      var filePath = `${this.selectedImage.name}`;
      const fileRef = this.storage.ref(filePath);
      this.storage
        .upload(filePath, this.selectedImage)
        .snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              formValue['fileUrl'] = url;
              formValue['uploadDate'] = new Date(Date.now()).toISOString();
              formValue['medInstatution'] =
                this.userService.currentSuperVisor.medicalInstitution;
              this.imageService.insertImageDetails(formValue);
              this.resetForm();
              console.log('upload successy');
            });
          })
        )
        .subscribe();
    }
  }

  get formControls() {
    return this.formTemplate['controls'];
  }

  resetForm() {
    this.formTemplate.reset();
    this.formTemplate.setValue({
      caption: '',
      fileUrl: '',
    });
    this.imgSrc =
      'https://tapsmart-wpengine.netdna-ssl.com/wp-content/uploads/2017/10/files-icon-750x400.png';
    this.selectedImage = null;
    this.isSubmitted = false;
  }
}
