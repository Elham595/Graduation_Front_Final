import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IColor } from "../models/Color";

@Injectable({
    providedIn:'root'
})
export class ColorService{
    /**
     *
     */
    constructor(private http:HttpClient) {
        
    }

    getColors():Observable<Array<IColor>>{
        return this.http.get<Array<IColor>>('https://localhost:7063/api/Colors');
    }
}