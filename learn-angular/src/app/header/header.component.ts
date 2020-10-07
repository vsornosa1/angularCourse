import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() getInput:string;
  @Output() changer = new EventEmitter;
  constructor() { }
  counter = 0;

  ngOnInit(): void {
    console.log(this.getInput + " to header");
  }

  changerFunc() {
    this.counter += 1;
    this.changer.emit(this.counter);
  }
}
