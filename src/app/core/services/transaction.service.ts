import {  inject, Injectable } from '@angular/core';
import { DashboardService } from 'src/app/features/match-three/services/dashboard.service';
import { STATUS } from "src/app/core/constants/constants";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
 
  dashboardSvc = inject(DashboardService)

 
  fetchTransactions(
    page: number,
    pageSize: number,
    drawRef: string,
    status?: string
  ): Observable<any> {
    return this.dashboardSvc.getPicks(page, pageSize, drawRef, status);
  }

  exportToCSV(data: any[], headers: string[], filenamePrefix: string, drawRef: string): void {
    const headersRow = headers.join(",");
    const rows = data.map((row) => headers.map((header) => `"${row[header] || ""}"`).join(",")).join("\n");
    const csvContent = `data:text/csv;charset=utf-8,${headersRow}\n${rows}`;
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    const timestamp = new Date().toISOString().replace(/[:.-]/g, "_");
    link.setAttribute("download", `${filenamePrefix}_${drawRef}_${timestamp}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
} 
