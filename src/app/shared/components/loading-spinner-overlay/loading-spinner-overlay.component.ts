import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
 

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl : './loading-spinner-overlay.component.html',
  styleUrls: ['./loading-spinner-overlay.component.scss']
})
export class LoadingSpinnerOverlayComponent {
  isLoading$ = this.loadingService.loading$;

  constructor(private loadingService: LoadingService) { }
}