import { Component, OnInit } from '@angular/core';

import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  public config: SwiperConfigInterface = {
    // a11y: true,
    // direction: 'horizontal',
    // slidesPerView: 1,
    // keyboard: true,
    // mousewheel: true,
    // scrollbar: false,
    // navigation: true,
     pagination: true,
   //  loop:true
  };
  constructor() { }

  ngOnInit() {
  }

}