import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { FINANCE_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-finance-lord',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './finance-lord.component.html',
  styleUrl: './finance-lord.component.scss'
})
export class FinanceLordComponent {
  FINANCE_MENU = FINANCE_MENU;
}

