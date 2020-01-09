import { NgTimelineEntryHeaderComponent } from './timeline-entry-header/timeline-entry-header.component';
import { NgTimelineEntryDotComponent } from './timeline-entry-dot/timeline-entry-dot.component';
import { NgTimelineEntryContentComponent } from './timeline-entry-content/timeline-entry-content.component';
import { NgTimelineEntrySideComponent } from './timeline-entry-side/timeline-entry-side.component';
import { NgTimelineEntryComponent } from './timeline-entry/timeline-entry.component';
import { NgTimelineComponent } from './timeline/timeline.component';
import { NgModule } from '@angular/core';
@NgModule({
  declarations: [
    NgTimelineComponent,
    NgTimelineEntryComponent,
    NgTimelineEntryHeaderComponent,
    NgTimelineEntrySideComponent,
    NgTimelineEntryContentComponent,
    NgTimelineEntryDotComponent
  ],
  exports: [
    NgTimelineComponent,
    NgTimelineEntryComponent,
    NgTimelineEntryHeaderComponent,
    NgTimelineEntrySideComponent,
    NgTimelineEntryContentComponent,
    NgTimelineEntryDotComponent
  ]
})
export class NgTimelineModule { }
