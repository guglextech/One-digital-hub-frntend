 
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './change-password-form.component.html',
  styleUrl: './change-password-form.component.scss'
})

export class ChangePasswordFormComponent implements OnInit {
  @Input() title: string = 'Reset Account Password';
  @Input() submitButtonText: string = 'Reset Password';
  @Output() submit = new EventEmitter<string>();

  form: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    oldPassword: ['', [Validators.required, Validators.minLength(6)]],
    newPassword: ['', [Validators.required, Validators.minLength(6)]]
  });

  isPasswordVisible: { [key: string]: boolean } = {
    oldPassword: false,
    newPassword: false
  };

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  togglePasswordVisibility(field: string): void {
    this.isPasswordVisible[field] = !this.isPasswordVisible[field];
  }

  submitForm(): void {
    console.log('Form Submitted:', this.form.value);
    this.submit.emit(this.form.value);
  }
}