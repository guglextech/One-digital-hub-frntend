import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  AfterViewInit,
} from "@angular/core";

@Directive({
  selector: "[appViewMode]",
})
export class ViewModeDirective implements AfterViewInit {
  @Input() allowedButtonClass = "logout-button"; 

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit() {
    this.disableInteractions(this.el.nativeElement);
  }

  private disableInteractions(element: HTMLElement) {
    if (element.classList.contains(this.allowedButtonClass)) {
      return; // Do not disable logout button
    }

    if (
      element.tagName === "BUTTON" ||
      element.tagName === "INPUT" ||
      element.tagName === "A"
    ) {
      this.renderer.setAttribute(element, "disabled", "true");
      this.renderer.setStyle(element, "pointer-events", "none");
      this.renderer.setStyle(element, "opacity", "0.5");
    }

    // Recursively disable child elements
    Array.from(element.children).forEach((child: any) =>
      this.disableInteractions(child)
    );
  }
}
