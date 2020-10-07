import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {
  @Input() set appMyIf(condition:boolean) {
    if(condition) {
      this.container.clear();
    } else {
      this.container.createEmbeddedView(this.template);
    };
  }
  constructor(private template:TemplateRef<any>, private container:ViewContainerRef) {}
}
