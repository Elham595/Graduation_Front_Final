import { Component, OnInit } from '@angular/core';
import { TailorService } from 'src/app/services/tailorserv.service';

@Component({
  selector: 'app-alltailors',
  templateUrl: './alltailors.component.html',
  styleUrls: ['./alltailors.component.css']
})
export class AlltailorsComponent implements OnInit {
  tailors:any="";
  Each_Tailor:any="";
  constructor(public _TailorsServ:TailorService) {}
    
  // GeteachTailor(_username:string)
  // {
  //   console.log(_username);
  //   this._TailorsServ.GetTailorProfile(_username).subscribe((res)=>this.Each_Tailor=res),
  //   console.log(this.Each_Tailor);
  // }
 
  ngOnInit(): void {
    this._TailorsServ.Gettailors().subscribe((response:any)=>this.tailors=response),
   console.log(this.tailors)
    
  }

}
