import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SERVICE_TYPES } from "src/app/core/constants/services-types";
import { CreateForecastMessageComponent } from "src/app/shared/components/create-forecast-message/create-forecast-message.component";
import { PaginatedTableComponent } from "src/app/shared/components/paginated-table/paginated-table.component";
import { LottoKeysService } from "../../services/lotto-keys.service";
import { formatDateToCustomFormat } from "src/app/core/utils/formats";
import { IForecastPayload } from "src/app/core/models/types.services";
import { ToastrService } from "ngx-toastr";
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
      private toastSvc: ToastrService,
      private lottoKeySvc: LottoKeysService
    ) {
      super();
      this.fetchData();
    }
  
    triggerSearchChange(event: any) {
      console.log(event);
    }
  
    view(event: any) {}
  
    exportFiles(type: string): void {}
  
    triggerPageChange(event: { page: number; limit: number }): void {
      this.currentPage = event.page;
      this.pageSize = event.limit;
      this.fetchData();
    }
  
    createForecast() {
      console.log("Create Closure Message");
      const modalRef = this.modal.open(CreateForecastMessageComponent, {
        centered: true,
      });
  
      modalRef.componentInstance.serviceType = SERVICE_TYPES.LottoKeys;
      modalRef.componentInstance.buttonAction.subscribe((data: any) => {
        console.log("DATA here:", data);
        this.createForecastMessage(data);
      });
    }
  
    override hasActions: () => boolean = () => false;
  
    private fetchData(): void {
      this.loading = true;
      this.error = null;
  
      this.lottoKeySvc
        .forecastHistory(
          SERVICE_TYPES.LottoKeys,
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
      this.lottoKeySvc.createForecast(data).subscribe({
        next: (res) => {
          console.log(res);
          this.toastSvc.success("Forecast message created successfully!");
          this.loading = true;
          this.fetchData();
        },
        error: (err) => {
          console.error("Error creating forecast message:", err);
          this.toastSvc.error("Failed to create forecast message. Please try again.");
          this.loading = false;
        },
      });
    }



      broadcastSMS() {
        console.log("Create Closure Message");
        const modalRef = this.modal.open(SendSMSBroadcastComponent, {
          size: "md",
          centered: true,
        });
    
        modalRef.componentInstance.serviceType = SERVICE_TYPES.LottoKeys;
        modalRef.componentInstance.buttonAction.subscribe((data: any) => {
          console.log("DATA here:", data);
          this.sendBroadcastSMS(data);
        });
      }
    
   
    
      sendBroadcastSMS(data: any) {
        this.lottoKeySvc
          .sendSmsMessage(SERVICE_TYPES.LottoKeys, data.message, data.status)
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
