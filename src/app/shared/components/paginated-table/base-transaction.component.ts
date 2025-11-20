// base-transaction.component.ts (Abstract base component for shared logic)
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TransactionService } from "src/app/core/services/transaction.service";
import { PaginatedTableComponent } from "src/app/shared/components/paginated-table/paginated-table.component";
 

@Component({ template: "" })
export abstract class BaseTransactionComponent extends PaginatedTableComponent {
  public drawRef: string;
  public downloadingLoader = false;

  transactionSvc = inject(TransactionService)
  route = inject(ActivatedRoute)

  constructor() {
    super();
    this.drawRef = this.route.snapshot.params["drawRef"];
  }

  protected fetchData(status?: string): void {
    this.loading = true;
    this.error = null;

    this.transactionSvc.fetchTransactions(this.currentPage, this.pageSize, this.drawRef, status).subscribe({
      next: (data) => this.handleApiResponse(data),
      error: (error) => this.handleError(error),
    });
  }

  protected abstract handleApiResponse(data: any): void;

  protected handleError(error: any): void {
    console.error("Error fetching data:", error);
    this.error = "Failed to fetch data.";
    this.loading = false;
  }

  override exportFile(type: string): void {
    if (type === "csv") {
      this.fetchAllDataAndExportCSV();
    } else {
      super.exportFile(type);
    }
  }

  private fetchAllDataAndExportCSV(): void {
    this.downloadingLoader = true;
    this.transactionSvc.fetchTransactions(1, this.totalRecords, this.drawRef).subscribe({
      next: (data) => {
        const fullData = this.mapDataForExport(data);
        this.transactionSvc.exportToCSV(fullData, this.tableHeaders, "TRANSACTIONS", this.drawRef);
        this.downloadingLoader = false;
      },
      error: (error) => {
        console.error("Error fetching full data:", error);
        this.downloadingLoader = false;
      },
    });
  }

  protected abstract mapDataForExport(data: any): any[];
}