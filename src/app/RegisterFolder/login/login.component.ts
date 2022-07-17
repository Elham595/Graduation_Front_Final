import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {AuthenService} from '../authen.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthenService:AuthenService,private _Router:Router) {

   }
  login_form=new FormGroup({
    Email:new FormControl(null,Validators.email),
    Password:new FormControl(null,Validators.pattern(`^[A-Z][a-z]{2,8}$`))
  })
  submit_login(login_form:FormGroup){
    console.log(login_form.value);
    this._AuthenService.login(login_form.value).subscribe((response:any)=>
    {
      console.log("hellooooooo"+response.token);
      localStorage.setItem('tokenResponse',JSON.stringify(response));
      localStorage.setItem('token',JSON.stringify(response.token));
      // this._AuthenService.saveUserData();

      this._Router.navigate(['home']);



    },(err:any)=>{
      console.log("erroooooooooor"+err.message);

    })

  }
  ngOnInit(): void {
    console.log('login page');
  }

}
