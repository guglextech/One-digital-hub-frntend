import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { NgbDatepickerModule, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { STATUS } from "src/app/core/constants/constants";

@Component({
  selector: "app-set-draws",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, NgbDatepickerModule],
  templateUrl: "./make-payment.component.html",
  styleUrl: "./make-payment.component.scss",
})
export class MakePaymentComponent {
  // @ts-ignore
  form: FormGroup;
  @Input() data: any;
  @Output() paymentAction = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    public modal: NgbModal,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    console.log(this.data.data.paymentStatus, "DATA");
    this.form = this.fb.group({
      name: [{ value: this.data?.data.name || "", disabled: true },[Validators.required],],
      mobile: [ { value: this.data.data?.winner || "", disabled: true },[Validators.required],],
      amount: ["", [Validators.required]],
    });
  }

  /**
   * Handles form submission.
   */
  onSubmit(): void {
    if (this.form.invalid) {
      this.toastr.error("Please fill out all required fields.");
      return;
    }

    this.paymentAction.emit(this.form.value);

    // Close the modal
    this.modal.dismissAll();
  }

  closeModal() {
    // Close the modal
    this.modal.dismissAll();
  }

  isPaymentMade(): boolean {
    return this.data?.data?.paymentStatus ===  STATUS.SUCCESS;
  }
  
  isFormDisabled(): boolean {
    return this.isPaymentMade() || !this.form?.controls["amount"].value;
  }
  
}
