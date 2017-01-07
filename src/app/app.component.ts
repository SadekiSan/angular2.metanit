import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<child-comp #counter></child-comp>
                <button (click)="counter.increment()">+</button>
                <button (click)="counter.decrement()">-</button>`
})
export class AppComponent { }