import { Component, OnInit } from '@angular/core';
import { DesginersService } from 'src/app/services/desginers.service';

@Component({
  selector: 'app-all-desginers',
  templateUrl: './all-desginers.component.html',
  styleUrls: ['./all-desginers.component.css']
})
export class AllDesginersComponent implements OnInit {
  Desginers:any='';
  Each_Desginer:any='';
  constructor(public _desginerservice:DesginersService) { }

  GeteachDesginer(_username:string)
  {
    this._desginerservice.GetDesginerProfile(_username).subscribe((res:any)=>this.Each_Desginer=res),
    console.log(this.Each_Desginer)
  }


  ngOnInit(): void {
    this._desginerservice.GetDesigners().subscribe((res:any)=>this.Desginers=res),
    console.log(this.Desginers);
  }

}