import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic-page',
  templateUrl: './dynamic-page.component.html',
  styleUrls: ['./dynamic-page.component.scss'],
})
export class DynamicPageComponent {
  @Input() id?: string;
  @Input() title?: string;
  @Input() date?: Date;
  @Input() category?: string;
  @Input() content?: [];
}
