import { Component } from '@angular/core';
import { LOTTO_STAR_MENU } from './constant/lotto-star';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';

@Component({
  selector: 'app-lotto-star',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './lotto-star.component.html',
  styleUrl: './lotto-star.component.scss'
})
export class LottoStarComponent {
   LOTTO_STAR_MENU = LOTTO_STAR_MENU
}
