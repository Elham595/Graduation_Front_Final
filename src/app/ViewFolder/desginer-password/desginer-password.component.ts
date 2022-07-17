import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-desginer-password',
  templateUrl: './desginer-password.component.html',
  styleUrls: ['./desginer-password.component.css']
})
export class DesginerPasswordComponent implements OnInit {
  email!: string | null;
  UpdatedPasswordForm!: FormGroup;
  SucessResponse: any | null;
  InvalidData: any | null;
  constructor(private activatedRoute: ActivatedRoute, private accountService: AccountService, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.SucessResponse = null;
    this.InvalidData = null;
    this.activatedRoute.paramMap.subscribe((params:any) => {
      this.email = params.get('email');

      this.UpdatedPasswordForm = this.fb.group({
        OldPassword: new FormControl(null),
        NewPassword: new FormControl(null),
        ConfirmPassword: new FormControl(null)
      })
    })
  }
  submitPasswordForm() {
    if (this.UpdatedPasswordForm && this.email) {
      this.accountService.updatepassword(this.email, this.UpdatedPasswordForm.value)
        .subscribe((response:any) => {
            console.log(response);
            this.InvalidData = null;
            this.SucessResponse = {};
            console.log(this.SucessResponse);


        },(err:any) => {
          this.errorHandler(err);
        })
    }
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


}
