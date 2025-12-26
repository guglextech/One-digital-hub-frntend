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
    path: "king-solomon",
    loadChildren: () => import("./features/king-solomon/big-money.routing").then((m) => m.BetLordInRoutes),
  },
  {
    path: "odds-oracle",
    loadChildren: () => import("./features/odds-oracle/odds-oracle.routing").then((m) => m.OddsOracleRoutes),
  },
  {
    path: "sportaga",
    loadChildren: () => import("./features/sportaga/sportaga.routing").then((m) => m.SportagaRoutes),
  },
  {
    path: "husky-odds",
    loadChildren: () => import("./features/husky-odds/husky-odds.routing").then((m) => m.HuskyOddsRoutes),
  },
  {
    path: "bet-lord",
    loadChildren: () => import("./features/bet-lord/bet-lord.routing").then((m) => m.BetLordRoutes),
  },
  {
    path: "flashscore",
    loadChildren: () => import("./features/flashscore/flashscore.routing").then((m) => m.FlashscoreRoutes),
  },
  {
    path: "topmatches",
    loadChildren: () => import("./features/topmatches/topmatches.routing").then((m) => m.TopmatchesRoutes),
  },
  {
    path: "businesskey",
    loadChildren: () => import("./features/businesskey/businesskey.routing").then((m) => m.BusinesskeyRoutes),
  },
  {
    path: "heartwise",
    loadChildren: () => import("./features/heartwise/heartwise.routing").then((m) => m.HeartwiseRoutes),
  },
  {
    path: "jobsalert",
    loadChildren: () => import("./features/jobsalert/jobsalert.routing").then((m) => m.JobsalertRoutes),
  },
  {
    path: "scholarship",
    loadChildren: () => import("./features/scholarship/scholarship.routing").then((m) => m.ScholarshipRoutes),
  },
  {
    path: "lovetips",
    loadChildren: () => import("./features/love-relationships-lord/love-relationships-lord.routing").then((m) => m.LoveRelationshipsLordRoutes),
  },
  {
    path: "jobconnect",
    loadChildren: () => import("./features/jobsconnect/jobs-lord.routing").then((m) => m.JobsLordRoutes),
  },
  {
    path: "financepro",
    loadChildren: () => import("./features/finance-lord/finance-lord.routing").then((m) => m.FinanceLordRoutes),
  },
  {
    path: "cashflow",
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

