import { Routes } from "@angular/router";
import { AccountSettingsComponent } from "./account-settings.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { AddUserComponent } from "./pages/add-user/add-user.component";
import { ChangePasswordComponent } from "./pages/change-password/change-password.component";
import { AllUsersComponent } from "./pages/all-users/all-users.component";
import { AuditLogComponent } from "./pages/audit-log/audit-log.component";


export const SettingInRoutes: Routes = [
  {
    path: "",
    component: AccountSettingsComponent,
    children: [
      {
        path: "profile",
        component: ProfileComponent,
      },
      {
        path: "add-new-user",
        component: AddUserComponent,
      },
      {
        path: "change-password",
        component: ChangePasswordComponent,
      },
      {
        path: "all-users",
        component: AllUsersComponent,
      },
        {
        path: "audit-logs",
        component: AuditLogComponent,
      }
    ],
  },
];
