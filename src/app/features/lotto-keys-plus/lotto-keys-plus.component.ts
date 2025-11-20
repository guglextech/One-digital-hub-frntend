import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { LOTTO_KEYS_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-lotto-keys-plus',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './lotto-keys-plus.component.html',
  styleUrl: './lotto-keys-plus.component.scss'
})
export class LottoKeysPlusComponent {

   SIDEBAR_MENU = LOTTO_KEYS_MENU;
}
