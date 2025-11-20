import { CommonModule, DatePipe, NgFor, NgIf } from "@angular/common";
import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Draw } from "src/app/core/models/types";
import { formatDateToCustomFormat } from "src/app/core/utils/formats";

@Component({
  selector: "app-draws-cards",
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: "./game-cards.component.html",
  styleUrl: "./game-cards.component.scss",
})
export class DrawCardComponent {
  //ts-ignore
  @Input() draw: any;
  formatDateToCustomFormat = formatDateToCustomFormat;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  details(draw: Draw) {
    console.log(draw, "DRAW INFO");
    this.router.navigate(["/results", draw.drawRef], {
      relativeTo: this.route,
    });
  }
}
