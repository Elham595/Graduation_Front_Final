import { Component, OnInit } from '@angular/core';
import { ListOfDesigns } from 'src/app/models/list-of-designs';
import { ActivatedRoute, Router } from '@angular/router';
import { DesignsService } from '../designs.service';
@Component({
  selector: 'app-view-component-details',
  templateUrl: './view-component-details.component.html',
  styleUrls: ['./view-component-details.component.css']
})

export class ViewComponentDetailsComponent implements OnInit {
  id:number=0
  DesignDetails!:ListOfDesigns;

  constructor(private _ac:ActivatedRoute,private _designService:DesignsService,private Router:Router) {
   }

  ngOnInit(): void {
    this.id=this._ac.snapshot.params['id'];
    this._designService.DesignDetails(this.id).subscribe((data)=>{
      this.DesignDetails=data;
      console.log(data);
    })


  }

  onBack(){
    this.Router.navigate(['/'])

  }
  SelectNextPage(){
    this.id+=1
    this.Router.navigate(['designdetilas/',this.id]);

  }
  Delete(id: number){
    this._designService.DeleteDesign(this.id).subscribe(data=>{
      console.log(data);
    });
    this.Router.navigate(['/'])


  }


}
