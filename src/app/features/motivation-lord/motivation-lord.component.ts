import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { MOTIVATION_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-motivation-lord',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './motivation-lord.component.html',
  styleUrl: './motivation-lord.component.scss'
})
export class MotivationLordComponent {
  MOTIVATION_MENU = MOTIVATION_MENU;
}

