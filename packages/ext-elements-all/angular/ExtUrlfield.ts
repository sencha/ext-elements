import ExtUrlfield from '../src/ext-urlfield.component.js';
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
    selector: 'ExtUrlfield',
    inputs: (new ExtUrlfield()).properties,
    outputs: (new ExtUrlfield()).eventnames,
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtUrlfieldComponent)}],
    template: '<ng-content></ng-content>'
})
export default class ExtUrlfieldComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
        ) {
        super(
            eRef,
            hostComponent,
            (new ExtUrlfield()).properties,
            (new ExtUrlfield()).events
        )
        this.xtype = 'urlfield'
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