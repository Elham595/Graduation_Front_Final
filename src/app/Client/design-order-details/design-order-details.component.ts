import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ColorService } from 'src/app/Services/color.service';
import { DesignOrderService } from 'src/app/Services/design-order.service';
import { FabricService } from 'src/app/Services/fabric.service';
import { URL } from 'src/app/_Models/url';

@Component({
  selector: 'app-design-order-details',
  templateUrl: './design-order-details.component.html',
  styleUrls: ['./design-order-details.component.css']
})
export class DesignOrderDetailsComponent implements OnInit {

  designOrderNumber:any;
  public designOrder:any;
  public clotheName:any;
  public baseUrl:URL=new URL;
  public  colorDic = new Map<number,string>();
  public  fabricDic = new Map<number,string>();


  constructor(private _designOrderService:DesignOrderService,private _activatedRoute:ActivatedRoute,
    private _colorService:ColorService , private _fabricService: FabricService) {
      this._colorService.getAllColors().subscribe(
        (data)=>{
          data.forEach(element => {
            this.colorDic.set(element.colorId,element.colorName)

          });
        }
      )
      this._fabricService.getAllFabric().subscribe(
        (data)=>{
          data.forEach(element => {
            this.fabricDic.set(element.fabricId,element.fabricName)

          });
        }
      )
    }

  ngOnInit(): void {
    this.designOrderNumber=this._activatedRoute.snapshot.paramMap.get('designOrderNumber');
    console.log(this.designOrderNumber)

    this._designOrderService.getDesignOrderByNumber(this.designOrderNumber).subscribe(
      (data)=>{
        this.designOrder=data.designOrder;
        this.clotheName=data.clotheName;
        console.log(this.designOrder);
      },
      (error)=>{
        console.log(error);
      }
    )

  }

}
