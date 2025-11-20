import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpParams,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment as env } from "src/environments/environment.prod";
export interface ISucessMessageResponse {
  success: boolean;
  message: string;
}

export interface FileUploadResponse {
  success: boolean;
  message: string;
  fileUrl?: string;
}

export interface UploadResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: "root",
})

export class UploadService {
  private BASE_URL = `${env.BASE_URL}/dashboard`;

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("token");
    return new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
  }

  uploadFile(file: File): Observable<HttpEvent<ISucessMessageResponse>> {
    const formData = new FormData();
    formData.append("file", file);

    return this.http.post<any>(`${this.BASE_URL}/upload`, formData, {
       headers : this.getHeaders(),
      reportProgress: true,
      observe: "events",
    });
  }
}
