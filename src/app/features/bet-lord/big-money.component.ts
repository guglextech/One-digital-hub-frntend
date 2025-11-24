import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { BIG_MONEY_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-big-money',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './big-money.component.html',
  styleUrl: './big-money.component.scss'
})
export class BigMoneyComponent {
  BIG_MONEY_MENU  =   BIG_MONEY_MENU;
}
