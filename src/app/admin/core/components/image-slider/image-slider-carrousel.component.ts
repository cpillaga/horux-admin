import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SlideEventInterface } from '../../interfaces/slides-event';

@Component({
  selector: 'app-image-slider-carrousel',
  templateUrl: './image-slider-carrousel.component.html',
  styleUrls: ['./image-slider-carrousel.component.css']
})
export class ImageSliderCarrouselComponent implements OnInit {


  // @Input() events: Event[] = [];
  // @Output() action = new EventEmitter<Array<any>>();

  // slides = [
  //   { id: 1, img: "https://dummyimage.com/350x150/423b42/fff" },
  //   { id: 2, img: "https://dummyimage.com/350x150/2a2b7a/fff" },
  //   { id: 3, img: "https://dummyimage.com/350x150/1a2b7a/fff" },
  //   { id: 4, img: "https://dummyimage.com/350x150/7a2b7a/fff" },
  //   { id: 5, img: "https://dummyimage.com/350x150/9a2b7a/fff" },
  //   { id: 6, img: "https://dummyimage.com/350x150/5a2b7a/fff" },
  //   { id: 6, img: "https://dummyimage.com/350x150/4a2b7a/fff" }
  // ];

  @Input() slides: SlideEventInterface[] = [];


  currentIndex: number = 0;
  timeoutId?: number;

  constructor() {
    // console.log('slider');
  }

  ngOnInit(): void {
    this.resetTimer();

  }
  ngOnDestroy() {
    window.clearTimeout(this.timeoutId);
  }
  resetTimer() {
    if (this.timeoutId) {
      window.clearTimeout(this.timeoutId);
    }
    this.timeoutId = window.setTimeout(() => this.goToNext(), 3000);
  }

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.resetTimer();
    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.resetTimer();
    this.currentIndex = slideIndex;
  }

  // getCurrentSlideUrl() {
  //   return `url('${this.slides[this.currentIndex].url}')`;
  // }
  // getCurrentSlideUrl() {
  //   console.clear();
  //   console.log(`${this.slides[this.currentIndex]['event'].img}`);

  //   // return `url('${this.slides[this.currentIndex].url}')`;
  // }

  test:string=`url('assets/img/bee/bee_error.png')`;

  getCurrentSlideUrl() {
    let src = `${this.slides[this.currentIndex].url}`;
    let img = '';
    (src?.length < 40)
      ? img = `url('assets/img/bee/bee_error.png')`
      : img = `url('data:image/png;base64,${src}')`;
    // console.clear();
    // console.log('==>', img);
    return img;
  }
}
