import { Component } from "@angular/core";

@Component({
    selector:'',
    template:`
    <div *ngIf="condition">{{Tittle}}</div>
    <div class="text-danger">{{condition}}</div>
    `,
    styles:[]
})
export class TittleComponent{
    // this condtion applying 
    condition:boolean= true;
    // is display view 
    Tittle:string= `Content to render when condition is  ${this.condition}`;

}