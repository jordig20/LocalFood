import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../core/services/api.service';
import { GlobalConstants } from '../common/global-constants';
import { EncrDecrService } from '../core/services/encrdecr.service';
import { UseridService } from '../core/services/userid.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  checkoutForm;
  infoMessage = '';
  loged: boolean = false;
  error: boolean = false;
  errorText: string;


  constructor(private formBuilder: FormBuilder,
              private _api: ApiService,
              private _router: Router,
              private route: ActivatedRoute,
              private _encrDecr: EncrDecrService,
              private _userId: UseridService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      mail: '',
      password: '',
    });
  }

  ngOnInit(): void {

  }

  onSubmit(user) {
    user.mail = user.mail.toLowerCase();
    user.password = this._encrDecr.set(GlobalConstants.pwdKey, user.password);
    console.log(user);


    this._api.post('auth/login', user).subscribe(res => {

      localStorage.setItem('token', res.token);
      localStorage.setItem('id', res.id);

      this._api.get('user/getone/' + res.id).subscribe(response => {
        this.loged = true;
        this._userId.setUserId();
        setTimeout(this.navigateTo(response[0]).bind(this), 3000);
      });

    }, error => {
      this.errorText = error.error;
      this.error = true;
    });
  }

  navigateTo(user): any {
    switch (user.type) {
      case 'user':
        this._router.navigate(['index']);
        break;
      case 'homechef':
        this._router.navigate(['perfil']);
        break;
      case 'restaurant':
        this._router.navigate(['perfil']);
        break;
    }
  }

}
