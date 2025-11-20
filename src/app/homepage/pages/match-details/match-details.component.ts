import { Component, inject } from "@angular/core";
import { HomepageService } from "../../services/homepage.service";
import { BehaviorSubject } from "rxjs";
import { STATUS } from "src/app/core/constants/constants";
import { Draw } from "src/app/core/models/types";
import { CommonModule } from "@angular/common";
import { DrawCardComponent } from "../../components/draw-cards/game-cards.component";
import { ActivatedRoute, Router } from "@angular/router";
import { HomeHeroComponent } from "../../components/home-hero/home-hero.component";

@Component({
  selector: "app-match-details",
  standalone: true,
  imports: [CommonModule, DrawCardComponent, HomeHeroComponent],
  templateUrl: "./match-details.component.html",
  styleUrl: "./match-details.component.scss",
})
export class MatchDetailsComponent {
  #homeService = inject(HomepageService);
  #router = inject(Router);
  #route = inject(ActivatedRoute);
  isLoading$ = new BehaviorSubject<boolean>(true);
  activeDraws: Draw[] = [];
  inactiveDraws: Draw[] = [];
  awaitingNumbersDraws: Draw[] = [];
  pendingApprovalDraws: Draw[] = [];
  lotteryDraws: Draw[] = [];

  selectedTab: string = STATUS.ACTIVE;
  STATUS = STATUS;
  selectedMatchType: number = 3;

  ngOnInit(): void {
     this.#route.params.subscribe((params) => {
      const matchId = params["matchId"];  
      // console.log("Fetched matchId:", matchId);
      this.goToGame(matchId);
    });
  }

  setActiveTab(tab: string) {
    this.selectedTab = tab;
  }

  /**
   * Calls the getGames endpoint with the given matchType and
   * sets the cards to the response, and sets the loading to false.
   * If the request fails, it logs the error to the console.
   * @param matchType the type of match to get games for
   */
  goToGame(matchType: number) {
    // console.log("MATCH TYPE", matchType);
    this.#homeService.getGames(matchType).subscribe((response) => {
        // console.log("RESPONSE", response);
        // this.cards = response.draws;
        const draws = response.draws;
        this.activeDraws = draws.filter(
          (draw: Draw) => draw.status === STATUS.ACTIVE
        );
        this.inactiveDraws = draws.filter(
          (draw: Draw) => draw.status === STATUS.INACTIVE
        );
        // this.awaitingNumbersDraws = draws.filter((draw: Draw) => draw.status ===  STATUS.AWAITING_NUMBERS);
        // this.pendingApprovalDraws = draws.filter((draw: Draw) => draw.status ===  STATUS.PENDING_APPROVAL);
        this.lotteryDraws = this.activeDraws;
        this.isLoading$.next(false);
        // console.log(this.cards, "DATA:::");
      },
      (error) => {
        console.error("Error fetching data:", error);
      }
    );
  }
}
