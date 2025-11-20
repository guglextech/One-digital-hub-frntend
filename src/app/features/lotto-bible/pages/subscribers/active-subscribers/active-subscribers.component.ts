import { Component } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SERVICE_TYPES } from "src/app/core/constants/services-types";
import { formatDateToCustomFormat } from "src/app/core/utils/formats";
import { PaginatedTableComponent } from "src/app/shared/components/paginated-table/paginated-table.component";
import { DASHBOARD_ACTIONS, SEARCH_TYPES } from "src/app/core/constants/constants";
import { LottoBibleService } from "../../../services/lotto-bible.service";
import {  ToastrService } from "ngx-toastr";

@Component({
  selector: "app-active-subscribers",
  standalone: true,
  imports: [PaginatedTableComponent],
  templateUrl: "./active-subscribers.component.html",
  styleUrl: "./active-subscribers.component.scss",
})
export class ActiveSubscribersComponent extends PaginatedTableComponent {
   override tableHeaders = ["Mobile", "Status", "Network", "Recurring Invoice", "Created At"];
  override pageSize = 10;
  override totalRecords = 0;
  override currentPage = 1;

 constructor(
     private modal: NgbModal,
     private toastrSvc : ToastrService,
     private lottoBibleSvc: LottoBibleService,
   ) {
     super();
     this.fetchData();
   }

  
 
   triggerSearchChange(query: string): void {
      this.searchQuery = query;
      this.currentPage = 1;
      this.lottoBibleSvc
        .forecastHistory(
          SERVICE_TYPES.LottoBible,
          query,
          this.currentPage,
          this.pageSize
        )
        .subscribe({
          next: (data: any) => this.handleApiResponse(data),
          error: (error) => this.handleError(error),
        });
    }

 
   private fetchData(): void {
     this.loading = true;
     this.error = null;
 
     this.lottoBibleSvc.subscribers(
         SERVICE_TYPES.LottoBible,
         SEARCH_TYPES.OPTEDIN,
         this.currentPage,
          this.pageSize,
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
   
   override hasActions: () => boolean = () => true;
   override getActions = () => [DASHBOARD_ACTIONS.CANCEL_SUBCRIPTION];
 
   private handleApiResponse(data: any): void {
     this.tableData =
       data?.result?.map((item: any) => ({
         data: item,
         "Created At": formatDateToCustomFormat(
           item.createdAt
         ),
         "Transaction ID": item.creditTranId || "N/A",
         "Mobile": item.phone,
         "Name": item.name,
         "Network": item.network,
          "Recurring Invoice": item.recurringInvoiceId || "N/A",
         "Status": item.status
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


    action(event: any) {
      if (event.action === DASHBOARD_ACTIONS.CANCEL_SUBCRIPTION) {
        const phone = event.data["Mobile"];
        const recurringId = event.data["Recurring Invoice"];
  
        this.lottoBibleSvc.cancelRecurringInvoice(phone, recurringId, SERVICE_TYPES.LottoBible).subscribe({
          next: (response) => {
            console.log("Subscription cancelled successfully:", response);
            this.toastrSvc.success("Subscription cancelled successfully!");
            this.fetchData(); // Refresh the data after cancellation
          },
          error: (error) => {
            console.error("Error cancelling subscription:", error);
            this.toastrSvc.error("Failed to cancel subscription.");
            // this.fetchData(); // Optionally refresh data to reflect changes
          },
        });
      }
    }
}
