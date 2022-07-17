import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { AccountService } from 'src/app/account.service';

@Component({
  selector: 'app-store-password',
  templateUrl: './store-password.component.html',
  styleUrls: ['./store-password.component.css']
})
export class StorePasswordComponent implements OnInit {
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
        .subscribe(response => {
            console.log(response);
            this.InvalidData = null;
            this.SucessResponse = {};
            console.log(this.SucessResponse);


        },err => {
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