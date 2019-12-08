import { Component, OnDestroy, OnInit } from '@angular/core';

import {WeatherService} from '../../services/weather.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  private citySubscription: Subscription;

  city = '';

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.subscribeToCityChanges();
  }

  ngOnDestroy() {
    this.citySubscription.unsubscribe();
  }

  private subscribeToCityChanges() {
    this.citySubscription = this.weatherService.cityChange.subscribe(newCity => {
      this.city = newCity;
    });
  }
}
