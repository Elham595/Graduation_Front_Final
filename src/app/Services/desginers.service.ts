import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDesginer } from '../models/Desginers-model';

@Injectable({
  providedIn: 'root'
})
export class DesginersService {

  baseURL:string=`https://localhost:7063/api/`;
 

  constructor(private _httpclient:HttpClient) { }

  /********************Get All Desgniers*************************/
  GetDesigners():Observable<any>
  {
    return this._httpclient.get(this.baseURL+`Desginers`)
  }

  //*****************Get by username***************************** */
  GetDesginerProfile(_username:string | null):Observable<IDesginer>
  {
   return this._httpclient.get<IDesginer>(`https://localhost:7063/api/Desginers/EachDesginer/${_username}`)
  }
   //*****************Update Tailor Profile***************************** */
   updateDesignerProfile(email:string,username:string | null,UpdatedData:FormData):Observable<any>
   {
     return this._httpclient.put(this.baseURL+`Account?email=${email}&username=${username}`,UpdatedData) 
   }

}
