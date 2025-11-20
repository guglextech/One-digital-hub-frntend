import { Directive, ElementRef, Input, Renderer2, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/services/auth.service";
import { Role } from "../models/Roles";


@Directive({
  selector: "[appReadOnlyMode]",
  standalone : true
})
export class ReadOnlyDirective implements OnInit {
  @Input() appReadOnlyMode: boolean = false; 

  constructor(
     private el: ElementRef,
     private renderer: Renderer2,
     private authService: AuthService) {}


  ngOnInit() {
    this.authService.getUserProfile().subscribe({
      next: (profile) => {
        console.log(profile , "PROFILE :::::");
        // Role
        // if (profile.result.role === "read-only") {
        //   this.applyReadOnly();
        // }
        if (profile.result.role ===  Role.User) {
            this.applyReadOnly();
          }
      },
    });
  }

  applyReadOnly() {
    const element = this.el.nativeElement;
    this.renderer.setAttribute(element, "disabled", "true");  
    this.renderer.setStyle(element, "pointer-events", "none");  
    this.renderer.setStyle(element, "opacity", "0.5");  
  }
}
