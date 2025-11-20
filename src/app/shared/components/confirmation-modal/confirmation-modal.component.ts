import { CommonModule } from "@angular/common";
import {
  Component,
  Input,
  TemplateRef,
  ViewEncapsulation,
} from "@angular/core";
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "confirmation-modal",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./confirmation-modal.component.html",
  styleUrl: "./confirmation-modal.component.scss",
  encapsulation: ViewEncapsulation.None,
})


export class ConfirmationModalComponent {
  @Input() title = "Confirmation";
  @Input() message = "Are you sure you want to proceed?";
  @Input() details?: any;
  @Input() confirmLabel = "Yes";
  @Input() cancelLabel = "No";

  constructor(
    public activeModal: NgbActiveModal,
    public modalService: NgbModal
  ) {}

  openScrollableContent(longContent: any) {
    this.modalService.open(longContent, { scrollable: true });
  }

  openModalDialogCustomClass(content: TemplateRef<any>) {
    this.modalService.open(content, { modalDialogClass: "dark-modal" });
  }

  // Called when user confirms the action
  confirm(): void {
    this.activeModal.close(true);
  }

  // Called when user cancels/dismisses the modal
  cancel(): void {
    this.activeModal.dismiss(false);
  }

  /**
 * Returns true if the passed value is a non-null object (and not an array).
 */
isObject(value: any): boolean {
  return value && typeof value === 'object' && !Array.isArray(value);
}

/**
 * Returns an array of keys for the provided object.
 */
objectKeys(obj: any): string[] {
  return obj ? Object.keys(obj) : [];
}
}
