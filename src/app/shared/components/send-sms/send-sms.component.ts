import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { DrawDetails, SmsRequest } from 'src/app/core/models/types';
import { NgbModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SMSConfig, ApiResponse } from 'src/app/core/models/types';
import { SMS_TEMP_MESSAGES } from 'src/app/core/constants/constants';
import { SmsMatchThreeService } from 'src/app/features/match-three/services/sms.service';
 
const ALLOWED_TITLES = ["DRAW RESULT SMS", "WINNING TICKET SMS"];


@Component({
  selector: 'app-sms-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor,
    NgbModalModule,
    CommonModule],
  templateUrl: './send-sms.component.html',
  styleUrls: ['./send-sms.component.scss'],
})

export class GenericSendSmsComponent implements OnInit {
  @Input() draws: any[] = [];
  @Input() data: DrawDetails = {} as DrawDetails;
  @Output() formSubmit = new EventEmitter<SmsRequest>();
 
  smsForm: FormGroup;
  filteredTemplates: SMSConfig[] = [];
  public drawRef!: string;
  loading = false

  constructor(
    private fb: FormBuilder,
    public modal: NgbModal,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private smsSvc : SmsMatchThreeService

  ) {
    this.smsForm = this.fb.group({
      title: ['', Validators.required],
      message: [{ value: '', disabled: true },  Validators.required],
    });
   
  }


  ngOnInit(): void {
    this.drawRef = this.route.snapshot.params["drawRef"];
    this.loadSMSTemplates();
    console.log("DATA INTO SMS", this.data.drawRef);
  }

  loadSMSTemplates(): void {
    this.smsSvc.ListSMS().subscribe({
      next: (data: ApiResponse) => {
        console.log('Loaded SMS:', data);

        // Filter messages based on allowed titles
        this.filteredTemplates = data.result.filter(template =>
          ALLOWED_TITLES.includes(template.title)
        );

        if (this.filteredTemplates.length > 0) {
          this.smsForm.patchValue({
            title: this.filteredTemplates[0].title,
            message: this.filteredTemplates[0].message,
          });
        }
      },
      error: (error) => {
        console.error('Error fetching SMS templates:', error);
      }
    });
  }


  onTemplateSelect(event: Event): void {
    const target = event.target as HTMLSelectElement | null;
    if (target?.value) {
      const selectedTemplate = this.filteredTemplates.find(t => t.title === target.value);
      if (selectedTemplate) {
        this.smsForm.patchValue({
          title: selectedTemplate.title,
          message: selectedTemplate.message,
        });
      }
    }
  }

  onSubmit(): void {

    this.loading = true;

    if (this.smsForm.invalid) {
      console.warn('Form is invalid');
      return;
    }

    this.smsSvc.triggerSms(this.data.drawRef ,this.smsForm.get("title")?.value).subscribe({
      
      next: (data : any) => {
        
        if(data.response.status === 200){
          this.toastr.success("SMS Sent Successfully");
          this.modal.dismissAll();
          this.loading = false;
        }
      },
      error: (error) => {
        console.error('Error triggering SMS:', error);
        this.toastr.success("SMS Failed !");
      }
    });
  }


 
  onCancel(){
    this.modal.dismissAll();
  }

}