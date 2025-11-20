import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { LOTTO_GUIDE_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-lotto-guide',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './lotto-guide.component.html',
  styleUrl: './lotto-guide.component.scss'
})
export class LottoGuideComponent {
  SIDEBAR_MENU = LOTTO_GUIDE_MENU;
}
