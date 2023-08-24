import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './module/weathermodule';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private weatherService: WeatherService) {

  }

  weatherData?: WeatherData;
  
  ngOnInit(): void {
    this.weatherService.getWeatherData('Nairobi').subscribe({
      next: (response) => {
        //this.weatherData = response;
        
        console.log(response);
      }
    });
  } 
}
