import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    if ($('.flexslider').length) {
      $('.flexslider').flexslider({
          animation: 'fade'
      });
    }
  }
  ngOnInit() {
  }
}
