import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  @Input() temperature: string;
  @Input() description: string;
  @Input() imagePath: string;
}
