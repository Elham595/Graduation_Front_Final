import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from '../_Models/url';


@Injectable({
  providedIn: 'root'
})
export class AprovedOfferService {
  private BaseUrl:URL =new URL();

  constructor(private _httpClient:HttpClient) { }

  getAprovedOfferByUserName(userName:string ,role:string,page:number):Observable<any> {
    return this._httpClient.get( `${this.BaseUrl.DomainName}/api/AprovedOffers/AprovedOffer?UserName=${userName}&Role=${role}&page=${page}`);
      }
}
