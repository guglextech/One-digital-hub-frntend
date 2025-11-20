import { Component } from "@angular/core";
import { DashboardLayoutComponent } from "src/app/shared/components/dashboard-layout/dashboard-layout.component";
import {
  ACCOUNT_SETTINGS_PROFILE,
  ACCOUNT_SETTINGS,
} from "./constants/constants";

@Component({
  selector: "app-account-settings",
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: "./account-settings.component.html",
  styleUrl: "./account-settings.component.scss",
})
export class AccountSettingsComponent {
  ACCOUNT_SETTINGS_MAIN = ACCOUNT_SETTINGS;
  ACCOUNT_SETTINGS_PROFILE = ACCOUNT_SETTINGS_PROFILE;
}
