import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-add-draw-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-draw-card.component.html',
  styleUrl: './add-draw-card.component.scss',
  //  encapsulation : ViewEncapsulation.None
})
export class AddDrawCardComponent {
  @Output() setupDraw = new EventEmitter<void>();

  handleSetupDraw(): void {
    this.setupDraw.emit();
  }
}