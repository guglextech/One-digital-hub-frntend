
import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import {
  NgbDatepickerModule,
  NgbModal,
} from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { futureDateValidator } from "src/app/core/utils/filter/future-date-validator";
import { formatDateTimeWithAMPM } from "src/app/core/utils/formats";

@Component({
  selector: "create-closure-message",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbDatepickerModule],
    templateUrl: './create-closure-message.component.html',
  styleUrl: './create-closure-message.component.scss'
})
export class SendSMSBroadcastComponent {
  // @ts-ignore
  form: FormGroup;
  @Input() data: any;
  @Output() buttonAction = new EventEmitter<any>();
  @Output() title : string = "Broadcast SMS";
  @Output() serviceType : string = "";
  submitting = false; 
  minDateTime: string = "";

  constructor(
    private fb: FormBuilder,
    public modal: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {

    const now = new Date();
    now.setSeconds(0, 0);
    this.minDateTime = now.toISOString().slice(0, 16);

    this.submitting = false;
    this.form = this.fb.group({
      title: ["", [Validators.required]],
      message : ["", [Validators.required]],
      status: ["", [Validators.required]],
    });
  }

  /**
   * Handles form submission.
   */
  onSubmit(): void {
    if (this.form.invalid || this.submitting) {
      if (!this.submitting) {
        this.toastr.error("Please fill out all required fields.");
      }
      return;
    }

    this.submitting = true;  

   
    const data = {
      ...this.form.value,
      closeTime: formatDateTimeWithAMPM(this.form.value.closeTime),
    };

    this.buttonAction.emit(data);
    this.modal.dismissAll();
  }

  closeModal() {
    this.modal.dismissAll();
  }
}
