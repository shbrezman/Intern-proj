import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreen1Component } from './regitration&login-components/first-screen/login-screen1.component';
import { LoginScreen2Component } from './regitration&login-components/filing-first-details/login-screen2.component';
import { LoginScreen3Component } from './regitration&login-components/input-code/login-screen3.component';
import { FaceScanComponent } from './regitration&login-components/face-scan/face-scan.component';
import { FillingDetailsComponent } from './regitration&login-components/filling-details/filling-details.component';
import { EndOfRegComponent } from './regitration&login-components/end-of-reg/end-of-reg.component';
import { UserBoardComponent } from './user-board/user-board.component';
import { SuperBoardComponent } from './supervisor-board/super-board.component';
import { LoginAccesComponent } from './regitration&login-components/login-acces/login-acces.component';
import { SuperadminBoardComponent } from './superadmin-board/superadmin-board.component';
import { CreateTestComponent } from './create-test/create-test.component';
import { ExamPageComponent } from './exam-page/exam-page.component';
import { AaaComponent } from './aaa/aaa.component';
// import { ImagesComponent } from './images/images.component';
// import { FileComponent } from './images/upload-file/file.component';
import { FileListComponent } from './files/file-list/file-list.component';
import { FilesComponent } from './files/files.component';
import { UploadFileComponent } from './files/upload-file/upload-file.component';

const routes: Routes = [
  { path: '', component: LoginScreen1Component },
  { path: 'loginScreen2', component:LoginScreen2Component },
  { path: 'loginScreen3', component:LoginScreen3Component},
  { path: 'faceScan', component:FaceScanComponent},
  { path: 'fillingDetails', component:FillingDetailsComponent},
  { path: 'end-of-registration', component:EndOfRegComponent},
  { path: 'user-board', component:UserBoardComponent},
  { path: 'login-acces', component:LoginAccesComponent},
  { path: 'supervisor-board', component:SuperBoardComponent},
  { path: 'superadmin-board', component:SuperadminBoardComponent},
  { path: 'create-test', component:CreateTestComponent},
  { path: 'exam-page', component:ExamPageComponent},
  { path: 'aaa', component:AaaComponent},
  { path: 'file', component:FilesComponent, children:[
    {path: 'upload', component: UploadFileComponent},
    {path: 'list', component: FileListComponent}
  ]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
