import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import {AuthenService} from '../authen.service';
import {Router} from '@angular/router'
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.css']
})
export class RegestrationComponent implements OnInit {
  router:any='';
 
  constructor(private fb:FormBuilder,public _AuthenService:AuthenService, public _Router:Router) { }
  error:string='';
  selectedTeam = '';
	onSelected(value:string): void {
		this.selectedTeam = value;
    console.log(this.selectedTeam)
   if(this.selectedTeam=='client'){ this._Router.navigate(['/client']);}
   if(this.selectedTeam=='tailor'){ this._Router.navigate(['/tailor']);}
   if(this.selectedTeam=='designer'){ this._Router.navigate(['/designer']);}
   if(this.selectedTeam=='store'){ this._Router.navigate(['/store']);}
	}
  
  ngOnInit(): void {
  }

}
