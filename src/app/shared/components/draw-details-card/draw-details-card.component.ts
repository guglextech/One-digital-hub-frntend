import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-draw-details-card",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./draw-details-card.component.html",
  styleUrl: "./draw-details-card.component.scss",
})
export class DrawDetailsCardComponent  implements  OnInit {
  @Input() draw! : any;
  @Input() createdAt!: string;
  @Input() totalPlayers!: string;
  @Input() totalPicks!: string;
  @Input() minAmount!: string;
  @Input() maxAmount!: string;
  @Input() createdBy!: string;
  @Input() email?: string;


  ngOnInit(){
    console.log('DRAWS INFO' , this.draw)
  }
  
}
 