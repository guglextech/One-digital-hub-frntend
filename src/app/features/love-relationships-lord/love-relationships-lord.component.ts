import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { LOVE_RELATIONSHIPS_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-love-relationships-lord',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './love-relationships-lord.component.html',
  styleUrl: './love-relationships-lord.component.scss'
})
export class LoveRelationshipsLordComponent {
  LOVE_RELATIONSHIPS_MENU = LOVE_RELATIONSHIPS_MENU;
}

