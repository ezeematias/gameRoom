import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNo'
})
export class YesNoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): string {
    let output = 'No';
    if (value == true) {
      output = "Si";
    }
    return output;
  }

}
