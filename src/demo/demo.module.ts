import { NgTimelineModule } from '../timeline/timeline.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgTimelineModule
  ],
  providers: [],
  bootstrap: [DemoComponent]
})
export class AppModule { }
