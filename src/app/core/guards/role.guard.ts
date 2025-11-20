// role.guard.ts
import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, Router } from "@angular/router";
// import { AuthService } from './auth.service';
import { StorageService } from "../services/storage.service";

@Injectable({
  providedIn: "root",
})
export class RoleGuard implements CanActivate {
  constructor(
    private storage: StorageService,
    private router: Router
  ) {}

  canActivate(): boolean {
    if (this.storage.isAuthenticated()) {
      if (this.storage.isTokenExpired()) {
        this.storage.logout();
        return false;
      }
      return true;
    } else {
      this.router.navigate(["/auth/signin"]);
      return false;
    }
  }
}