import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenService } from 'src/app/RegisterFolder/authen.service';
import { DesignService } from 'src/app/Services/design.service';

@Component({
  selector: 'app-upload-design',
  templateUrl: './upload-design.component.html',
  styleUrls: ['./upload-design.component.css']
})
export class UploadDesignComponent implements OnInit {
   clotheName:any;
   clotheId:any;
   image:any;
  status:string='C';
  Measurment:string='';
  public uploadDesignForm :FormGroup;
  constructor(private _activatedRoute: ActivatedRoute ,private _designService : DesignService ,private _formBulider:FormBuilder ,private _AuthenticationService: AuthenService ,private _router:Router) {
    this.clotheName=this._activatedRoute.snapshot.paramMap.get('clotheName');
    this.clotheId=this._activatedRoute.snapshot.paramMap.get('clotheId');
    this.uploadDesignForm= this._formBulider.group({
      ClotheName:[this.clotheName,[Validators.required,Validators.maxLength(50)]],
      Status:[this.status,[Validators.required,Validators.maxLength(1)]],
      Image:['',[Validators.required]]

    })

   }

  ngOnInit(): void {
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

 public  SubmitDesign() {
const formData = new FormData()
formData.append('Image',this.image);
formData.append('Status',this.uploadDesignForm.get('Status')?.value);
formData.append('ClotheName',this.uploadDesignForm.get('ClotheName')?.value);
console.log(formData.get('ClotheName'));

this._designService.uploadDesignByClotheName(formData).subscribe(
  (data)=>{
if(data.message='Success') {
  this._router.navigate([`create/designOrder/${this.Measurment}/${data.designId}/${data.designImage}`]);
}
  }
  ,
  (error)=>{console.log(error)}
)
  }

  public onFileSelect(event:any) {
    if(event.target.files.length>0)
  this.image= event.target.files[0];
  console.log(this.image);
  }

}
