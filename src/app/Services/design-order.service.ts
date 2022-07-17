import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from '../_Models/url';

@Injectable({
  providedIn: 'root'
})
export class DesignOrderService {
baseUrl:URL=new URL();
  constructor(private _httpClient:HttpClient) { }

  CreateDesignOrder(model:any):Observable<any> {
    return this._httpClient.post(`${this.baseUrl.DomainName}/api/DesignOrder/CreateDesignOrder`,model);
  }

  getDesignOrderByUserName(userName:string ,page:number):Observable<any> {
    return this._httpClient.get(`${this.baseUrl.DomainName}/api/DesignOrder/DesignOrderByUserName?UserName=${userName}&page=${page}`);
  }

  getDesignOrderByNumber(designOrderNumber:number):Observable<any> {
    return this._httpClient.get(`${this.baseUrl.DomainName}/api/DesignOrder/DesignOrderByNumber?designOrderNumber=${designOrderNumber}`);
  }

}
