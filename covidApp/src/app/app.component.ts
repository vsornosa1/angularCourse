import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  globalData:any = {};
  allCountriesData:any = [];
  spainData:any = {};
  
  constructor(public http: HttpClient) {
    this.http
    .get("https://api.covid19api.com/summary")
    .subscribe((value:any) => {
      this.globalData = value.Global;
      this.allCountriesData = value.Countries;
      this.allCountriesData.sort((a:any, b:any) => {
        return b.TotalConfirmed - a.TotalConfirmed;
      });
      this.allCountriesData.forEach(country => {
        if(country.CountryCode == "ES") {
          this.spainData = country; 
        }
      });
    });
  }
}
