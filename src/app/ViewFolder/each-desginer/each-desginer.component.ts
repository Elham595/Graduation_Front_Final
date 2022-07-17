import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDesginer } from 'src/app/models/Desginers-model';
import { DesginersService } from 'src/app/services/desginers.service';

@Component({
  selector: 'app-each-desginer',
  templateUrl: './each-desginer.component.html',
  styleUrls: ['./each-desginer.component.css']
})
export class EachDesginerComponent implements OnInit {

    UserName!:string |null;
    Desginer!: IDesginer;

  constructor(public _DesginerService:DesginersService ,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((prams:any)=>{
      this.UserName=prams.get('username');

     this._DesginerService.GetDesginerProfile(this.UserName)
        .subscribe((designer:any) => {
          console.log(designer);
          this.Desginer = designer;
          console.log(this.Desginer);
        });
    });
  }

}
