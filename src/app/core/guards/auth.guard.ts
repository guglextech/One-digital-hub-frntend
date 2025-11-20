// auth.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private storage: StorageService, private router: Router) {}


  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['role'];

    console.log(expectedRole, "EXPECTED ROLE")
  
    const userRole = this.storage.getUserRole();
    if (userRole && userRole === expectedRole) {

      console.log(expectedRole, "EXPECTED ROLE", userRole, "USER ROLE")
  

      return true;
    } else {
      // this.router.navigate(['/forbidden']);
      this.router.navigate(['/auth/signin']);
      return false;
    }
  }
  
}