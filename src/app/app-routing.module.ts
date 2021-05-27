import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreen1Component } from './login-screen1/login-screen1.component';
import { LoginScreen2Component } from './filing-first-details/login-screen2.component';
import { LoginScreen3Component } from './input-code/login-screen3.component';
import { FaceScanComponent } from './face-scan/face-scan.component';
import { FillingDetailsComponent } from './filling-details/filling-details.component';
import { EndOfRegComponent } from './end-of-reg/end-of-reg.component';
import { UserBoardComponent } from './user-board/user-board.component';
import { LoginAccesComponent } from './login-acces/login-acces.component';

const routes: Routes = [
  { path: '', component: LoginScreen1Component },
  { path: 'loginScreen2', component:LoginScreen2Component },
  { path: 'loginScreen3', component:LoginScreen3Component},
  { path: 'faceScan', component:FaceScanComponent},
  { path: 'fillingDetails', component:FillingDetailsComponent},
  { path: 'end-of-registration', component:EndOfRegComponent},
  { path: 'user-board', component:UserBoardComponent},
  { path: 'login-acces', component:LoginAccesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
