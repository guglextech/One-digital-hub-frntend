import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { CommonModule, NgFor } from "@angular/common";
import { DrawDetails, SmsRequest } from "src/app/core/models/types";
import { NgbModal, NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-sms-form",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NgbModalModule, CommonModule],
  templateUrl: "./sms-boardcast.component.html",
  styleUrl: "./sms-boardcast.component.scss",
})
export class GenericSendBoardcastMessage implements OnInit {
  @Input() draws: any[] = [];
  @Input() data: DrawDetails = {} as DrawDetails;
  @Input() title = "2";
  @Output() formSubmit = new EventEmitter<SmsRequest>();

  smsForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    public modal: NgbModal,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.smsForm = this.fb.group({
      title: ["", Validators.required],
      message: ["", Validators.required],
    });
  }

  ngOnInit(): void {
  
    // Now build the form here
    this.smsForm = this.fb.group({
      title: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.smsForm.valid) {
      this.loading = true;
      const smsData: SmsRequest = this.smsForm.value;
      this.formSubmit.emit(smsData);
      this.modal.dismissAll();
    }
  }

  onCancel() {
    this.modal.dismissAll();
  }

  
}
