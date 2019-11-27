import { Component, OnDestroy, OnInit } from '@angular/core';

import {WeatherService} from '../../services/weather.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  city = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.subscribeToCityChanges();
  }

  ngOnDestroy() {
    this.weatherService.onCityChange.unsubscribe();
  }

  private subscribeToCityChanges() {
    this.weatherService.cityChange.subscribe(newCity => {
      this.city = newCity;
    });
  }
}
