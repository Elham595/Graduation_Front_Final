import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenService } from '../authen.service';

@Component({
  selector: 'app-designer',
  templateUrl: './designer.component.html',
  styleUrls: ['./designer.component.css']
})
export class DesignerComponent implements OnInit {

  error!: string;

  constructor(private _AuthenService: AuthenService, private fb: FormBuilder, private _Router: Router) { }
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
    designer: this.fb.group({
      Email: new FormControl(),
      UserName: new FormControl(),
      Address: new FormControl(null, [Validators.required]),
      City: new FormControl(null, [Validators.required]),
      ExperienceYear: new FormControl(null, [Validators.required]),
      Bio: new FormControl(null, [Validators.required]),
      Gender: new FormControl("", [Validators.required])
    })
  })
  submit_form(register_form: FormGroup) {
    this.register_form.patchValue({
      account: { RoleId: 3 },
      designer: { Email: register_form.value["account"]["Email"], UserName: register_form.value["user"]["UserName"] }
    })
    console.log(register_form.value);
    console.log(register_form.value["account"]["RoleId"]);
    var id = register_form.value["account"]["RoleId"];
    this._AuthenService.register(register_form.value)
      .subscribe((response: any) => {

        console.log("trueeeeeeeee success")
        this._Router.navigate(['login']);
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
