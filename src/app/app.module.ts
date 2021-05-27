import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginScreen1Component } from './login-screen1/login-screen1.component';
import { LoginScreen2Component } from './filing-first-details/login-screen2.component';
import { LoginScreen3Component } from './input-code/login-screen3.component';
import { from } from 'rxjs';
import { FaceScanComponent } from './face-scan/face-scan.component';
import { WebcamModule } from 'ngx-webcam';
import { FillingDetailsComponent } from './filling-details/filling-details.component';
import { EndOfRegComponent } from './end-of-reg/end-of-reg.component';
import { UserBoardComponent } from './user-board/user-board.component';
import { LoginAccesComponent } from './login-acces/login-acces.component';





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
    LoginAccesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    WebcamModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
