import { Injectable } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { ConfirmationModalComponent } from "./confirmation-modal.component";

@Injectable({
  providedIn: "root",
})
export class ConfirmationModalService {
  constructor(private modalService: NgbModal) {}

  /**
   * Opens the confirmation modal with the provided options.
   * @param options An object containing modal options.
   * @returns A promise that resolves to `true` if confirmed, or rejects if cancelled.
   */
  confirm(options: {
    title?: string;
    message?: string;
    details?: any;
    confirmLabel?: string;
    cancelLabel?: string;
  }): Promise<boolean> {
    const modalRef = this.modalService.open(ConfirmationModalComponent, {
      centered: true,
      backdrop: "static",
    });

    // Pass data to the modal component
    if (options.title) modalRef.componentInstance.title = options.title;
    if (options.message) modalRef.componentInstance.message = options.message;
    if (options.details) modalRef.componentInstance.details = options.details;
    if (options.confirmLabel) modalRef.componentInstance.confirmLabel = options.confirmLabel;
    if (options.cancelLabel)  modalRef.componentInstance.cancelLabel = options.cancelLabel;

    // Return the modal result as a promise (resolves when confirmed, rejects when dismissed)
    return modalRef.result;
  }
}
