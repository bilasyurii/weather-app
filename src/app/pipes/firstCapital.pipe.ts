import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
  name: 'firstCapital'
})
export class FirstCapitalPipe implements PipeTransform {
  transform(value: string): string {
    if (value === null || value === undefined || value.length === 0) {
      return value;
    }
    const letter: string = value[0];
    const restPart: string = value.slice(1);
    return letter.toLocaleUpperCase() + restPart;
  }
}
