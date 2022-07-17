import { Component, OnInit } from '@angular/core';
import { DesignOrderService } from 'src/app/Services/design-order.service';
import { URL } from 'src/app/_Models/url';
import {AuthenService} from 'src/app/RegisterFolder/authen.service'
import { ConsoleLogger } from '@microsoft/signalr/dist/esm/Utils';

@Component({
  selector: 'app-design-orders',
  templateUrl: './design-orders.component.html',
  styleUrls: ['./design-orders.component.css']
})
export class DesignOrdersComponent implements OnInit {
  public designOrders:[]=[];
  public pageNumber:number=1;
  public pageStart:number=1;
  public pageEnd:number=3;
  public numberOfPages:number=-1;
  public imageStaticPath:string='';
  public baseUrl:URL=new URL();
  public numberOfItems:number=0;
  public UserName=this._AuthenticationService.userDate.getValue().preferred_username;
  constructor(private _designOrderService:DesignOrderService , private _AuthenticationService :AuthenService) {
  }

  ngOnInit(): void {
    this.displayDesignOrder(1);
  }
public displayDesignOrder(page:number) {
  if(this.numberOfPages!=-1 && (page<1||page>this.numberOfPages) ) {
    return;
  }
 this._designOrderService.getDesignOrderByUserName(this.UserName,page).subscribe(
    (data)=>{
      this.designOrders=data.result;

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
  console.log(data);
    },

  );
}
}
