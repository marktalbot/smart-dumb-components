import { Component } from '@angular/core';

import { SmartComponent } from './smart/smart.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [SmartComponent]
})
export class AppComponent {
  title = 'app works!';
}
