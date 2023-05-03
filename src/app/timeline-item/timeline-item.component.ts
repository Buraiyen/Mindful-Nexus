import { Component } from '@angular/core';

interface TimelineItem {
  id: number;
  title: string;
  date: Date;
  category: string;
}

@Component({
  selector: 'app-timeline-item',
  templateUrl: './timeline-item.component.html',
  styleUrls: ['./timeline-item.component.scss'],
})
export class TimelineItemComponent {
  timelineItem: TimelineItem = {
    id: 1,
    title: 'Psychology of Money',
    date: new Date('10/02/98'),
    category: 'book',
  };
}
