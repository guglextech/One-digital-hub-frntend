import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment as env } from "src/environments/environment.prod";
import {
  UpdateUserRequest,
  ChangePasswordRequest,
  ForgotPasswordRequest,
  ISucessMessageResponse,
  ISignupResponse,
  ISignup,
  UpdateStatus,
  UserResponse,
  GenericAPIResponse,
} from "../../core/models/types";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private BASE_URL = env.BASE_URL;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("token");
    return new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
  }

  signupByAdmin(userData: ISignup): Observable<ISignupResponse> {
    return this.http.post<any>(`${this.BASE_URL}/auth/signup`, userData, {
      headers: this.getHeaders(),
    });
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.BASE_URL}/auth/login`, {
      email,
      password,
    });
  }

  forgotPassword(
    params: ForgotPasswordRequest
  ): Observable<ISucessMessageResponse> {
    return this.http.get<ISucessMessageResponse>(
      `${this.BASE_URL}/users/forgot-password`,
      {
        params: new HttpParams().set("username", params.username),
      }
    );
  }

  changePassword(
    data: ChangePasswordRequest
  ): Observable<ISucessMessageResponse> {
    return this.http.post<ISucessMessageResponse>(
      `${this.BASE_URL}/users/update-password`,
      data,
      { headers: this.getHeaders() }
    );
  }

  /**
   * Retrieves the profile of a user.
   *
   * @param {string} username - The username of the user.
   * @return {Observable<any>} An Observable that emits the user's profile.
   */
  getUserProfile(username?: string): Observable<UserResponse> {
    return this.http.get<UserResponse>(`${this.BASE_URL}/users/profile`, {
      headers: this.getHeaders(),
    });
  }

  disableOrEnableUser(
    requestBody: UpdateStatus
  ): Observable<ISucessMessageResponse> {
    return this.http.post<ISucessMessageResponse>(
      `${this.BASE_URL}/users/update-status`,
      requestBody,
      { headers: this.getHeaders() }
    );
  }

  updateUser(
    requestBody: UpdateUserRequest
  ): Observable<ISucessMessageResponse> {
    return this.http.post<ISucessMessageResponse>(
      `${this.BASE_URL}/users/update-user`,
      requestBody,
      { headers: this.getHeaders() }
    );
  }

  auditLog(page: number, limit: number): Observable<GenericAPIResponse> {
    const params = new HttpParams()
      .set("page", page.toString())
      .set("limit", limit.toString());
    return this.http.get<GenericAPIResponse>(`${this.BASE_URL}/users/audit-logs`, {
      headers: this.getHeaders(),
      params,
    });
  }
}
