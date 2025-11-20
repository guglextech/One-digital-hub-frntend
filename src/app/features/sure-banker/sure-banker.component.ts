import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { SURE_BANKER_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-sure-banker',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './sure-banker.component.html',
  styleUrl: './sure-banker.component.scss'
})
export class SureBankerComponent {
  SIDEBAR_MENU = SURE_BANKER_MENU;
}
