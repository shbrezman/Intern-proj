import { TestService } from './../services/test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  constructor(private testService: TestService) {
    

   }

  ngOnInit(): void {
  }

}
