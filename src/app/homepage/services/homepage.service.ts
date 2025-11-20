import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment as env } from "src/environments/environment.prod";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HomepageService {
  private BASE_URL = `${env.BASE_URL}/public`;

  constructor(private http: HttpClient) {}

  loadAllDraws(filterBy? : string): Observable<any> {
    return this.http.get<any>(`${this.BASE_URL}/draw?filterBy=${filterBy}`);
  }


  

  // getDrawDetailById(drawRef: string , matchType: number): Observable<any> {
  //   return this.http.get<any>(`${this.BASE_URL}/draw/${drawRef}`);
  // }


  getDrawDetailById(matchType: number, drawRef: string): Observable<any> {
    const url = `${this.BASE_URL}/draw`;
    
    // Use HttpParams to append query parameters
    const params = new HttpParams()
      .set('matchType', matchType)
      .set('drawRef', drawRef);

    // Make the GET request with the params
    return this.http.get<any>(url, { params });
  }


  // getDrawDetailById(
  //   matchType: number,
  //   page: number = 1,
  //   limit: number = 40,
  //   // status: string = 'ACTIVE',
  //   // search: string = ''
  // ): Observable<any> {
  //   let url = `${this.BASE_URL}/draw?matchType=${matchType}&limit=${limit}&page=${page}`;
  //   // if (search) {
  //   //   url += `&search=${encodeURIComponent(search)}`;
  //   // }
  //   return this.http.get(url);
  // }



  getGames(
    matchType: number,
    page: number = 1,
    limit: number = 40,
    status: string = 'ACTIVE',
    search: string = ''
  ): Observable<any> {
    let url = `${this.BASE_URL}/draw?filterBy=${status}&matchType=${matchType}&limit=${limit}&page=${page}`;
    if (search) {
      url += `&search=${encodeURIComponent(search)}`;
    }
    return this.http.get(url);
  }



  getInActiveGames(
    matchType: number,
    page: number = 1,
    limit: number = 40,
    status: string = 'INACTIVE',
    search: string = ''
  ): Observable<any> {
    let url = `${this.BASE_URL}/draw?filterBy=${status}&matchType=${matchType}&limit=${limit}&page=${page}`;
    if (search) {
      url += `&search=${encodeURIComponent(search)}`;
    }
    return this.http.get(url);
  }

}
