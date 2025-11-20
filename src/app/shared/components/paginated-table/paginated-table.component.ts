import { CommonModule } from "@angular/common";
import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared.module";
import {
  DASHBOARD_ACTIONS,
  DASHBOARD_HEADER_NAME,
  STATUS,
  STATUS_COLOR_MAP,
} from "src/app/core/constants/constants";
import { debounceTime, distinctUntilChanged, Subject } from "rxjs";
 
@Component({
  selector: "app-paginated-table",
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  templateUrl: "./paginated-table.component.html",
  styleUrls: ["./paginated-table.component.scss"],
})
export class PaginatedTableComponent {
  STATUS = STATUS;
  DASHBOARD_ACTIONS = DASHBOARD_ACTIONS;
  STATUS_COLOR_MAP = STATUS_COLOR_MAP;
  DASHBOARD_HEADER_NAME = DASHBOARD_HEADER_NAME;

  @Output() onExport = new EventEmitter<string>();
  @Input() exportOptions: { type: string; label: string; icon?: string }[] = [
    { type: "excel", label: "Excel", icon: "mdi mdi-file-excel" },
    { type: "pdf", label: "PDF", icon: "mdi mdi-file-pdf" },
  ];

  @Input() tableHeaders: string[] = [];
  @Input() tableData: any[] = [];
  @Input() pageSize: number = 10;
  @Input() totalRecords: number = 0;
  @Input() currentPage: number = 1;
  @Input() nextPage: number | null = null;
  @Input() pageSizeOptions: number[] = [10, 20, 50, 100];

  @Input() hasActions: () => boolean = () => true;
  @Input() getActions: () => string[] = () => [];
  @Input() hasSearch: () => boolean = () => true;
  @Input() hasdownloadOption: () => boolean = () => true;

  @Output() onSearchChange = new EventEmitter<string>();
  @Output() onPageChange = new EventEmitter<{ page: number; limit: number }>();
  @Output() onAction = new EventEmitter<{ action: string; data: any }>();
  @Output() refresh = new EventEmitter<any>();

  @Input() tableTitle: string = "";
  @Input() tableDescription: string = "";
  @Input() loading: boolean = false;
  @Input() error: string | null = null;

 
  filterType: string = "ticket";
  searchQuery: string = "";
  showFilters: boolean = false;
  private searchSubject = new Subject<string>();
  

