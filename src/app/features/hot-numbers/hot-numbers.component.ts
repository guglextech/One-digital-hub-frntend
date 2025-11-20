import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { HOT_NUMBERS_MENU } from './constant/hot-numbers';

@Component({
  selector: 'app-hot-numbers',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './hot-numbers.component.html',
  styleUrl: './hot-numbers.component.scss'
})
export class HotNumbersComponent {
HOT_NUMBERS = HOT_NUMBERS_MENU;
}
