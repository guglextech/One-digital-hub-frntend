import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";
import { RoleGuard } from "./core/guards/role.guard";
import { Role } from "./core/models/Roles";
import { GamesBoardComponent } from "./features/features.component";
import { Page404Component } from "./page-404/page-404.component";
import { PRODUCTS_NAME } from "./core/constants/product-list";
import { CancelSubscriptionsComponent } from "./features/cancel-subscriptions/cancel-subscriptions.component";

export const appRoutes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthRoutingModule),
  },
  {
    path: "products",
    canActivate: [RoleGuard],
    data: { roles: [Role.Admin, Role.User] },
    component: GamesBoardComponent
  },
  {
    path: "sports-lord",
    loadChildren: () => import("./features/sports-lord/big-money.routing").then((m) => m.BetLordInRoutes),
  },
  {
    path: "love-relationships-lord",
    loadChildren: () => import("./features/love-relationships-lord/love-relationships-lord.routing").then((m) => m.LoveRelationshipsLordRoutes),
  },
  {
    path: "jobs-lord",
    loadChildren: () => import("./features/jobs-alerts/jobs-lord.routing").then((m) => m.JobsLordRoutes),
  },
  {
    path: "finance-lord",
    loadChildren: () => import("./features/finance-lord/finance-lord.routing").then((m) => m.FinanceLordRoutes),
  },
  {
    path: "motivation-lord",
    loadChildren: () => import("./features/motivation-lord/motivation-lord.routing").then((m) => m.MotivationLordRoutes),
  },
  {
    path: "cancel-subscription",
    component: CancelSubscriptionsComponent,
  },
  {
    path: "settings",
    canActivate: [RoleGuard],
    data: { roles: [Role.Admin, Role.User] },
    loadChildren: () =>
      import("./features/account-settings/setting.routing").then(
        (m) => m.SettingInRoutes
      ),
  },
  { path: "**", redirectTo: "/auth/signin", pathMatch: "full" }
];

