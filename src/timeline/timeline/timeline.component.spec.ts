import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTimelineComponent } from './timeline.component';

describe('TimelineComponent', () => {
  let component: NgTimelineComponent;
  let fixture: ComponentFixture<NgTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
