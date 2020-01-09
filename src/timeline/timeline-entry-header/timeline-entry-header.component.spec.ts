import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTimelineEntryHeaderComponent } from './timeline-entry-header.component';

describe('NgTimelineEntryHeaderComponent', () => {
  let component: NgTimelineEntryHeaderComponent;
  let fixture: ComponentFixture<NgTimelineEntryHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTimelineEntryHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTimelineEntryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
