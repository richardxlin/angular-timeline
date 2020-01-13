# angular2x-timeline

[![npm version](https://badge.fury.io/js/angular2x-timeline.svg)](https://badge.fury.io/js/angular-ng-timeline)

This is a animated vertical timeline component for Angular 2+. Angular Material is supported but not mandatory.

## Getting started

1) run `npm install --save angular2x-timeline` 
2) in your app module: 
```typescript
...
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgTimelineModule } from 'angular2x-timeline';

@NgModule({
  ...
  imports: [
    ...
    BrowserAnimationsModule,
    NgTimelineModule
  ]
})
export class AppModule { }
```
## Usage

### Minimal Setup
```xml
<ng-timeline>
    <ng-timeline-entry>
        <ng-timeline-entry-header>Header</ng-timeline-entry-header>
        <ng-timeline-entry-content>Content</ng-timeline-entry-content>
    </ng-timeline-entry>
</ng-timeline>
```

### Include a dot
```xml
<ng-timeline>
    <ng-timeline-entry>
        <ng-timeline-entry-header>Header</ng-timeline-entry-header>
        <ng-timeline-entry-content>Content</ng-timeline-entry-content>
        <ng-timeline-entry-dot></ng-timeline-entry-dot>
    </ng-timeline-entry>
</ng-timeline>
```

### Include side data
```xml
<ng-timeline>
    <ng-timeline-entry>
        <ng-timeline-entry-header>Header</ng-timeline-entry-header>
        <ng-timeline-entry-content>Content</ng-timeline-entry-content>
        <ng-timeline-entry-side>2018</ng-timeline-entry-side>
    </ng-timeline-entry>
</ng-timeline>
```

## Angular Material

The package includes a theme for angular material. In your own angular material theme:

```scss
@import '~@angular/material/theming';
@import '~angular-ng-timeline/theme';
...

@include angular-material-theme($your-theme);
@include ng-timeline-theme($your-theme);
```
If the theme is included, the components will be styled according to `$your-theme` including support for primary and accent colors for the dot.

## Components

### NgTimeline

#### Content
| tag                    | number |
| ---------------------- | ------ |
| `<ng-timeline-entry>` |     n  |

#### Inputs

| property             | type    | default  | impact                                                                                          |
| -------------------- | ------- | -------- | ----------------------------------------------------------------------------------------------- |
| toggle               | boolean | true     | If set to true, expanding one entry will collapse all other entries and vice versa              |
| alternate            | boolean | true     | If set to true, entries will be displayed alternately (left / right). No effect in mobile mode  |
| focusOnOpen          | boolean | false    | If set to true, expanding an entry will scroll it into view                                     |
| side                 | string  | 'left'   | Changes side (`'left'` | `'right'`) the entries are shown on. No effect if alternate is `true`  |
| mobileWidthThreshold | number  | 640      | Decides when the mobile layout is used                                                          |

### NgTimelineEntry
The `expanded` class will be added to the timeline-entry compnent when the entry is expanded.  

#### Content
| tag                            | number |
| ------------------------------ | ------ |
| `<ng-timeline-entry-header>`  |     1  |
| `<ng-timeline-entry-content>` |     1  |
| `<ng-timeline-entry-dot>`     | 0...1  |
| `<ng-timeline-entry-side>`    | 0...1  |

#### Outputs

| event           | type    | description
| --------------- | ------- | --------------------------------------------
| expand          | boolean | fired when an entry is expanded / collapsed. Value is true for expanded and false for collapsed

### NgTimelineEntryHeader

### NgTimelineEntryContent

### NgTimelineEntryDot

#### Inputs
| property | type   | default | impact                                                                                                             |
| -------- | ------ | ------- | ------------------------------------------------------------------------------------------------------------------ |
| size     | number |     45  | Size of the dot [px]                                                                                               |
| class    | string | primary | Will be set as class name of the dot element. primary and accent can be used when using the angular material theme |


## Polyfills

### Smoothscroll
When an entry is toggled, it will scroll into view. Smooth behavior is currently not supported in Chrome. A polyfill is available in [iamdustan's smoothscroll](https://github.com/iamdustan/smoothscroll)

### ClassList
`ClassList.toggle` was used at some points, including the second parameter. If you need to support [browsers which do not support this](https://caniuse.com/#feat=classlist), be sure to use a polyfill, e.g. [this one](https://github.com/eligrey/classList.js/).

### Web Animations API
Animations are implemented with Angular animations which are based on the web animations API which has not landed in Safari and Edge yet. A polyfill is available in [Web Animations JS](https://github.com/web-animations/web-animations-js)

## About
This project is a fork of https://github.com/glutengo/angular-ng-timeline#readme (credit to Markus Glutting)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.
The NPM Version was packend with [ng-packagr](https://github.com/dherges/ng-packagr).

