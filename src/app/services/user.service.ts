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



  currentUser = new UserModel;
  currentSuperVisor = new UserModel;
  currentSuperAdmin = new UserModel;
  users : UserModel[];
  supervisors : UserModel[];



  constructor(private http: HttpClient) { }


  registerUser(user: UserModel): Observable<Object> {
    return this.http.post(this.baseUrl + "api/users/create", user);
  }

  getUser<T>(phoneNumber: String): Observable<UserModel> {
    return this.http.get<UserModel>(this.baseUrl + "api/users/getUser/" + phoneNumber)
  }

  getAllUsers<T>(medicalInstitution?: String, roleNumber?: number): Observable<UserModel[]> {
    return this.http.post<UserModel[]>(this.baseUrl + "api/users/getAllUsers",
    {medicalInstitution: medicalInstitution, roleNumber: roleNumber}
    )
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
