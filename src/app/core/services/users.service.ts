import {
  HttpClient,
  HttpHeaders
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root",
})

export class UsersService {
  private BASE_URL = `${env.BASE_URL}`;

  constructor(private http: HttpClient) { }


  getAllUsers(page: number, limit: number) {
    const token = localStorage.getItem("token");
    return this.http.get(`${this.BASE_URL}/users/all`, {
      headers: new HttpHeaders({
        "Authorization": `Bearer ${token}`
      }),
      params: { page: page.toString(), limit: limit.toString() }
    });
  }
}
