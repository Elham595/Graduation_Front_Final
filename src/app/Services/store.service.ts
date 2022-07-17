import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFabricStore, IStore } from '../models/store';


@Injectable({
  providedIn: 'root'
})
export class StoreService {
  baseURL:string=`https://localhost:7063/api/`;
  constructor(private _httpclient:HttpClient) { }
    /********************Get All Stores*************************/
    /*******Get All Stores********/
    Getstores():Observable<Array<IStore>>
    {
      return this._httpclient.get<Array<IStore>>(this.baseURL+`Stores`)
    }
  
    //*****************Get by Stores username***************************** */
    //******Get by Stores username********** */
    GetStoresProfile(_username:string | null):Observable<IStore>
    {
     return this._httpclient.get<IStore>(`https://localhost:7063/api/Stores/EachStore/${_username}`)
    }
     //*****************Update Store Profile***************************** */
    updateStoreProfile(email:string,username:string | null,UpdatedData:FormData):Observable<any>
    {
      return this._httpclient.put(this.baseURL+`Account?email=${email}&username=${username}`,UpdatedData) 
    }
     //*****************GET STORE-FABRIC BY STORE ID ***************************** */
    GetStoreFabric(_storeid:number):Observable<Array<IFabricStore>>
    {
     return this._httpclient.get<Array<IFabricStore>>(`https://localhost:7063/api/FabricStore/${_storeid}`)
    }
}
