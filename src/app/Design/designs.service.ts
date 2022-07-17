import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { IDesign } from '../models/design';
import { environment } from 'src/environments/environment';
import { ListOfDesigns } from '../models/list-of-designs';


@Injectable({
  providedIn: 'root',
})
export class DesignsService {
  Url:string = "https://localhost:7063/api/";
  fileData!: FormData;
  design!: IDesign;

  constructor(private http: HttpClient) {}

  Createdesign(fileData: FormData){
    console.log("Creating design");
    this.http.post(`${this.Url}Designs/AddDesign`, fileData)
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
  DesignDetails(id:number):Observable<ListOfDesigns>{
    return this.http.get<ListOfDesigns>(this.Url+`Designs/${id}`);

  }
  getAllListDesigns(PageNumber:number): Observable<ListOfDesigns[]> {
    return this.http.get<ListOfDesigns[]>("https://localhost:7063/api/Designs");
  }
  DeleteDesign(id:number){
    return this.http.delete(this.Url+`Designs/${id}`)
  }

}
