import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, firstValueFrom, Observable, of } from 'rxjs';
import { ITokenResponse } from './models/access-token-response';

@Injectable({
  providedIn: 'root'
})

export class AccountService {
  sar!:Array<string>

  constructor(private http:HttpClient) {
  }

  updatepassword(email:string | null,updatePassowrdForm:object):Observable<any>{
    return this.http.put(`https://localhost:7063/api/Account/updatepassword?email=${email}`,updatePassowrdForm);
  }

  deleteaccount(email:string,userName:string | null):Observable<any>
  {
    return this.http.delete(`https://localhost:7063/api/Account?email=${email}&username=${userName}`);
  }
  getAccessToke(/*email:string,password:string*/): Observable<ITokenResponse> {

    //console.log(email,password);

    //return this.http.post<ITokenResponse>(`https://localhost:7063/api/Account/signin?email=${email}&password=${password}`,{});

    let josnString = localStorage.getItem('tokenResponse');
    return of(JSON.parse(josnString as string))
  }
}
