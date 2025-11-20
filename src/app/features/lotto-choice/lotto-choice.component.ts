import { Component } from "@angular/core";
import { DashboardLayoutComponent } from "src/app/shared/components/dashboard-layout/dashboard-layout.component";
import { LOTTO_CHOICE_MENU } from "./constant/sidebar-routes";

@Component({
  selector: "app-lotto-choice",
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: "./lotto-choice.component.html",
  styleUrl: "./lotto-choice.component.scss",
})
export class LottoChoiceComponent {
  SIDEBAR_MENU = LOTTO_CHOICE_MENU;
}
