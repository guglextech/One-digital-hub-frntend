import {
    HttpClient,
    HttpHeaders,
    HttpEvent,
    HttpParams,
  } from "@angular/common/http";
  import { inject, Injectable } from "@angular/core";
  import { Observable } from "rxjs";
  import {
    IForecastPayload,
    IPriceSetupPayload,
  } from "src/app/core/models/types.services";
  import { environment as env } from "src/environments/environment.prod";
  
  @Injectable({
    providedIn: "root",
  })
  export class GenericService {
    http = inject(HttpClient);
    private BASE_URL = `${env.BASE_URL}/forecast`;
  
    private getHeaders(): HttpHeaders {
      const token = localStorage.getItem("token");
      return new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      });
    }
  
    forecastHistory(
      serviceType: string,
      filterBy: string,
      page: number,
      limit: number
    ): Observable<any> {
      let params = new HttpParams()
        .set("serviceType", serviceType.toString())
        .set("filterBy", filterBy.toString())
        .set("page", page.toString())
        .set("limit", limit.toString());
  
  
       // ALL 
       // Title
  
      // Only add filterBy if it is provided
      if (filterBy) {
        params = params.set("filterBy", filterBy);
      }
  
      return this.http.get<any>(`${this.BASE_URL}/forecast/history`, {
        headers: this.getHeaders(),
        params,
      });
    }
  
    createForecast(payload: IForecastPayload): Observable<any> {
      return this.http.post(`${this.BASE_URL}/forecast/create`, payload, {
        headers: this.getHeaders(),
      });
    }
  
    updateForecast(id: string, payload: IForecastPayload): Observable<any> {
      return this.http.post(`${this.BASE_URL}/forecast/update/${id}`, payload, {
        headers: this.getHeaders(),
      });
    }
  
    createPrice(payload: IPriceSetupPayload): Observable<any> {
      return this.http.post<any>(`${this.BASE_URL}/price/create`, payload, {
         headers: this.getHeaders(),
      });
    }
  
    paymentHistory(
      serviceType: string,
      filterBy: string,
      page: number,
      limit: number
    ): Observable<any> {
      let params = new HttpParams()
        .set("serviceType", serviceType.toString())
        .set("filterBy", filterBy.toString())
        .set("page", page.toString())
        .set("limit", limit.toString());
  
      // Only add filterBy if it is provided
      if (filterBy) {
        params = params.set("filterBy", filterBy);
      }
  
      return this.http.get<any>(`${this.BASE_URL}/payments`, {
        headers: this.getHeaders(),
        params,
      });
    }
  
    subscribers(
      serviceType: string,
      filterBy: string,
      page: number,
      limit: number
    ): Observable<any> {
      let params = new HttpParams()
        .set("serviceType", serviceType.toString())
        .set("filterBy", filterBy.toString())
        .set("page", page.toString())
        .set("limit", limit.toString());
  
         // opted = 
        // optedOut =
  
      // Only add filterBy if it is provided
      if (filterBy) {
        params = params.set("filterBy", filterBy);
      }
  
      return this.http.get<any>(`${this.BASE_URL}/subscribers`, {
        headers: this.getHeaders(),
        params,
      });
    }
  
    /**
     * Get price info for a given serviceType
     */
    getPriceInfo(serviceType: string): Observable<any> {
      const url = `${this.BASE_URL}/price/info`;
      const params = new HttpParams().set("serviceType", serviceType);
  
      return this.http.get<any>(url, {
        headers: this.getHeaders(),
        params,
      });
    }
  
    /**
     * Send SMS Message
     * Example: /lgm/send-sms-message
     */
    sendSmsMessage(serviceType: string, message: string, status: string): Observable<any> {
      const url = `${this.BASE_URL}/send-sms-message`;
      const params = new HttpParams()
        .set("serviceType", serviceType)
        .set("message", message)
        .set("status", status);
  
      return this.http.get<any>(url, {
        headers: this.getHeaders(),
        params,
      });
    }
  
    /**
     * Cancel Recurring Invoice
     * Example:
     */
    cancelRecurringInvoice(
      phone: string,
      recurringInvoiceId: string,
      serviceType: string
    ): Observable<any> {
      const url = `${this.BASE_URL}/service/recurring-invoice/cancel`;
      const params = new HttpParams()
        .set("phone", phone)
        .set("recurringInvoiceId", recurringInvoiceId)
        .set("serviceType", serviceType);
  
      return this.http.delete<any>(url, {
        headers: this.getHeaders(),
        params,
      });
    }
  }
  