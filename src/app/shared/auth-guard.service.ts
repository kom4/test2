import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()

export class AuthGuard implements CanActivateChild {

  constructor(private authService: AuthService) {}

  canActivateChild(): Promise<boolean> {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(this.authService.isAuthenticated());
      } , 200);
    });

  }

}
