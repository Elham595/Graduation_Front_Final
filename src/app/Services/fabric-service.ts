import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IFabric } from "../models/Fabric";

@Injectable({
    providedIn: 'root'
})
export class FabricService{
    /**
     *
     */
    constructor(private http:HttpClient) {
        
    }

    getFabrics():Observable<Array<IFabric>>{
        return this.http.get<Array<IFabric>>('https://localhost:7063/api/Fabric')
    }
}