import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTimelineEntryComponent } from './timeline-entry.component';

describe('NgTimelineEntryComponent', () => {
  let component: NgTimelineEntryComponent;
  let fixture: ComponentFixture<NgTimelineEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTimelineEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTimelineEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
