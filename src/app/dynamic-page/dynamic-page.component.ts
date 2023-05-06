import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.scss'],
})
export class DynamicPageComponent implements OnInit {
  pageData: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.pageData = this.route.snapshot.data;
  }
}
