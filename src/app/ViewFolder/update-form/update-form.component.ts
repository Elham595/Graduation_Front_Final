import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TailorService } from 'src/app/services/tailorserv.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {
  
   //isDesigner:boolean=false;
   username!:string  |  null
   email!:string
   newtailor!:any
   updated_form!:any;
   successResponse:any | null;
   invalidData:any | null;
  constructor(public _tailorservService:TailorService,private fb:FormBuilder,private _activatedRoute: ActivatedRoute, private _Router:Router) { }
    
   submit_UpdatedForm(updated_form:FormGroup){
    console.log(updated_form);
    this._tailorservService.updateTailorProfile(this.email,this.username,updated_form.value)
    .subscribe(res=>{console.log(res);

      if(this.invalidData){
        this.invalidData = null;
      }
      this.successResponse = {};
      console.log(res)
    },err =>{
      if(this.successResponse){
        this.successResponse = null;
      }
      this.invalidData = {};
    })
    
  }

  

  ngOnInit(): void {

    this._activatedRoute.paramMap.subscribe((prams:any) => {

      this.username = prams.get('username');
      this._tailorservService.GetTailorProfile(this.username)
      .subscribe((tailor:any) =>{
        this.email = tailor.email;
        this.updated_form=this.fb.group({
          User:this.fb.group({
            FirstName:new FormControl(tailor.userNameNavigation.firstName),
            MiddleName:new FormControl(tailor.userNameNavigation.middleName),
            LastName:new FormControl(tailor.userNameNavigation.lastName),
            BirthDate:new FormControl(tailor.userNameNavigation.birthDate),
            MobileNumber:new FormControl(tailor.userNameNavigation.mobileNumber,[Validators.minLength(11)]),
          }),
          Account:this.fb.group({
            Password:new FormControl(null,[Validators.minLength(6)]),
          }),
          Tailor:this.fb.group({
            Address:new FormControl(tailor.address),
            City:new FormControl(tailor.city),
            Bio:new FormControl(tailor.bio),
            ExperienceYears:new FormControl(tailor.experienceYears),
          }),
         })

      })
    })
  }

}