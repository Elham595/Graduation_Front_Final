import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, FormControl } from '@angular/forms';
import { AccountService } from 'src/app/account.service';
@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent implements OnInit {

  Email!: any | null;
  UserName!: any | null;
  deleteform!:FormGroup;
  constructor(private _AccountService:AccountService ,private fb:FormBuilder) { }


  ngOnInit(): void {
    this.deleteform = this.fb.group({
      Email: new FormControl(null),
      UserName: new FormControl(null)
    })
  }
  submitDelete(){
    // this._AccountService.deleteaccount(this.Email,this.UserName).subscribe((res:any)=>{
    this._AccountService.deleteaccount(this.Email,this.UserName).subscribe((res:any)=>{
         console.log(res);
    })
  }

}
