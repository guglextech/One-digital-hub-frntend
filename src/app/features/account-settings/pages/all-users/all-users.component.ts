import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { InputTextModule } from "primeng/inputtext";
import { TableModule } from "primeng/table";
import { TagModule } from "primeng/tag";
import { ToastrService } from "ngx-toastr";
import { PaginatedTableComponent } from "src/app/shared/components/paginated-table/paginated-table.component";
import { AuthService } from "src/app/auth/services/auth.service";
import { ConfirmationModalService } from "src/app/shared/components/confirmation-modal/confirmation-modal.service";
import { DASHBOARD_ACTIONS } from "src/app/core/constants/constants";
import { SharedModule } from "src/app/shared/shared.module";
import { UsersService } from "src/app/core/services/users.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UpdateAccPermissionComponent } from "../../components/update-acc-permission/update-acc-permission.component";
import { IUser, UpdateUserRequest, UserProfile } from "src/app/core/models/types";
import { formatDateToCustomFormat } from "src/app/core/utils/formats";

@Component({
  selector: "app-all-users",
  standalone: true,
  imports: [
    SharedModule,
    CommonModule,
    TableModule,
    InputTextModule,
    PaginatedTableComponent,
    TagModule,
  ],
  templateUrl: "./all-users.component.html",
  styleUrl: "./all-users.component.scss",
})
export class AllUsersComponent extends PaginatedTableComponent {
  override tableHeaders = ["Name", "Email", "Created At", "Permissions", "Status", "Role"];
  override pageSize = 10;
  override totalRecords = 0;
  override currentPage = 1;

  constructor(
    private usersService: UsersService,
    private modal: NgbModal,
    private authService: AuthService,
    private toastService: ToastrService,
    private confirmationModalService: ConfirmationModalService
  ) {
    super();
    this.loadUsers();
  }

  private loadUsers(): void {
    this.loading = true;
    this.usersService.getAllUsers(this.currentPage, this.pageSize).subscribe({
      next: (data) => this.handleApiResponse(data),
      error: (error) => this.handleError(error),
    });
  }

  private handleApiResponse(data: any): void {
    this.tableData = data?.result?.map((item: any) => ({
      id: item.id,
      "Name": `${item.firstname} ${item.lastname}`,
      "Email": item.email,
      "Permissions": item.permissions || "None",
      "Status": item.isLocked ? "Disabled" : "Active",
      "Created At": formatDateToCustomFormat(item.createdAt),
      "Role": item.role,
    })) || [];

    this.totalRecords = data?.totalRequests || 10;
    this.nextPage = data.nextPage || null;   
    this.loading = false;
  }

  private handleError(error: any): void {
    console.error("Error fetching users:", error);
    this.toastService.error("Failed to fetch user data.");
    this.loading = false;
  }

  override getActions = () => ["Disable User", "Enable User" ,"Update Permission"];
  override hasActions = () => true;
  override hasSearch = () => false;
  override hasdownloadOption = () => false;

  triggerPageChange(event: { page: number; limit: number }): void {
    this.currentPage = event.page;
    this.pageSize = event.limit;
    this.loadUsers();
  }

  triggerSearchChange(query: string): void {
    this.onSearchChange.emit(query);
  }

  handleUserAction(type: any): void {

    if(type.action ===  DASHBOARD_ACTIONS.PERMISSION_UPDATE){
      const modalInstance = this.modal.open(UpdateAccPermissionComponent, { size: "md", centered: true });
      modalInstance.componentInstance.submit?.subscribe((data : any) => {
        console.log(data, "UPDATE PERMISSION");
         this.updateUserPermissions(data)
      });

      return;
    }

    const email = type.rowData.Email;
    const isDisabling = type.action === DASHBOARD_ACTIONS.DISABLE_USER;
    const title = isDisabling ? "Disable User" : "Enable User";
    const message = `Are you sure you want to ${isDisabling ? "disable" : "enable"} this user?`;
    const confirmLabel = isDisabling ? "Disable" : "Enable";

    this.confirmationModalService.confirm({ title, message, details: { Email: email }, confirmLabel, cancelLabel: "Cancel" })
      .then(() => this.toggleUserStatus(email, isDisabling))
      .catch(() => console.log(`${title} action canceled by user.`));
  }


  /**
   * This function is used to disable or enable a user
   * It calls the disableOrEnableUser function from the authService
   * and then if the response status is 200, it shows a success toast message
   */
  private toggleUserStatus(email: string, lockAccount: boolean): void {
    this.authService.disableOrEnableUser({ email, lockAccount }).subscribe({
      next: (data: any) => {
        if (data.response.status === 200) {
          this.toastService.success(`User ${lockAccount ? "Disabled" : "Enabled"} Successfully`);
          this.loadUsers();
        }
      },
      error: () => {
        this.toastService.error(`Error ${lockAccount ? "Disabling" : "Enabling"} User`);
      },
    });
  }


  /**
   * This function is used to update the permissions of a user
   * It calls the updateUser function from the authService
   */
  updateUserPermissions(user: UpdateUserRequest): void {
     this.authService.updateUser(user).subscribe({
       next : (data: any) => {
         if(data.response.status === 200){
           this.toastService.success("User Permissions Updated Successfully");
           this.loadUsers();
           this.modal.dismissAll();
         }
       },
       error : (error) => {
         this.toastService.error("Error Updating User Permissions");
       }
     })
  }
}
