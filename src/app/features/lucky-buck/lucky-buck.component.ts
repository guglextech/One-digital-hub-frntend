import { Component } from "@angular/core";
import { DashboardLayoutComponent } from "src/app/shared/components/dashboard-layout/dashboard-layout.component";
import { LUCKY_BUCK_MENU } from "./constant/sidebar-routes";

@Component({
  selector: "app-lucky-buck",
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: "./lucky-buck.component.html",
  styleUrl: "./lucky-buck.component.scss",
})
export class LuckyBuckComponent {
  SIDEBAR_MENU = LUCKY_BUCK_MENU;
}
