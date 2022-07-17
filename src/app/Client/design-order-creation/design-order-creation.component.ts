import { Component, OnInit } from '@angular/core';
import { FormBuilder ,FormGroup,FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router, UrlHandlingStrategy } from '@angular/router';
import { AuthenService } from 'src/app/RegisterFolder/authen.service';
import { ColorService } from 'src/app/Services/color.service';
import { DesignOrderService } from 'src/app/Services/design-order.service';
import { FabricService } from 'src/app/Services/fabric.service';
import { Color } from 'src/app/_Models/color';
import { Fabric } from 'src/app/_Models/fabric';
import { URL } from 'src/app/_Models/url';

@Component({
  selector: 'app-design-order-creation',
  templateUrl: './design-order-creation.component.html',
  styleUrls: ['./design-order-creation.component.css']
})
export class DesignOrderCreationComponent implements OnInit {
imageName:any;
username:any
public Colors:Color[]=[];
public Fabrics:Fabric[]=[];
designId:any;
public designOrderCreateForm:FormGroup;
ClotheName:string='';
public Measurment:any='';
public haveTop:boolean;
public haveBottom:boolean;
public baseUrl:URL=new URL;
  constructor(private _formBuilder:FormBuilder,private _authenticationService:AuthenService,private _colorService:ColorService,private _fabricService:FabricService ,private _activatedRoute:ActivatedRoute , private _designOrderService:DesignOrderService ,private _router:Router ) {
 
  this.Measurment = this._activatedRoute.snapshot.paramMap.get('Measurment');
  this.designId=this._activatedRoute.snapshot.paramMap.get('designId');
  this.imageName=this._activatedRoute.snapshot.paramMap.get('imageName');
  this.username=this._authenticationService.userDate.getValue().preferred_username;
   console.log(this.username);
  this.haveTop=this.Measurment.includes('T');
  this.haveBottom=this.Measurment.includes('B');

    this.designOrderCreateForm= this._formBuilder.group({
      UserName:[this.username,[Validators.required,Validators.maxLength(50)]],
      DesignOrderNumber:[0],
      DesignId:[this.designId,[Validators.required]],
      Measurment:[this.Measurment,[Validators.required,Validators.maxLength(2),Validators.pattern(/(T|B|TB|BT)/)]],
      Thigh:['',[Validators.required,Validators.pattern(/\d+/)]],
      Inseam:['',[Validators.required,Validators.pattern(/\d+/)]],
      OutSeam:['',[Validators.required,Validators.pattern(/\d+/)]],
      Ankle:['',[Validators.required,Validators.pattern(/\d+/)]],
      CrotchDepth:['',[Validators.required,Validators.pattern(/\d+/)]],
      Nick:['',[Validators.required,Validators.pattern(/\d+/)]],
      Bust:['',[Validators.required,Validators.pattern(/\d+/)]],
      Hip:['',[Validators.required,Validators.pattern(/\d+/)]],
      FrontWaistLength:['',[Validators.required,Validators.pattern(/\d+/)]],
      BackWaistLength:['',[Validators.required,Validators.pattern(/\d+/)]],
      HighHip:['',[Validators.required,Validators.pattern(/\d+/)]],
      ArmLength:['',[Validators.required,Validators.pattern(/\d+/)]],
      Waist:['',[Validators.required,Validators.pattern(/\d+/)]],

      designFabricModels:this._formBuilder.array([
        this._formBuilder.group({
          colorId:['1'],
          fabricId:['1']
        })
      ])
    })
   }

  ngOnInit(): void {

this._colorService.getAllColors().subscribe(
  (data)=>{
this.Colors=data;
console.log(this.Colors);
  },
  (error)=>{console.log(error);}
);
this._fabricService.getAllFabric().subscribe(
(data)=>{
this.Fabrics=data;
}
);
    }
  get designFabricModel() {
        return this.designOrderCreateForm.get('designFabricModels') as FormArray;
  }
AddFabric() :void{
  this.designFabricModel.push(this._formBuilder.group({
    colorId:['1'],
    fabricId:['1']
  }))
}
RemoveFabric(index:number):void {
  this.designFabricModel.removeAt(index);
}

public SubmitDesignOrder(model:FormGroup) {
  if (!this.haveTop) {
    this.designOrderCreateForm.get('Nick')?.setValue(0);
    this.designOrderCreateForm.get('Hip')?.setValue(0);
    this.designOrderCreateForm.get('FrontWaistLength')?.setValue(0);
    this.designOrderCreateForm.get('BackWaistLength')?.setValue(0);
    this.designOrderCreateForm.get('Bust')?.setValue(0);
    this.designOrderCreateForm.get('HighHip')?.setValue(0);
    this.designOrderCreateForm.get('ArmLength')?.setValue(0);
    this.designOrderCreateForm.get('Waist')?.setValue(0);

  }
  if(!this.haveBottom) {
    this.designOrderCreateForm.get('Thigh')?.setValue(0);
    this.designOrderCreateForm.get('CrotchDepth')?.setValue(0);
    this.designOrderCreateForm.get('Ankle')?.setValue(0);
    this.designOrderCreateForm.get('OutSeam')?.setValue(0);
    this.designOrderCreateForm.get('Inseam')?.setValue(0);
  }

  this._designOrderService.CreateDesignOrder(model.value).subscribe(
    (data)=> {
      if(data.Message = "Succeed") {
        this._router.navigate(['client/designOrder']);
      }
    },
    (error)=> {
console.log(error);
    }
  );

}
}
