import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginScreen1Component } from './regitration&login-components/first-screen/login-screen1.component';
import { LoginScreen2Component } from './regitration&login-components/filing-first-details/login-screen2.component';
import { LoginScreen3Component } from './regitration&login-components/input-code/login-screen3.component';
import { FaceScanComponent } from './regitration&login-components/face-scan/face-scan.component';
import { FillingDetailsComponent } from './regitration&login-components/filling-details/filling-details.component';
import { EndOfRegComponent } from './regitration&login-components/end-of-reg/end-of-reg.component';
import { UserBoardComponent } from './user-board/user-board.component';


import { LoginAccesComponent } from './regitration&login-components/login-acces/login-acces.component';

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
