import { catchError } from 'rxjs/operators';
import { UserModel } from './../models/user-model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8080/';

  IdentifiedUser = false;
  errorMsg = "";

  ip_usersTable = new Map();

  currentUser: UserModel = {
    img: null,
    age: null,
    country: "",
    city: "",
    graduationYear: null,
    academicInstitution: "",
    medicalInstitution: "",
    residancy: "",
    department: "",
    residancyYear: null,
    id : "",
    name: "",
    passportNumber: "",
    phoneNumber: "",
    password: null,
    practices : [],
    tests : [],
  };



  constructor(private http: HttpClient) { }


  registerUser(): Observable<Object> {
    return this.http.post(this.baseUrl + "api/users/create", this.currentUser);
  }

  getUser<T>(phoneNumber: String): Observable<T> {
    return this.http.get<T>(this.baseUrl + "api/users/getUser/" + phoneNumber)
  }

  sendSms(): Observable<Object> {
    return this.http.post(this.baseUrl + "api/users/sendSms",
    {from:'Intern Academy', to: this.currentUser.phoneNumber, text: `Hello ${this.currentUser.name}, your code is: `}
    );
  }

  varifactionCode(code): Observable<any> {
    return this.http.post(this.baseUrl + "api/users/varifacation",
    {phoneNumber: this.currentUser.phoneNumber, password: code}
    );
  }


}
