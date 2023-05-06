import { Component, OnInit } from '@angular/core';
import { SAYINGS, Saying } from './sayings';

@Component({
  selector: 'app-home-page-header',
  templateUrl: './home-page-header.component.html',
  styleUrls: ['./home-page-header.component.scss'],
})
export class HomePageHeaderComponent implements OnInit {
  sayings = SAYINGS;
  currentIndex: number = Math.floor(Math.random() * this.sayings.length);
  currentSaying!: Saying;

  ngOnInit(): void {
    this.currentSaying = this.sayings[this.currentIndex];

    setInterval(() => {
      this.currentIndex++;
      if (this.currentIndex >= this.sayings.length) {
        this.currentIndex = 0;
      }
      this.currentSaying = this.sayings[this.currentIndex];
    }, 5000);
  }
}
