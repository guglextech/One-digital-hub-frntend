import { CommonModule } from "@angular/common";
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
  templateUrl: "./make-payment-on-transaction.component.html",
  styleUrl: "./make-payment-on-transaction.component.scss",
})
export class MakePaymentOnTransactionComponent {
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
    // console.log(this.data, "MAKE PAYMENT INFO");
    this.form = this.fb.group({
      name: [
        { value: this.data?.data.name || "", disabled: true },
        [Validators.required],
      ],
      mobile: [
        { value: this.data.data?.phone || "", disabled: true },
        [Validators.required],
      ],
      amount: [
        { value: this.data.data?.winAmount || "", disabled: true },
        [Validators.required],
      ],
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

    let payload = {
      drawRef: this.data.data.drawRef,
      pickId: this.data.data.id,
    };
    this.paymentAction.emit(payload);

    // Close the modal
    this.modal.dismissAll();
  }

  closeModal() {
    // Close the modal
    this.modal.dismissAll();
  }

  isPaymentMade(): boolean {
    return this.data?.data?.creditStatus === STATUS.SUCCESS;
  }

  isFormDisabled(): boolean {
    return this.isPaymentMade() || !this.form?.controls["amount"].value;
  }
}
