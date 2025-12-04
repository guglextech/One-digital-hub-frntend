import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CancelSubscriptionService } from './services/cancel-subscription.service';
import { SERVICE_TYPES, serviceTypeOptions } from '../../core/constants/services-types';
// import { StatusTagComponent } from '../../shared/components/status-tag/status-tag.component';

@Component({
  selector: 'app-cancel-subscriptions',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cancel-subscriptions.component.html',
  styleUrl: './cancel-subscriptions.component.scss'
})
export class CancelSubscriptionsComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private cancelSubscriptionService = inject(CancelSubscriptionService);
  private toastr = inject(ToastrService);

  cancelForm: FormGroup;
  queryForm: FormGroup;
  isLoading = false;
  isQuerying = false;
  serviceTypeOptions = serviceTypeOptions;
  queryResults: any[] = [];
  selectedInvoiceId: string = '';
  fullApiResponse: any = null;

  constructor() {
    this.cancelForm = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^233\d{9}$/)]],
      recurringInvoiceId: ['', [Validators.required]],
      serviceType: ['', [Validators.required]]
    });

    this.queryForm = this.fb.group({
      queryPhone: ['', [Validators.required, Validators.pattern(/^233\d{9}$/)]],
      queryServiceType: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.cancelForm.invalid) {
      this.markFormGroupTouched(this.cancelForm);
      return;
    }

    this.isLoading = true;
    const { phone, recurringInvoiceId, serviceType } = this.cancelForm.value;

    this.cancelSubscriptionService
      .cancelRecurringInvoice(phone, recurringInvoiceId, serviceType)
      .subscribe({
        next: (response) => {
          this.toastr.success('Subscription cancelled successfully!');
          this.cancelForm.reset();
          this.isLoading = false;
        },
        error: (error) => {
          this.toastr.error(
            error?.error?.message || 'Failed to cancel subscription. Please try again.'
          );
          this.isLoading = false;
        }
      });
  }

  private markFormGroupTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.get(key);
      control?.markAsTouched();
    });
  }

  get phone() {
    return this.cancelForm.get('phone');
  }

  get recurringInvoiceId() {
    return this.cancelForm.get('recurringInvoiceId');
  }

  get serviceType() {
    return this.cancelForm.get('serviceType');
  }

  get queryPhone() {
    return this.queryForm.get('queryPhone');
  }

  get queryServiceType() {
    return this.queryForm.get('queryServiceType');
  }

  onQuery(): void {
    if (this.queryForm.invalid) {
      this.markFormGroupTouched(this.queryForm);
      return;
    }

    this.isQuerying = true;
    this.queryResults = [];
    this.fullApiResponse = null;
    const { queryPhone, queryServiceType } = this.queryForm.value;

    this.cancelSubscriptionService
      .getSubscribers(queryServiceType, queryPhone, 1, 1)
      .subscribe({
        next: (response) => {
          // Store full response
          this.fullApiResponse = response;
          
          // Extract results
          if (response?.result && response.result.length > 0) {
            this.queryResults = response.result;
          } else if (response?.data && response.data.length > 0) {
            this.queryResults = response.data;
          } else {
            this.toastr.info('No subscribers found for the given criteria.');
          }
          this.isQuerying = false;
        },
        error: (error) => {
          this.toastr.error(
            error?.error?.message || 'Failed to fetch subscriber information.'
          );
          this.isQuerying = false;
        }
      });
  }

  copyInvoiceId(invoiceId: string): void {
    navigator.clipboard.writeText(invoiceId).then(() => {
      this.toastr.success('Recurring Invoice ID copied to clipboard!');
      this.selectedInvoiceId = invoiceId;
      // Auto-fill the cancel form
      this.cancelForm.patchValue({
        recurringInvoiceId: invoiceId,
        phone: this.queryForm.value.queryPhone,
        serviceType: this.queryForm.value.queryServiceType
      });
    });
  }

  copyFullResponse(): void {
    const jsonString = JSON.stringify(this.fullApiResponse, null, 2);
    navigator.clipboard.writeText(jsonString).then(() => {
      this.toastr.success('Full API response copied to clipboard!');
    });
  }

  get formattedResponse(): string {
    return this.fullApiResponse ? JSON.stringify(this.fullApiResponse, null, 2) : '';
  }

  goBack(): void {
    this.router.navigate(['/products']);
  }
}
