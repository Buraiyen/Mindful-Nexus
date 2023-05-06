import { Component, Input } from '@angular/core';
import { TimelineItem } from './timeline-item';

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
})
export class TimelineItemComponent {
  @Input() timelineItem!: TimelineItem;
}
