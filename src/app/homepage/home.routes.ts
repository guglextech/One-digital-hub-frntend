import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { HowToPlayComponent } from "./pages/how-to-play/how-to-play.component";
import { TermsAndConditionsComponent } from "./pages/terms-and-conditions/terms-and-conditions.component";
import { ResultsComponent } from "./pages/results/results.component";
import { PastDrawComponent } from "./pages/past-draw/past-draw.component";
import { MatchDetailsComponent } from "./pages/match-details/match-details.component";
import { DrawVideosComponent } from "./pages/draw-videos/draw-videos.component";
import { LayoutPage } from "./pages/page.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { PastDrawsTableComponent } from "./pages/past-draws-tables/past-draws-details.component";
import { WinnerComponent } from "./pages/winners/raffle.component";
 
export const HomepageInRoutes: Routes = [
  {
    path: "",
    redirectTo: "/live",
    pathMatch: "full",
  },
  {
    path: "",
    component: LayoutPage,
    children: [
      {
        path: "live",
        component: HomeComponent,
      },
      {
        path: "match/:matchId",
        component: MatchDetailsComponent,
      },
      {
        path: "past-draws/:matchId",
        component: PastDrawsTableComponent,
      },
      {
        path: "past-draws",
        component: PastDrawComponent,
      },
      {
        path: "contacts",
        component: ContactsComponent,
      },
      {
        path: "results/:drawRef",
        component: ResultsComponent,
      },
      {
        path: "winners",
        component: WinnerComponent,
      },
      {
        path: "video-stream",
        component: DrawVideosComponent,
      },
      {
        path: "terms-and-conditions",
        component: TermsAndConditionsComponent,
      },
      {
        path: "how-to-play",
        component: HowToPlayComponent,
      },
    ],
  }
];
