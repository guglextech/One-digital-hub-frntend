import { AbstractControl, ValidationErrors } from "@angular/forms";

export function futureDateValidator(control: AbstractControl): ValidationErrors | null {
  const inputDate = new Date(control.value);
  const now = new Date();

  // If input date is in the past
  if (inputDate < now) {
    return { pastDate: true };
  }

  return null;
}