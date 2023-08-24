import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { WeatherData } from '../module/weathermodule';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  /*type environment = {
      production: boolean,
      weatherApiBaseUrl: string,
      XRapidAPIHostHeaderName: string,
      XRapidAPIHostHeaderValue: string,
      XRapidAPIKeyHeaderName: string,
      XRapidAPIKeyHeaderValue: string
  }

  getWeatherData(cityName: string):Observable<WeatherData>{
    return this.http.get<WeatherData>((environment as any).weatherApiBaseUrl, {
      headers: new HttpHeaders()
        .set((environment as any).XRapidAPIHostHeaderName, (environment as any).XRapidAPIHostHeaderValue)
        .set((environment as any).XRapidAPIKeyHeaderName, (environment as any).XRapidAPIKeyHeaderValue)
    })
  }*/

  getWeatherData(cityName: string):Observable<WeatherData>{
    return this.http.get<WeatherData>((environment as any).weatherApiBaseUrl+'Nairobi'+cityName, {
      headers: new HttpHeaders()
      .set((environment as any).XRapidAPIHostHeaderName, (environment as any).XRapidAPIHostHeaderValue)
      .set((environment as any).XRapidAPIKeyHeaderName, (environment as any).XRapidAPIKeyHeaderValue),
      params: new HttpParams()
      .set('q', cityName)
      .set('units', 'standard')
    })
  }
}
