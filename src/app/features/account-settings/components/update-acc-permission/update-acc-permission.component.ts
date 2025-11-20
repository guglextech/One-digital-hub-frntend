
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { serviceTypeOptions } from 'src/app/core/constants/services-types';

@Component({
  selector: 'app-add-user-form',
  standalone: true,
  imports : [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './update-acc-permission.component.html',
  styleUrl: './update-acc-permission.component.scss'
})
export class UpdateAccPermissionComponent implements OnInit {
  @Input() title: string = 'Update Permission';
  @Input() submitButtonText: string = 'Update Account';
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
      role: ['user', Validators.required],
      ...permissionsControls,  
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
      role: rawValues.role,
      permissions: selectedPermissions,  
    };

    console.log('Final Payload:', payload);
    this.submit.emit(payload);
  }
}