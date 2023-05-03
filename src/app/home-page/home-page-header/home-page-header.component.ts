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
    {
      regular: 'Dream big,',
      bold: 'work hard',
    },
    {
      regular: 'Be the',
      bold: 'change',
    },
    {
      regular: 'Create your own',
      bold: 'happiness',
    },
    {
      regular: 'Live life with',
      bold: 'purpose',
    },
    {
      regular: 'Embrace your',
      bold: 'inner strength',
    },
    {
      regular: 'Treat others with',
      bold: 'kindness',
    },
  ];

  randomIndex = Math.floor(Math.random() * this.sayings.length);
  saying = this.sayings[this.randomIndex];
}
