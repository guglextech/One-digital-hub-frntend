import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { STATUS } from 'src/app/core/constants/constants';
import { Draw } from 'src/app/core/models/types';

@Component({
  selector: 'app-draw-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './draw-card.component.html',
  styleUrl: './draw-card.component.scss'
})
export class DrawCardComponent {
  @Input() draw!: Draw;
  @Output() viewDetails = new EventEmitter<Draw>();
  STATUS = STATUS;

  get formattedCloseTime(): string {
    return this.draw.closeTime 
      ? this.draw.closeTime.toLocaleString()
      : 'No time set';
  }

  handleViewDetails(): void {
    this.viewDetails.emit(this.draw);
  }
}
