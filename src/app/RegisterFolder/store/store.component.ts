import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { IColor } from 'src/app/models/Color';
import { IFabric } from 'src/app/models/Fabric';
import { ColorService } from 'src/app/services/color-service';
import { FabricService } from 'src/app/services/fabric-service';
import { AuthenService } from '../authen.service';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  error!: string;
  colors!: Array<IColor>;
  fabrics!: Array<IFabric>;
  constructor(private _AuthenService: AuthenService, private fb: FormBuilder, private _Router: Router,private colorService:ColorService,private fabricService:FabricService) { }
  

  register_form = this.fb.group({
    account: this.fb.group({
      Email: new FormControl(null, [Validators.email]),
      Password: new FormControl(null, [Validators.required, Validators.pattern(`^[A-Z][a-z]{2,8}$`)]),
      CreationDate: new FormControl(null),
      RoleId: new FormControl()
    }),
    user: this.fb.group({
      UserName: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      FirstName: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
      MiddleName: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
      LastName: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(12)]),
      BirthDate: new FormControl(null),
      MobileNumber: new FormControl(null, [Validators.required, Validators.pattern(`^[010|011|012]`)])
    }),
    store: this.fb.group({
      // StoreId:new FormControl(null,[Validators.required]),
      StoreName: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      Email: new FormControl(),
      UserName: new FormControl(),
      Address: new FormControl(null, Validators.required),
      City: new FormControl(null, Validators.required)
    }),
    StoreFabrics: this.fb.array([this.createElement()])
  })

  createElement(){
    return this.fb.group({
      FabricId: new FormControl(),
      ColorId: new FormControl(),
      Price: new FormControl(),
    });
  }


  get StoreFabrics() {
    return this.register_form.get('StoreFabrics') as FormArray;
  }

  addFabric() {
    this.StoreFabrics.push(this.createElement());
  }
  deleteControl(i: number){
    if(this.StoreFabrics.length !== 1){
      this.StoreFabrics.removeAt(i);
    }
  }

  submit_form(register_form: FormGroup) {
    this.register_form.patchValue({
      account: { RoleId: 5 },
      store: { Email: register_form.value["account"]["Email"], UserName: register_form.value["user"]["UserName"] }
    })
    console.log(register_form.value);
    console.log(register_form.value["account"]["RoleId"]);
    var id = register_form.value["account"]["RoleId"];
    this._AuthenService.register(register_form.value).subscribe((response: any) => {

      console.log("trueeeeeeeee success")
      this._Router.navigate(['login']);
    },
      (err) => {

        var entries = Object.entries(err.error);
        entries.forEach((entry) => {
          var errorDesc = JSON.stringify(Object.values(entry));
          this.error += `\n${errorDesc}`;
        });
        console.log(err);
      });
  }

  ngOnInit(): void {

    this.fabricService.getFabrics()
    .subscribe(fabrics =>
      {
      this.fabrics = fabrics;
    },
    error=>{
      console.log('error: ',error);
    });
    this.colorService.getColors()
    .subscribe(colors =>
      {
      this.colors = colors;
    },
    error=>{
      console.log('error: ',error);
    });


  }

}
