import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";
import { RoleGuard } from "./core/guards/role.guard";
import { Role } from "./core/models/Roles";
import { GamesBoardComponent } from "./features/features.component";
import { Page404Component } from "./page-404/page-404.component";
import { PRODUCTS_NAME } from "./core/constants/product-list";

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
    path: "bet-lord",
    loadChildren: () => import("./features/bet-lord/big-money.routing").then((m) => m.BetLordInRoutes),
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

