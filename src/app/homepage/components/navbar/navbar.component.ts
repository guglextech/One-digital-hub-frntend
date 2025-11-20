import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app--homepage-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isSidebarOpen = false;

  constructor(private router: Router) { }

  ngOnInit() {
    // Listen to navigation events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.closeSidebar();  
      }
    });
  }

 
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // Close the sidebar
  closeSidebar() {
    this.isSidebarOpen = false;
  } 
}
