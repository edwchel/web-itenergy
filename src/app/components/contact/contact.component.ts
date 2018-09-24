import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  title = 'My first AGM project';
  lat = 26.073486;
  lng =  -98.359856;
  zoom = 16;

  constructor() { }

  ngOnInit() {
  }

}
