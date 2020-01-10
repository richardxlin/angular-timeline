import { Component, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { TimelineService } from '../services/timeline.service';


@Component({
  selector: 'ng-timeline-entry-side',
  templateUrl: './timeline-entry-side.component.html',
  styleUrls: ['./timeline-entry-side.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgTimelineEntrySideComponent {

  set alternate(value) {
    this.elementRef.nativeElement.classList.toggle('alternate', value);
  }

  set mobile(value) {
    this.elementRef.nativeElement.classList.toggle('mobile', value);
  }

  uniqueYears = new Set();
  
  constructor(private elementRef: ElementRef, private timelineService: TimelineService) {}

  ngAfterContentInit()	{
    console.log('change', this.elementRef.nativeElement.innerText)
    const year = this.elementRef.nativeElement.innerText;
    const yearExists = this.timelineService.hasYear(year);
    if (yearExists) {
      this.elementRef.nativeElement.remove();
    } else {
      this.timelineService.addYear(year.trim());
    }
  }


}
