import { Component } from "@angular/core";
import { DashboardLayoutComponent } from "src/app/shared/components/dashboard-layout/dashboard-layout.component";
import { MR_TIPS_MENU } from "./constant/sidebar-routes";

@Component({
  selector: "app-mr-tips",
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: "./mr-tips.component.html",
  styleUrl: "./mr-tips.component.scss",
})
export class MrTipsComponent {
  SIDEBAR_MENU =  MR_TIPS_MENU;
}
