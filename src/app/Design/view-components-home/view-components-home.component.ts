import { Component, OnInit } from '@angular/core';
import { ListOfDesigns } from 'src/app/models/list-of-designs';
import { DesignsService } from '../designs.service';
import { IClothe } from 'src/app/models/clothe';
import { ClotheService } from 'src/app/Clothe/clothe.service';

@Component({
  selector: 'app-view-components-home',
  templateUrl: './view-components-home.component.html',
  styleUrls: ['./view-components-home.component.css']
})
export class ViewComponentsHomeComponent implements OnInit {
  design!: ListOfDesigns[];
  Clothes!:IClothe[];
  TotalRecored!:number;
  PageNumber=1;
  images:any=['../../../assets/b1.jpg','../../../assets/c.jpg','../../../assets/d1.jpg',
  '../../../assets/skirt.jpg','../../../assets/t.jpg'];
  constructor(public _DesignService: DesignsService,public _ClotheService:ClotheService) {}


    ngOnInit(): void {

      this._ClotheService.getAllClothes().subscribe((Clothes: IClothe[]) => {
        this.Clothes = Clothes;
        console.log(this.Clothes);
       // this.ViewAllDesigns(1);


    })
    }
    ViewAllDesigns(PageNumber:number){
      this._DesignService.getAllListDesigns(PageNumber).subscribe((Design:ListOfDesigns[]) => {
        this.design = Design;
         console.log(Design);
         this.TotalRecored=this.design.length


      })
    }
  

  }



