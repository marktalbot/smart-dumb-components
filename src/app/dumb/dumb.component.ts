import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-dumb',
  templateUrl: 'dumb.component.html',
  styleUrls: ['dumb.component.css'],
  inputs: ['people']
})
export class DumbComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

}
