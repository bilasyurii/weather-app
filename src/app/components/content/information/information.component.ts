import { Component, Input } from '@angular/core';
import { WeatherInfo } from 'src/app/interfaces/weatherInfo.interface';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  @Input() weather: WeatherInfo;
}
