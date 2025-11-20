import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { CardConfig, IDashboardStats } from 'src/app/core/models/types';
import { DashboardCardComponent } from '../dashboard-card/dashboard-card.component';
import { NgFor } from '@angular/common';
// import { MatchTwoDashboardService } from 'src/app/features/match-two/services/dashboard.service';

@Component({
  selector: 'base-dashboard',
  templateUrl: "./base-dashboard.component.html",
  styleUrl: "./base-dashboard.component.scss",
  standalone: true,
  imports: [DashboardCardComponent, NgFor]
})
export abstract class BaseDashboardComponent implements OnInit {

  // ngOnDestroy() {
  //   throw new Error("Method not implemented.");
  // }


  // protected dashboardService = inject(MatchTwoDashboardService);
  protected cdr = inject(ChangeDetectorRef);

  protected dashboardInfo: IDashboardStats | null = null;
  protected abstract statsCards: CardConfig[];

  ngOnInit(): void {
    this.loadDashboardInfo();
  }

  protected loadDashboardInfo(): void {}
}