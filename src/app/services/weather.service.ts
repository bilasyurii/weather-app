import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable()
export class WeatherService {
  cityChange: Subject<string> = new Subject();

  constructor(private httpClient: HttpClient) {}

  private getUrl(city: string): string {
    city = city.replace(' ', '+');
    return environment.apiUrl + 'weather?q=' +
      city + '&units=metric&appid=765180715438831704738539cb6f646e';
  }

  getWeather(city: string) {
    return this.httpClient.get(this.getUrl(city));
  }
}
