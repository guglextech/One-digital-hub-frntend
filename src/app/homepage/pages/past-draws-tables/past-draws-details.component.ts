import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { HomepageService } from '../../services/homepage.service';
import { HomeHeroComponent } from '../../components/home-hero/home-hero.component';
import { Observable, tap } from 'rxjs';

interface Draw {
  drawRef: string;
  name: string;
  correctNumbers: string;
  status: string;
  closeTime: string;
}

interface DrawResponse {
  draws: Draw[];
  nextPage: number;
  totalRequestedPage: number;
  totalRequests: number;
  totalPages: number; // Added this based on API response
  currentPage: number; // Added this based on API response

}




@Component({
  selector: 'app-past-draws-details',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HomeHeroComponent],
  templateUrl: './past-draws-details.component.html',
  styleUrls: ['./past-draws-details.component.scss']
})

 
export class PastDrawsTableComponent implements OnInit {
  private homeService = inject(HomepageService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  draws: any[] = [];
  filteredDraws: any[] = [];
  searchTerm: string = '';
  currentPage: number = 1;
  itemsPerPage: number = 10;
  totalPages: number = 1;
  totalItems: number = 0;
  isLoading: boolean = false;
  matchType!: any;

  #homeService = inject(HomepageService);
  #router = inject(Router);
  #route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.#route.params.subscribe(params => {
      this.matchType = params['matchId'];
      this.loadData();
    });
  }

  loadData(): void {
    this.isLoading = true;
    this.#homeService.getInActiveGames(
      this.matchType,
      this.currentPage,
      this.itemsPerPage
    ).subscribe({
      next: (response: any) => {
        this.draws = response.draws || [];
        this.filteredDraws = this.draws;
        this.totalItems = response.totalRequests;
        this.totalPages = response.totalRequestedPage;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error fetching draws:', error);
        this.isLoading = false;
      }
    });
  }


  view(drawRef: any, matchType?: any): void {
    console.log(drawRef, "DRAW REF");
    // console.log(matchType, "match TYPE REF");
    localStorage.setItem("matchType", this.matchType);  
    this.#router.navigate(['/results', drawRef.drawRef],{
      relativeTo: this.#route,
      queryParams: { matchType: this.matchType } 
    });
  }

  handleSearch(): void {
    // If search needs server-side implementation, add searchTerm to API call
    this.currentPage = 1;
    this.loadData();
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadData();
    }
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  previousPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  getPages(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    const half = Math.floor(maxVisiblePages / 2);
    
    let start = Math.max(1, this.currentPage - half);
    let end = Math.min(this.totalPages, start + maxVisiblePages - 1);

    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  }

  getPaginatedDraws(): Draw[] {
    if (this.searchTerm) {
      // For client-side filtered results, apply pagination
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      return this.filteredDraws.slice(startIndex, startIndex + this.itemsPerPage);
    }
    // For server-side pagination, use all filtered draws
    return this.filteredDraws;
  }

  
  trackByDrawRef(index: number, draw: Draw): string {
    return draw.drawRef;
  }


  onSearch(): void {
    if (this.searchTerm) {
      // If searching, use client-side filtering
      // this.applyClientSideFilter();
    } else {
      // If clearing search, refetch original data
      // if (this.currentMatchId) {
      //   this.fetchDraws(this.currentMatchId, this.currentPage);
      // }
    }
  }
}
