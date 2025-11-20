import { Component } from "@angular/core";
import { extend } from "lodash";
import { formatDateToCustomFormat } from "src/app/core/utils/formats";
import { PaginatedTableComponent } from "src/app/shared/components/paginated-table/paginated-table.component";
import { HotNumbersService } from "../../services/hot-numbers.service";
import { SERVICE_TYPES } from "src/app/core/constants/services-types";

@Component({
  selector: "app-payment-history",
  standalone: true,
  imports: [PaginatedTableComponent],
  templateUrl: "./payment-history.component.html",
  styleUrl: "./payment-history.component.scss",
})
export class PaymentHistoryComponent extends PaginatedTableComponent {
  override tableHeaders = ["Phone", "Amount", "Status", "Network" ,  "Recurring Invoice", "USSDID",  "Updated At", "Created At"];
  override pageSize = 10;
  override totalRecords = 0;
  override currentPage = 1;

  constructor(private hotNumberSvc: HotNumbersService) {
    super();
    this.fetchData();
  }

  private fetchData(): void {
    this.loading = true;
    this.error = null;

    this.hotNumberSvc
      .paymentHistory(
        SERVICE_TYPES.HotNumbers,
        "",
        this.currentPage,
        this.pageSize
      )
      .subscribe({
        next: (data) => this.handleApiResponse(data),
        error: (error) => this.handleError(error),
      });
  }

  private handleApiResponse(data: any): void {
    this.tableData =
      data?.result?.map((item: any) => ({
        data: item,
        "Phone": item.phone,
        "Created At": formatDateToCustomFormat(item.createdAt),
        "Network": item.network || "N/A",
        "Amount": item.amount || "N/A",
        "Status": item.status || "N/A",
        "Recurring Invoice": item.recurringInvoiceId || "N/A",
        "USSDID": item.ussdId || "N/A",
        "Updated At": formatDateToCustomFormat(item.updatedAt),
      })) || [];

    this.totalRecords = data.totalRequests || 0;
    this.nextPage = data.nextPage || null;
    this.loading = false;
  }

  private handleError(error: any): void {
    console.error("Error fetching data:", error);
    this.error = "Failed to fetch data.";
    this.loading = false;
  }

  view(event: any) {}

  exportFiles(type: string): void {}

  triggerPageChange(event: { page: number; limit: number }): void {
    this.currentPage = event.page;
    this.pageSize = event.limit;
    this.fetchData();
  }

  triggerSearchChange(event: any) {
    console.log(event);
  }


  override hasActions: () => boolean = () => false;

}
