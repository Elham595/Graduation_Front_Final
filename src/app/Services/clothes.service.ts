import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clothe } from '../_Models/clothe';
import { URL } from '../_Models/url';

@Injectable({
  providedIn: 'root'
})
export class ClothesService {
  private BaseUrl:URL =new URL();

  constructor(private _httpClient:HttpClient) { }

  getAllClothes():Observable<Clothe[]> {
return this._httpClient.get<Clothe[]>( `${this.BaseUrl.DomainName}/api/Clothe`);
  }
}
