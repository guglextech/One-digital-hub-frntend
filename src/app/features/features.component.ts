import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { PRODUCTS_NAME } from "../core/constants/product-list";
import { RecentAppTracker, TrackedApp } from "../core/utils/recent-app-tracker";

interface Game {
  gameId: number;
  gameName: string;
  gameDescription: string;
  gameShortcode?: string;
  gameShortcodeJoined?: string;
  gameRoute: string;
  gameRouteJoined?: string;
  gameIcon: string;
  gameImage: string;
  tag: string;
}

@Component({
  selector: "app-game-board",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./features.component.html",
  styleUrl: "./features.component.scss",
})
export class GamesBoardComponent implements OnInit {
  isLoading = false;
  showOldGames = true;
  oldGames = PRODUCTS_NAME;
  recentApps: TrackedApp[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.recentApps = RecentAppTracker.getRecentApps();
    }, 500);
  }

  setMatch(game: Game) {
    console.log(game, "DATA");

    // Track the app as recently opened
    RecentAppTracker.markAppOpened({
      gameId: game.gameId,
      gameName: game.gameName,
      gameRoute: game.gameRoute,
      gameIcon: game.gameIcon,
      gameImage: game.gameImage,
      gameShortcode: game.gameDescription,
    });

    // localStorage.setItem("match",   `${game.gameName+ "-" +game.gameDescription}`);
     localStorage.setItem("match",   `${game.gameName+ " - " + game.gameShortcode}`);
    this.router.navigate([game.gameRoute], {
      queryParams: { page: "welcome" },
    });
  }

  navigateTo(app: TrackedApp) {
    this.router.navigate([app.gameRoute], {
      queryParams: { page: "welcome" },
    });
  }

  toggleOldGames() {
    this.showOldGames = true;
    // this.showNewGames = false;
  }

  trackByGameId(index: number, game: any): any {
    return game.gameId;
  }

  trackByAppId(index: number, app: any): any {
    return app.id || index;
  }


  gotoSettings() {
    this.router.navigate(["/settings/profile"]);
  }

  gotoCancelSubscription() {
    this.router.navigate(["/cancel-subscription"]);
  }
}
