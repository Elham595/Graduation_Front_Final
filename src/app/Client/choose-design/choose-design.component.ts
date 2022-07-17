import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesignService } from 'src/app/Services/design.service';
import { Clothe } from 'src/app/_Models/clothe';
import { Design } from 'src/app/_Models/design';
import { URL } from 'src/app/_Models/url';

@Component({
  selector: 'app-choose-design',
  templateUrl: './choose-design.component.html',
  styleUrls: ['./choose-design.component.css']
})
export class ChooseDesignComponent implements OnInit {
public clotheName:any;
public clotheId:any;
public designs:Design[]=[];
public pageNumber:number=1;
public pageStart:number=1;
public pageEnd:number=3;
public numberOfPages:number=-1;
public imageStaticPath:string='';
public baseUrl:URL=new URL();
public numberOfItems:number=0;
public Measurment:any;
  constructor(private _activatedRoute: ActivatedRoute ,private _designService : DesignService) { }

  ngOnInit(): void {
    this.clotheName=this._activatedRoute.snapshot.paramMap.get('clotheName');
    this.clotheId=this._activatedRoute.snapshot.paramMap.get('clotheId');

    this.displayDesign(1);
    // this._designService.getViewDesignByClotheName(this.clotheName,1).subscribe(
    //   (data)={

    //   }
    //)
    switch(this.clotheName) {
      case 'Skirt' :
        this.Measurment='B';
        break;
        case 'Trousers' :
        this.Measurment='B';
        break;
        case 'Coat' :
        this.Measurment='T';
        break;
        case 'Blouse' :
        this.Measurment='T';
        break;
        case 'Dress' :
        this.Measurment='TB';
        break;
    }
  }

  public displayDesign(page:number) {
    if(this.numberOfPages!=-1 && (page<1||page>this.numberOfPages) ) {
      return;
    }
   this._designService.getViewDesignByClotheName(this.clotheName,page).subscribe(
      (data)=>{
        this.designs=data.result;
        this.imageStaticPath=data.imageStaticPath;
        this.numberOfPages= data.totalPages;
        this.numberOfItems=data.totalItems;
        this.pageNumber=data.page;
        if(this.numberOfPages>this.pageEnd) {
          this.pageEnd=this.pageNumber+1;
          this.pageStart=this.pageNumber;
        }
        else if(this.pageNumber<this.pageStart) {
          this.pageEnd=this.pageNumber;
          this.pageStart=this.pageNumber-2;
        }
      },

    );
  }



}
