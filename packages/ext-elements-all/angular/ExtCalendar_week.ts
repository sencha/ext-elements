import ExtCalendar_week from '../src/ext-calendar-week.component.js';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef
  } from '@angular/core';
import EngBase from './angularbase';

//(function () {


// var eventnamesall = [];
// events.forEach( (event: any, n: any) => {
//     eventnamesall.push(event.name)
// })
// const distinct = (value, index, self) => {
//     return true
//     //return self.indexOf(value) === index;
// }
// var eventnames = eventnamesall.filter(distinct);

// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)


@Component({
    selector: 'ExtCalendar_week',
    inputs: (new ExtCalendar_week()).properties,
    outputs: (new ExtCalendar_week()).eventnames,
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_weekComponent)}],
    template: '<ng-content></ng-content>'
})
export default class ExtCalendar_weekComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
        ) {
        super(
            eRef,
            hostComponent,
            (new ExtCalendar_week()).properties,
            (new ExtCalendar_week()).events
        )
        this.xtype = 'calendar-week'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}
