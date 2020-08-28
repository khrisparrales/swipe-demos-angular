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
     pagination: true,
  };
  constructor() { }

  ngOnInit() {
  }

}