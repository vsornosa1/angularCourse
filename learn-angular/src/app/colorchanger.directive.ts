import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorchanger]'
})
export class ColorchangerDirective implements OnInit {
  @Input() txtColor:string;
  @Input() bgColor:string;
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.color = this.txtColor;
    this.el.nativeElement.style.backgroundColor = this.bgColor;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.color = null;
    this.el.nativeElement.style.backgroundColor = null;
  }
  constructor(private el:ElementRef) { 
    console.log("This is the directive");
  }
  ngOnInit() {
    
  }
}
