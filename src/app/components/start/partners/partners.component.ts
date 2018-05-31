import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  constructor() { }
  ngAfterViewInit() {
    if ($('.logo-slides').length) {
      $(".logo-slides").owlCarousel({
          autoplay: true,
          autoplayTimeout: 3000,
          loop: true,
          margin: 10,
          nav: false,
          responsiveClass: true,
          responsive: {
              0: {
                  items: 1
              },
              480: {
                  items: 2
              },
              767: {
                  items: 3
              },
              991: {
                  items: 4
              },
              1199: {
                  items: 5
              }
          }

      });
  }
  }
  ngOnInit() {
  }

}
