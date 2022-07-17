import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { ITailor as ITailor } from '../models/tailor-model';

@Injectable({
  providedIn: 'root'
})
export class TailorService {
  baseURL:string=`https://localhost:7063/api/`;

  constructor(private _Httpclient:HttpClient) { }
  /********************Get All Tailors*************************/
   Gettailors():Observable<any>
  {
    return this._Httpclient.get(this.baseURL+`Tailors`)
  }

  //*****************Get by username***************************** */
  GetTailorProfile(_username:string | null):Observable<ITailor>
  {
   return this._Httpclient.get<ITailor>(`https://localhost:7063/api/Tailors/eachtailor/${_username}`)
  }
   //*****************Update Tailor Profile***************************** */
 updateTailorProfile(email:string,username:string | null,UpdatedData:FormData):Observable<any>
  {
    return this._Httpclient.put(this.baseURL+`Account?email=${email}&username=${username}`,UpdatedData) 
  }

 }
