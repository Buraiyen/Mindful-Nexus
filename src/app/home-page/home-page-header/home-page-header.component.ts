import { Component } from '@angular/core';
import SAYINGS from './sayings';

@Component({
  selector: 'app-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.scss'],
})
export class HomePageHeaderComponent {
  sayings = SAYINGS;

  randomIndex = Math.floor(Math.random() * this.sayings.length);
  saying = this.sayings[this.randomIndex];
}
