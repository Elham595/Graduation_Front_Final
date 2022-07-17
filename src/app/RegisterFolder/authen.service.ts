import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
// import jwtDecode from 'jwt-decode';
import { User } from 'src/app/_Models/user'
import { UserConnection } from '../ChatApplication/chat-mo/user-contract';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  user: User = {} as User;
  token: any;
  baseURL: string = `https://localhost:7063/api/`;
  userDate: BehaviorSubject<User> = new BehaviorSubject<User>(this.user);
  constructor(private _HttpClient: HttpClient) {
    this.token = localStorage.getItem('token');/*JSON.stringify()*/ 
    if (this.token != null)
      this.userDate.next(jwtDecode(this.token));
  }



  register(register_data: object): Observable<any> {
    return this._HttpClient.post(this.baseURL + `Account`, register_data);
  }

  login(login_data: object): Observable<any> {
    return this._HttpClient.post(this.baseURL + `Account/signin`, login_data);
  }

  // saveUserData() {
  //   this.userDate.next(jwtDecode(JSON.stringify(localStorage.getItem('token'))));
  // }

}
