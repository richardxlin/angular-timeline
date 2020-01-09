import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTimelineEntrySideComponent } from './timeline-entry-side.component';

describe('TimelineEntrySideComponent', () => {
  let component: NgTimelineEntrySideComponent;
  let fixture: ComponentFixture<NgTimelineEntrySideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTimelineEntrySideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTimelineEntrySideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
