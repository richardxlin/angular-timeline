import {HostBinding, ViewEncapsulation} from '@angular/core';
import { NgTimelineEntrySideComponent } from './../timeline-entry-side/timeline-entry-side.component';
import { Subscription } from 'rxjs/Subscription';
import { NgTimelineEntryDotComponent } from './../timeline-entry-dot/timeline-entry-dot.component';
import {
  Component, AfterViewInit, Output, EventEmitter, ContentChild, OnDestroy, ElementRef
} from '@angular/core';
import { NgTimelineEntryContentComponent } from '../timeline-entry-content/timeline-entry-content.component';
import { NgTimelineEntryHeaderComponent } from '../timeline-entry-header/timeline-entry-header.component';

@Component({
  selector: 'ng-timeline-entry',
  templateUrl: './timeline-entry.component.html',
  styleUrls: ['./timeline-entry.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgTimelineEntryComponent implements AfterViewInit, OnDestroy {

  private subscriptions: Subscription[] = [];

  focusOnOpen: boolean = false;

  set expanded(expanded) {
    if (this.dot && expanded) {
      this.dot.expanded = expanded;
    } else {
      this.content.expanded = expanded
    }
    this.changed.emit(expanded);
  }

  @HostBinding('class.expanded')
  get expanded() {
    return this.dot ? (this.dot.expanded && this.content.expanded) : this.content.expanded;
  }

  private _mobile: boolean = false;

  set mobile(value) {
    this.elementRef.nativeElement.classList.toggle('mobile', value);
    if (this.dot) {
      this.dot.mobile = value;
    }
    if (this.side) {
      this.side.mobile = value;
    }
  }

  @Output('expand')
  changed = new EventEmitter<boolean>();

  @Output()
  animationDone = new EventEmitter<string>();

  @ContentChild(NgTimelineEntryContentComponent) content: NgTimelineEntryContentComponent;
  @ContentChild(NgTimelineEntryHeaderComponent) header: NgTimelineEntryHeaderComponent;
  @ContentChild(NgTimelineEntryDotComponent) dot: NgTimelineEntryDotComponent;
  @ContentChild(NgTimelineEntrySideComponent) side: NgTimelineEntrySideComponent;

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit() {
    if (this.dot) {
      this.subscriptions.push(this.dot.animationDone.subscribe(event => {
        if (event.toState === 'expanded') {
          this.content.expanded = true;
        } else {
          this.animationDone.emit(event);
        }
      }));
    }
    if (this.content) {
      this.subscriptions.push(this.content.animationDone.subscribe(event => {
        if (this.dot && event.toState === 'collapsed') {
          this.dot.expanded = false;
        } else {
          if (this.focusOnOpen) {
            this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth' });
          }
          this.animationDone.emit(event);
        }
      }));
    }
  }

  set alternate(value: boolean) {
    this.elementRef.nativeElement.classList.toggle('alternate', value);
    if (this.dot) {
      this.dot.alternate = value;
    }
    if (this.side) {
      this.side.alternate = value;
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  collapse() {
    this.expanded = false;
  }

  expand() {
    this.expanded = true;
  }


  toggle(event: MouseEvent) {
    const headerFound = this.containsInPath(event, 'ng-timeline-entry-header');
    const dotFound = this.containsInPath(event, 'ng-timeline-entry-dot');
    if (headerFound || dotFound) {
      this.expanded = !this.expanded;
    }
  }

  private containsInPath(mouseEvent: MouseEvent, name: string): boolean {
    let currentElem: Element = mouseEvent.target as Element;
    while (currentElem) {
      if (currentElem.localName === name) {
        return true;
      }
      currentElem = currentElem.parentElement;
    }
    return false;
  }
}
