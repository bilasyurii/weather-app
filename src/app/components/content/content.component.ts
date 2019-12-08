import { AlphabeticOnlyValidator } from './../../validators/alphabeticOnly.validator';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

import { WeatherService } from '../../services/weather.service';
import { WeatherInfo } from 'src/app/interfaces/weatherInfo.interface';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {
  weather: WeatherInfo = {temperature: 0, description: '', imagePath: ''};
  errorText = '';
  visibleSection = 'none';
  cityInputForm: FormGroup;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {
    this.weatherService.cityChange.next('');
  }

  private getIcon(code: string): string {
    return environment.iconsUrl + code.slice(0, -1) + 'd@2x.png';
  }

  private createForm() {
    this.cityInputForm = new FormGroup({
      city: new FormControl(null, [Validators.required, AlphabeticOnlyValidator.Validate])
    });
  }

  private processError(text: string) {
    this.errorText = text;
    this.weatherService.cityChange.next('');
    this.visibleSection = 'error';
  }

  onGetWeather() {
    if (!this.cityInputForm.valid) {
      return;
    }
    const city: string = this.cityInputForm.get('city').value;
    this.weatherService.getWeather(city).subscribe((response: any) => {
      this.weather = {
        temperature: Math.round(response.main.temp),
        description: response.weather[0].description,
        imagePath: this.getIcon(response.weather[0].icon)
      };
      this.visibleSection = 'info';
      this.weatherService.cityChange.next(city);
    }, error => {
      if (error.status === 404) {
        this.processError('Wrong city was specified');
      } else {
        this.processError('Unknown error occurred');
      }
    });
  }
}
