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

  ngAfterViewInit() {
    this.createYearMarkers();
  }

  private createYearMarkers() {
    const year = this.elementRef.nativeElement.innerText;
    const yearExists = this.timelineService.hasYear(year) && year.length > 1;
    if (yearExists) {
      this.elementRef.nativeElement.remove();
    } else {
      this.timelineService.addYear(year.trim());
    }    
  }

  ngOnDestroy() {
    console.log('timeline tree destroy')
    this.timelineService.reset();
  }


}
