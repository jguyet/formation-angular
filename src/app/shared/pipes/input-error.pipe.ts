import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Pipe({
  name: 'inputError'
})
export class InputErrorPipe implements PipeTransform {

  transform(value: AbstractControl, ...args: []): string {
    if (value.invalid) {
      const firstKeyError = Object.keys(value.errors)[0];

      return value.errors[firstKeyError];
    } else {
      return '';
    }
  }

  getTextErrorFromCode(code: string): string {
    return code;
  }

}
