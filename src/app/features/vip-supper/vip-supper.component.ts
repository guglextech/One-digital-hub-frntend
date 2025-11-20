import { Component } from "@angular/core";
import { DashboardLayoutComponent } from "src/app/shared/components/dashboard-layout/dashboard-layout.component";
import { VIP_SUPER_MENU } from "./constant/sidebar-routes";

@Component({
  selector: "app-vip-supper",
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: "./vip-supper.component.html",
  styleUrl: "./vip-supper.component.scss",
})
export class VipSupperComponent {
  SIDEBAR_MENU = VIP_SUPER_MENU;
}
