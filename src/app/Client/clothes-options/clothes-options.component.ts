import { Component, OnInit } from '@angular/core';
import { ClothesService } from 'src/app/Services/clothes.service';
import { Clothe } from 'src/app/_Models/clothe';

@Component({
  selector: 'app-clothes-options',
  templateUrl: './clothes-options.component.html',
  styleUrls: ['./clothes-options.component.css']
})
export class ClothesOptionsComponent implements OnInit {
public clothes:Clothe[]=[];
  constructor(private _clothesService:ClothesService) { }

  ngOnInit(): void {
    this._clothesService.getAllClothes().subscribe(
      (data)=>{
        this.clothes=data;
      },
      (error)=>{
        console.log(error);
      }
    );
  }

}
