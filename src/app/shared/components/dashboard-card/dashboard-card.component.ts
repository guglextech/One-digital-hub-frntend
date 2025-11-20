import { Component, Input } from "@angular/core";

@Component({
  selector: "dashboard-card",
  standalone: true,
  imports: [],
  templateUrl: "./dashboard-card.component.html",
  styleUrl: "./dashboard-card.component.scss",
})
export class DashboardCardComponent {
  @Input() title!: string;
  @Input() value: number | string | null = null;
  @Input() textColor: string = "";
  @Input() format: string = "";
  @Input() background: any = "";
  @Input() icon: string = "";
}
