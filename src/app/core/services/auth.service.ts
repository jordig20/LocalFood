import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(
    private _router: Router,
  ) {
  }

  loggedIn(): Boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }

  getId() {
    return localStorage.getItem('id');
  }
}
