import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-home-hero',
  standalone: true,
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss'
})
export class HomeHeroComponent {
  @Input() title: string = 'Details';
  @Input() description: string = 'Description';
}
