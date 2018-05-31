import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if ($('#skills').length) {

      var skillsDiv = $('#skills');

      $(window).on('scroll', function() {
          var winT = $(window).scrollTop(),
              winH = $(window).height(),
              skillsT = skillsDiv.offset().top;
          if (winT + winH > skillsT) {
              $('.skillbar').each(function() {
                  $(this).find('.skillbar-bar').animate({
                      width: $(this).attr('data-percent')
                  }, 2000);
              });
          }
      });

  }
  }

}
