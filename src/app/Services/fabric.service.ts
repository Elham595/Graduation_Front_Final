import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IColor } from '../models/Color';
import { IFabric } from '../models/Fabric';
import { Fabric } from '../_Models/fabric';
import { URL } from '../_Models/url';

@Injectable({
  providedIn: 'root'
})
export class FabricService {
  BaseUrl:URL=new URL();

  constructor(private _httpClient:HttpClient) { }

  getAllFabric():Observable<Fabric[]> {
    return this._httpClient.get<Fabric[]>(`${this.BaseUrl.DomainName}/api/Fabric`);
  }
  
  getFabricById(fabricId:number) : Observable<IFabric>
  {
    return this._httpClient.get<IFabric>(`${this.BaseUrl.DomainName}/api/Fabric/GetFabricById/${fabricId}`);
  }
}
