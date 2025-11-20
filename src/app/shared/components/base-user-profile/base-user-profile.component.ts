import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-base-user-profile",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: "./base-user-profile.component.html",
  styleUrl: "./base-user-profile.component.scss",
})
export class BaseUserProfileComponent {
  @Input() formGroup!: FormGroup;
  @Input() controlName!: string;
  @Input() label!: string;
  @Input() placeholder!: string;
  @Input() validators: any[] = [];
  @Input() errorMessage!: string;

  constructor(protected fb: FormBuilder) {}

  ngOnInit() {
    this.formGroup.addControl(
      this.controlName,
      this.fb.control("", this.validators)
    );
  }

  get isInvalid() {
    return (
      this.formGroup.get(this.controlName)?.invalid &&
      this.formGroup.get(this.controlName)?.touched
    );
  }
}
