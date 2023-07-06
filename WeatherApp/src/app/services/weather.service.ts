import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string):Observable<any> {
    var headers={
      'X-RapidAPI-Key': '9f5fdd61d2msh1b4da3da4600319p1c8ebajsn587037adc227',
      'X-RapidAPI-Host': 'openweather43.p.rapidapi.com',
    }
    var q = cityName;
    var appid = ['da0f9c8d90bde7e619c3ec47766a42f4'];
    var units = 'standard';
    return this.http.get('https://openweather43.p.rapidapi.com/weather', {params:{q, appid, units}, headers:headers});
  }
}
