import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-update-store',
  templateUrl: './update-store.component.html',
  styleUrls: ['./update-store.component.css']
})
export class UpdateStoreComponent implements OnInit {
   username!:string  |  null
   email!:string
   newStore!:any
   Storeupdated_form!:any;

   successResponse:any | null;
   invalidData:any | null;
  constructor(public _Storeservice:StoreService,private fb:FormBuilder,private _activatedRoute: ActivatedRoute, private _Router:Router) { }

  submit_StoreUpdatedForm(Storeupdated_form:FormGroup){
    console.log(Storeupdated_form);
    this._Storeservice.updateStoreProfile(this.email,this.username,Storeupdated_form.value)

    .subscribe((res:any)=>{
      if(this.invalidData){
        this.invalidData = null;
      }
      this.successResponse = {};
      console.log(res)
    }
    ,(err:any) =>{
      if(this.successResponse){
        this.successResponse = null;
      }
      this.invalidData = {};
    })
  }

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((prams:any) => {

      this.username = prams.get('username');
      this._Storeservice.GetStoresProfile(this.username)
      .subscribe((store:any) =>{
        this.email = store.email;
        this.Storeupdated_form=this.fb.group({
          User:this.fb.group({
            FirstName:new FormControl(store.userNameNavigation.firstName),
            MiddleName:new FormControl(store.userNameNavigation.middleName),
            LastName:new FormControl(store.userNameNavigation.lastName),
            BirthDate:new FormControl(store.userNameNavigation.birthDate),
            MobileNumber:new FormControl(store.userNameNavigation.mobileNumber,[Validators.minLength(11)]),
          }),
          Account:this.fb.group({
            Password:new FormControl(null,[Validators.minLength(6)]),
          }),
          Store:this.fb.group({
            StoreName:new FormControl(store.storeName),
            Address:new FormControl(store.address),
            City:new FormControl(store.city),
            // Bio:new FormControl(store.bio),
            // ExperienceYears:new FormControl(store.experienceYears),
          }),
         })

      })
    })
  }

}

