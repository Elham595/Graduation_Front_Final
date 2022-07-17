import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl,Validators} from '@angular/forms';
import { Router } from  '@angular/router';
import {AuthenService} from '../authen.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  error!: string;

  constructor(private _AuthenService:AuthenService,private fb:FormBuilder,private _Router:Router) { }
  register_form=this.fb.group({
    account:this.fb.group({
      Email:new FormControl(null,[Validators.required,Validators.minLength(3)]),
      Password:new FormControl(null,[Validators.required,Validators.minLength(6)]),
      CreationDate:new FormControl(null),
      RoleId:new FormControl()
    }),
    user:this.fb.group({
      UserName:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(10)]),
      FirstName:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(12)]),
      MiddleName:new FormControl(null),
      LastName:new FormControl(null,[Validators.required,Validators.minLength(5),Validators.maxLength(12)]),
      BirthDate:new FormControl(null,[Validators.required]),
      MobileNumber:new FormControl(null,[Validators.required,Validators.minLength(11)])
    }),
    client:this.fb.group({
    Email:new FormControl(),
    UserName:new FormControl(),
    Address:new FormControl(null,[Validators.required]),
    City:new FormControl(null,[Validators.required])
  })});
  
  submit_form(register_form:FormGroup){
    this.register_form.patchValue({
       account:{ RoleId:4},
       client:{Email:register_form.value["account"]["Email"],UserName:register_form.value["user"]["UserName"]}
    })
    console.log(register_form.value);
    console.log(register_form.value["account"]["RoleId"]);
    var id=register_form.value["account"]["RoleId"];
    this._AuthenService.register(register_form.value).subscribe((response:any)=>{
      // if(response.Status== 'Success')
      // {
      //   console.log("trueeeeeeeee success")
      //   this ._Router.navigate(['login']);
      // }else
      // {
      //   //this.error=response.errors.email.message;
      //   console.log("erroooooooooor"+response);
      // }
      console.log("trueeeeeeeee success")
      this._Router.navigate(['/client/home']);
    },
    (err) => {

      var entries =  Object.entries(err.error);
      entries.forEach((entry)=>{
        var errorDesc = JSON.stringify(Object.values(entry));
        this.error += `\n${errorDesc}`;
      });
      console.log(err);
    });

    
  }
  ngOnInit(): void {
  }

}
