import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.scss'],
})
export class HomePageHeaderComponent {
  sayings = [
    {
      regular: 'Believe in yourself,',
      bold: 'always',
    },
  ];

  randomIndex = Math.floor(Math.random() & this.sayings.length);
  saying = this.sayings[this.randomIndex];
}
