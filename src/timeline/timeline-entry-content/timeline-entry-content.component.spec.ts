import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTimelineEntryContentComponent } from './timeline-entry-content.component';

describe('TimelineEntryContentComponent', () => {
  let component: NgTimelineEntryContentComponent;
  let fixture: ComponentFixture<NgTimelineEntryContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTimelineEntryContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTimelineEntryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
