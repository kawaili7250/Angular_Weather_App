import { Component } from '@angular/core';
import { WeatherService } from './services/weather.service';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherApp';
  IsChangeLocation=false;
  TodayDate: Date;
  weatherData: any;
  cityNameValue: any;

  constructor(private service: WeatherService) {
    this.TodayDate = new Date();
  }

  changeLocation(){
    this.IsChangeLocation = this.IsChangeLocation==true?false:true;
  }

  getWeatherDataByCity() {
    debugger
    var cityName = $("#cityname").val();
    this.service.getWeatherData(cityName).subscribe(data=>{
      this.cityNameValue = cityName;
      console.log('data', data)
      this.weatherData = data;
    })
  }
  transform(value:number):number {
    return Math.round(value)/10;
  }
}
