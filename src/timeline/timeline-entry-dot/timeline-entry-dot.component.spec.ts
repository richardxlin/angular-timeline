import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTimelineEntryDotComponent } from './timeline-entry-dot.component';

describe('TimelineEntryDotComponent', () => {
  let component: NgTimelineEntryDotComponent;
  let fixture: ComponentFixture<NgTimelineEntryDotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTimelineEntryDotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTimelineEntryDotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
