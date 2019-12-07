import { FormControl } from '@angular/forms';

export class AlphabeticOnlyValidator {
  static Validate(control: FormControl): {[s: string]: boolean} {
    const regex = /^[a-zA-Z\s]*$/;
    if (!regex.test(control.value)) {
      return {alphabeticOnly: true};
    }
    return null;
  }
}
