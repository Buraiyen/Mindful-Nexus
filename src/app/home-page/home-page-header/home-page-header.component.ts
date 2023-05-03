import { Component } from '@angular/core';

interface Saying {
  regular: string;
  bold: string;
}

@Component({
  selector: 'app-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.scss'],
})
export class HomePageHeaderComponent {
  sayings: Saying[] = [
    {
      regular: 'Believe in yourself,',
      bold: 'always',
    },
  ];

  randomIndex = Math.floor(Math.random() & this.sayings.length);
  saying = this.sayings[this.randomIndex];
}
