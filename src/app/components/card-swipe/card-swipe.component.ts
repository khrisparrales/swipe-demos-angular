import { Component, OnInit } from '@angular/core';

import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-card-swipe',
  templateUrl: './card-swipe.component.html',
  styleUrls: ['./card-swipe.component.css']
})
export class CardSwipeComponent implements OnInit {

 public config: SwiperConfigInterface = {  
      spaceBetween: 30,
     effect: 'fade',
       loop: true,
        mousewheel: {
         invert: false,
       },
         pagination: {
        el: '.blog-slider__pagination',
         clickable: true,
       }
  };
  constructor() { }

  ngOnInit() {
  }

}


// var swiper = new Swiper('.blog-slider', {
//       spaceBetween: 30,
//       effect: 'fade',
//       loop: true,
//       mousewheel: {
//         invert: false,
//       },
//       // autoHeight: true,
//       pagination: {
//         el: '.blog-slider__pagination',
//         clickable: true,
//       }
//     });