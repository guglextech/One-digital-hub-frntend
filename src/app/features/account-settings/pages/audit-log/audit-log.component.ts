import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { formatDateToCustomFormat } from 'src/app/core/utils/formats';
import { PaginatedTableComponent } from 'src/app/shared/components/paginated-table/paginated-table.component';

@Component({
  selector: 'app-audit-log',
  standalone: true,
  imports: [PaginatedTableComponent],
  templateUrl: './audit-log.component.html',
  styleUrl: './audit-log.component.scss'
})
export class AuditLogComponent extends PaginatedTableComponent {

  override tableHeaders = ["Time", "User", "Activity"];
  override pageSize = 10;
  override loading = true;
  override totalRecords = 0;
  override currentPage = 1;

  authService = inject(AuthService);
  route = inject(ActivatedRoute);
   

  ngOnInit(): void {
    this.fetchData();
  }


  private fetchData(): void {
    this.loading = true;
    this.error = null;

    this.authService.auditLog(this.currentPage, this.pageSize).subscribe({
      next: (data) => this.handleApiResponse(data),
      error: (error) => this.handleError(error),
    });
  }

  private handleApiResponse(data: any): void {
    this.tableData = data?.result?.map((item: any) => ({
      "Time": formatDateToCustomFormat((item.createdAt)) || "N/A",
      "User": item.user || "N/A",
      "Activity": item.activity
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

  triggerPageChange(event: { page: number; limit: number }): void {
    this.currentPage = event.page;
    this.pageSize = event.limit;
    this.fetchData();
  }

  triggerSearchChange(query: string): void {
    this.onSearchChange.emit(query);
  }

  view(rowData: any): void {
    console.log("Viewing bank details for:", rowData);
  }



  override hasActions = () => false;
  override getActions = () => [];
  override hasSearch = () => true;
  override hasdownloadOption = () => false;


}
