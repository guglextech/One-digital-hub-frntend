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
 

@Component({
  selector: "app-profile",
  standalone: true,
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    ColorPickerModule,
  ],
  providers: [],
  templateUrl: "./profile.component.html",
  styleUrl: "./profile.component.scss",
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup = null as any;
  selectedFileName: string | null = null;
  // imagePreview: string | ArrayBuffer | null = null;
  uploadProgress: number | null = null;
  

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      _id: [""],
      userId: [""],
      email: [""],
      role: [""],
      firstname: [""],
      lastname: [""],
      photo: [""],
      phone: [""],
    });

    this.getProfile();
  }

  getProfile() {
    this.authService.getUserProfile().subscribe({
      next: (response: any) => {
        if (response.result) {
          const userProfile = response.result;
      
          this.profileForm.patchValue({
            email: userProfile.email,
            firstname: userProfile.firstname,
            lastname: userProfile.lastname,
            role: userProfile.role,
            phone: userProfile.phone,
          });

          // this.imagePreview = userProfile.photo;
        }
      },
    });
  }

  updateProfile() {
    let payload = {
      _id: this.profileForm.get("_id")?.value,
      username: this.profileForm.get("username")?.value,
      // role: this.profileForm.get('role')?.value,
      firstname: this.profileForm.get("firstname")?.value,
      lastname: this.profileForm.get("lastname")?.value,
      phone: this.profileForm.get("phone")?.value.toString(),
    };

    this.authService.updateUser(payload).subscribe({
      next: (response: any) => {
        if (response.response.status === 200) {
          
        }
      },
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;

      // Display image preview
    }
  }
}
