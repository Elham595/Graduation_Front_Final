import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { DesginersService } from 'src/app/services/desginers.service';

@Component({
  selector: 'app-update-designer-form',
  templateUrl: './update-designer-form.component.html',
  styleUrls: ['./update-designer-form.component.css']
})
export class UpdateDesignerFormComponent implements OnInit {  
   username!:string  |  null
   email!:string
   updated_form!:any;
   SucessResponse: any | null;
   InvalidData: any | null;
  constructor(public _designerService:DesginersService,private fb:FormBuilder,private _activatedRoute: ActivatedRoute, private _Router:Router) { }
    
   submit_UpdatedForm(updated_form:FormGroup){
    console.log(updated_form);
    this._designerService.updateDesignerProfile(this.email,this.username,updated_form.value).subscribe(res=>
      {console.log(res);
        this.InvalidData = null;
        this.SucessResponse = {};
        console.log(this.SucessResponse);

      },err => {
        this.errorHandler(err);
      })

  }
  errorHandler(error: HttpErrorResponse) {
    console.log(error);
    if(this.SucessResponse)
    {
      this.SucessResponse = null;
    }
    this.InvalidData = {};
    return of(error);
  }
  

  ngOnInit(): void {
    this.SucessResponse = null;
    this.InvalidData = null;
    this._activatedRoute.paramMap.subscribe(prams => {

      this.username = prams.get('username');
      this._designerService.GetDesginerProfile(this.username)
      .subscribe((desiger:any) =>{
        this.email = desiger.email;
        this.updated_form=this.fb.group({
          User:this.fb.group({
            FirstName:new FormControl(desiger.userNameNavigation.firstName),
            MiddleName:new FormControl(desiger.userNameNavigation.middleName),
            LastName:new FormControl(desiger.userNameNavigation.lastName),
            BirthDate:new FormControl(desiger.userNameNavigation.birthDate),
            MobileNumber:new FormControl(desiger.userNameNavigation.mobileNumber,[Validators.minLength(11)]),
          }),
          Account:this.fb.group({
            Password:new FormControl(null,[Validators.minLength(6)]),
          }),
          Designer:this.fb.group({
            Address:new FormControl(desiger.address),
            City:new FormControl(desiger.city),
            Bio:new FormControl(desiger.bio),
            ExperienceYear:new FormControl(desiger.experienceYear),
          }),
         })

      })
    })
  }
}