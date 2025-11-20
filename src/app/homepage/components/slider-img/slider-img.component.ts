import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-img',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './slider-img.component.html',
  styleUrl: './slider-img.component.scss'
})
export class SliderImgComponent {
  slides = [
    {
      image: './assets/images/carousel/banner.jpg',
      caption: '*714*339#'
    },
    {
      image: './assets/images/carousel/banner-1.jpg',
      caption: 'Wotiriye'
    },
    {
      image: './assets/images/carousel/banner.jpg',
      caption: 'Play and Win'
    }
  ];

 
  currentIndex = 0;

  // Method to move to the next slide
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  // Method to move to the previous slide
  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }


}
