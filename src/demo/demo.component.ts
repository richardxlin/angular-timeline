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
  display: boolean = true;
  mobileWidthThreshold: number = 9999;

  data = []

  filterByYear(yearFilter){
    if (yearFilter == 'all') {
      this.entries = this.data;
    } else {
      this.entries = this.data.filter( (e) => e.year == yearFilter);
    }
    this.sortEntries();
  }

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
    },
    {
      year: 2019,
      header: 'header',
      content: 'content'
    },
    {
      year: 2019,
      header: 'header',
      content: 'content'
    },   
    {
      year: 2018,
      header: 'header',
      content: 'content'
    }                                 
  ]

  ngOnInit(){
    this.data = this.entries;
  }

  addEntry() {
    this.entries.push({
      year: this.currentYear,
      header: 'header',
      content: 'content'
    });
    this.currentYear++;
  }

  sortEntries(){
    const reqDate = 'year';
    this.entries.sort( a => a[reqDate] ? -1 : 1);
    this.entries.sort( (a, b) => {
      let compareInt = 0;
      if (a[reqDate] > b[reqDate]) { compareInt = 1; }
      if (a[reqDate] < b[reqDate]) { compareInt = -1; }
      return compareInt;
    });
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
