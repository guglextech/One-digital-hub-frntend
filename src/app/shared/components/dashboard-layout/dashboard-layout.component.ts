import { Component, OnInit, HostListener, Input } from "@angular/core";
import { Navigation, Router, RouterLink, RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { StorageService } from "src/app/core/services/storage.service";
import { AuthService } from "src/app/auth/services/auth.service";
import { IUser, UserResponse } from "src/app/core/models/types";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { ReadOnlyDirective } from "src/app/core/directives/read-only.directive";
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";
import { NavigationService } from "src/app/core/services/navigation.service";

@Component({
  selector: "app-layout",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    CommonModule,
    NgbDropdownModule,
    ReadOnlyDirective,
    BreadcrumbComponent
  ],
  templateUrl: "./dashboard-layout.component.html",
  styleUrl: "./dashboard-layout.component.scss",
})
export class DashboardLayoutComponent implements OnInit {
  @Input() menuItems: any[] = [];  
  @Input() profileMenuItems: any[] = []; 

  sidebarLogo: string = "assets/images/logo.svg";
  sidebarLogoMini: string = "assets/images/logo-mini.svg";
  profileImage: string = "assets/images/placeholder.jpg";
  user: IUser | null = null;
  isSidebarOpen: boolean = window.innerWidth >= 992;

  constructor(
    private router: Router,
    private storageService: StorageService,
    private navigation: NavigationService,
    private authService: AuthService
  ) {}

  toggleCollapse(collapseId: string) {
    const element = document.getElementById(collapseId);
    if (element) {
      element.classList.toggle("collapse");
    }
  }

  ngOnInit() {
    this.loadProfile();
  }

  loadProfile() {
    this.authService.getUserProfile().subscribe({
      next: (profile: UserResponse) => {
        this.user = profile.result;
      },
      error: (error) => {},
    });
  }

  logout() {
    this.storageService.logout();
    this.router.navigate(["/auth/signin"]);
  }

  getMatch(): string {
    return localStorage.getItem('match') || ''; 
  }

  setting() {
    // this.navigation.goToProfile();
      this.router.navigate(["/settings/profile"]);
  }

  games() {
     this.router.navigate(["/products"]);
  }

  // Template helpers
  get userRole(): string {
    return this.user?.role || "Unknown Role";
  }

  get userName(): string {
    return `${this.user?.firstname}  ${this.user?.lastname}` || "Guest";
  }

  isActive(link: any): boolean {
    return this.router.url.startsWith(link);
  }

  closeSidebarOnMobile() {
    if (window.innerWidth < 992) {
      this.isSidebarOpen = false;
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    this.isSidebarOpen = event.target.innerWidth >= 992;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
