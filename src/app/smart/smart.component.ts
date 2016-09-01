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

    // @TODO create users respository (that gets mock data)
    // @TODO Inject users repositor using DI
  constructor() {
      this.people = ['Tamara', 'Ingmar'];
  }

  ngOnInit() {
  }

}
