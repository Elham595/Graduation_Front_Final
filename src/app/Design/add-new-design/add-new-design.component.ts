import { Component, OnInit } from '@angular/core';
import { ClotheService } from 'src/app/Clothe/clothe.service';
import { IClothe } from 'src/app/models/clothe';
import { Design, IDesign } from 'src/app/models/design';
import { DesignsService } from '../designs.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-new-design',
  templateUrl: './add-new-design.component.html',
  styleUrls: ['./add-new-design.component.css'],
})
export class AddNewDesignComponent implements OnInit {
  clothes!: Array<IClothe>;
  design!:IDesign;



  constructor(public clothService: ClotheService,public designsService: DesignsService) {
  }

  ngOnInit(): void {
    this.design = new Design();
    this.clothService.getAllClothes().subscribe((Clothes: IClothe[]) => {
      this.clothes = Clothes;
      console.log(this.clothes);
    });

  }
  uploadimage(event: any){
    this.design.File=<File>event.target.files[0];
    console.log(event);
  }

  onupload(){
    console.log(this.design);
    const formData = new FormData();
    formData.append('File',this.design.File, this.design.File.name);
    var date = this.design.DesignDate.toString();
    console.log(date);
    formData.append('DesignDate', date);
    formData.append('Status',this.design.Status);
    console.log(this.design.cloth);
    console.log(this.design.cloth.clotheId);
    formData.append('ClothId',this.design.cloth.clotheId.toString());
    console.log('Form Data init');
    console.log(formData);
    this.designsService.Createdesign(formData);
  }






  clotheSelected(selectedValue : any){
    console.log(selectedValue);
  }

}
