import { TestService } from './services/test.service';
import { UserService } from './services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intern';
  constructor(public userService: UserService, public testService: TestService){

  }
}
