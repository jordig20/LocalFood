import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import { ApiService } from "../core/services/api.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  checkoutForm;

  public data: any = {};

  constructor(private _formBuilder: FormBuilder,
              private _api: ApiService,
              private _http: HttpClient,
              private _router: Router
  ) {
    this.checkoutForm = this._formBuilder.group({
      name: '',
      mail: '',
      password: '',
      city: 'Reus',
    });
  }

  ngOnInit(): void {
  }

  onSubmit(user) {

    console.log(user);
    this._api.post('user/add', user).subscribe(r => console.log('POST', r));

  }

}
