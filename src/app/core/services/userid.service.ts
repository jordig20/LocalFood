import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UseridService {

  public userId: string;

  constructor(
    private _authService: AuthService,
  ) {
  }

  setUserId() {
    this.userId = this._authService.getId();
  }
}
