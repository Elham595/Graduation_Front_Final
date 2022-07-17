import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { URL } from '../_Models/url';

@Injectable({
  providedIn: 'root'
})
export class DesignService {

baseUrl:URL = new URL()
  constructor(private _httpClient:HttpClient) { }

  getViewDesignByClotheName(clotheName:string, page:number):Observable<any>{
    return this._httpClient.get(`${this.baseUrl.DomainName}/api/Designs/ViewAllDesignByClotheName/pages?ClotheName=${clotheName}&page=${page}`);
  }
  uploadDesignByClotheName(model:any):Observable<any>{
    return this._httpClient.post(`${this.baseUrl.DomainName}/api/Designs/UploadDesign`,model);
  }
}
