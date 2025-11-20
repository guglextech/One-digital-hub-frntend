import { Component, inject, OnInit } from "@angular/core";
import { HomeHeroComponent } from "../../components/home-hero/home-hero.component";
import { CommonModule } from "@angular/common";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { ContentManagerService } from "src/app/features/cms-manager/services/cms.service";

interface Video {
  url: string;
  name: string;
  safeUrl?: SafeResourceUrl;
}

interface ContentResponse {
  response: {
    response: string;
    status: number;
    message: string;
    name: string;
  };
  contents: {
    id: number;
    status: string;
    texts: Array<{ name: string; text: string }>;
    sliders: string[];
    videos: Video[];
    files: Array<{ url: string; name: string }>;
    links: null;
    createdBy: string;
    createdAt: string;
    approvedBy: string;
    approvedAt: string;
  };
}

@Component({
  selector: "app-draw-videos",
  standalone: true,
  imports: [HomeHeroComponent, CommonModule],
  templateUrl: "./draw-videos.component.html",
  styleUrl: "./draw-videos.component.scss",
})
export class DrawVideosComponent implements OnInit {
  #sanitizer = inject(DomSanitizer);
  contentCMS = inject(ContentManagerService);
  contents: ContentResponse['contents'] | null = null;

  ngOnInit(): void {
    this.loadContent();
  }

  loadContent() {
    this.contentCMS.getContentPublished().subscribe({
      next: (response: any) => {
        this.contents = response.contents;
        this.sanitizeVideoUrls();
      },
      error: (err) => console.error("Error loading content:", err),
    });
  }

  private sanitizeVideoUrls() {
    if (!this.contents?.videos) return;

    this.contents.videos = this.contents.videos.map(video => {
      if (this.isYoutubeUrl(video.url)) {
        const safeUrl = this.getSafeYoutubeUrl(video.url);
        return { ...video, safeUrl };
      }
      return video;
    });
  }

  private isYoutubeUrl(url: string): boolean {
    return /youtube\.com|youtu\.be/i.test(url);
  }

  private getSafeYoutubeUrl(url: string): SafeResourceUrl {
    const embedUrl = url.includes("embed") ? url : this.getEmbedUrlFromWatch(url);
    return this.#sanitizer.bypassSecurityTrustResourceUrl(embedUrl);
  }

  private getEmbedUrlFromWatch(url: string): string {
    const videoId = this.extractYoutubeId(url);
    return `https://www.youtube.com/embed/${videoId}`;
  }

  private extractYoutubeId(url: string): string {
    const match = url.match(
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    );
    return (match && match[2]?.length === 11) ? match[2] : "";
  }
}
