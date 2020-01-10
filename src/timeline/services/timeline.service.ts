import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimelineService {

   years = new Set(); 

  constructor() { }

  hasYear(year: string): boolean {
    return this.years.has(year);
  }

  addYear(year: string) {
      this.years.add(year);
  }

}