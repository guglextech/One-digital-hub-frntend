
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { serviceTypeOptions } from 'src/app/core/constants/services-types';

@Component({
  selector: 'app-add-user-form',
  standalone: true,
  imports : [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: "./add-user.component.html",
  styleUrl: "./add-user.component.scss",
})
export class BaseAddUserComponent implements OnInit {
  @Input() title: string = 'Add New User';
  @Input() submitButtonText: string = 'Add New User';
  @Output() submit: EventEmitter<any> = new EventEmitter();
  form!: FormGroup;

  matchTypes =  serviceTypeOptions;
  isPasswordVisible: boolean = false;

  constructor(private fb: FormBuilder) {

    const permissionsControls: { [key: string]: FormControl } = {};
    this.matchTypes.forEach((match) => {
      permissionsControls[match.key] = new FormControl(true);
    });

    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['user', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      // ...permissionsControls,  
    });
  
  }

  ngOnInit(): void {}

  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  submitForm(): void {
    // if(!this.form.invalid){
    //   return
    // }
   
    const rawValues = this.form.value;
    const selectedPermissions = this.matchTypes
      .filter((match) => rawValues[match.key])
      .map((match) => match.value);

    // Build final payload
    const payload = {
      email: rawValues.email,
      password: rawValues.password,
      role: rawValues.role,
      firstname: rawValues.firstname,
      lastname: rawValues.lastname,
      phone: rawValues.phone,
      permissions: selectedPermissions,  
    };

    console.log('Final Payload:', payload);
    this.submit.emit(payload);
  }
}