import {
  HttpClient,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment as env } from "src/environments/environment.prod";

@Injectable({
  providedIn: "root",
})
export class CancelSubscriptionService {
  http = inject(HttpClient);
  private BASE_URL = `${env.BASE_URL}/lgm`;

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem("token");
    return new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    });
  }

  /**
   * Get Subscribers
   * @param serviceType - Service type (e.g., 'MONEY ROW')
   * @param filterBy - Phone number to filter by (e.g., '233542514003')
   * @param page - Page number
   * @param limit - Limit per page
   */
  getSubscribers(
    serviceType: string,
    filterBy: string,
    page: number = 1,
    limit: number = 1
  ): Observable<any> {
    const url = `${this.BASE_URL}/subscribers`;
    const params = new HttpParams()
      .set("serviceType", serviceType)
      .set("filterBy", filterBy)
      .set("page", page.toString())
      .set("limit", limit.toString());

    return this.http.get<any>(url, {
      headers: this.getHeaders(),
      params,
    });
  }

  /**
   * Cancel Recurring Invoice
   * @param phone - Phone number (e.g., 233558757507)
   * @param recurringInvoiceId - Recurring invoice ID
   * @param serviceType - Service type (e.g., 'HOT NUMBERS')
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

