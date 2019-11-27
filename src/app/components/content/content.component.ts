import { Component } from '@angular/core';

import { WeatherService } from '../../services/weather.service';
import {environment} from '../../../environments/environment';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  city = '';
  temperature = '';
  description = '';
  imagePath = '';
  errorText = '';
  visibleSection = 'none';

  constructor(private weatherService: WeatherService) {}

  private capitalize(text: string) {
    const letter: string = text[0];
    const restPart: string = text.slice(1);
    return letter.toUpperCase() + restPart;
  }

  private getIcon(code: string) {
    return environment.iconsUrl + code.slice(0, -1) + 'd@2x.png';
  }

  onGetWeather() {
    this.weatherService.onCityChange.next(this.capitalize(this.city));

    this.weatherService.getWeather(this.city).subscribe((response: any) => {
      this.temperature = Math.round(response.main.temp) + '&deg;C';
      this.description =  this.capitalize(response.weather[0].description);
      this.imagePath = this.getIcon(response.weather[0].icon);
      this.visibleSection = 'info';
    }, error => {
      switch (error.status) {
        case 404:
          this.errorText = 'Wrong city was specified';
          break;
        case 400:
          this.errorText = 'No city was specified';
          break;
        default:
          this.errorText = 'Unknown error occurred';
      }
      this.visibleSection = 'error';
    });
  }
}
