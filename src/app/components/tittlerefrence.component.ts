import { Component } from "@angular/core";

@Component({
    selector:'',
    template:`
    <div class="text-danger">{{condition}}</div>
    <ng-template [ngIf]="condition">
        <div>{{Tittle}}</div>
    </ng-template>`,
    styles:[]
})
export class TittleRefrenceComponent{
    condition : boolean= false;
    Tittle:string = `Content to render when condition is ${this.condition}`;

}