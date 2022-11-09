import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images = [
    {
    id: 1,
    label: 'Spaghetti al sugo'
    },
    {
    id: 2,
    label: 'Tagliata di manzo'
    },
    {
    id: 3,
    label: 'Tiramisu classico'
    }
  ];

  percorso ='../assets/img/carousel-';
  percorso2 = '../assets/img/carousel-1.jpg';

}
