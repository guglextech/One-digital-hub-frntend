import { CommonModule } from "@angular/common";
import { Component, Input, Output, ViewChild, ViewChildren, QueryList, ElementRef, AfterViewInit, inject, EventEmitter, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: "app-set-correct-numbers-generic",
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
   templateUrl: './setup-correct-numbers.component.html',
   styleUrl: './setup-correct-numbers.component.scss'

})
export class GenericSetupCorrectNumbersComponent implements OnInit {
  @Input() totalInputs: number = 3; 
  @Input() title: string = 'Input Winning Numbers';
  @Output() onSubmit = new EventEmitter<string>();

  form!: FormGroup;
  @ViewChildren('otpInput') otpInputs!: QueryList<ElementRef>;

  fb = inject(FormBuilder);
  modal = inject(NgbModal);

  
  get inputControls(): string[] {
    return Array.from({ length: this.totalInputs }, (_, i) => `otp${i}`);
  }

  ngOnInit() {
    this.form = this.fb.group({});
    this.inputControls.forEach((controlName) => {
      this.form.addControl(controlName, this.fb.control('', [Validators.required, Validators.pattern('[0-9]')]));
    });
  }

  closeModal() {
    this.modal.dismissAll();
  }

  onInput(event: any, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.value.length === 1 && index < this.totalInputs - 1) {
      this.otpInputs.get(index + 1)?.nativeElement.focus();
    } else if (input.value.length > 1) {
      input.value = input.value.slice(0, 1);
    }
  }

  onKeyDown(event: KeyboardEvent, index: number) {
    if (event.key === 'Backspace' && index > 0 && (event.target as HTMLInputElement).value === '') {
      this.otpInputs.get(index - 1)?.nativeElement.focus();
    }
  }

  submitForm() {
    if (this.form.valid) {
      const otp = Object.values(this.form.value).join('');
      this.onSubmit.emit(otp);
    }
  }
}