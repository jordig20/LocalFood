import {Component, NgModule, OnInit} from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute  } from "@angular/router";
import { ApiService } from "../core/services/api.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checkoutForm;
  infoMessage = '';

  constructor(private formBuilder: FormBuilder,
              private _api: ApiService,
              private _router: Router,
              private route: ActivatedRoute
  ) {
    this.checkoutForm = this.formBuilder.group({
      mail: '',
      password: ''
    });
  }

  ngOnInit(): void {

  }

  onSubmit(user) {

  }


}
