import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [NgIf],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent {
  @Input() isActionloading: boolean = false;
  @Input() loadingMessage: string = 'Loading...';
  @Input() iconClass: string = 'fa fa-spinner';
}
