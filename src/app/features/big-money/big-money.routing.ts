import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { PriceSetupComponent } from "./pages/price-setup/price-setup.component";
import { ForecastComponent } from "./pages/forecast/forecast.component";
import { SubscribersComponent } from "./pages/subscribers/subscribers.component";
import { ActiveSubscribersComponent } from "./pages/subscribers/active-subscribers/active-subscribers.component";
import { InactiveSubscribersComponent } from "./pages/subscribers/inactive-subscribers/inactive-subscribers.component";
import { BigMoneyComponent } from "./big-money.component";
import { PaymentHistoryComponent } from "./pages/payment-history/payment-history.component";

export const BigMoneyInRoutes: Routes = [
  {
    path: "",
    component: BigMoneyComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "price-setup",
        component: PriceSetupComponent,
      },
      {
        path: "payments",
        component: PaymentHistoryComponent,
      },
      {
        path: "forecast",
        component: ForecastComponent,
      },
      {
        path: "subscribers",
        component: SubscribersComponent,
        children: [
          {
            path: "active",
            component: ActiveSubscribersComponent,
          },
          {
            path: "inactive",
            component: InactiveSubscribersComponent,
          },
        ],
      },
    ],
  },
];
