import { Injectable, inject } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: "root",
})
export class StorageService {
  private tokenKey = "token";
  private jwtHelper = new JwtHelperService();

   
  // #router: Router = inject(Router);
  constructor(private router: Router) {}

  // Store token
  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }


  /**
   * 
   * @returns 
   */
  private getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }


 /**
  * 
  * @returns 
  */
  isAuthenticated(): boolean {
    const token = this.getToken();
    return !!token;
  }

   
  /**
   * Logout
   */
  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem("token");
    localStorage.removeItem("authToken");
    localStorage.removeItem('match');
    this.router.navigate(["/auth/signin"]);
  }

 
  /**
   * 
   * @param token 
   * @returns 
   */
  isTokenExpired(token?: string): boolean {
    if (token) {
      try {
        return this.jwtHelper.isTokenExpired(token);
      } catch {
        return true;
      }
    }

    const storedToken = this.getToken();
    if (!storedToken) return true;
    try {
      return this.jwtHelper.isTokenExpired(storedToken);
    } catch {
      return true;
    }
  }


  
  getUserRole(): string | null {
    const token = this.getToken();
    if (token) {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      return decodedToken.sub;
    }
    return null;
  }
}