// angular import
import { Component, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { Router } from "@angular/router";
import { catchError, retry, of } from "rxjs";
import { Role } from "src/app/core/models/Roles";
import { StorageService } from "src/app/core/services/storage.service";
import { AuthService } from "../services/auth.service";
import { LoadingSpinnerOverlayComponent } from "src/app/shared/components/loading-spinner-overlay/loading-spinner-overlay.component";

@Component({
  selector: "app-sign-in",
  standalone: true,
  imports: [SharedModule, RouterModule,
    LoadingSpinnerOverlayComponent
  ],
  providers: [],
  templateUrl: "./sign-in.component.html",
  styleUrls: ["./sign-in.component.scss"],
})
export default class SignInComponent implements OnInit {
  signinForm: FormGroup = null as any;
  errorMessage: string | null = null;
  isPasswordVisible: boolean = false;
  isLoading = false;

  ngOnInit(): void {}

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private storageService : StorageService,
    private router: Router
  ) {
    this.signinForm = this.fb.group({
      username: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
    });
  }


  // onSubmit(){}

  onSubmit(): void {
    if (this.signinForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.errorMessage = null; 

    const { username, password } = this.signinForm.value;

    this.authService.login(username, password).subscribe({
      next: (response) => {
        this.handleLoginSuccess(response);
      },
      error: (error) => {
        this.handleLoginError(error);
      },
    });
  }

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }


  private handleLoginSuccess(response: any): void {
    if (response.response.statusCode !== 200) {
      this.errorMessage = 'Failed to login. Please check your credentials.';
      this.isLoading = false;
      return;
    }

    this.storageService.setToken(response.token);
    const userRole = this.storageService.getUserRole();
    console.log(userRole, "USER ROLE");

    if (!userRole) {
      this.errorMessage = 'Role information is missing.';
      this.isLoading = false;
      return;
    }

    this.redirectUser(userRole);
  }
  

  private handleLoginError(error: any): void {
    this.errorMessage = 'Failed to login. Please check your credentials.';
    console.error('Login Error:', error);
    this.isLoading = false;
  }

  private redirectUser(role: string): void {
    let redirectPath = '/products';

    this.router.navigate([redirectPath]);
    this.isLoading = false; 
  }
}
