import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClotheService } from '../Clothe/clothe.service';
import { Design } from '../models/design';
import { ListOfDesigns } from '../models/list-of-designs';

@Component({
  selector: 'app-view-designs',
  templateUrl: './view-designs.component.html',
  styleUrls: ['./view-designs.component.css']
})
export class ViewDesignsComponent implements OnInit {

  type!:string
  viewDesigns!:Array<ListOfDesigns>;
  TotalRecored!:number;
  PageNumber=1;

  constructor(private _ac:ActivatedRoute,private _ClotheService:ClotheService,private Router:Router) {
  }


 ngOnInit(): void {
   this.type=this._ac.snapshot.params['name'];
   console.log(this.type);
   this._ClotheService.getAllDesigns(this.type).subscribe(
    (data)=>{
     this.viewDesigns = data;
     console.log("data:",data);
   })

  ;
}
}
