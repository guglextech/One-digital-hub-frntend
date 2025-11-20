import { CommonModule } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HomeHeroComponent } from "../../components/home-hero/home-hero.component";
import { HomepageService } from "../../services/homepage.service";
import { BehaviorSubject } from "rxjs";
import { GAMES, STATUS } from "src/app/core/constants/constants";
import { GameCardComponent } from "../../components/game-card/game-card.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, GameCardComponent, HomeHeroComponent],
  templateUrl: "./past-draw.component.html",
  styleUrl: "./past-draw.component.scss",
})
export class PastDrawComponent implements OnInit {
  cards = GAMES;

  #homeService = inject(HomepageService);
  #router = inject(Router);
  isLoading$ = new BehaviorSubject<boolean>(true);
  selectedTab: string = STATUS.INACTIVE;

  ngOnInit(): void {}

  setActiveTab(tab: string) {
    this.selectedTab = tab;
  }

  goToGame(matchType: any) {
    // console.log("MATCH TYPE", matchType);
    localStorage.setItem("matchType", matchType);  
    this.#router.navigate(["/past-draws", matchType]);
  }
}
