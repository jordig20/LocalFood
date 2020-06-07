import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormControl} from "@angular/forms";
import { ApiService } from "../core/services/api.service";
import { Router } from "@angular/router";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  checkoutForm;
  saved: boolean = false;

  public data: any = {};

  constructor(private _formBuilder: FormBuilder,
              private _api: ApiService,
              private _http: HttpClient,
              private _router: Router,
  ) {
    this.checkoutForm = this._formBuilder.group({
      name: new FormControl('', [
        Validators.required
      ]),
      mail: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      city: 'Reus',
      type: 'Cliente'
    });
  }

  ngOnInit(): void {
  }

  onSubmit(user) {
    user.name = user.name.toLowerCase();
    user.mail = user.mail.toLowerCase();
    user.city = user.city.toLowerCase();
    if(user.type == "Cliente") {
      user.type = "user";
    }
    user.type = user.type.toLowerCase();
      this._api.post('user/add', user).subscribe(r => {
        this.saved = true;
        setTimeout(this.navigateToLogin.bind(this),3000);
      }
    );

  }

  navigateToLogin() {
    this._router.navigate(['login']);
  }

}
