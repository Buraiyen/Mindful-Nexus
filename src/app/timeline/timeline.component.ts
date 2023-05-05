import { Component } from '@angular/core';
import { TimelineItem } from './timeline-item/timeline-item';
import { PAGE_DATA } from '../dynamic-page/page-data';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  timelineItems: TimelineItem[] = PAGE_DATA;
}
