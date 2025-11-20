import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { LOTTO_CHART_MENU } from './constant/money-row';

@Component({
  selector: 'app-money-row',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './lotto-chart.component.html',
  styleUrl: './lotto-chart.component.scss'
})
export class MoneyRowComponent {
  LOTTO_CHART_MENU = LOTTO_CHART_MENU
}
