import { Component, inject, ChangeDetectorRef } from "@angular/core";
import { CardConfig, IDashboardStats } from "src/app/core/models/types";
import { BaseDashboardComponent } from "src/app/shared/components/base-dashboard/base-dashboard.component";
import { DashboardCardComponent } from "src/app/shared/components/dashboard-card/dashboard-card.component";
import { MOCK_DASHBOARD_STATS } from "./mockdata";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [DashboardCardComponent],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent extends BaseDashboardComponent {
  #chr = inject(ChangeDetectorRef);

  override dashboardInfo: IDashboardStats | null = null;

  statsCards: CardConfig[] = [
   
    {
      title: "Subscribers",
      getValue: (data) => data.totalPlayers,
      textColor: "text-info",
      format: "",
      background: "rgb(243, 253, 242) !important",
    },
    {
      title: "Total Forcasts",
      getValue: (data) => data.totalStakes,
      textColor: "text-warning",
      format: "",
      background: "rgb(242, 239, 250) !important",
    },
  ];

  override ngOnInit(): void {
    this.loadDashboardInfo();
  }

  constructor() {
    super();
  }

  override loadDashboardInfo(): void {
    this.dashboardInfo = MOCK_DASHBOARD_STATS;
    this.#chr.detectChanges();
    super.loadDashboardInfo();

    // this.#dashboardService.dashboardOverview().subscribe({
    //   next: (res : IDashboardStats) => {
    //     if (res.response.status === STATUS_CODE.SUCCESS) {
    //       this.dashboardInfo = res;
    //       this.#chr.detectChanges();
    //       super.loadDashboardInfo();
    //     }
    //   },
    //   error: (err) => console.error('Dashboard load failed:', err)
    // });
  }
}
