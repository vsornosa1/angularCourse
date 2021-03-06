import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-all-countries',
  templateUrl: './all-countries.component.html',
  styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent implements OnChanges {
  @Input() allCountriesData: any;
  constructor() {}

  ngOnChanges() {}

}
