import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-carouse-home',
  templateUrl: './carouse-home.component.html',
  styleUrls: ['./carouse-home.component.css']
})
export class CarouseHomeComponent implements OnInit {
  public Config: NgxCarousel;
  
  

  
  constructor() {
    
    
    this.Config = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            display: none;
          }`
      },
      loop: true,
      touch: true,
      
      
    }
  }

  ngOnInit() {
  }
  
}
