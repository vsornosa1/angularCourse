import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  twoWayData;
  inputVal:string;
  ngSwitchSource = "Angular";
  collectedData = [];
  ngIfStatus:boolean = true;
  ngForArray = ["Tea", "Coffee", "Milk", "Sugar"];
  ngForArray2 = [
    {"id": "123", "name": "Peter", "codingLevel": "medium"},
    {"id": "124", "name": "James", "codingLevel": "expert"}
  ];
  inputValue:string = "This is some string from the parent component";
  private _inputData:string;

  constructor() {
    console.log(this._inputData);
  }

  get inputData():string {
    return this._inputData;
  };
  set inputData(value:string) {
    this._inputData = value.toUpperCase();
    console.log(this._inputData); // setting privateVar in console
    if(this._inputData == "SENTO") {
      alert(this._inputData + ", you discovered an easter egg!");
    };
  };


  title:string = 'learn-angular';
  var1:number = 5;
  var2:number = 4;

  class1:string = "myClass1";
  class2:string = "myClass2";

  newCss() {
    return this.class1;
  }
  onClick(event) {
    // console.log("Single click");
    //console.log(event); // Sending data (view.html --> component.ts)
    // this.twoWayData = event;
    this.collectedData.push(this.inputVal);
    this.inputVal = "";
    console.log(this.collectedData);
  }
  onDblClick(event) {
    console.log("Double click");
    console.log(event);
  }

  showResults(count) {
    console.log(count);
  }
}