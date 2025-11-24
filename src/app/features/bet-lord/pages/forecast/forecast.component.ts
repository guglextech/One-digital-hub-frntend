import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CreateForecastMessageComponent } from "src/app/shared/components/create-forecast-message/create-forecast-message.component";
import { PaginatedTableComponent } from "src/app/shared/components/paginated-table/paginated-table.component";
import { formatDateToCustomFormat } from "src/app/core/utils/formats";
import { SERVICE_TYPES } from "src/app/core/constants/services-types";
import { IForecastPayload } from "src/app/core/models/types.services";
import { ToastrService } from "ngx-toastr";
import { BigMoneyService } from "../../services/big-money.service";
import { SendSMSBroadcastComponent } from "src/app/shared/components/create-closure-message/create-closure-message.component";

@Component({
  selector: "app-forecast",
  standalone: true,
  imports: [PaginatedTableComponent],
  templateUrl: "./forecast.component.html",
  styleUrl: "./forecast.component.scss",
})
export class ForecastComponent extends PaginatedTableComponent {
  override tableHeaders = [
    "Title",
    "Message",
    "Debit Type",
    "Schedule For",
    "Created At",
    "Updated At",
  ];
  override pageSize = 10;
  override totalRecords = 0;
  override currentPage = 1;

  constructor(
    private modal: NgbModal,
    private bigMoneySvc: BigMoneyService,
    private toastSvc : ToastrService
  ) {
    super();
    this.fetchData();
  }

  triggerPageChange(event: { page: number; limit: number }): void {
    this.currentPage = event.page;
    this.pageSize = event.limit;
    this.fetchData();
  }

  triggerSearchChange(query: string): void {
    this.searchQuery = query;
    this.currentPage = 1;
    this.bigMoneySvc
      .forecastHistory(
        SERVICE_TYPES.Sports,
        query,
        this.currentPage,
        this.pageSize
      )
      .subscribe({
        next: (data: any) => this.handleApiResponse(data),
        error: (error) => this.handleError(error),
      });
  }

  view(event: any) {}

  exportFiles(type: string): void {}

  createForecast() {
    console.log("Create Closure Message");
    const modalRef = this.modal.open(CreateForecastMessageComponent, {
      centered: true,
    });

    modalRef.componentInstance.serviceType = SERVICE_TYPES.Sports;
    modalRef.componentInstance.buttonAction.subscribe((data: any) => {
      console.log("DATA here:", data);
      this.createForecastMessage(data);
    });
  }

  override hasActions: () => boolean = () => false;

  private fetchData(): void {
    this.loading = true;
    this.error = null;

    this.bigMoneySvc
      .forecastHistory(
        SERVICE_TYPES.Sports,
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
        "Title": item.title,
        "Created At": formatDateToCustomFormat(item.createdAt),
        "Transaction ID": item.creditTranId || "N/A",
        "Mobile": item.phone,
        "Debit Type": item.debitType,
        "Message": item.message,
        "Schedule For": formatDateToCustomFormat(item.schedule),
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

  createForecastMessage(data: IForecastPayload) {
    this.bigMoneySvc.createForecast(data).subscribe({
      next: (res) => {
        this.toastSvc.success("Forecast message created successfully!");
        this.fetchData();
      },
      error: (err) => {
        this.toastSvc.error("Error creating forecast message. Please try again.");
        console.error("Error creating forecast message:", err);
        // Handle error response
        this.loading = false;
        this.error = "Failed to create forecast message.";
        this.tableData = []; 
      },
    });
  }


 
  


    broadcastSMS() {
      const modalRef = this.modal.open(SendSMSBroadcastComponent, {
        size: "md",
        centered: true,
      });
  
      modalRef.componentInstance.serviceType = SERVICE_TYPES.Sports;
      modalRef.componentInstance.buttonAction.subscribe((data: any) => {
        console.log("DATA here:", data);
        this.sendBroadcastSMS(data);
      });
    }
  
   
    sendBroadcastSMS(data: any) {
      this.bigMoneySvc.sendSmsMessage(SERVICE_TYPES.Sports, data.message ,data.status)
        .subscribe({
          next: (response: any) => {
            console.log("SMS sent successfully:", response);
            this.toastSvc.success("SMS sent successfully!");
          },
          error: (error: any) => {
            this.toastSvc.error("Error sending SMS. Please try again.");
            console.error("Error sending SMS:", error);
          },
        });
    }
}
