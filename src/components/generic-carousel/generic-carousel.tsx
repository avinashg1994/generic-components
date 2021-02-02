import { Component, h, State } from '@stencil/core';
import Swiper from 'swiper/bundle';

@Component({
  tag: 'generic-carousel',
  styleUrl: 'generic-carousel.css',
  shadow: true,
})
export class GenericCarousel {
  @State() swiperContainerRef?: HTMLDivElement;

  render() {
    const swiper = new Swiper(this.swiperContainerRef, {
      direction: 'horizontal',
      slidesPerView: 3,
      spaceBetween: 5,
      allowTouchMove: false,
      initialSlide: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return (
      <div class="swiper-container" ref={el => this.swiperContainerRef = el}>
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide blue ">Slide 2</div>
          <div class="swiper-slide red">Slide 3</div>
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide blue ">Slide 2</div>
          <div class="swiper-slide red">Slide 3</div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    );
  }
}
