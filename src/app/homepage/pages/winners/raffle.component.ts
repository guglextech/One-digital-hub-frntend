import { Component, inject, OnInit } from '@angular/core';
import { HomeHeroComponent } from '../../components/home-hero/home-hero.component';
import { CommonModule } from '@angular/common';
import { ContentManagerService } from 'src/app/features/cms-manager/services/cms.service';

interface WinnerProfile {
  id: number;
  name: string;
  winType: string | null;
  amount: string;
  photoUrl: string;
  createdBy: string | null;
  createdAt: string;
}


@Component({
  selector: 'app-raffle',
  standalone: true,
  imports: [HomeHeroComponent, CommonModule],
  templateUrl: './raffle.component.html',
  styleUrl: './raffle.component.scss'
})
export class WinnerComponent  implements OnInit{
  winners = inject(ContentManagerService);
  profiles: WinnerProfile[] = [];

  ngOnInit(): void {
    this.getWinners();
  }

  getWinners(){
    this.winners.getWinner(1, 100).subscribe((res : any) =>{
      this.profiles = res?.winners || []
    })
  }

}
