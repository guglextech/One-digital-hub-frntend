import { Component, OnInit } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { ColorPickerModule } from "ngx-color-picker";
import { AuthService } from "src/app/auth/services/auth.service";

import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { BaseAddUserComponent } from "src/app/shared/components/add-user/add-user.component";
import { NavigationService } from "src/app/core/services/navigation.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    ColorPickerModule,
    BaseAddUserComponent
  ],
  templateUrl: "./add-user.component.html",
  styleUrl: "./add-user.component.scss",
})
export class AddUserComponent implements OnInit {
  profileForm: FormGroup = null as any;
  isPasswordVisible: boolean = false;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private navigation: NavigationService,
    private router : Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
   
  }

  /**
   * This function is used to register a new user
   * It calls the signupByAdmin function from the authService
   * and then if the response status is 200, it shows a success toast message
   * and resets the form, it also calls the getUsers function from the navigation service
   * if the response status is not 200, it shows an error toast message
   */
  handleUserRegistration(user: any) {
    this.authService.signupByAdmin(user).subscribe({
      next: (response: any) => {
        if (response.response.status === 200) {
          this.toastr.success("User created successfully");
          this.router.navigate(['/settings/all-users']);
          // this.navigation.goToUsers();
        } else {
          this.toastr.error("Failed to create user");
        }
      },
      error : (error: any) => {
        this.toastr.error("Failed to create user");
      }
    });
  }
}
