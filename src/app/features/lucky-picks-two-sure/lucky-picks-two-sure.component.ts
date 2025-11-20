import { Component } from '@angular/core';
import { DashboardLayoutComponent } from 'src/app/shared/components/dashboard-layout/dashboard-layout.component';
import { LUCKY_PICK_TWO_SURE_MENU } from './constant/sidebar-routes';

@Component({
  selector: 'app-lucky-picks-two-sure',
  standalone: true,
  imports: [DashboardLayoutComponent],
  templateUrl: './lucky-picks-two-sure.component.html',
  styleUrl: './lucky-picks-two-sure.component.scss'
})
export class LuckyPicksTwoSureComponent {
  SIDEBAR_MENU =  LUCKY_PICK_TWO_SURE_MENU;
}
