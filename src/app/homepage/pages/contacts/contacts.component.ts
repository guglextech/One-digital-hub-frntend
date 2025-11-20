import { Component } from '@angular/core';
import { HomeHeroComponent } from '../../components/home-hero/home-hero.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [HomeHeroComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

}
