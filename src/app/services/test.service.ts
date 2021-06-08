import { questionModel } from './../models/question-model';
import { testModel } from './../models/test-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  test = new testModel;

  constructor() {
    
   }
}
