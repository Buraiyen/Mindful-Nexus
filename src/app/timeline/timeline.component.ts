import { Component } from '@angular/core';
import { TimelineItem } from './timeline-item/timeline-item.component';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent {
  timelineItems: TimelineItem[] = [
    {
      id: 1,
      title: 'Psychology of Money',
      date: new Date('10/02/98').toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
      }),
      category: 'book',
    },
    {
      id: 2,
      title: 'This is Our Fight',
      date: new Date('03/02/21').toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
      }),
      category: 'podcast',
    },
  ];
}
