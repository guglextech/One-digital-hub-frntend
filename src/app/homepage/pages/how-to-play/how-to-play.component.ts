import { Component } from '@angular/core';
import { HomeHeroComponent } from '../../components/home-hero/home-hero.component';

@Component({
  selector: 'app-how-to-play',
  standalone: true,
  imports: [HomeHeroComponent],
  templateUrl: './how-to-play.component.html',
  styleUrl: './how-to-play.component.scss'
})
export class HowToPlayComponent {

}
