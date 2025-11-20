import { Component, inject, OnInit } from "@angular/core";
import { environment } from "src/environments/environment.prod";
import { StorageService } from "./core/services/storage.service";
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  
  storage = inject(StorageService);
  router = inject(Router);

  detectInspector() {}
  ngOnInit() {
    setInterval(() => {
      if (this.storage.isTokenExpired()) {
        this.storage.logout();
        this.router.navigate(["/auth/signin"]);
      }
    }, 1200000);

  
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}



