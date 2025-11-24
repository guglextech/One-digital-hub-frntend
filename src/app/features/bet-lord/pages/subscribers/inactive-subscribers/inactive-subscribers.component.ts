import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  SEARCH_TYPES,
  DASHBOARD_ACTIONS,
} from "src/app/core/constants/constants";
import { SERVICE_TYPES } from "src/app/core/constants/services-types";
import { formatDateToCustomFormat } from "src/app/core/utils/formats";
import { PaginatedTableComponent } from "src/app/shared/components/paginated-table/paginated-table.component";
import { BigMoneyService } from "../../../services/big-money.service";

@Component({
  selector: "app-inactive-subscribers",
  standalone: true,
  imports: [PaginatedTableComponent],
  templateUrl: "./inactive-subscribers.component.html",
  styleUrl: "./inactive-subscribers.component.scss",
})
export class InactiveSubscribersComponent extends PaginatedTableComponent {
  override tableHeaders = ["Mobile", "Status", "Network", "Created At"];
  override pageSize = 10;
  override totalRecords = 0;
  override currentPage = 1;

  constructor(
    private modal: NgbModal,
    private bigMoneySvc: BigMoneyService
  ) {
    super();
    this.fetchData();
  }

  triggerSearchChange(event: any) {
    console.log(event);
  }

  private fetchData(): void {
    this.loading = true;
    this.error = null;

    this.bigMoneySvc
      .subscribers(
        SERVICE_TYPES.Sports,
        SEARCH_TYPES.OPTEDOUT,
        this.currentPage,
        this.pageSize
      )
      .subscribe({
        next: (data) => this.handleApiResponse(data),
        error: (error) => this.handleError(error),
      });
  }

  view(event: any) {}

  exportFiles(type: string): void {}

  triggerPageChange(event: { page: number; limit: number }): void {
    this.currentPage = event.page;
    this.pageSize = event.limit;
    this.fetchData();
  }

  override hasActions: () => boolean = () => false;
  override getActions = () => [DASHBOARD_ACTIONS.CANCEL_SUBCRIPTION];

  private handleApiResponse(data: any): void {
    this.tableData =
      data?.result?.map((item: any) => ({
        data: item,
        "Created At": formatDateToCustomFormat(item.createdAt),
        "Transaction ID": item.creditTranId || "N/A",
        "Mobile": item.phone,
        "Name": item.name,
        "Network": item.network,
        "Recurring Invoice": item.recurringInvoiceId || "N/A",
        "Status": item.status,
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
}
