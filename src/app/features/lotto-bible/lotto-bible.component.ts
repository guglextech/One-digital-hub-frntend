import { Component } from '@angular/core';
import { LOTTO_BIBLE_MENU } from './constant/lotto-bible';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';

@Component({
  selector: 'app-lotto-bible',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './lotto-bible.component.html',
  styleUrl: './lotto-bible.component.scss'
})
export class LottoBibleComponent {
   LOTTO_BIBLE_MENU = LOTTO_BIBLE_MENU
}
