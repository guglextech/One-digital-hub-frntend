import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HomepageService } from "../../services/homepage.service";
import { GameCardComponent } from "../../components/game-card/game-card.component";
import { SliderImgComponent } from "../../components/slider-img/slider-img.component";
import { GAMES } from "src/app/core/constants/constants";


@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    CommonModule,
    GameCardComponent,
    SliderImgComponent
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent implements OnInit {
  cards = GAMES;

  
  #homeService = inject(HomepageService);
  #router = inject(Router);

  ngOnInit(): void {}

  /**
   * Calls the getGames endpoint with the given matchType and
   * sets the cards to the response, and sets the loading to false.
   * If the request fails, it logs the error to the console.
   * @param matchType the type of match to get games for
   */
  goToGame(matchType: any) {
    console.log("MATCH TYPE", matchType);
    // this.#router.navigate(['/match', matchType], { queryParams: { preferredmatch: 3 } });
    localStorage.setItem("matchType", matchType);    
    this.#router.navigate(["/match", matchType]);

  }
}
