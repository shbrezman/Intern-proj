import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreen1Component } from './regitration&login-components/first-screen/login-screen1.component';
import { LoginScreen2Component } from './regitration&login-components/filing-first-details/login-screen2.component';
import { LoginScreen3Component } from './regitration&login-components/input-code/login-screen3.component';
import { from } from 'rxjs';
import { FaceScanComponent } from './regitration&login-components/face-scan/face-scan.component';
import { WebcamModule } from 'ngx-webcam';
import { FillingDetailsComponent } from './regitration&login-components/filling-details/filling-details.component';
import { EndOfRegComponent } from './regitration&login-components/end-of-reg/end-of-reg.component';
import { UserBoardComponent } from './user-board/user-board.component';
import { LoginAccesComponent } from './regitration&login-components/login-acces/login-acces.component';
import { AaaComponent } from './aaa/aaa.component';
import { SuperBoardComponent } from './supervisor-board/super-board.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { SuperadminBoardComponent } from './superadmin-board/superadmin-board.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginScreen1Component,
    LoginScreen2Component,
    LoginScreen3Component,
    FaceScanComponent,
    FillingDetailsComponent,
    EndOfRegComponent,
    UserBoardComponent,
    LoginAccesComponent,
    AaaComponent,
    SuperBoardComponent,
    SuperadminBoardComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WebcamModule,
    HttpClientModule,
    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
