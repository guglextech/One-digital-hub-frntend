import { Component, OnInit, inject } from "@angular/core";
import {
  DrawCardComponent,
} from "../../components/draw-cards/game-cards.component";
import { ActivatedRoute, Router } from "@angular/router";
import { HomepageService } from "../../services/homepage.service";
import { Draw, LotteryResponse } from "src/app/core/models/types";
import { formatCorrectNumbers } from "src/app/core/utils/formats";
import { CommonModule, DatePipe } from "@angular/common";
import { HomeHeroComponent } from "../../components/home-hero/home-hero.component";

@Component({
  selector: "app-results",
  standalone: true,
  imports: [DrawCardComponent, CommonModule, DatePipe, HomeHeroComponent],
  templateUrl: "./results.component.html",
  styleUrl: "./results.component.scss",
})
export class ResultsComponent implements OnInit {
  draw : LotteryResponse | null = null;
  #router = inject(Router);
  #route = inject(ActivatedRoute);
  #homeService = inject(HomepageService);
  matchType!: number;
  formatCorrectNumbers = formatCorrectNumbers;
 

  ngOnInit(): void {
    const drawRef = this.#route.snapshot.params["drawRef"];
    // console.log("DRAWREF", drawRef)

    const matchType = localStorage.getItem('matchType');
    // console.log("MATCH TYPE", matchType);
    this.loadDrawDetail(matchType,drawRef);
  }

  loadDrawDetail( matchType: any, drawRef: string) {
    this.#homeService.getDrawDetailById(matchType,drawRef).subscribe({
      next: (res : LotteryResponse) => {
        // console.log(res, "RESULT INFO");
        if(res.draws) {
          this.draw = res;
          // this.draw.winners = WINNERS;
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
