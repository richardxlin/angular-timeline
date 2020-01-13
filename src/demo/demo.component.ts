import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  title = 'app';
  currentYear = 2019
  alternate: boolean = false;
  toggle: boolean = false;
  color: boolean = false;
  size: number = 20;
  side: string = 'left';
  mobileWidthThreshold: number = 9999;

  entries = [
    {
      year: 2018,
      header: 'header',
      content: 'content'
    },
    {
      year: 2018,
      header: 'header',
      content: 'content'
    }         
  ]

  addEntry() {
    this.entries.push({
      year: this.currentYear,
      header: 'header',
      content: 'content'
    });
    this.currentYear++;
  }

  removeEntry() {
    this.entries.pop();
  }

  onExpand(event, index) {
    console.log(event, index);
  }

  toggleSide() {
    this.side = this.side === 'left' ? 'right' : 'left';
  }
}
