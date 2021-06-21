import { testModel } from './../models/test-model';
import { catchError, tap } from 'rxjs/operators';
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
  token = "";


  currentUser = new UserModel;
  currentSuperVisor = new UserModel;
  currentSuperAdmin = new UserModel;
  users : UserModel[];
  supervisors : UserModel[];



  constructor(private http: HttpClient) { }


  registerUser(user: UserModel): Observable<Object> {
    return this.http.post(this.baseUrl + "auth/create", user, this.getOptions());
  }

  getUser<T>(phoneNumber: String): Observable<UserModel> {
    return this.http.get<UserModel>(this.baseUrl + "auth/getUser/" + phoneNumber).pipe(tap(user =>{
      this.token = user.token;
      console.log(this.token)
      console.log(user)
      console.log(user.token)
    }))
  }

  getAllUsers<T>(medicalInstitution?: String, roleNumber?: number): Observable<UserModel[]> {
    return this.http.post<UserModel[]>(this.baseUrl + "api/users/getAllUsers",
    {medicalInstitution: medicalInstitution, roleNumber: roleNumber},this.getOptions()
    )
  }

  sendSms(): Observable<Object> {
    return this.http.post(this.baseUrl + "auth/sendSms",
    {from:'Intern Academy', to: this.currentUser.phoneNumber, text: `Hello ${this.currentUser.name}, your code is: `}
    );
  }

  varifactionCode(code): Observable<any> {
    return this.http.post(this.baseUrl + "auth/varifacation",
    {phoneNumber: this.currentUser.phoneNumber, password: code}
    );
  }

  updateUsers(idArr): Observable<any> {
    return this.http.put(this.baseUrl + "api/users/updateUsers", {idArr}, this.getOptions())
  }

  updateUser(id: string, tests): Observable<any> {
    console.log('in update client');

    return this.http.put(this.baseUrl + "api/users/updateUser", {id: id, tests: tests}, this.getOptions())
  }

  getOptions(headers?: any) {
    headers = headers? headers : {};
    headers['content-type'] = 'application/json';
    headers['x-access-token'] = this.token;
    return {
      headers: new HttpHeaders(headers)
    }
  }
}
