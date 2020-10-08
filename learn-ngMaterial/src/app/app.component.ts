import { Component } from '@angular/core';

export interface Students {
  name: string;
  subject: string;
  age: number;
}
const STUDENTS_DATA: Students[] = [
  { name: "John", subject: "Physics", age: 20 },
  { name: "Mark", subject: "Maths", age: 23 },
  { name: "Max", subject: "Chemistry", age: 22 },
  { name: "Martha", subject: "Music", age: 21 }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  col_names: string[] = ['name', 'subject', 'age'];
  table_data = STUDENTS_DATA;
}
