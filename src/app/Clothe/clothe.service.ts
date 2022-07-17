import { HttpClient } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IClothe } from '../models/clothe';
import { Design } from '../models/design';
import { ListOfDesigns } from '../models/list-of-designs';


@Injectable({
  providedIn: 'root'
})
export class ClotheService {


  constructor(private http:HttpClient) { }


 URL="https://localhost:7063/api/ClothesForadmin"

  getAllClothes():Observable<IClothe[]>{
    return this.http.get<IClothe[]>(this.URL);
  }
  
  getAllDesigns(type:string):Observable<ListOfDesigns[]>{
    return this.http.get<ListOfDesigns[]>(this.URL+`/DesignersType/${type}`);
  }

}
