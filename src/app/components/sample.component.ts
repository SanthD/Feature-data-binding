import { Component } from "@angular/core";

  @Component({
    selector: 'ng-if-simple',
    template: `
      <button (click)="show = !show" class="btn btn-primary">{{show ? 'hide' : 'show'}}</button>
      show = {{show}}
      <br>
      <div *ngIf="show" class="mt-2 alert alert-primary">Text to show</div>
  `
  })
  export class SampleComponent {
    show = true;
  }