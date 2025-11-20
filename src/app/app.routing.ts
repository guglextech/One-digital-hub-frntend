import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./core/guards/auth.guard";
import { RoleGuard } from "./core/guards/role.guard";
import { Role } from "./core/models/Roles";
// import { Page404Component } from "./features/page-404/page-404.component";
import { GamesBoardComponent } from "./features/features.component";
import { Page404Component } from "./page-404/page-404.component";
import { PRODUCTS_NAME } from "./core/constants/product-list";

export const appRoutes: Routes = [
  // {
  //   path: "",
  //   loadChildren : () => import("./homepage/home.routes").then((m) => m.HomepageInRoutes),
  // },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthRoutingModule),
  },
  {
    path : "products",
    canActivate: [ RoleGuard],
    data: { roles: [Role.Admin, Role.User] },
    component : GamesBoardComponent
  },
  {
    path: "money-row",
    canActivate: [ RoleGuard],
    data: { roles: [Role.Admin, Role.User] },
    loadChildren: () =>
      import("./features/money-row/money-row.routing").then(
        (m) => m.MoneyRowInRoutes
      ),
  },
  {
    path: "lotto-bible",
    canActivate: [ RoleGuard],
    data: { roles: [Role.Admin, Role.User] },
    loadChildren: () =>
      import("./features/lotto-bible/lotto-bible.routing").then(
        (m) => m.LottoBibleInRoutes
      ),
  },
  {
    path: "lucky-buck",
    canActivate: [ RoleGuard],
    data: { roles: [Role.Admin, Role.User] },
    loadChildren: () =>
      import("./features/lucky-buck/lucky-buck.routing").then(
        (m) => m.LuckyBuckInRoute
      ),
  },
  {
    path: "mr-tips",
    canActivate: [ RoleGuard],
    data: { roles: [Role.Admin, Role.User] },
    loadChildren: () =>
      import("./features/mr-tips/mr-tips.routing").then(
        (m) => m.MrTipsInRoutes
      ),
  },
  {
    path: "lotto-choice",
    canActivate: [ RoleGuard],
    data: { roles: [Role.Admin, Role.User] },
    loadChildren: () =>
      import("./features/lotto-choice/lotto-choice.routing").then(
        (m) => m.LottoChoiceInRoutes
      ),
  },
  {
    path: "big-money",
    canActivate: [ RoleGuard],
    data: { roles: [Role.Admin, Role.User] },
    loadChildren: () =>
      import("./features/big-money/big-money.routing").then(
        (m) => m.BigMoneyInRoutes
      ),
  },
  {
    path: "hot-numbers",
    canActivate: [ RoleGuard],
    data: { roles: [Role.Admin, Role.User] },
    loadChildren: () =>
      import("./features/hot-numbers/hot-numbers.routing").then(
        (m) => m.HotNumbersInRoutes
      ),
  },
  {
    path: "lotto-key-plus",
    canActivate: [ RoleGuard],
    data: { roles: [Role.Admin, Role.User] },
    loadChildren: () =>
      import("./features/lotto-keys-plus/lotto-keys-plus.routing").then(
        (m) => m.LottoLeysPlusInRoutes
      ),
  },
  {
    path: "sure-banker",
    canActivate: [ RoleGuard],
    data: { roles: [Role.Admin, Role.User] },
    loadChildren: () =>
      import("./features/sure-banker/sure-banker.routing").then(
        (m) => m.SureBankerInRoutes
      ),
  },
  {
    path: "lucky-picks-two-sure",
    canActivate: [ RoleGuard],
    data: { roles: [Role.Admin, Role.User] },
    loadChildren: () =>
      import("./features/lucky-picks-two-sure/lucky-pick-two-sure.routing").then(
        (m) => m.TwoSureLuckPicksInRoutes
      ),
  },
  {
    path: "vip-super",
    canActivate: [ RoleGuard],
    data: { roles: [Role.Admin, Role.User] },
    loadChildren: () =>
      import("./features/vip-supper/vip-super.routing").then(
        (m) => m.VIPSuperInRoutes
      ),
  },
  {
    path: "lotto-guide",
    canActivate: [ RoleGuard],
    data: { roles: [Role.Admin, Role.User] },
    loadChildren: () =>
      import("./features/lotto-guide/lotto-guide.routing").then(
        (m) => m.LottoGuideInRoutes
      ),
  },
  {
    path: "lotto-star",
    canActivate: [ RoleGuard],
    data: { roles: [Role.Admin, Role.User] },
    loadChildren: () =>
      import("./features/lotto-star/lotto-star.routing").then(
        (m) => m.LottoStarInRoutes
      ),
  },
   {
    path: "settings",
    canActivate: [ RoleGuard],
    data: { roles: [Role.Admin, Role.User] },
    loadChildren: () =>
      import("./features/account-settings/setting.routing").then(
        (m) => m.SettingInRoutes
      ),
  },
  { path: "**", redirectTo: "/auth/signin", pathMatch: "full" }
];

 