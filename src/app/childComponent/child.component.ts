/**
 * Created by matve on 08.01.2017.
 */
import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />`
})
export class ChildComponent{

    @Input() userName:string;
    @Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: string){

        this.userName = model;
        this.userNameChange.emit(model);
    }
}