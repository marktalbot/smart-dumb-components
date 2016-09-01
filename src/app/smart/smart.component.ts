import { Component, OnInit } from '@angular/core';

import { DumbComponent } from '../dumb/dumb.component';

@Component({
  moduleId: module.id,
  selector: 'app-smart',
  templateUrl: 'smart.component.html',
  styleUrls: ['smart.component.css'],
  directives: [DumbComponent]
})
export class SmartComponent implements OnInit {

    // people: [];
    people: any;

  constructor() {
      this.people = ['Tamara', 'Ingmar'];
  }

  ngOnInit() {
  }

}
