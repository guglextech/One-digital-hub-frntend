import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import {  LOVE_TIPS_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-love-relationships-lord',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './love-relationships-lord.component.html',
  styleUrl: './love-relationships-lord.component.scss'
})
export class LoveRelationshipsLordComponent {
  LOVE_TIPS_MENU = LOVE_TIPS_MENU;
}

