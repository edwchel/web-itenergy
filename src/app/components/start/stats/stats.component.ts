import { Component, OnInit } from '@angular/core';
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor() { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    if ($('.counter').length) {
      $('.counter').counterUp({
          delay: 10,
          time: 1500
      });
    }
  }
  ngOnInit() {
  }
}