  constructor() {
    // Debounce search input
    this.searchSubject
      .pipe(debounceTime(50), distinctUntilChanged())
      .subscribe((query) => {
        this.onSearchChange.emit(query);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["tableData"] || changes["totalRecords"]) {
      this.nextPage =
        this.currentPage < this.totalPages() ? this.currentPage + 1 : null;
    }
  }

  changePage(newPage: number): void {
    if (newPage > 0 && newPage <= this.totalPages()) {
      this.currentPage = newPage;
      this.onPageChange.emit({ page: this.currentPage, limit: this.pageSize });
    }
  }

  // Handle page size changes
  changePageSize(newSize: number): void {
    this.pageSize = newSize;
    this.currentPage = 1; // Reset to the first page
    this.onPageChange.emit({ page: this.currentPage, limit: this.pageSize });
  }

  // Calculate total pages
  totalPages(): number {
    return this.totalRecords ? Math.ceil(this.totalRecords / this.pageSize) : 1;
  }

  // Handle search changes
  handleSearch(query: any) {
    this.onSearchChange.emit(this.searchQuery.trim());
  }


  clearFilters() {
    this.searchQuery = "";
    this.refresh.emit();
  }
 
  /**
   * Handle search input changes.
   *
   * If the search query is empty, reset the table list.
   */
  onSearchInputChange() {
    if (!this.searchQuery) {}
  }


  toggleFilterSection() {
    this.showFilters = !this.showFilters;
  }


  // Handle row actions
  handleRowAction(action: string, data: any): void {
    this.onAction.emit({ action, data });
  }
 
  
  /**
   * Return an array of page numbers to show in the pagination.
   *
   * Shows `range` number of pages on either side of the current page.
   * If there are fewer than `2 * range` pages between the current page and the
   * end of the list, the start of the range is adjusted so that the end is
   * always `2 * range` pages from the end of the list.
   *
   * @returns an array of page numbers
   */
  getPageNumbers(): number[] {
    const total = this.totalPages();
    const current = this.currentPage;
    const range = 2;

    let start = Math.max(1, current - range);
    let end = Math.min(total, current + range);
    if (end - start < 2 * range) {
      start = Math.max(1, end - 2 * range);
    }
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

 

 

  formatStatus(status: string): { text: string; color: string } {
    if (!status) return { text: "Unknown", color: "#6c757d" };
    const formattedStatus =  status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
    return { text: formattedStatus, color: this.getStatusColor(status) };
  }
  

  private getStatusColor(status: string): string {
    // console.log(status, "STATUS color::::");
    if (!status) return "#6c757d"; 

    const lowerStatus = status.toUpperCase();
    switch (lowerStatus) {
      case "SUCCESS":
        return "#4F7942";

      case "INACTIVE":
        return "#FF0000";  

      case "ACTIVE":
        return "#28a745";

      case "PENDING":
        return "#ffc107"; 
 
      case "CLOSED" :
        return "#FF0000";

      case "OPTEDIN" :
        return "#28a745";

      case "OPTEDOUT" :
        return "#FF0000";

      default:
        return "#6c757d";
    }
  }
  

  // Handle file exports
  exportFile(type: string): void {
    switch (type) {
      case "excel":
        this.onExport.emit("excel");
        break;
      case "pdf":
        this.onExport.emit("pdf");
        break;
      default:
        console.warn("Unknown export type:", type);
    }
  }


  newExportFile(type: string): void {
    if (["excel", "pdf", "csv"].includes(type)) {
      console.log("Exporting file:", type);
      this.onExport.emit(type);
    } else {
      console.warn("Unsupported export type:", type);
    }
  }

  /**
   * Get the CSS class for the given action.
   * @param action the action to get the class for
   * @returns the CSS class for the action
   */
  getActionClass(action: string): string {
    const actionClasses = {
      [DASHBOARD_ACTIONS.VIEW]: "btn-outline-view",
      [DASHBOARD_ACTIONS.DOWNLOAD]: "btn-outline-download",
      [DASHBOARD_ACTIONS.EDIT]: "btn-outline-edit",
      [DASHBOARD_ACTIONS.VIEW_DETAILS]: "btn-outline-view-details",
      [DASHBOARD_ACTIONS.REACTIVATE_CLOSED_DRAW]: "btn-outline-archive-items",
      [DASHBOARD_ACTIONS.UNDO]: "btn-outline-undo",
      [DASHBOARD_ACTIONS.DELETE]: "btn-outline-set-winning-number",
      [DASHBOARD_ACTIONS.PERMISSION_UPDATE]: "btn-outline-view-details",
      [DASHBOARD_ACTIONS.CANCEL_SUBCRIPTION] : "btn-outline-cancel-subscription",
      [DASHBOARD_ACTIONS.DISABLE_USER]: "btn-outline-disable-user",
      [DASHBOARD_ACTIONS.ENABLE_USER]: "btn-outline-enable-user",
  
    };
    return actionClasses[action] || "";
  }


  /**
   * Get the icon CSS class for the given action.
   * @param action the action to get the icon for
   * @returns the icon CSS class for the action
   */
  getActionIcon(action: string): string {
    const actionIcons = {
      [DASHBOARD_ACTIONS.VIEW]: "mdi mdi-eye",
      [DASHBOARD_ACTIONS.DOWNLOAD]: "mdi mdi-download",
      [DASHBOARD_ACTIONS.EDIT]: "mdi mdi-pencil",
      [DASHBOARD_ACTIONS.VIEW_DETAILS]: "mdi mdi-eye-outline",
      [DASHBOARD_ACTIONS.UNDO]: "mdi mdi-undo",
      [DASHBOARD_ACTIONS.DELETE]: "mdi mdi-bin",
      [DASHBOARD_ACTIONS.CANCEL_SUBCRIPTION] : "mdi mdi-cancel"
    };
    return actionIcons[action] || "";
  }
}
