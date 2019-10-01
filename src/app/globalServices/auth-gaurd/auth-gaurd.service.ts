import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGaurdService implements CanActivate {
  constructor(private router: Router) {}
  canActivate(): boolean {
    if (typeof Storage !== 'undefined') {
      const hasPermission: boolean = !!localStorage.getItem('token');
      if (hasPermission && localStorage.getItem('token') !== 'undefined') {
        return true;
      } else {
        this.router.navigate(['/signin']);
      }
    } else {
      alert(
        'Your device does not have the basic requirements to run the application. Please try another device.',
      );
    }
  }
}