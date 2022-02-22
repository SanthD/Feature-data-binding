import { Component } from "@angular/core";

@Component({
    selector:'',
    template:`
    <div class="display-2" *ngIf="condition; then thenBlock else elseBlock"></div>
    <ng-template #thenBlock class="display-2">{{Tittle}}</ng-template>
    <ng-template #elseBlock class="display-2">{{Tittle}}</ng-template>`,
    styles:[]
})
export class IfElseComponent{
    condition:boolean = false;
    Tittle:string= `Content to render when condition is ${this.condition}`;

}