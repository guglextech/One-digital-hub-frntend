import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { JOBS_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-jobs-lord',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './jobs-lord.component.html',
  styleUrl: './jobs-lord.component.scss'
})
export class JobsLordComponent {
  JOBS_MENU = JOBS_MENU;
}

