import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/services/auth.service";
import { FormBuilder } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ChangePasswordFormComponent } from "src/app/shared/components/change-password-form/change-password-form.component";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [ChangePasswordFormComponent],
  templateUrl: "./change-password.component.html",
  styleUrl: "./change-password.component.scss",
})
export class ChangePasswordComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  changePassword(formValue: any) {
    console.log("Password changed ::", formValue);
    this.authService.changePassword(formValue).subscribe({
      next: (response: any) => {
        if (response.result) {
          this.toastr.success("Password changed successfully");
        }
      },
    });
  }
}
