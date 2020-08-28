import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DefaultComponent } from './components/default/default.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { SwiperModule, SwiperConfigInterface,
  SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { CardSwipeComponent } from './components/card-swipe/card-swipe.component';
  const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};
@NgModule({
  imports:      [   SwiperModule,
    BrowserModule,
    FlexLayoutModule, FormsModule ],
  declarations: [ AppComponent, MenuComponent, DefaultComponent, CardSwipeComponent ],
  bootstrap:    [ AppComponent ],
    providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class AppModule { }
