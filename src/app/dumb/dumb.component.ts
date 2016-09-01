import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-dumb',
  templateUrl: 'dumb.component.html',
  styleUrls: ['dumb.component.css'],
  inputs: ['people']
})
export class DumbComponent implements OnInit {

    // @TODO: note: as per XB; dumb component should never have anything
    // injected into the constructor
    constructor() { }

    ngOnInit() {
    }

}
