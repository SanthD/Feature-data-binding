import { Component } from "@angular/core";

@Component({
    selector: 'alernate',
    template: `
      <button (click)="show = !show">{{show ? 'hide' : 'show'}}</button>
      show = {{show}}
      <br>
      <div *ngIf="show; else elseBlock">Text to show</div>
      <ng-template #elseBlock>Alternate text while primary text is hidden</ng-template>
  `
  })
  export class AleternateComponent {
    // boolean value that binding to view
    show:boolean = true;
    constructor(){

    }
    //random number function
    randomNumber():any {
       const randomNum = Math.random();
    }
  }