import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IColor } from '../models/Color';
import { Color } from '../_Models/color';
import { URL } from '../_Models/url';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  BaseUrl:URL;

  constructor(private _httpClient:HttpClient) { 
   this.BaseUrl = new URL();
  }
  getAllColors():Observable<Color[]> {
    return this._httpClient.get<Color[]>(`${this.BaseUrl.DomainName}/api/Colors`);
  }

  getColorById(colorId:number):Observable<IColor>{
    return this._httpClient.get<IColor>(`${this.BaseUrl.DomainName}/api/Colors/GetColorById/${colorId}`);
  }
}
